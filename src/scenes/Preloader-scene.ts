import AudioKeys from "../consts/AudioKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import { Align } from "../utils/Align";
import { AlignGrid } from "../utils/AlignGrid";

export default class Preloader extends Phaser.Scene {
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

    var grid = new AlignGrid(this, 11, 11);
    //turn on the lines for testing layout
    // grid.showNumbers();

    const width = this.cameras.main.width;
    const height = this.cameras.main.height;

    this.add.tileSprite(0, 0, width, height, TextureKeys.Grass).setOrigin(0);

    let progressBox = this.add.rectangle(0, 0, 5, 1);
    progressBox.setFillStyle(0x222222, 0.8);

    grid.placeAtIndex(60, progressBox);
    Align.scaleToGameW(progressBox, 9 / 11, this);

    let loadingText = this.make.text({
      x: 0,
      y: 0,
      text: "Loading...",
      style: {
        font: "80px monospace",
      },
    });
    loadingText.setOrigin(0.5, 0.5);
    grid.placeAtIndex(49, loadingText);
    Align.scaleToGameW(loadingText, 5 / 11, this);

    let percentText = this.make.text({
      x: 0,
      y: 0,
      text: "0%",
      style: {
        font: "80px monospace",
      },
    });
    percentText.setOrigin(0.5, 0.5);
    grid.placeAtIndex(71, percentText);

    let assetText = this.make.text({
      x: 0,
      y: 0,
      text: "",
      style: {
        font: "80px monospace",
      },
    });
    assetText.setOrigin(0.5, 0.5);
    grid.placeAtIndex(82, assetText);

    let progressBar = this.add.rectangle(116, 960, 0, 174);
    progressBar.setFillStyle(0xffffff, 1);

    this.load.on("progress", function (value: number) {
      percentText.setText(parseInt((value * 100).toString()) + "%");
      progressBar.width = 116 * 9 * value;
    });

    this.load.on("fileprogress", function (file: any) {
      assetText.setText("Loading asset: " + file.key);
    });

    this.load.image(TextureKeys.Player, "images/dino.png");
    this.load.image(TextureKeys.Target, "images/blue-dino.png");
    this.load.image(TextureKeys.Enemy, "images/red-dino.png");
    this.load.image(TextureKeys.Asteroid, "images/asteroid.png");
    this.load.audio(AudioKeys.BG_Music, "audios/anomaly.mp3");
    this.load.atlas(
      "test",
      "images/roundOutline.png",
      "images/roundOutline.xml"
    );
  }

  create() {
    console.log("preloader create");

    this.scene.start(SceneKeys.MainMenu);
  }
}
