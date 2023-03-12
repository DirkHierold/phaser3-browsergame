import TextureKeys from "../consts/TextureKeys";
import Player from "./Player";

export default class Asteroids extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
  }

  addInCorner(size: number): Phaser.Physics.Arcade.Image {
    const posX = this.scene.scale.width;
    const posY = this.scene.scale.height;

    return this.addOne(posX, posY, size);
  }

  addFarAwayFromPlayer(
    player: Player,
    size: number
  ): Phaser.Physics.Arcade.Image {
    const posX =
      (player.x + this.scene.scale.width / 2) % this.scene.scale.width;
    const posY =
      (player.y + this.scene.scale.height / 2) % this.scene.scale.height;

    return this.addOne(posX, posY, size);
  }

  addOne(
    x: number,
    y: number,
    size: number
  ): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    let enemy: Phaser.GameObjects.Image = this.scene.add.image(
      x,
      y,
      TextureKeys.Asteroid
    );
    enemy.setDisplaySize(size, size);

    this.add(enemy);

    this.scene.physics.world.enable(enemy, Phaser.Physics.Arcade.DYNAMIC_BODY);
    let enemyBody = enemy.body as Phaser.Physics.Arcade.Body;
    enemyBody.setCircle(enemy.width / 2);
    let velocity = new Phaser.Math.Vector2();
    Phaser.Math.RandomXY(velocity);

    enemyBody.setVelocity(
      velocity.x * Phaser.Math.Between(60, 180),
      velocity.y * Phaser.Math.Between(60, 180)
    );

    enemyBody.setCollideWorldBounds(true);
    enemyBody.setBounce(1, 1);

    return enemy as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }
}
