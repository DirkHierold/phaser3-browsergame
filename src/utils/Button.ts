export class Button extends Phaser.GameObjects.Text {
  constructor(
    x: number,
    y: number,
    text: string,
    scene: Phaser.Scene,
    callback: Function
  ) {
    super(scene, x, y, text, {
      font: "16px Arial",
      // fontSize: "100%",
      backgroundColor: "black",
      align: "center",
    });
    this.setOrigin(0.5)
      .setPadding(10)
      // .setDisplaySize(scene.game.scale.width / 10, scene.game.scale.height / 10)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => callback())
      .on("pointerover", () => this.setStyle({ fill: "green" }))
      .on("pointerout", () => this.setStyle({ fill: "white" }));
    // this.setStyle({
    //   font: "Arial",
    //   fontSize: "100px",
    //   backgroundColor: "black",
    //   align: "center",
    // });
    let fontSize = 20;
    const gameHeight = scene.game.scale.height;
    console.log(gameHeight, this.height, fontSize);
    while (this.height < gameHeight / 6) {
      fontSize = Math.floor(fontSize * 1.1);
      this.setFontSize(fontSize);
      console.log(gameHeight, this.height, fontSize);
    }

    this.scene.add.existing(this);
  }
}
