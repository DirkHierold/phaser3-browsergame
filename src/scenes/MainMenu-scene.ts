import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Player from "../model/Player";
import { Align } from "../utils/Align";
import { AlignGrid } from "../utils/AlignGrid";
import { Button } from "../utils/Button";
import DataHandler from "../utils/DataHandler";

export default class MainMenuScene extends Phaser.Scene {
  musicOn: boolean = false;
  musicRegistered: boolean = false;
  bgMusic!: Phaser.Sound.BaseSound;
  player!: Player;
  gamewidth!: number;
  gameHeight!: number;

  constructor() {
    super(SceneKeys.MainMenu);
  }

  async create() {
    this.musicRegistered = this.registry.get("musicRegistered");

    if (!this.musicRegistered) {
      this.bgMusic = this.sound.add("bgMusic", { volume: 0.2, loop: true });
      this.registry.set("musicRegistered", true);
      this.bgMusic.play();
      this.bgMusic.pause();
    }

    this.musicOn = this.registry.get("musicOn");

    this.gamewidth = this.game.scale.width;
    this.gameHeight = this.game.scale.height;

    console.log("MainMenuScene create");
    // Background
    this.add
      .tileSprite(0, 0, this.gamewidth, this.gameHeight, TextureKeys.Background)
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
      backgroundColor: "black",
      align: "center",
    };
    const title = this.add
      .text(
        this.gamewidth / 2,
        this.gameHeight / 4,
        "Don't die dino!",
        textStyle
      )
      .setOrigin(0.5);

    // MusicToogle Button
    const textMusicOn = "Music:\n" + (this.musicOn ? "On" : "Off");
    console.log(textMusicOn);
    const musicOnButton = new Button(
      (this.gamewidth * 3) / 4,
      this.gameHeight / 10,
      textMusicOn,
      this,
      () => {}
    );
    musicOnButton.on(EventKeys.PointerDown, () => {
      this.musicOn = !this.musicOn;
      musicOnButton.setText("Music:\n" + (this.musicOn ? "On" : "Off"));
      this.registry.set("musicOn", this.musicOn);
      if (this.musicOn) {
        this.bgMusic.resume();
      } else {
        this.bgMusic.pause();
      }
    });

    const gameButton = new Button(
      this.gamewidth / 2,
      (this.gameHeight * 3) / 4,
      "Game\n\nHighscore: " + DataHandler.localHighscore,
      this,
      () => {
        this.scene.start(SceneKeys.Game);
      }
    );

    var grid = new AlignGrid(this, 11, 11);
    //turn on the lines for testing
    //and layout
    // grid.showNumbers();
    grid.placeAtIndex(10, musicOnButton);
    Align.scaleToGameW(musicOnButton, 1 / 11, this);
    grid.placeAtIndex(27, title);
    Align.scaleToGameW(title, 3 / 4, this);
    grid.placeAtIndex(93, gameButton);
    Align.scaleToGameH(gameButton, 3 / 11, this);
  }

  update(): void {
    this.player.move(this.input.activePointer);
  }
}
