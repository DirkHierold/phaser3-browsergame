import { AlignGrid } from "./utils/AlignGrid";
import Player from "./Player";

export default class Targets extends Phaser.Physics.Arcade.Group {
  scene: Phaser.Scene;
  grid: AlignGrid;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);
    this.scene = scene;
    scene.physics.world.enable(this);
    scene.add.existing(this);
  }

  addTarget(x: number, y: number): Phaser.Types.Physics.Arcade.ImageWithDynamicBody {
    const actualSize = 50
            const uniqueFaceKey = `target-face-${actualSize}-${Date.now()}-${Math.random()}`;
            // Create graphics object but do not add to display list
            const gfx = this.scene.make.graphics({ x: 0, y: 0 });
            gfx.setVisible(false); // Hide graphics object
            // Draw yellow square (face)
            gfx.fillStyle(0xffff00, 1); // bright yellow
            gfx.fillRect(0, 0, actualSize, actualSize);
            gfx.lineStyle(2, 0x000000, 1);
            gfx.strokeRect(0, 0, actualSize, actualSize);
            // Draw eyes (right-looking)
            gfx.fillStyle(0x000000, 1);
            gfx.fillCircle(actualSize * 0.65, actualSize * 0.35, Math.max(4, actualSize * 0.07));
            gfx.fillCircle(actualSize * 0.85, actualSize * 0.35, Math.max(4, actualSize * 0.07));
            // Draw smiling mouth (arc)
            gfx.lineStyle(2, 0x000000, 1);
            gfx.beginPath();
            gfx.arc(
                actualSize * 0.75,
                actualSize * 0.73,
                Math.max(8, actualSize * 0.15),
                Phaser.Math.DegToRad(20),
                Phaser.Math.DegToRad(160),
                false
            );
            gfx.strokePath();
            gfx.generateTexture(uniqueFaceKey, actualSize, actualSize);
            gfx.destroy();
    // Create image from generated texture
        const target = this.scene.add.image(x, y, uniqueFaceKey).setDisplaySize(actualSize, actualSize);
    this.add(target);

    this.scene.physics.world.enable(target, Phaser.Physics.Arcade.DYNAMIC_BODY);
    let targetBody = target.body as Phaser.Physics.Arcade.Body;
    target.width = actualSize;
    target.height = actualSize;
    // targetBody.setCircle(target.width * 0.375);
    targetBody.setSize(actualSize, actualSize);
    targetBody.setOffset(0, 0);

    targetBody.setCollideWorldBounds(true);
    targetBody.setBounce(1, 1);

    return target as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  }
  
changeDirection(player: Player) {
        this.children.iterate((child: any) => {
          // Player is right from Target
          if (player.body.x > child.body.x + child.body.width && child.flipX) {
            child.toggleFlipX();
            // Player is left from Target
          } else if (
            player.body.x + player.body.width < child.body.x &&
            !child.flipX
          ) {
            child.toggleFlipX();
          }
        });
      }
}
