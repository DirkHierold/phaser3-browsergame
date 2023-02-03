import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import StorageKeys from "../consts/StorageKeys";
import TextureKeys from "../consts/TextureKeys";
import { Button } from "../utils/Button";
import LocalStorage from "../utils/LocalStorage";

export default class MainMenuScene extends Phaser.Scene {
  spotOn: boolean = false;
  musicOn: boolean = false;
  musicRegistered: boolean = false;
  bgMusic!: Phaser.Sound.BaseSound;

  constructor() {
    super(SceneKeys.MainMenu);
  }

  create() {
    this.musicRegistered = this.registry.get("musicRegistered");

    if (!this.musicRegistered) {
      this.bgMusic = this.sound.add("bgMusic", { volume: 0.2, loop: true });
      this.registry.set("musicRegistered", true);
    }

    this.musicOn = this.registry.get("musicOn");
    this.spotOn = this.registry.get("spotOn");

    const gamewidth = window.innerWidth;
    const gameHeight = window.innerHeight;

    console.log("MainMenuScene create");
    // Background
    this.add
      .tileSprite(0, 0, gamewidth, window.innerHeight, TextureKeys.Background)
      .setOrigin(0);

    // CameraChange Button
    const text = "Spot:\n" + (this.spotOn ? "On" : "Off");
    console.log(text);
    const spotOnButton = new Button(
      gamewidth / 10,
      gameHeight / 10,
      text,
      this,
      () => {}
    );
    spotOnButton.on(EventKeys.PointerDown, () => {
      this.spotOn = !this.spotOn;
      spotOnButton.setText("Spot:\n" + (this.spotOn ? "On" : "Off"));
      this.registry.set("spotOn", this.spotOn);
    });

    // MusicToogle Button
    const textMusicOn = "Music:\n" + (this.musicOn ? "On" : "Off");
    console.log(textMusicOn);
    const musicOnButton = new Button(
      (gamewidth * 9) / 10,
      gameHeight / 10,
      textMusicOn,
      this,
      () => {}
    );
    musicOnButton.on(EventKeys.PointerDown, () => {
      this.musicOn = !this.musicOn;
      musicOnButton.setText("Music:\n" + (this.musicOn ? "On" : "Off"));
      this.registry.set("musicOn", this.musicOn);
      if (this.musicOn) {
        this.bgMusic.play();
      } else {
        this.bgMusic.stop();
      }
    });

    // Title
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "128px Arial",
      backgroundColor: "#111",
      align: "center",
    };
    this.add
      .text(gamewidth / 2, gameHeight / 4, "Don't die dino!", textStyle)
      .setOrigin(0.5);

    // Image Dinosaur
    this.add
      .image(gamewidth / 2, gameHeight / 2, TextureKeys.Player)
      .setDisplaySize(gamewidth / 4, gamewidth / 4);

    const easyLocalStorage = new LocalStorage(
      window.localStorage,
      StorageKeys.EasyStorage
    );
    new Button(
      gamewidth / 4,
      (gameHeight * 3) / 4,
      "Easy\n\nHighscore: " +
        easyLocalStorage.getHighscoreIfAvailable() +
        "\nAlltime: " +
        easyLocalStorage.getAlltimeIfAvailable(),
      this,
      () => {
        this.scene.start(SceneKeys.EasyGame);
      }
    );

    const normalLocalStorage = new LocalStorage(
      window.localStorage,
      StorageKeys.NormalStorage
    );
    new Button(
      gamewidth / 2,
      (gameHeight * 3) / 4,
      "Normal\n\nHighscore: " +
        normalLocalStorage.getHighscoreIfAvailable() +
        "\nAlltime: " +
        normalLocalStorage.getAlltimeIfAvailable(),
      this,
      () => {
        this.scene.start(SceneKeys.NormalGame);
      }
    );

    const hardLocalStorage = new LocalStorage(
      window.localStorage,
      StorageKeys.HardStorage
    );
    new Button(
      (gamewidth * 3) / 4,
      (gameHeight * 3) / 4,
      "Hard\n\nHighscore: " +
        hardLocalStorage.getHighscoreIfAvailable() +
        "\nAlltime: " +
        hardLocalStorage.getAlltimeIfAvailable(),
      this,
      () => {
        this.scene.start(SceneKeys.HardGame);
      }
    );
  }
}
