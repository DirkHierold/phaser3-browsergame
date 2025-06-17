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

    preload() {
    }

    create() {
        this.physics.world.setBounds(0, 0, 800, 580);

        this.player = new Player(this);
        this.player.setPosition(100, 550);
        // Set gravity for the dino
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body) {
            body.setGravityY(1000);
        }

        // Add decorative trees that move from right to left at ground level, not as obstacles
        this.obstacles = new Obstacles(this);
        for (let i = 0; i < 3; i++) {
            const x = 500 + i * 120 + Phaser.Math.Between(-40, 40);
            const y = 500; // ground level
            this.obstacles.addObstacle(x, y);
        }

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

        this.obstacles.getChildren().forEach((obstacle) => {
            (obstacle as Phaser.GameObjects.Image).setDepth(1);
        });
        this.player.setDepth(3); // dino in front of trees and grass
        // Set depth for all existing asteroids to 3 (front)
        this.enemies.getChildren().forEach((obs) => {
            (obs as Phaser.GameObjects.Sprite).setDepth(3);
        });

        this.physics.add.collider(this.player, this.obstacles);
    }

    jump() {
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.onFloor()) {
            this.player.setVelocityY(-900); // much higher jump
        }
    }

    update(time: number) {
        this.player.setVelocityX(2);
        if (this.player.x > 200) this.player.setVelocityX(0); // stop moving after 200px
        if (time > this.nextEnemy) {
            const newEnemy = this.enemies.addEnemy(800, 550, DirectionKeys.Still); // spawn at right edge
            newEnemy.setDepth(3); // ensure obstacles are in front of grass
            this.nextEnemy = time + Phaser.Math.Between(2000, 3000); // more apart
        }
        this.enemies.children.iterate((enemy: Phaser.GameObjects.GameObject | undefined) => {
            const ene = enemy as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
            if (ene) {
                ene.body.setVelocityX(-240);
                // Remove obstacle if it collides with the left world border
                if (ene.x - ene.displayWidth / 2 <= 0) {
                    ene.destroy();
                    this.score += 1;
                    this.scoreText.setText('Score: ' + this.score);
                }
            }
            return null; // Fix: must return boolean | null
        });

        // Move background trees from right to left at the same speed as the grass
        if (this.obstacles) {
            this.obstacles.getChildren().forEach((obstacle) => {
                const obs = obstacle as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
                obs.body.setVelocityX(-100)
                if (obs.x < -100) {
                    obs.x = 900 + Phaser.Math.Between(0, 100);
                }
            });
        }

        // Gradually slow down horizontal velocity after jump
        const body = this.player.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.velocity.x > 0 && body.onFloor()) {
            this.player.setVelocityX(0);
        }
        this.enemies.changeDirection(this.player);
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
