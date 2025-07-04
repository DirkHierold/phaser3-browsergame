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
    // Wood base color
    gfx.fillStyle(0xdeb887, 1); // light brown
    gfx.fillRect(0, 0, width, height);
    // Draw wood grain (simple lines and knots)
    gfx.lineStyle(1, 0xc68642, 0.5); // darker brown
    for (let i = 0; i < 4; i++) {
      const y = (height / 5) * (i + 1) + Phaser.Math.Between(-2, 2);
      gfx.beginPath();
      gfx.moveTo(4, y);
      gfx.lineTo(width - 4, y + Phaser.Math.Between(-2, 2));
      gfx.strokePath();
    }
    // Draw a few knots
    for (let i = 0; i < 2; i++) {
      const knotX = Phaser.Math.Between(width * 0.2, width * 0.8);
      const knotY = Phaser.Math.Between(height * 0.2, height * 0.8);
      gfx.fillStyle(0xc68642, 0.7);
      gfx.fillCircle(knotX, knotY, Phaser.Math.Between(2, 4));
      gfx.lineStyle(1, 0x8b5c2a, 0.7);
      gfx.strokeCircle(knotX, knotY, Phaser.Math.Between(2, 4));
    }
    // Outline
    gfx.lineStyle(2, 0x8b5c2a, 1);
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
    // Simulate shiny metal: base fill, highlight, shadow
    gfx.fillStyle(0xb0b0b0, 1); // base metallic gray
    gfx.fillPath();
    // Highlight (white triangle)
    gfx.beginPath();
    if (up) {
      gfx.moveTo(width / 2, height * 0.15);
      gfx.lineTo(width * 0.7, height * 0.85);
      gfx.lineTo(width * 0.3, height * 0.85);
    } else {
      gfx.moveTo(width * 0.3, height * 0.15);
      gfx.lineTo(width * 0.7, height * 0.15);
      gfx.lineTo(width / 2, height * 0.85);
    }
    gfx.closePath();
    gfx.fillStyle(0xffffff, 0.7);
    gfx.fillPath();
    // Shadow (dark gray triangle)
    gfx.beginPath();
    if (up) {
      gfx.moveTo(width / 2, height * 0.6);
      gfx.lineTo(width * 0.9, height);
      gfx.lineTo(width * 0.1, height);
    } else {
      gfx.moveTo(width * 0.1, 0);
      gfx.lineTo(width * 0.9, 0);
      gfx.lineTo(width / 2, height * 0.4);
    }
    gfx.closePath();
    gfx.fillStyle(0x888888, 0.7);
    gfx.fillPath();
    // Outline
    gfx.lineStyle(2, 0xcccccc, 1);
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
