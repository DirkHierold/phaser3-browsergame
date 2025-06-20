import Phaser from 'phaser';
import { pixelPerfectOverlap } from './pixelPerfectUtil';
import Player from '../../shared/Player';
import Enemies from '../../shared/Enemy';
import { DirectionKeys } from '../../shared/utils/consts/DirectionKeys';
import Obstacles from '../../shared/Obstacles';

export default class ChampScene extends Phaser.Scene {
    player!: Player;
    enemies!: Enemies;
    score: number = 0;
    scoreText!: Phaser.GameObjects.Text;
    nextEnemy: number = 0;
    obstacles!: Obstacles;

    private levelData: any[]; // Level-Daten laden (z.B. aus JSON)
    private nextElementIndex: number = 0;
    private scrollSpeed: number = 240; // Pixel pro Sekunde
    private currentLevelX: number = 0; // Aktuelle Position in der "Welt" (relevant für Level-Daten)

    preload() {
        this.load.json('level', '/level.json');
    }

    create() {
        this.levelData = this.cache.json.get('level'); // Oder direkt ein Array
        this.currentLevelX = Number(this.game.config.width); // Start am rechten rand des Bildschirms
        this.nextElementIndex = 0;

        this.physics.world.setBounds(0, 0, 800, 600);

        this.player = new Player(this);
        this.player.setOrigin(0).setPosition(100, 550);
        // Set gravity for the dino
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body) {
            body.setGravityY(1000);
        }

        // Add decorative trees that move from right to left at ground level, not as obstacles
        this.obstacles = new Obstacles(this);

        this.enemies = new Enemies(this);
        this.physics.add.overlap(
            this.player,
            this.enemies,
            this.handlePixelPerfectCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
            undefined,
            this
        );

        this.input.on('pointerdown', this.jump, this);
        this.input.keyboard?.on('keydown-SPACE', this.jump, this);
        this.input.keyboard?.on('keydown-ENTER', this.jump, this);

        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', color: '#000' });
        this.nextEnemy = 0;

        this.physics.add.collider(this.player, this.obstacles);
    }

    jump() {
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.onFloor()) {
            this.player.setVelocityY(-900); // much higher jump
        }
    }

    update(time: number, delta: number) {
        this.player.setVelocityX(2);
        if (this.player.x > 200) this.player.setVelocityX(0); // stop moving after 200px

        // Check if any enemies have gone off the screen and destroy them        
        this.enemies.getChildren().forEach((enemy: Phaser.GameObjects.GameObject) => {
            const ene = enemy as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
            if (ene.x - ene.displayWidth / 2 <= 0) {
                ene.destroy();
                this.score += 1;
                this.scoreText.setText('Score: ' + this.score);
            }
        });


        // Gradually slow down horizontal velocity after jump
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.velocity.x > 0 && body.onFloor()) {
            this.player.setVelocityX(0);
        }
        this.enemies.changeDirection(this.player);

        // Level vorwärts scrollen (currentLevelX repräsentiert die Position des rechten Rands des aktuellen Bildschirms in der Welt)
        this.currentLevelX += this.scrollSpeed * (delta / 1000); // delta ist Millisekunden

        // Hindernisse entfernen, die den Bildschirm verlassen haben
        this.obstacles.getChildren().forEach((obstacle) => {
            const obs = obstacle as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
            // Wenn Hindernis den Bildschirm verlassen hat, recyceln/zurücksetzen
            if (obs.x < -obs.displayWidth / 2) { // displayWidth/2, da x der Mittelpunkt ist
                obs.destroy(); // Entfernen Sie das Hindernis, wenn es den Bildschirm verlässt
            }
        });

        // Neue Level-Elemente generieren basierend auf levelData
        const elementData = this.levelData[this.nextElementIndex];

        if (elementData.xWorld < this.currentLevelX) { // Wenn das Element fast im Bild ist
            const xToAdd: number = Number(this.game.config.width) + (elementData.xWorld - this.currentLevelX) // X-Position relativ zum rechten Rand
            if (elementData.type == 'platform') {
                // Erzeugen Sie das Element am rechten Rand
                this.obstacles.addObstacle(
                    xToAdd,
                    elementData.y,
                    elementData.width,
                    elementData.height
                )
                    .setOrigin(0)
                    .body.setVelocityX(-this.scrollSpeed);

                this.nextElementIndex++;

            } else if (elementData.type == 'spike') {
                this.enemies.addEnemy(
                    xToAdd,
                    elementData.y,
                    DirectionKeys.Still)
                    .setOrigin(0)
                    .body.setVelocityX(-this.scrollSpeed);

                this.nextElementIndex++;

            } else if (elementData.type == 'goal') {
                // stoppe das spiel, zeige den highscore an und einen button um das Spiel neu zu starten
                this.add.text(400, 300, 'You reached the goal!', { fontSize: '32px', color: '#000' })
                    .setOrigin(0.5);
                this.gameOver()
            }
        }

    }

    handlePixelPerfectCollision(
        player: Phaser.GameObjects.GameObject,
        obstacle: Phaser.GameObjects.GameObject
    ) {
        if (
            pixelPerfectOverlap(
                player as Phaser.GameObjects.Sprite,
                obstacle as Phaser.GameObjects.Sprite,
                this
            )
        ) {
            this.gameOver();
        }
    }

    gameOver = () => {
        this.scene.restart();
    };
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#87CEEB', // Sky blue background
    dom: {
        createContainer: true,
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: ChampScene,
};

new Phaser.Game(config);
