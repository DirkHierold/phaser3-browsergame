import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";

export default class Preloader extends Phaser.Scene {
  constructor() {
    super(SceneKeys.Preloader);
  }

  preload() {
    console.log("preloader preload");
    this.load.image(TextureKeys.Player, "images/dino.png");
    this.load.image(TextureKeys.Target, "images/dino.png");
    this.load.image(TextureKeys.Enemy, "images/asteroid.png");
    this.load.image(TextureKeys.Background, "images/grass.jpg");
    this.load.audio("bgMusic", "audios/anomaly.mp3");
    this.load.html("form", "form.html");
  }

  create() {
    console.log("preloader create");

    this.scene.start(SceneKeys.MainMenu);
  }
}
