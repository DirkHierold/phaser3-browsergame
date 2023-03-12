import TextureKeys from "../consts/TextureKeys";
import Player from "./Player";

export default class Targets extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
  }

  addTarget(
    x: number,
    y: number,
    targetSize: number
  ): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    let target: Phaser.GameObjects.Image = this.scene.add.image(
      x,
      y,
      TextureKeys.Target
    );
    target.setDisplaySize(targetSize, targetSize);
    this.add(target);

    this.scene.physics.world.enable(target, Phaser.Physics.Arcade.DYNAMIC_BODY);
    let targetBody = target.body as Phaser.Physics.Arcade.Body;
    targetBody.setCircle(target.width / 2);
    targetBody.setOffset(0, -target.height / 10);

    let velocity = new Phaser.Math.Vector2();
    Phaser.Math.RandomXY(velocity);

    targetBody.setCollideWorldBounds(true);
    targetBody.setBounce(1, 1);

    return target as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }

  changeDirection(player: Player) {
    this.children.each((child: any) => {
      // Player is right from Target
      if (player.body.x > child.body.x + child.body.width && child.flipX) {
        // console.log("if");
        child.toggleFlipX();
        // child.body.setOffset((child.width * 2) / 5, child.height / 8);
        // Player is left from Target
      } else if (
        player.body.x + player.body.width < child.body.x &&
        !child.flipX
      ) {
        // console.log("else if");
        child.toggleFlipX();
        // child.body.setOffset(child.width / 10, child.height / 8);
      }
    });
  }
}
