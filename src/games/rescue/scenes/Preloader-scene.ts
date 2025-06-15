import AudioKeys from "../../../shared/utils/consts/AudioKeys";
import SceneKeys from "../../../shared/utils/consts/SceneKeys";
import {TextureKeys} from "../../../shared/utils/TextureKeys";
import { AlignGrid } from "../../../shared/utils/AlignGrid";

export default class Preloader extends Phaser.Scene {
  grid!: AlignGrid;

  constructor() {
    super({
      key: SceneKeys.Preloader,
    });
  }

  preload() {
    console.log("preloader preload");
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    this.grid = new AlignGrid(this, 0, 0, width, height, 11, 12, false);
    //turn on the lines for testing layout
    // this.grid.showNumbers();

    // Title
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };
    const title = this.add.text(0, 0, "Don't die dino!", textStyle);
    this.grid.placeAtIndexAndScale(23, title, 9, 1);

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

    let progressBar = this.add.rectangle(116, 800, 0, 159).setOrigin(0);
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

    this.load.image(TextureKeys.Autumn_tree2, "/images/Trees/Autumn_tree2.png");

    this.load.audio(AudioKeys.BG_Music, "/audios/anomaly.mp3");
  }

  create() {
    console.log("preloader create");
    this.scene.start(SceneKeys.MainMenu);
  }
}
