import TextureKeys from "../consts/TextureKeys";

export default class Player extends Phaser.Physics.Arcade.Image {
  oldTouchX: number = 0;
  oldTouchY: number = 0;
  isDown: boolean = false;

  constructor(scene: Phaser.Scene, x: number, y: number, playerSize: number) {
    super(scene, x, y, TextureKeys.Player);

    scene.physics.world.enable(this);
    scene.add.existing(this);

    // this.setOrigin(0);
    this.setDisplaySize(playerSize, playerSize);

    this.setBodySize(this.width / 2, (this.height * 7) / 8);
    this.setCollideWorldBounds(true);

    this.body.setOffset(this.width / 10, this.height / 8);
  }

  move(activePointer: Phaser.Input.Pointer) {
    if (activePointer.isDown && !this.isDown) {
      this.oldTouchX = activePointer.x;
      this.oldTouchY = activePointer.y;
      this.isDown = true;
    } else if (activePointer.isDown && this.isDown) {
      const actualtouchX = activePointer.x;
      const actualtouchY = activePointer.y;

      this.x += actualtouchX - this.oldTouchX;
      this.y += actualtouchY - this.oldTouchY;

      // Player looks to the right and changes to left
      if (actualtouchX - this.oldTouchX < 0 && this.flipX) {
        this.toggleFlipX();
        this.body.setOffset(this.width / 10, this.height / 8);
        // Player looks to the left and changes to right
      } else if (actualtouchX - this.oldTouchX > 0 && !this.flipX) {
        this.toggleFlipX();
        this.body.setOffset((this.width * 2) / 5, this.height / 8);
      }

      this.oldTouchX = actualtouchX;
      this.oldTouchY = actualtouchY;
    } else {
      this.isDown = false;
    }
  }
}
