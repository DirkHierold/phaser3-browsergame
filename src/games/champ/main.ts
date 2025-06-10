import Phaser from 'phaser';
import { pixelPerfectOverlap } from './pixelPerfectUtil';

export default class ChampScene extends Phaser.Scene {
    dino!: Phaser.Physics.Arcade.Sprite;
    ground!: Phaser.GameObjects.TileSprite;
    obstacles!: Phaser.Physics.Arcade.Group;
    score: number = 0;
    scoreText!: Phaser.GameObjects.Text;
    nextObstacle: number = 0;
    bgTrees!: Phaser.GameObjects.Group;

    preload() {
        this.load.image('dino', '/images/dino.png');
        this.load.image('asteroid', '/images/asteroid.png');
        this.load.image('ground', '/images/grass.jpg');
        // Preload all tree images for background decoration
        const treeImagesList = [
            'Palm_tree1_1', 'Palm_tree1_2', 'Palm_tree1_3',
            'Palm_tree2_1', 'Palm_tree2_2', 'Palm_tree2_3',
            'Tree1', 'Tree2', 'Tree3',
            'Autumn_tree1', 'Autumn_tree2', 'Autumn_tree3',
            'Broken_tree1', 'Broken_tree2', 'Broken_tree3', 'Broken_tree4', 'Broken_tree5', 'Broken_tree6', 'Broken_tree7',
            'Burned_tree1', 'Burned_tree2', 'Burned_tree3',
            'Christmas_tree1', 'Christmas_tree2', 'Christmas_tree3',
            'Flower_tree1', 'Flower_tree2', 'Flower_tree3',
            'Fruit_tree1', 'Fruit_tree2', 'Fruit_tree3',
            'Moss_tree1', 'Moss_tree2', 'Moss_tree3',
            'Snow_christmass_tree1', 'Snow_christmass_tree2', 'Snow_christmass_tree3',
            'Snow_tree1', 'Snow_tree2', 'Snow_tree3'
        ];
        for (const name of treeImagesList) {
            this.load.image('tree_' + name, '/images/Trees/' + name + '.png');
        }
    }

    create() {
        this.physics.world.setBounds(0, 0, 800, 600);
        this.ground = this.add.tileSprite(400, 580, 800, 40, 'ground');
        this.physics.add.existing(this.ground, true);

        this.dino = this.physics.add.sprite(100, 500, 'dino').setScale(0.12, 0.10); // smaller dino
        this.dino.setCollideWorldBounds(true);
        this.dino.setFlipX(true);
        (this.dino.body as Phaser.Physics.Arcade.Body).setGravityY(1000);
        this.dino.setDepth(2);
        this.physics.add.collider(this.dino, this.ground);

        // Add decorative trees that move from right to left at ground level, not as obstacles
        this.bgTrees = this.add.group();
        const treeKeys = [
            'tree_Palm_tree1_1', 'tree_Palm_tree1_2', 'tree_Palm_tree1_3',
            'tree_Palm_tree2_1', 'tree_Palm_tree2_2', 'tree_Palm_tree2_3',
            'tree_Tree1', 'tree_Tree2', 'tree_Tree3',
            'tree_Autumn_tree1', 'tree_Autumn_tree2', 'tree_Autumn_tree3',
            'tree_Broken_tree1', 'tree_Broken_tree2', 'tree_Broken_tree3', 'tree_Broken_tree4', 'tree_Broken_tree5', 'tree_Broken_tree6', 'tree_Broken_tree7',
            'tree_Burned_tree1', 'tree_Burned_tree2', 'tree_Burned_tree3',
            'tree_Christmas_tree1', 'tree_Christmas_tree2', 'tree_Christmas_tree3',
            'tree_Flower_tree1', 'tree_Flower_tree2', 'tree_Flower_tree3',
            'tree_Fruit_tree1', 'tree_Fruit_tree2', 'tree_Fruit_tree3',
            'tree_Moss_tree1', 'tree_Moss_tree2', 'tree_Moss_tree3',
            'tree_Snow_christmass_tree1', 'tree_Snow_christmass_tree2', 'tree_Snow_christmass_tree3',
            'tree_Snow_tree1', 'tree_Snow_tree2', 'tree_Snow_tree3'
        ];
        for (let i = 0; i < 15; i++) {
            const x = 900 + i * 120 + Phaser.Math.Between(-40, 40);
            const y = 540; // ground level
            const scale = Phaser.Math.FloatBetween(0.7, 1.2) * 3; // triple the size
            const treeKey = treeKeys[Phaser.Math.Between(0, treeKeys.length - 1)];
            const tree = this.add.image(x, y, treeKey).setScale(scale).setDepth(1); // setDepth(1) to be in front of grass
            this.bgTrees.add(tree);
        }

        this.obstacles = this.physics.add.group();
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
        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', color: '#222' });
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
            body.setVelocityX(150); // jump wider (move right while jumping)
        }
    }

    update(time: number) {
        this.ground.tilePositionX += 4;
        this.dino.x += 2;
        if (this.dino.x > 200) this.dino.x = 200;
        if (time > this.nextObstacle) {
            this.spawnObstacle();
            this.nextObstacle = time + Phaser.Math.Between(2000, 3000); // more apart
        }
        this.obstacles.children.iterate((obstacle: Phaser.GameObjects.GameObject | undefined) => {
            const obs = obstacle as Phaser.Physics.Arcade.Sprite;
            if (obs) {
                obs.x -= 4;
                if (obs.x < -50) {
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
    }

    spawnObstacle() {
        // Only spawn asteroids now, smaller and more apart
        const type = 'asteroid';
        const y = 540;
        const scale = 0.03; // smaller asteroids
        const obs = this.obstacles.create(850, y, type) as Phaser.Physics.Arcade.Sprite;
        obs.setScale(scale);
        obs.setDepth(3); // ensure new asteroids are always in front
        const obsBody = obs.body as Phaser.Physics.Arcade.Body | null;
        if (obsBody) {
            obsBody.allowGravity = false;
            obsBody.immovable = true;
        }
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
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#e0f7fa',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 0 },
            debug: false
        }
    },
    scene: ChampScene,
    // Move the canvas to the bottom of the screen using CSS
};

// In your index.html or game.css, add:
// #game { position: absolute; bottom: 0; left: 0; right: 0; margin: 0 auto; }

new Phaser.Game(config);
