import TextureKeys from "../consts/TextureKeys";
import { AlignGrid } from "../utils/AlignGrid";

export default class Player extends Phaser.Physics.Arcade.Image {
  oldTouchX: number = 0;
  oldTouchY: number = 0;
  isDown: boolean = false;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  touchCenterX: number = 0;
  touchCenterY: number = 0;
  touchCircle!: Phaser.GameObjects.Arc;
  moveCircle!: Phaser.GameObjects.Arc;
  maxDiff: number = 100;
  speed: number = 4000;

  constructor(
    scene: Phaser.Scene,
    index: number,
    numberXcells: number = 1,
    numberYcells: number = 1,
    grid: AlignGrid
  ) {
    super(scene, 0, 0, TextureKeys.Player);

    scene.physics.world.enable(this);
    scene.add.existing(this);

    grid.placeAtIndexAndScale(index, this, numberXcells, numberYcells);

    // this.setDisplaySize(playerSize, playerSize);
    this.setCircle(this.width * 0.375);

    this.setCollideWorldBounds(true);
    this.setOffset(0, this.height / 8);

    this.cursors = scene.input.keyboard.createCursorKeys();

    this.touchCenterX = this.scene.scale.width / 2;
    this.touchCenterY = (this.scene.scale.height * 4) / 5;

    this.touchCircle = this.scene.add
      .circle(
        this.touchCenterX,
        this.touchCenterY,
        this.scene.scale.width / 7,
        0xff0000,
        0.5
      )
      .setDepth(10)
      .setVisible(false);
    this.moveCircle = this.scene.add
      .circle(
        this.touchCenterX,
        this.touchCenterY,
        this.scene.scale.width / 7,
        0x00ff00,
        0.5
      )
      .setDepth(10)
      .setVisible(false);

    this.speed = this.speed * this.scale;
  }

  move(activePointer: Phaser.Input.Pointer) {
    if (window.orientation !== undefined) {
      // if mobile
      this.touchCircle.setVisible(true);
      this.moveCircle.setVisible(true);
      if (activePointer.isDown && !this.isDown) {
        this.touchCenterX = activePointer.x;
        this.touchCenterY = activePointer.y;

        this.touchCircle.setPosition(this.touchCenterX, this.touchCenterY);
        this.moveCircle.setPosition(this.touchCenterX, this.touchCenterY);

        this.isDown = true;
        this.setVelocity(0, 0);
      } else if (activePointer.isDown && this.isDown) {
        const actualtouchX = activePointer.x;
        const actualtouchY = activePointer.y;

        let diffX = actualtouchX - this.touchCenterX;
        let diffY = actualtouchY - this.touchCenterY;

        let velocity = new Phaser.Math.Vector2(diffX, diffY);
        velocity.normalize();

        if (diffX > this.maxDiff) {
          diffX = this.maxDiff;
        } else if (diffX < -this.maxDiff) {
          diffX = -this.maxDiff;
        }
        if (diffY > this.maxDiff) {
          diffY = this.maxDiff;
        } else if (diffY < -this.maxDiff) {
          diffY = -this.maxDiff;
        }
        this.moveCircle.setPosition(
          this.touchCenterX + diffX,
          this.touchCenterY + diffY
        );

        this.setVelocity(
          velocity.x * this.speed, //* Math.abs(diffX)) / this.maxDiff,
          velocity.y * this.speed //* Math.abs(diffY)) / this.maxDiff
        );

        if (diffX > 0 && !this.flipX) {
          // right swipe
          this.toggleFlipX();
          this.body.setOffset((this.width * 2) / 8, this.height / 8);
          this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
        } else if (diffX < 0 && this.flipX) {
          // left swipe
          this.toggleFlipX();
          this.body.setOffset(0, this.height / 8);
          this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
        }
      } else {
        this.isDown = false;
        this.setVelocity(0, 0);
        this.touchCircle.setPosition(this.touchCenterX, this.touchCenterY);
        this.moveCircle.setPosition(this.touchCenterX, this.touchCenterY);
      }

      // if (activePointer.isDown && !this.isDown) {
      //   this.oldTouchX = activePointer.x;
      //   this.oldTouchY = activePointer.y;
      //   this.isDown = true;
      // } else if (activePointer.isDown && this.isDown) {
      //   const actualtouchX = activePointer.x;
      //   const actualtouchY = activePointer.y;

      //   const maxSpeed = 25;
      //   let diffX = actualtouchX - this.oldTouchX;
      //   if (diffX > maxSpeed) {
      //     diffX = maxSpeed;
      //   } else if (diffX < -maxSpeed) {
      //     diffX = -maxSpeed;
      //   }
      //   this.x += diffX;

      //   let diffY = actualtouchY - this.oldTouchY;
      //   if (diffY > maxSpeed) {
      //     diffY = maxSpeed;
      //   } else if (diffY < -maxSpeed) {
      //     diffY = -maxSpeed;
      //   }
      //   this.y += diffY;

      //   // Player looks to the right and changes to left
      //   if (actualtouchX - this.oldTouchX < 0 && this.flipX) {
      //     this.toggleFlipX();
      //     this.body.setOffset(0, this.height / 8);
      //     this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
      //     // Player looks to the left and changes to right
      //   } else if (actualtouchX - this.oldTouchX > 0 && !this.flipX) {
      //     this.toggleFlipX();
      //     this.body.setOffset((this.width * 2) / 8, this.height / 8);
      //     this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
      //   }

      //   this.oldTouchX = actualtouchX;
      //   this.oldTouchY = actualtouchY;
      // } else {
      //   this.isDown = false;
      // }
    } else {
      // if desktop
      let velocityX = 0;
      let velocityY = 0;

      if (this.cursors.right.isDown) {
        velocityX = this.speed;
        if (!this.flipX) {
          this.toggleFlipX();
          this.body.setOffset((this.width * 2) / 8, this.height / 8);
          this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
        }
      }
      if (this.cursors.down.isDown) {
        velocityY = this.speed;
      }
      if (this.cursors.left.isDown) {
        velocityX = -this.speed;
        if (this.flipX) {
          this.toggleFlipX();
          this.body.setOffset(0, this.height / 8);
          this.x -= 2 * (this.x - (this.body.x + this.body.width / 2));
        }
      }
      if (this.cursors.up.isDown) {
        velocityY = -this.speed;
      }
      this.setVelocity(velocityX, velocityY);
    }
  }
}
