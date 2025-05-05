import TextureKeys from "../consts/TextureKeys";
import { AlignGrid } from "../utils/AlignGrid";
import Player from "./Player";

export default class Targets extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;
  grid: AlignGrid;

  constructor(scene: Phaser.Scene, grid: AlignGrid) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.grid = grid;
  }

  addTarget(index: number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    let target: Phaser.GameObjects.Image = this.scene.add.image(
      0,
      0,
      TextureKeys.Target
    );
    this.add(target);
    this.grid.placeAtIndexAndScale(index, target, 1, 1);

    this.scene.physics.world.enable(target, Phaser.Physics.Arcade.DYNAMIC_BODY);
    let targetBody = target.body as Phaser.Physics.Arcade.Body;

    // targetBody.setCircle(target.width * 0.375);
    targetBody.setSize(target.width * 0.45, (target.height * 6) / 8);
    targetBody.setOffset(target.width * 0.21, target.height / 8);

    targetBody.setCollideWorldBounds(true);
    targetBody.setBounce(1, 1);

    return target as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }

  changeDirection(player: Player) {
    this.children.iterate((child: any) => {
      // Player is right from Target
      if (player.body.x > child.body.x + child.body.width && !child.flipX) {
        child.toggleFlipX();
        child.body.setOffset(child.width * 0.34, child.height / 8);
        // Player is left from Target
      } else if (
        player.body.x + player.body.width < child.body.x &&
        child.flipX
      ) {
        child.toggleFlipX();
        child.body.setOffset(child.width * 0.21, child.height / 8);
      }
    });
  }
}
