
export default class Obstacles extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    // scene.physics.world.enable(this);
    scene.add.existing(this);
  }

  addObstacle(x: number, y: number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
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
    const obstacle = this.scene.physics.add.image(x, y, uniqueFaceKey)
      .setDisplaySize(actualSize, actualSize);

    // Wichtig: Konfigurieren Sie den Body des dynamischen Hindernisses
    const body = obstacle.body as Phaser.Physics.Arcade.Body;
    if (body) {
      console.log("Body exists for obstacle:", obstacle);
      body.setSize(actualSize, actualSize);
      body.setAllowGravity(false);
      body.setImmovable(true);
      body.setCollideWorldBounds(false);
      console.log("Body immovable status after set:", body.immovable); // Sollte true sein
    } else {
      console.warn("Body is null for obstacle:", obstacle); // Sollte nicht passieren
    }
    this.add(obstacle);

    // HIER ERNEUT setImmovable AUFRUFEN, NACHDEM ES DER GRUPPE HINZUGEFÜGT WURDE
    if (body) { // Nochmalige Prüfung, dass der Body existiert
      body.setImmovable(true); // <-- HIER NEU HINZUFÜGEN
      console.log("Obstacle body immovable status AFTER add:", body.immovable); // Erneuter Log zur Überprüfung
    }

    return obstacle as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }
}
