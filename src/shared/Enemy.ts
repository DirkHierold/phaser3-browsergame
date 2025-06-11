import Phaser from "phaser";
import { TextureKeys } from "../games/asteroid/scenes/AsteroidScene";

export default class Enemies extends Phaser.Physics.Arcade.Group {
    scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        super(scene.physics.world, scene);
        this.scene = scene;
        scene.add.existing(this);
    }

    addEnemyWithLocation(x: number, y: number): Phaser.Physics.Arcade.Image {
            const randomVelocity = new Phaser.Math.Vector2();
            Phaser.Math.RandomXY(randomVelocity);
            randomVelocity.x=randomVelocity.x * Phaser.Math.Between(60, 180)
            randomVelocity.y=   randomVelocity.y * Phaser.Math.Between(60, 180)
            
        return this.addEnemy(x, y, randomVelocity);
    }

    addEnemyWithDirection(velocity: Phaser.Math.Vector2): Phaser.Physics.Arcade.Image {
            
        return this.addEnemy(0, 0, velocity);
    }

    addEnemy(x: number, y: number, velocity: Phaser.Math.Vector2): Phaser.Physics.Arcade.Image {
        // Use physics.add.image directly for correct scaling and physics
        const enemy = this.scene.add.image(x, y, TextureKeys.Enemy)
            .setDisplaySize(64, 64)

        this.add(enemy);

        this.scene.physics.world.enable(enemy, Phaser.Physics.Arcade.DYNAMIC_BODY);
        let enemyBody = enemy.body as Phaser.Physics.Arcade.Body;
        // Ensure body size matches display size
        enemyBody.setCircle(enemy.width / 2);
        enemyBody.setOffset(0, -enemy.height / 10);
        enemyBody.setVelocity(velocity.x, velocity.y);
        
        enemyBody.setCollideWorldBounds(true);
        enemyBody.setBounce(1, 1);


        return enemy as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    }
}
