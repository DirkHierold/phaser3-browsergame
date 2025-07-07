import EventKeys from "../../../shared/utils/consts/EventKeys";
import SceneKeys from "../../../shared/utils/consts/SceneKeys";
import Player from "../../../shared/Player";
import { AlignGrid } from "../../../shared/utils/AlignGrid";
import { Button } from "../../../shared/utils/Button";
// import DataHandler from "../utils/DataHandler";
import AudioKeys from "../../../shared/utils/consts/AudioKeys";
import MousePlayerController from "../../../shared/utils/MousePlayerController";

export default class MainMenuScene extends Phaser.Scene {
  musicOn: boolean = false;
  musicRegistered: boolean = false;
  bgMusic!: Phaser.Sound.BaseSound;
  player!: Player;
  gamewidth!: number;
  gameHeight!: number;
  private playerController!: MousePlayerController; // Declare the controller

  constructor() {
    super(SceneKeys.MainMenu);
  }

  create() {
    this.gamewidth = this.game.scale.width;
    this.gameHeight = this.game.scale.height;

    var grid = new AlignGrid(
      this,
      0,
      0,
      this.gamewidth,
      this.gameHeight,
      11,
      12,
      false
    );

    //turn on the lines for testing and layout
    // grid.showNumbers();

    // Create green background rectangle and place it using grid logic
    const gridBg1 = this.add.rectangle(0, 0, grid.width, grid.height, 0x008000)
      .setOrigin(0, 0)
      .setDepth(-10);
    grid.placeAtIndexAndScale(0, gridBg1, grid.columns, grid.rows);

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

    console.log("MainMenuScene create");

    // Image Dinosaur
    this.player = new Player(this);

    // Instantiate the controller and pass the player
    this.playerController = new MousePlayerController(this, this.player);

    grid.placeAtIndexAndScale(48, this.player, 3, 3);

    // Image Cow
    // const cow = this.add.image(0, 0, "roundOutline", "cow");
    // grid.placeAtIndex(36, cow);

    // Title
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };
    const title = this.add.text(0, 0, "Don't die square!", textStyle);
    grid.placeAtIndexAndScale(23, title, 9, 1);

    // MusicToogle Button
    const musicOnButton = new Button(0, 0, "Music", this, () => { });
    musicOnButton.setAlpha(0.5);
    musicOnButton.on(EventKeys.PointerDown, () => {
      this.musicOn = !this.musicOn;
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

      // Important: Destroy the controller when the game is over
      if (this.playerController) {
        this.playerController.destroy();
      }
      this.scene.start(SceneKeys.Game, { music: this.bgMusic, level: 1 });

      // this.scene.launch(SceneKeys.Game, { music: this.bgMusic });
      // this.scene.pause();
      // this.scene.run(SceneKeys.Game, { music: this.bgMusic });
    });
    gameButton.setAlpha(0.5);
    grid.placeAtIndexAndScale(80, gameButton, 5, 1);

    let controlTextString = "";
    if (window.orientation !== undefined) {
      // if mobile
      controlTextString = "Use touch to move!";
    } else {
      // if desktop
      controlTextString = "Use direction keys to move!";
    }
    const controlText = this.add.text(0, 0, controlTextString, textStyle);
    grid.placeAtIndexAndScale(100, controlText, 9, 1);
  }
}
