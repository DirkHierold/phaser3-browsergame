import TextureKeys from "../consts/TextureKeys";
import Player from "./Player";

export default class Target extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene, x: number, y: number, targetSize: number) {
    super(scene, x, y, TextureKeys.Target);

    scene.physics.world.enable(this);
    scene.add.existing(this);

    this.setOrigin(0);
    this.setDisplaySize(targetSize, targetSize);
    this.setRandomPosition();

    this.setCollideWorldBounds(true);
    // this.toggleFlipX();
    this.setBodySize(this.width / 2, (this.height * 7) / 8);
    this.body.setOffset((this.width * 2) / 5, this.height / 8);
  }

  changeDirection(player: Player) {
    //Player is right from Target
    if (player.body.x > this.body.x + this.body.width && this.flipX) {
      this.toggleFlipX();
      this.body.setOffset((this.width * 2) / 5, this.height / 8);
      //Player is left from Target
    } else if (player.body.x + player.body.width < this.body.x && !this.flipX) {
      this.toggleFlipX();
      this.body.setOffset(this.width / 10, this.height / 8);
    }
  }
}
