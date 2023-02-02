export class Button extends Phaser.GameObjects.Text {
  constructor(
    x: number,
    y: number,
    text: string,
    scene: Phaser.Scene,
    callback: Function
  ) {
    super(scene, x, y, text, {
      font: "28px Arial",
      backgroundColor: "#111",
      align: "center",
    });
    this.setOrigin(0.5)
      .setPadding(10)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => callback())
      .on("pointerover", () => this.setStyle({ fill: "#f39c12" }))
      .on("pointerout", () => this.setStyle({ fill: "#FFF" }));

    scene.add.existing(this);
  }
}
