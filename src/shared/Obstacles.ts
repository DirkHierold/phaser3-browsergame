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
  addBlock(x: number, y: number, width: number, height: number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {

    const uniqueFaceKey = `obstacle-${width}-${height}-${Date.now()}-${Math.random()}`;
    const gfx = this.scene.make.graphics({ x: 0, y: 0 });
    gfx.setVisible(false);
    gfx.lineStyle(2, 0x000000, 1);
    gfx.strokeRect(0, 0, width, height);
    gfx.generateTexture(uniqueFaceKey, width, height);
    gfx.destroy();
    const obstacle = this.scene.physics.add.image(x, y, uniqueFaceKey)
      .setDisplaySize(width, height);
    this.add(obstacle);
    const body = obstacle.body as Phaser.Physics.Arcade.Body;
    if (body) {
      body.setSize(width, height);
      body.setAllowGravity(false);
      body.setImmovable(true);
      body.setCollideWorldBounds(false);
      // Only allow collision from the top
      //body.checkCollision.up = true;
      //body.checkCollision.down = false;
      //body.checkCollision.left = false;
      //body.checkCollision.right = false;
    }
    return obstacle as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }

  /**
   * Fügt einen Spike (Stachel) an der angegebenen Position hinzu.
   * @param x - X-Koordinate des Spikes
   * @param y - Y-Koordinate des Spikes
   * @param width - Breite des Spikes
   * @param height - Höhe des Spikes
   * @param up - true: Spitze zeigt nach oben, false: Spitze zeigt nach unten
   * @returns Das hinzugefügte Spike-Objekt
   */
  addSpike(x: number, y: number, width: number, height: number, up: boolean = true): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    const uniqueSpikeKey = `spike-${width}-${height}-${up ? 'up' : 'down'}-${Date.now()}-${Math.random()}`;
    const gfx = this.scene.make.graphics({ x: 0, y: 0 });
    gfx.setVisible(false);
    gfx.beginPath();
    let points: { x: number, y: number }[];
    if (up) {
      points = [
        { x: width / 2, y: 0 }, // Top point
        { x: width, y: height }, // Bottom right
        { x: 0, y: height } // Bottom left
      ];
      gfx.moveTo(points[0].x, points[0].y);
      gfx.lineTo(points[1].x, points[1].y);
      gfx.lineTo(points[2].x, points[2].y);
    } else {
      points = [
        { x: 0, y: 0 }, // Top left
        { x: width, y: 0 }, // Top right
        { x: width / 2, y: height } // Bottom center (spike down)
      ];
      gfx.moveTo(points[0].x, points[0].y);
      gfx.lineTo(points[1].x, points[1].y);
      gfx.lineTo(points[2].x, points[2].y);
    }
    gfx.closePath();
    gfx.lineStyle(1, 0x000000, 1);
    gfx.strokePath();
    gfx.generateTexture(uniqueSpikeKey, width, height);
    gfx.destroy();
    const spike = this.scene.physics.add.image(x, y, uniqueSpikeKey)
      .setDisplaySize(width, height);
    this.add(spike);
    const body = spike.body as Phaser.Physics.Arcade.Body;
    if (body) {
      body.setSize(width * 0.25, height * 0.75);
      body.setOffset(width / 3, height / 4); // Offset to center the spike
      body.setAllowGravity(false);
      body.setImmovable(true);
      body.setCollideWorldBounds(false);
    }
    return spike as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }
}
