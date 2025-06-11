import TextureKeys from "../consts/TextureKeys";
import { AlignGrid } from "../../../shared/utils/AlignGrid";

export default class Trees extends Phaser.Physics.Arcade.StaticGroup {
  scene: Phaser.Scene;
  grid: AlignGrid;

  constructor(scene: Phaser.Scene, grid: AlignGrid) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.grid = grid;
  }

  addTree(index: number): Phaser.Types.Physics.Arcade.ImageWithStaticBody {
    let tree = this.scene.physics.add.staticImage(
      0,
      0,
      TextureKeys.Autumn_tree2
    );
    this.add(tree);

    tree.setCircle(tree.width / 2);
    this.grid.placeAtIndexAndScale(index, tree, 1, 1);
    tree.body.updateFromGameObject();

    return tree as Phaser.Types.Physics.Arcade.ImageWithStaticBody;
  }
}
