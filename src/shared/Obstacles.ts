
export default class Obstacles extends Phaser.Physics.Arcade.StaticGroup {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
  }

  addObstacle(x: number, y: number): Phaser.Types.Physics.Arcade.ImageWithStaticBody {
    const actualSize = 50
    const uniqueFaceKey = `obstacle-${actualSize}-${Date.now()}-${Math.random()}`;
    // Create graphics object but do not add to display list
    const gfx = this.scene.make.graphics({ x: 0, y: 0 });
    gfx.setVisible(false); // Hide graphics object
    // Draw square (face)
    //gfx.fillStyle(0xffffcc, 1);
    //gfx.fillRect(0, 0, actualSize, actualSize);
    gfx.lineStyle(2, 0x000000, 1);
    gfx.strokeRect(0, 0, actualSize, actualSize);
    gfx.generateTexture(uniqueFaceKey, actualSize, actualSize);
    gfx.destroy();
    // Create image from generated texture
    const obstacle = this.scene.physics.add.staticImage(x, y, uniqueFaceKey).setDisplaySize(actualSize, actualSize);

    this.add(obstacle);
    obstacle.setSize(obstacle.width, obstacle.height)
    //obstacleBody.setSize(actualSize, actualSize);
    obstacle.body.updateFromGameObject();

    return obstacle as Phaser.Types.Physics.Arcade.ImageWithStaticBody;
  }
}
