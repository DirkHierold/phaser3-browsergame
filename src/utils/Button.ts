export class Button extends Phaser.GameObjects.Text {
  constructor(
    x: number,
    y: number,
    text: string,
    scene: Phaser.Scene,
    callback: Function
  ) {
    super(scene, x, y, text, {
      font: "20px Arial",
      backgroundColor: "black",
      align: "center",
    });
    this.setPadding(10)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => callback())
      .on("pointerover", () => this.setStyle({ fill: "green" }))
      .on("pointerout", () => this.setStyle({ fill: "white" }));

    this.scene.add.existing(this);
  }
}
