export default class InputHandler {
  static getNameForHighscore(scene: Phaser.Scene): string {
    const nameInput = scene.add.dom(640, 360).createFromCache("form");

    const message = scene.add
      .text(640, 250, "Hello, --", {
        color: "#FFFFFF",
        fontSize: "60",
        fontStyle: "bold",
      })
      .setOrigin(0.5);

    const returnKey = scene.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );
    let nameForHighscore: any = "";
    returnKey.on("down", () => {
      let name: any = nameInput.getChildByName("name");
      if (name.value != "") {
        nameForHighscore = name.value;
        message.setText("Hello, " + nameForHighscore);
      }
    });
    return nameForHighscore;
  }
}
