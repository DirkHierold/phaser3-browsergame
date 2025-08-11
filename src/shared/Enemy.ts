import Phaser from "phaser";
import Player from "./Player";

export default class Enemies extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.add.existing(this);
  }

  addEnemyWithLocation(x: number, y: number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    const randomVelocity = new Phaser.Math.Vector2();
    Phaser.Math.RandomXY(randomVelocity);
    randomVelocity.x = randomVelocity.x * Phaser.Math.Between(60, 180)
    randomVelocity.y = randomVelocity.y * Phaser.Math.Between(60, 180)

    return this.addEnemy(x, y, randomVelocity);
  }

  addEnemyWithDirection(velocity: Phaser.Math.Vector2): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {

    return this.addEnemy(0, 0, velocity);
  }

  addEnemy(x: number, y: number, velocity: Phaser.Math.Vector2): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    // Create a triangle with an unhappy face using a graphics object
    const size = 50;
    const uniqueEnemyKey = `enemy-triangle-${size}-${Date.now()}-${Math.random()}`;
    const gfx = this.scene.make.graphics({ x: 0, y: 0 });
    gfx.clear();
    // Draw circle (enemy body)
    gfx.fillStyle(0xff6666, 1);
    gfx.fillCircle(size / 2, size / 2, size / 2);
    gfx.lineStyle(2, 0x000000, 1);
    gfx.strokeCircle(size / 2, size / 2, size / 2);
    // Eyes (unhappy, a little to the side and lower)
    gfx.fillStyle(0x000000, 1);
    gfx.fillCircle(size * 0.65, size * 0.35, size * 0.07); // left eye
    gfx.fillCircle(size * 0.85, size * 0.35, size * 0.07); // right eye
    // Unhappy mouth (arc, downward)
    gfx.lineStyle(2, 0x000000, 1);
    gfx.beginPath();
    gfx.arc(
      size * 0.75,
      size * 0.73,
      Math.max(8, size * 0.15),
      Phaser.Math.DegToRad(20),
      Phaser.Math.DegToRad(160),
      true
    );
    gfx.strokePath();
    // Generate texture and destroy graphics
    gfx.generateTexture(uniqueEnemyKey, size, size);
    gfx.destroy();
    // Create image from generated texture
    const enemy = this.scene.add.image(x, y, uniqueEnemyKey).setDisplaySize(size, size);
    this.add(enemy);
    this.scene.physics.world.enable(enemy, Phaser.Physics.Arcade.DYNAMIC_BODY);
    let enemyBody = enemy.body as Phaser.Physics.Arcade.Body;
    enemyBody.setCircle(size / 2);
    enemyBody.setVelocity(velocity.x, velocity.y);
    enemyBody.setCollideWorldBounds(true);
    enemyBody.setBounce(1, 1);


    return enemy as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }

  changeDirection(player: Player) {
    this.children.iterate((child: any) => {
      const playerBody = player.body as Phaser.Physics.Arcade.Body;
      const childBody = child.body as Phaser.Physics.Arcade.Body;
      
      if (!playerBody || !childBody) return true;
      
      // Player is right from Target
      if (playerBody.x > childBody.x + childBody.width && child.flipX) {
        child.toggleFlipX();
        // Player is left from Target
      } else if (
        playerBody.x + playerBody.width < childBody.x &&
        !child.flipX
      ) {
        child.toggleFlipX();
      }
      
      return true;
    });
  }
}
