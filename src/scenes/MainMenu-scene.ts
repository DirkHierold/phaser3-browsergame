import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import StorageKeys from "../consts/StorageKeys";
import TextureKeys from "../consts/TextureKeys";
import Player from "../model/Player";
import { Button } from "../utils/Button";
import LocalStorage from "../utils/LocalStorage";

export default class MainMenuScene extends Phaser.Scene {
  spotOn: boolean = false;
  musicOn: boolean = false;
  musicRegistered: boolean = false;
  bgMusic!: Phaser.Sound.BaseSound;
  player!: Player;
  gamewidth!: number;
  gameHeight!: number;

  constructor() {
    super(SceneKeys.MainMenu);
  }

  create() {
    this.musicRegistered = this.registry.get("musicRegistered");

    if (!this.musicRegistered) {
      this.bgMusic = this.sound.add("bgMusic", { volume: 0.2, loop: true });
      this.registry.set("musicRegistered", true);
      this.bgMusic.play();
      this.bgMusic.pause();
    }

    this.musicOn = this.registry.get("musicOn");
    this.spotOn = this.registry.get("spotOn");

    this.gamewidth = window.innerWidth;
    this.gameHeight = window.innerHeight;

    console.log("MainMenuScene create");
    // Background
    this.add
      .tileSprite(
        0,
        0,
        this.gamewidth,
        window.innerHeight,
        TextureKeys.Background
      )
      .setOrigin(0);

    // Image Dinosaur
    this.player = new Player(
      this,
      this.gamewidth / 2,
      this.gameHeight / 2,
      this.gamewidth / 4
    );

    // Title
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "128px Arial",
      backgroundColor: "#111",
      align: "center",
    };
    this.add
      .text(
        this.gamewidth / 2,
        this.gameHeight / 4,
        "Don't die dino!",
        textStyle
      )
      .setOrigin(0.5);

    // CameraChange Button
    const text = "Spot:\n" + (this.spotOn ? "On" : "Off");
    console.log(text);
    const spotOnButton = new Button(
      this.gamewidth / 10,
      this.gameHeight / 10,
      text,
      this,
      () => {}
    );
    spotOnButton.setScrollFactor(0).on(EventKeys.PointerDown, () => {
      this.spotOn = !this.spotOn;
      spotOnButton.setText("Spot:\n" + (this.spotOn ? "On" : "Off"));
      this.registry.set("spotOn", this.spotOn);
    });

    // MusicToogle Button
    const textMusicOn = "Music:\n" + (this.musicOn ? "On" : "Off");
    console.log(textMusicOn);
    const musicOnButton = new Button(
      (this.gamewidth * 9) / 10,
      this.gameHeight / 10,
      textMusicOn,
      this,
      () => {}
    );
    musicOnButton.setScrollFactor(0).on(EventKeys.PointerDown, () => {
      this.musicOn = !this.musicOn;
      musicOnButton.setText("Music:\n" + (this.musicOn ? "On" : "Off"));
      this.registry.set("musicOn", this.musicOn);
      if (this.musicOn) {
        this.bgMusic.resume();
      } else {
        this.bgMusic.pause();
      }
    });

    const easyLocalStorage = new LocalStorage(
      window.localStorage,
      StorageKeys.EasyStorage
    );
    new Button(
      this.gamewidth / 4,
      (this.gameHeight * 3) / 4,
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
      this.gamewidth / 2,
      (this.gameHeight * 3) / 4,
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
      (this.gamewidth * 3) / 4,
      (this.gameHeight * 3) / 4,
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

  update(): void {
    if (this.spotOn) {
      this.cameras.main.startFollow(this.player);
    } else {
      this.cameras.main.stopFollow();
      this.cameras.main.setScroll(0, 0);
    }

    this.player.move(this.input.activePointer);
  }
}
