import AudioKeys from "../consts/AudioKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import { AlignGrid } from "../utils/AlignGrid";

export default class Preloader extends Phaser.Scene {
  grid!: AlignGrid;

  constructor() {
    super({
      key: SceneKeys.Preloader,
      pack: {
        files: [
          {
            type: "image",
            key: TextureKeys.Grass,
            url: "images/grass.jpg",
          },
        ],
      },
    });
  }

  preload() {
    console.log("preloader preload");

    this.grid = new AlignGrid(this, 11, 11);
    //turn on the lines for testing layout
    // this.grid.showNumbers();

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.add.tileSprite(0, 0, width, height, TextureKeys.Grass).setOrigin(0);

    let progressBox = this.add.rectangle(0, 0, 5, 1);
    progressBox.setFillStyle(0x222222, 0.8);
    this.grid.placeAtIndexAndScale(56, progressBox, 9, 1);

    let loadingText = this.make.text({
      x: 0,
      y: 0,
      text: "Loading...",
      style: {
        font: "80px monospace",
      },
    });
    this.grid.placeAtIndexAndScale(47, loadingText, 5, 1);

    let percentText = this.make.text({
      x: 0,
      y: 0,
      text: "0%",
      style: {
        font: "80px monospace",
      },
    });
    this.grid.placeAtIndexAndScale(70, percentText, 3, 1);

    let assetText = this.make.text({
      x: 0,
      y: 0,
      text: "",
      style: {
        font: "80px monospace",
      },
    });

    let progressBar = this.add.rectangle(116, 960, 0, 174);
    progressBar.setFillStyle(0xffffff, 1);

    this.load.on("progress", function (value: number) {
      percentText.setText(parseInt((value * 100).toString()) + "%");
      progressBar.width = 116 * 9 * value;
    });

    const grid = this.grid;
    this.load.on("fileprogress", function (file: any) {
      assetText.setText("Loading asset: " + file.key);
      grid.placeAtIndexAndScale(78, assetText, 9, 1);
    });

    // for (let i = 0; i < 1000; i++) {
    //   this.load.image("TextureKeys.Player" + i, "images/dino.png");
    // }
    this.load.image(TextureKeys.Player, "images/dino.png");
    this.load.image(TextureKeys.Target, "images/blue-dino.png");
    this.load.image(TextureKeys.Enemy, "images/red-dino.png");
    this.load.image(TextureKeys.Asteroid, "images/asteroid.png");
    this.load.audio(AudioKeys.BG_Music, "audios/anomaly.mp3");
    this.load.atlasXML(
      "roundOutline",
      "images/roundOutline.png",
      "images/roundOutline.xml"
    );
    this.load.bitmapFont("arcade", "images/arcade.png", "images/arcade.xml");
  }

  create() {
    console.log("preloader create");
    const bitMapText = this.add.bitmapText(0, 0, "arcade", "Dirk");
    this.grid.placeAtIndexAndScale(0, bitMapText, 5, 1);
    this.scene.start(SceneKeys.MainMenu);
  }
}
