import DirectionKeys from "../consts/DirectionKeys";
import TextureKeys from "../consts/TextureKeys";
import { AlignGrid } from "../../../shared/utils/AlignGrid";

export default class Asteroids extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;
  grid: AlignGrid;

  constructor(scene: Phaser.Scene, grid: AlignGrid) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.grid = grid;
  }

  addAsteroid(
    index: number,
    direction: DirectionKeys
  ): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    let asteroid: Phaser.GameObjects.Image = this.scene.add.image(
      0,
      0,
      TextureKeys.Asteroid
    );
    this.grid.placeAtIndexAndScale(index, asteroid, 1, 1);

    this.add(asteroid);

    this.scene.physics.world.enable(
      asteroid,
      Phaser.Physics.Arcade.DYNAMIC_BODY
    );
    let asteroidBody = asteroid.body as Phaser.Physics.Arcade.Body;
    asteroidBody.setCircle(asteroid.width / 2);

    let velocityX = 0;
    let velocityY = 0;
    switch (direction) {
      case DirectionKeys.Left:
        velocityX = -250;
        velocityY = 0;
        break;
      case DirectionKeys.Up:
        velocityX = 0;
        velocityY = -250;
        break;
      case DirectionKeys.Right:
        velocityX = 250;
        velocityY = 0;
        break;
      case DirectionKeys.Down:
        velocityX = 0;
        velocityY = 250;
        break;
      default:
        break;
    }
    asteroidBody.setVelocity(velocityX, velocityY);

    asteroidBody.setCollideWorldBounds(true);
    asteroidBody.setBounce(1, 1);

    return asteroid as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }
}
