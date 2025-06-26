import Phaser from 'phaser';
import { pixelPerfectOverlap } from './pixelPerfectUtil';
import { Button } from "../../shared/utils/Button";
import Player from '../../shared/Player';
import Obstacles from '../../shared/Obstacles';
import AudioKeys from "../../shared/utils/consts/AudioKeys";

export default class ChampScene extends Phaser.Scene {
    player!: Player;
    nextEnemy: number = 0;
    obstacles!: Obstacles;

    private levelData: any[]; // Level-Daten laden (z.B. aus JSON)
    private nextElementIndex: number = 0;
    private scrollSpeed: number = 240; // Pixel pro Sekunde
    private currentLevelX: number = 0; // Aktuelle Position in der "Welt" (relevant für Level-Daten)
    private lastObjectX: number = 0;

    private gameFinished: boolean = false;
    private newGameButton!: Button;

    private bgMusic!: Phaser.Sound.BaseSound;
    private musicOn: boolean = true;

    private moveParticles!: Phaser.GameObjects.Particles.ParticleEmitter


    preload() {
        this.load.json('level', '/level.json');
        this.load.audio(AudioKeys.BG_Music, "/audios/anomaly.mp3");
    }

    showMusicButton() {
        new Button(0, 0, "Music", this, () => {

            this.musicOn = !this.musicOn;
            if (this.musicOn) {
                this.sound.volume = 0.2
            } else {
                this.sound.volume = 0
            }
        });
    }

    create() {
        this.gameFinished = false

        // Music
        this.sound.removeAll();

        this.bgMusic = this.sound.add(AudioKeys.BG_Music, {
            volume: 0.2,
            loop: true,
        });

        this.showMusicButton()

        if (this.sound.locked) {
            var text = this.add.text(this.game.canvas.width / 2, this.game.canvas.height / 2, 'Tap to unlock audio',
                { fontSize: '32px', color: '#000' }).setOrigin(0.5, 0.5);

            var bgMusic = this.bgMusic;
            this.sound.once('unlocked', function () {
                text.destroy();
                bgMusic.play()
            });
        }
        else {
            this.bgMusic.play()
        }

        this.levelData = this.cache.json.get('level'); // Oder direkt ein Array
        this.currentLevelX = Number(this.game.config.width); // Start am rechten rand des Bildschirms
        this.lastObjectX = 0
        this.nextElementIndex = 0;

        this.physics.world.setBounds(0, 0, 800, 600);

        this.player = new Player(this);
        this.player.setOrigin(0).setPosition(100, 550);
        // Set gravity for the dino
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body) {
            body.setGravityY(2000);
        }

        this.obstacles = new Obstacles(this);

        // Add move particles (dust) behind player
        this.moveParticles = this.add.particles(0, 0, 'particle', {
            speed: { min: -40, max: -80 },
            angle: { min: 160, max: 200 },
            scale: { start: 0.3, end: 0 },
            alpha: { start: 1, end: 0 },
            lifespan: 400,
            quantity: 1,
            frequency: 40,
            follow: this.player,
            followOffset: { x: -10, y: this.player.displayHeight / 2 },
            blendMode: 'ADD',
        });

        this.input.on('pointerdown', this.jump, this);
        this.input.keyboard?.on('keydown-SPACE', this.jump, this);
        this.input.keyboard?.on('keydown-ENTER', this.jump, this);

        this.nextEnemy = 0;

        this.physics.add.collider(this.player, this.obstacles, (playerObj, obstacleObj) => {
            const player = playerObj as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
            const obstacle = obstacleObj as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
            // Only allow standing on top of blocks, not spikes
            if (obstacle.texture.key.startsWith('obstacle-')) {
                if (player.body.touching.down && obstacle.body.touching.up) {
                    // Landed on top of a block, do nothing special
                } else {
                    this.explode();
                }
            } else {
                // Handle collision for spikes
                this.explode();
            }
        });
    }

    jump() {
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.onFloor()) {
            this.player.setVelocityY(-600); // much higher jump
        }
    }

    update(time: number, delta: number) {
        if (this.gameFinished) return;

        this.player.setVelocityX(2);
        if (this.player.x > 200) this.player.setVelocityX(0); // stop moving after 200px

        // Gradually slow down horizontal velocity after jump
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.velocity.x > 0 && body.onFloor()) {
            this.player.setVelocityX(0);
        }

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
        if (this.lastObjectX + elementData.xWorld < this.currentLevelX) { // Wenn das Element fast im Bild ist
            const xToAdd: number = Number(this.game.config.width) + (this.lastObjectX + elementData.xWorld - this.currentLevelX)
            if (elementData.type == 'platform') {
                // Erzeugen Sie das Element am rechten Rand
                this.obstacles.addBlock(
                    xToAdd,
                    elementData.y,
                    elementData.width,
                    elementData.height
                )
                    .setOrigin(0)
                    .body.setVelocityX(-this.scrollSpeed);

                this.nextElementIndex++;
                this.lastObjectX += elementData.xWorld; // Aktualisieren Sie die Position des letzten Objekts
            } else if (elementData.type == 'spike-up') {
                this.obstacles.addSpike(
                    xToAdd,
                    elementData.y,
                    elementData.width,
                    elementData.height,
                    true // true für Spike nach oben
                )
                    .setOrigin(0)
                    .body.setVelocityX(-this.scrollSpeed);

                this.nextElementIndex++;
                this.lastObjectX += elementData.xWorld; // Aktualisieren Sie die Position des letzten Objekts
            } else if (elementData.type == 'spike-down') {
                this.obstacles.addSpike(
                    xToAdd,
                    elementData.y,
                    elementData.width,
                    elementData.height,
                    false // false für Spike nach unten
                )
                    .setOrigin(0)
                    .body.setVelocityX(-this.scrollSpeed);

                this.nextElementIndex++;
                this.lastObjectX += elementData.xWorld; // Aktualisieren Sie die Position des letzten Objekts

            } else if (elementData.type == 'goal') {
                // stoppe das spiel, zeige den highscore an und einen button um das Spiel neu zu starten
                this.add.text(400, 300, 'You reached the goal!', { fontSize: '32px', color: '#000' })
                    .setOrigin(0.5);
                this.handleGameFinished()
            } else if (elementData.type.startsWith('color-')) {
                // Dynamically change background color
                const color = elementData.type.replace('color-', '');
                this.cameras.main.setBackgroundColor(color);
                this.nextElementIndex++;
                this.lastObjectX += elementData.xWorld;
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
            this.handleGameFinished();
        }
    }

    private explode() {
        this.gameFinished = true;
        this.physics.pause();
        // Explosion effect on player
        const playerCenterX = this.player.x + this.player.displayWidth / 2;
        const playerCenterY = this.player.y + this.player.displayHeight / 2;
        const explosion = this.add.particles(0, 0, 'explosion', {
            x: playerCenterX,
            y: playerCenterY,
            speed: { min: -200, max: 200 },
            angle: { min: 0, max: 360 },
            scale: { start: 1, end: 0 },
            alpha: { start: 1, end: 0 },
            lifespan: 600,
            quantity: 30,
            blendMode: 'ADD',
        });
        this.player.setVisible(false);
        // Remove explosion after a short time
        this.time.delayedCall(700, () => {
            explosion.stop()
            this.moveParticles.stop()
            this.scene.restart();
        }, [], this);
    }

    private handleGameFinished() {
        this.gameFinished = true;
        this.physics.pause();

        // Disable drag input after game over
        this.input.off("pointerdown");
        this.input.off("pointerup");
        this.input.off("pointermove");
        this.input.keyboard?.off('keydown-SPACE', this.jump, this);
        this.input.keyboard?.off('keydown-ENTER', this.jump, this);

        // Show NEW GAME button in the center of the game using the Button class (like rescue)
        const centerX = this.game.scale.width / 2;
        const centerY = this.game.scale.height / 2 + 100; // Adjusted for better visibility

        if (this.newGameButton) {
            this.newGameButton.destroy();
        }

        this.newGameButton = new Button(centerX, centerY, "NEW GAME", this, () => {
            this.newGameButton.destroy();
            this.scene.restart();
        });
        this.newGameButton.setOrigin(0.5, 0.5).setDepth(1000);
    }
}

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    width: 800,
    height: 600,
    parent: 'game',
    backgroundColor: '#ffffff',
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
