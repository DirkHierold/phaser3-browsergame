export default class InputHandler {
  static getNameForHighscore(
    scene: Phaser.Scene
  ): Phaser.GameObjects.DOMElement {
    const nameInput = scene.add
      .dom(scene.scale.width / 2, (scene.scale.height * 3) / 4)
      .createFromCache("form");
    return nameInput;
  }
}
