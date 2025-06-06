import Phaser from "phaser";
import { Button } from "../../rescue/utils/Button";
import Player from "../model/Player";
import Target from "../model/Target";
import Enemies from "../model/Enemy";

export enum TextureKeys {
    Player = "player",
    Target = "target",
    Enemy = "enemy",
    Background = "background"
}

export default class AsteroidScene extends Phaser.Scene {
    private player!: Player;
    private target!: Target;
    private enemies!: Enemies;
    private score: number = 0;
    private highscore: number = 0;
    private alltime: number = 0;
    private scoreText!: Phaser.GameObjects.Text;
    private highscoreText!: Phaser.GameObjects.Text;
    private alltimeText!: Phaser.GameObjects.Text;
    private dragging: boolean = false;
    private dragOffsetX: number = 0;
    private dragOffsetY: number = 0;
    private gameOver: boolean = false;
    private newGameButton!: Button;

    constructor() {
        super("AsteroidScene");
    }

    preload() {
        this.load.image(TextureKeys.Player, "/images/dino.png");
        this.load.image(TextureKeys.Target, "/images/blue-dino.png");
        this.load.image(TextureKeys.Enemy, "/images/asteroid.png");
        this.load.image(TextureKeys.Background, "/images/grass.jpg");
    }

    create() {
        // Background
        this.add.image(0, 0, TextureKeys.Background)
            .setOrigin(0)
            .setDisplaySize(this.game.scale.width, this.game.scale.height);

        // Score UI - centered horizontally and vertically, all 28px
        const centerX = this.game.scale.width / 2;
        const blockHeight = 28 + 20 + 28 + 12 + 28; // all 28px + spacing
        const startY = (this.game.scale.height - blockHeight) / 2;

        const style: Phaser.Types.GameObjects.Text.TextStyle = {
            fontFamily: "Arial",
            color: "#000",
            fontSize: "28px",
            align: "center",
        };

        this.scoreText = this.add.text(centerX, startY, "Score: 0", style)
            .setOrigin(0.5, 0)
            .setDepth(10);

        this.score = 0
        this.highscore = Number(localStorage.getItem("highscore")) || 0;
        this.alltime = Number(localStorage.getItem("alltime")) || 0;

        this.highscoreText = this.add.text(centerX, startY + 28 + 12, `Highscore: ${this.highscore}`, style)
            .setOrigin(0.5, 0)
            .setDepth(10);

        this.alltimeText = this.add.text(centerX, startY + 28 + 12 + 28 + 12, `Alltime: ${this.alltime}`, style)
            .setOrigin(0.5, 0)
            .setDepth(10);

        // Player
        this.player = new Player(this, this.game.scale.width / 2, this.game.scale.height / 2);

        // Target
        this.target = new Target(this, 0, 0);
        this.placeTarget();

        // Enemies group
        this.enemies = new Enemies(this);
        this.spawnEnemy();

        // Input: drag dino analog to pointer movement, do not jump on click
        this.input.on("pointerdown", (pointer: Phaser.Input.Pointer) => {
            this.dragging = true;
            this.dragOffsetX = pointer.x;
            this.dragOffsetY = pointer.y;
        });

        this.input.on("pointerup", () => {
            this.dragging = false;
        });

        this.input.on("pointermove", (pointer: Phaser.Input.Pointer) => {
            if (this.dragging) {
                const dx = pointer.x - this.dragOffsetX;
                const dy = pointer.y - this.dragOffsetY;
                let newX = this.player.x + dx;
                let newY = this.player.y + dy;
                newX = Phaser.Math.Clamp(newX, this.player.displayWidth / 2, this.game.scale.width - this.player.displayWidth / 2);
                newY = Phaser.Math.Clamp(newY, this.player.displayHeight / 2, this.game.scale.height - this.player.displayHeight / 2);
                this.player.x = newX;
                this.player.y = newY;
                this.dragOffsetX = pointer.x;
                this.dragOffsetY = pointer.y;
            }
        });

        // Collisions
        this.physics.add.overlap(this.player, this.target, this.handleTargetReached, undefined, this);
        // Remove default Arcade overlap for player/enemy
        // this.physics.add.overlap(this.player, this.enemies, this.handlePlayerHit, undefined, this);

        // Use custom pixel-perfect collision in update()
    }

    update() {
        if (this.gameOver) return;

        // Pixel-perfect collision check between player and each enemy
        let hit = false;
        this.enemies.getChildren().forEach((enemyObj) => {
            const enemy = enemyObj as Phaser.Physics.Arcade.Image;
            if (
                enemy.active &&
                this.player.active &&
                this.player.visible &&
                enemy.visible &&
                this.pixelPerfectOverlap(this.player, enemy)
            ) {
                hit = true;
            }
        });
        if (hit) {
            this.handlePlayerHit();
            return;
        }

        // Pixel-perfect collision check between player and target
        if (
            this.player.active &&
            this.target.active &&
            this.player.visible &&
            this.target.visible &&
            this.pixelPerfectOverlap(this.player, this.target)
        ) {
            this.handleTargetReached();
        }
    }

    // Pixel-perfect collision using alpha channel
    private pixelPerfectOverlap(
        imgA: Phaser.Physics.Arcade.Image,
        imgB: Phaser.Physics.Arcade.Image
    ): boolean {
        // Get bounds intersection
        const boundsA = imgA.getBounds();
        const boundsB = imgB.getBounds();
        if (!Phaser.Geom.Intersects.RectangleToRectangle(boundsA, boundsB)) {
            return false;
        }

        // Create temporary canvas for both images
        const width = Math.floor(Math.min(boundsA.right, boundsB.right) - Math.max(boundsA.left, boundsB.left));
        const height = Math.floor(Math.min(boundsA.bottom, boundsB.bottom) - Math.max(boundsA.top, boundsB.top));
        if (width <= 0 || height <= 0) return false;

        // Get texture frames
        const frameA = imgA.texture.getSourceImage() as HTMLImageElement;
        const frameB = imgB.texture.getSourceImage() as HTMLImageElement;

        // Create offscreen canvases
        const canvasA = document.createElement("canvas");
        canvasA.width = width;
        canvasA.height = height;
        const ctxA = canvasA.getContext("2d")!;
        const sxA = Math.max(boundsB.left - boundsA.left, 0);
        const syA = Math.max(boundsB.top - boundsA.top, 0);
        ctxA.drawImage(
            frameA,
            sxA * (frameA.width / imgA.displayWidth),
            syA * (frameA.height / imgA.displayHeight),
            width * (frameA.width / imgA.displayWidth),
            height * (frameA.height / imgA.displayHeight),
            0,
            0,
            width,
            height
        );

        const canvasB = document.createElement("canvas");
        canvasB.width = width;
        canvasB.height = height;
        const ctxB = canvasB.getContext("2d")!;
        const sxB = Math.max(boundsA.left - boundsB.left, 0);
        const syB = Math.max(boundsA.top - boundsB.top, 0);
        ctxB.drawImage(
            frameB,
            sxB * (frameB.width / imgB.displayWidth),
            syB * (frameB.height / imgB.displayHeight),
            width * (frameB.width / imgB.displayWidth),
            height * (frameB.height / imgB.displayHeight),
            0,
            0,
            width,
            height
        );

        // Get image data
        const dataA = ctxA.getImageData(0, 0, width, height).data;
        const dataB = ctxB.getImageData(0, 0, width, height).data;

        // Check for overlapping non-transparent pixels
        for (let i = 0; i < width * height; i++) {
            if (dataA[i * 4 + 3] > 0 && dataB[i * 4 + 3] > 0) {
                return true;
            }
        }
        return false;
    }

    private placeTarget() {
        const margin = 64;
        this.target.x = Phaser.Math.Between(margin, this.game.scale.width - margin);
        this.target.y = Phaser.Math.Between(margin, this.game.scale.height - margin);
    }

    private spawnEnemy() {
        const margin = 64;
        let x = Phaser.Math.Between(margin, this.game.scale.width - margin);
        let y = Phaser.Math.Between(margin, this.game.scale.height - margin);
        // Avoid spawning on player
        while (Phaser.Math.Distance.Between(x, y, this.player.x, this.player.y) < 100) {
            x = Phaser.Math.Between(margin, this.game.scale.width - margin);
            y = Phaser.Math.Between(margin, this.game.scale.height - margin);
        }
        this.enemies.addEnemy(x, y);
    }

    private handleTargetReached() {
        this.placeTarget();
        this.spawnEnemy();
        this.score++;
        this.alltime++;
        this.scoreText.setText(`Score: ${this.score}`);
        this.alltimeText.setText(`Alltime: ${this.alltime}`);
        localStorage.setItem("alltime", String(this.alltime));
        if (this.score > this.highscore) {
            this.highscore = this.score;
            this.highscoreText.setText(`Highscore: ${this.highscore}`);
            localStorage.setItem("highscore", String(this.highscore));
        }
    }

    private handlePlayerHit() {
        this.gameOver = true;
        this.physics.pause();

        // Freeze player movement as well
        this.player.body.enable = false;

        // Disable drag input after game over
        this.input.off("pointerdown");
        this.input.off("pointerup");
        this.input.off("pointermove");

        // Show NEW GAME button in the center of the game using the Button class (like rescue)
        const centerX = this.game.scale.width / 2;
        const centerY = this.game.scale.height / 2 + 120;

        if (this.newGameButton) {
            this.newGameButton.destroy();
        }

        this.newGameButton = new Button(centerX, centerY, "NEW GAME", this, () => {
            this.newGameButton.destroy();
            // Reset gameOver and resume physics before restart
            this.gameOver = false;
            this.scene.restart();
        });
        this.newGameButton.setOrigin(0.5, 0.5).setDepth(1000);
    }
}
