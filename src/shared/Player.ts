import Phaser from "phaser";

export default class Player extends Phaser.Physics.Arcade.Sprite {
    oldTouchX: number = 0;
    oldTouchY: number = 0;
   

    constructor(
        scene: Phaser.Scene,
        actualSize: number = 50 // default for asteroid, rescue should pass cell size
    ) {
        super(scene, 0, 0, "");
        scene.physics.world.enable(this);
        scene.add.existing(this);

        const uniqueFaceKey = `player-face-${actualSize}-${Date.now()}-${Math.random()}`;
        // Create graphics object but do not add to display list
        const gfx = scene.make.graphics({ x: 0, y: 0 });
        gfx.setVisible(false); // Hide graphics object
        // Draw square (face)
        gfx.fillStyle(0xffffcc, 1);
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
        this.setTexture(uniqueFaceKey);
        this.setDisplaySize(actualSize, actualSize);
        // Explicitly set width/height to match display size
        this.width = actualSize;
        this.height = actualSize;
        (this.body as Phaser.Physics.Arcade.Body).setSize(actualSize, actualSize);
        (this.body as Phaser.Physics.Arcade.Body).setOffset(0, 0);
        this.setCollideWorldBounds(true);
    }

    move(pointer?: Phaser.Input.Pointer) {
        // Asteroid game: drag to move, no jump, no grid logic
        if (!pointer) return;
        if (pointer.isDown) {
            // If this is a new drag, initialize oldTouchX/Y to avoid jump
            if (this.oldTouchX === 0 && this.oldTouchY === 0) {
                this.oldTouchX = pointer.x;
                this.oldTouchY = pointer.y;
            }
            // Calculate delta from last pointer position
            const dx = pointer.x - this.oldTouchX;
            const dy = pointer.y - this.oldTouchY;
            let newX = this.x + dx;
            let newY = this.y + dy;
            // Clamp to world bounds
            newX = Phaser.Math.Clamp(newX, this.displayWidth / 2, this.scene.scale.width - this.displayWidth / 2);
            newY = Phaser.Math.Clamp(newY, this.displayHeight / 2, this.scene.scale.height - this.displayHeight / 2);
            // Toggle face direction based on movement (only if dx is significant)
            if (Math.abs(dx) > 1) {
                if (dx > 0) {
                    this.setFlipX(false);
                } else if (dx < 0) {
                    this.setFlipX(true);
                }
            }
            this.x = newX;
            this.y = newY;
            this.oldTouchX = pointer.x;
            this.oldTouchY = pointer.y;
        } else {
            // Reset oldTouchX/Y when not dragging
            this.oldTouchX = 0;
            this.oldTouchY = 0;
        }
    }
}
