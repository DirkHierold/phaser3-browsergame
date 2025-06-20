
export default class Obstacles extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    // scene.physics.world.enable(this);
    scene.add.existing(this);
  }
  /**
   * Fügt ein Hindernis (z.B. Baum) an der angegebenen Position hinzu.
   * @param x - X-Koordinate des Hindernisses
   * @param y - Y-Koordinate des Hindernisses
   * @returns Das hinzugefügte Hindernis
   */
  addObstacle(x: number, y: number, width: number, height: number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {

    const uniqueFaceKey = `obstacle-${width}-${height}-${Date.now()}-${Math.random()}`;
    // Create graphics object but do not add to display list
    const gfx = this.scene.make.graphics({ x: 0, y: 0 });
    gfx.setVisible(false); // Hide graphics object
    // Draw square (face)
    //gfx.fillStyle(0xffffcc, 1);
    //gfx.fillRect(0, 0, actualSize, actualSize);
    gfx.lineStyle(2, 0x000000, 1);
    gfx.strokeRect(0, 0, width, height);
    gfx.generateTexture(uniqueFaceKey, width, height);
    gfx.destroy();
    // Create image from generated texture
    const obstacle = this.scene.physics.add.image(x, y, uniqueFaceKey)
      .setDisplaySize(width, height);
    this.add(obstacle);

    // Wichtig: Konfigurieren Sie den Body des dynamischen Hindernisses
    const body = obstacle.body as Phaser.Physics.Arcade.Body;
    if (body) {
      body.setSize(width, height);
      body.setAllowGravity(false);
      body.setImmovable(true);
      body.setCollideWorldBounds(false);
    }

    return obstacle as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }
}
