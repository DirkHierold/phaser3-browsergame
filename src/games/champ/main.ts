import Phaser from 'phaser';
import { pixelPerfectOverlap } from './pixelPerfectUtil';
import Player from '../../shared/Player';
import { TextureKeys } from '../../shared/utils/TextureKeys';
import Enemies from '../../shared/Enemy';
import { DirectionKeys } from '../rescue/consts/DirectionKeys';

export default class ChampScene extends Phaser.Scene {
    dino!: Player;
    ground!: Phaser.GameObjects.TileSprite;
    obstacles!: Enemies;
    score: number = 0;
    scoreText!: Phaser.GameObjects.Text;
    nextObstacle: number = 0;
    bgTrees!: Phaser.GameObjects.Group;

    preload() {
        this.load.image(TextureKeys.Player, '/images/dino.png');
        this.load.image(TextureKeys.Enemy, '/images/asteroid.png');
        this.load.image('ground', '/images/grass.jpg');
        // Preload all tree images for background decoration
        const treeImagesList = ['Autumn_tree2'];
        for (const name of treeImagesList) {
            this.load.image('tree_' + name, '/images/Trees/' + name + '.png');
        }
    }

    create() {
        this.physics.world.setBounds(0, 0, 800, 580);
        this.ground = this.add.tileSprite(400, 580, 800, 40, 'ground');
        this.physics.add.existing(this.ground, true);

        this.dino = new Player(this);
        this.dino.setPosition(100, 550);
        // Set gravity for the dino
        const body = this.dino.body as Phaser.Physics.Arcade.Body | null;
        if (body) {
            body.setGravityY(1000);
        }

        // Add decorative trees that move from right to left at ground level, not as obstacles
        this.bgTrees = this.add.group();
        const treeKeys = ['tree_Autumn_tree2'];
        for (let i = 0; i < 3; i++) {
            const x = 500 + i * 120 + Phaser.Math.Between(-40, 40);
            const y = 500; // ground level
            const scale = 2.5; // triple the size
            const treeKey = treeKeys[0]; // use a single tree type for simplicity
            const tree = this.add.image(x, y, treeKey).setScale(scale).setDepth(1); // setDepth(1) to be in front of grass
            this.bgTrees.add(tree);
        }

        this.obstacles = new Enemies(this);
        this.physics.add.overlap(
            this.dino,
            this.obstacles,
            this.handlePixelPerfectCollision as Phaser.Types.Physics.Arcade.ArcadePhysicsCallback,
            undefined,
            this
        );

        this.input.on('pointerdown', this.jump, this);
        this.input.keyboard?.on('keydown-SPACE', this.jump, this);
        this.input.keyboard?.on('keydown-ENTER', this.jump, this);

        this.score = 0;
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', color: '#000' });
        this.nextObstacle = 0;

        this.ground.setDepth(0); // ensure grass is behind trees
        this.bgTrees.getChildren().forEach((tree) => {
            (tree as Phaser.GameObjects.Image).setDepth(1);
        });
        this.dino.setDepth(3); // dino in front of trees and grass
        // Set depth for all existing asteroids to 3 (front)
        this.obstacles.getChildren().forEach((obs) => {
            (obs as Phaser.GameObjects.Sprite).setDepth(3);
        });
    }

    jump() {
        const body = this.dino.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.onFloor()) {
            body.setVelocityY(-900); // much higher jump
        }
    }

    update(time: number) {
        this.ground.tilePositionX += 4;
        this.dino.x += 2;
        if (this.dino.x > 200) this.dino.x = 200;
        if (time > this.nextObstacle) {
            const newObstacle = this.obstacles.addEnemy(800, 550,DirectionKeys.Still); // spawn at right edge
            newObstacle.setDepth(3); // ensure obstacles are in front of grass
            this.nextObstacle = time + Phaser.Math.Between(2000, 3000); // more apart
        }
        this.obstacles.children.iterate((obstacle: Phaser.GameObjects.GameObject | undefined) => {
            const obs = obstacle as Phaser.Physics.Arcade.Sprite;
            if (obs) {
                obs.x -= 4;
                // Remove obstacle if it collides with the left world border
                if (obs.x - obs.displayWidth / 2 <= 0) {
                    obs.destroy();
                    this.score += 1;
                    this.scoreText.setText('Score: ' + this.score);
                }
            }
            return null; // Fix: must return boolean | null
        });

        // Move background trees from right to left at the same speed as the grass
        if (this.bgTrees) {
            this.bgTrees.getChildren().forEach((tree) => {
                const img = tree as Phaser.GameObjects.Image;
                img.x -= 4; // match grass speed
                if (img.x < -100) {
                    img.x = 900 + Phaser.Math.Between(0, 100);
                }
            });
        }

        // Gradually slow down horizontal velocity after jump
        const body = this.dino.body as Phaser.Physics.Arcade.Body | null;
        if (body && body.velocity.x > 0 && body.onFloor()) {
            body.setVelocityX(0);
        }
        this.obstacles.changeDirection(this.dino);
    }

    handlePixelPerfectCollision(
        dino: Phaser.GameObjects.GameObject,
        obstacle: Phaser.GameObjects.GameObject
    ) {
        if (
            pixelPerfectOverlap(
                dino as Phaser.GameObjects.Sprite,
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
    // Move the canvas to the bottom of the screen using CSS
};

// In your index.html or game.css, add:
// #game { position: absolute; bottom: 0; left: 0; right: 0; margin: 0 auto; }

new Phaser.Game(config);
