import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Player from "../model/Player";
import { AlignGrid } from "../utils/AlignGrid";
import { Button } from "../utils/Button";
// import DataHandler from "../utils/DataHandler";
import AudioKeys from "../consts/AudioKeys";

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

  create() {
    var grid = new AlignGrid(this, 11, 11);
    //turn on the lines for testing and layout
    // grid.showNumbers();

    this.musicRegistered = this.registry.get("musicRegistered");

    if (!this.musicRegistered) {
      this.bgMusic = this.sound.add(AudioKeys.BG_Music, {
        volume: 0.2,
        loop: true,
      });
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
      .tileSprite(0, 0, this.gamewidth, this.gameHeight, TextureKeys.Grass)
      .setOrigin(0);

    // Image Dinosaur
    this.player = new Player(
      this,
      this.gamewidth / 2,
      this.gameHeight / 2,
      this.gamewidth / 4
    );

    // Image Cow
    // const cow = this.add.image(0, 0, "roundOutline", "cow");
    // grid.placeAtIndex(36, cow);

    // Title
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };
    const title = this.add.text(0, 0, "Don't die dino!", textStyle);
    grid.placeAtIndexAndScale(23, title, 9, 1);

    // MusicToogle Button
    const textMusicOn = "Music:\n" + (this.musicOn ? "On" : "Off");
    console.log(textMusicOn);
    const musicOnButton = new Button(0, 0, textMusicOn, this, () => {});
    musicOnButton.setAlpha(0.5);
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
    grid.placeAtIndexAndScale(9, musicOnButton, 2, 1);

    // Play Game Button
    const gameButton = new Button(0, 0, "Play", this, () => {
      this.scene.start(SceneKeys.Game, { music: this.bgMusic });
      // this.scene.launch(SceneKeys.Game, { music: this.bgMusic });
    });
    gameButton.setAlpha(0.5);
    grid.placeAtIndexAndScale(80, gameButton, 5, 2);
  }

  update(): void {
    this.player.move(this.input.activePointer);
  }
}
