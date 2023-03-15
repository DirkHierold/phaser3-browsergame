import TextureKeys from "../consts/TextureKeys";

export default class Player extends Phaser.Physics.Arcade.Image {
  oldTouchX: number = 0;
  oldTouchY: number = 0;
  isDown: boolean = false;

  constructor(scene: Phaser.Scene, x: number, y: number, playerSize: number) {
    super(scene, x, y, TextureKeys.Player);

    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.setDisplaySize(playerSize, playerSize);
    this.setCircle(this.width * 0.375);

    this.setCollideWorldBounds(true);
    this.setOffset(0, this.height / 8);
  }

  move(activePointer: Phaser.Input.Pointer) {
    if (activePointer.isDown && !this.isDown) {
      this.oldTouchX = activePointer.x;
      this.oldTouchY = activePointer.y;
      this.isDown = true;
    } else if (activePointer.isDown && this.isDown) {
      const actualtouchX = activePointer.x;
      const actualtouchY = activePointer.y;

      const maxSpeed = 25;
      let diffX = actualtouchX - this.oldTouchX;
      if (diffX > maxSpeed) {
        diffX = maxSpeed;
      } else if (diffX < -maxSpeed) {
        diffX = -maxSpeed;
      }
      this.x += diffX;

      let diffY = actualtouchY - this.oldTouchY;
      if (diffY > maxSpeed) {
        diffY = maxSpeed;
      } else if (diffY < -maxSpeed) {
        diffY = -maxSpeed;
      }
      this.y += diffY;

      // Player looks to the right and changes to left
      if (actualtouchX - this.oldTouchX < 0 && this.flipX) {
        this.toggleFlipX();
        this.body.setOffset(0, this.height / 8);
        this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
        // Player looks to the left and changes to right
      } else if (actualtouchX - this.oldTouchX > 0 && !this.flipX) {
        this.toggleFlipX();
        this.body.setOffset((this.width * 2) / 8, this.height / 8);
        this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
      }

      this.oldTouchX = actualtouchX;
      this.oldTouchY = actualtouchY;
    } else {
      this.isDown = false;
    }
  }
}
