import TextureKeys from "../consts/TextureKeys";
import Player from "./Player";

export default class Enemies extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
  }

  addEnemyInCorner(enemySize: number): Phaser.Physics.Arcade.Image {
    const posX = 0;
    const posY = 0;

    return this.addEnemy(posX, posY, enemySize);
  }

  addEnemyFarAwayFromPlayer(
    player: Player,
    enemySize: number
  ): Phaser.Physics.Arcade.Image {
    const posX =
      (player.x + this.scene.scale.width / 2) % this.scene.scale.width;
    const posY =
      (player.y + this.scene.scale.height / 2) % this.scene.scale.height;

    return this.addEnemy(posX, posY, enemySize);
  }

  private addEnemy(
    x: number,
    y: number,
    enemySize: number
  ): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    let enemy: Phaser.GameObjects.Image = this.scene.add.image(
      x,
      y,
      TextureKeys.Enemy
    );
    enemy.setDisplaySize(enemySize, enemySize);

    this.add(enemy);

    this.scene.physics.world.enable(enemy, Phaser.Physics.Arcade.DYNAMIC_BODY);
    let enemyBody = enemy.body as Phaser.Physics.Arcade.Body;
    enemyBody.setCircle(enemy.width / 2);
    enemyBody.setOffset(0, -enemy.height / 10);

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

  changeDirection(player: Player) {
    this.children.each((child: any) => {
      //enemy is right from Target
      if (player.body.x > child.body.x + child.body.width && !child.flipX) {
        child.toggleFlipX();
        // child.body.setOffset((child.width * 2) / 5, child.height / 8);
        //Player is left from Target
      } else if (
        player.body.x + player.body.width < child.body.x &&
        child.flipX
      ) {
        child.toggleFlipX();
        // child.body.setOffset(child.width / 10, child.height / 8);
      }
    });
  }

  getClosestToPlayer(player: Player): any {
    // console.log("getClosestToPlayer");
    let shortestDistance: number = 1000000000;
    let closestEnemy = null;
    this.children.each((child: any) => {
      let distance =
        Math.pow(child.x - player.x, 2) + Math.pow(child.y - player.y, 2);
      // console.log(distance);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestEnemy = child;
        // console.log(shortestDistance, closestEnemy);
      }
    });
    return closestEnemy;
  }
}
