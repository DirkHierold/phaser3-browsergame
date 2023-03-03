import AudioKeys from "../consts/AudioKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";

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

    // Background
    // this.add.tileSprite(
    //   -100,
    //   -100,
    //   window.innerWidth,
    //   window.innerHeight,
    //   TextureKeys.Background
    // );
    // .setOrigin(0);
    this.add.image(0, 0, TextureKeys.Grass);

    let progressBar = this.add.graphics();
    let progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);

    let width = this.cameras.main.width;
    let height = this.cameras.main.height;
    let loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: "Loading...",
      style: {
        font: "20px monospace",
        // fill: "#ffffff",
      },
    });
    loadingText.setOrigin(0.5, 0.5);

    let percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: "0%",
      style: {
        font: "18px monospace",
        // fill: "#ffffff",
      },
    });
    percentText.setOrigin(0.5, 0.5);

    let assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: "",
      style: {
        font: "18px monospace",
        // fill: "#ffffff",
      },
    });
    assetText.setOrigin(0.5, 0.5);

    this.load.on("progress", function (value: number) {
      percentText.setText(parseInt((value * 100).toString()) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });

    this.load.on("fileprogress", function (file: any) {
      assetText.setText("Loading asset: " + file.key);
    });
    // this.load.on("complete", function () {
    //   progressBar.destroy();
    //   progressBox.destroy();
    //   loadingText.destroy();
    //   percentText.destroy();
    //   assetText.destroy();
    // });

    this.load.image(TextureKeys.Player, "images/dino.png");
    this.load.image(TextureKeys.Target, "images/blue-dino.png");
    this.load.image(TextureKeys.Enemy, "images/red-dino.png");
    this.load.image(TextureKeys.Asteroid, "images/asteroid.png");
    this.load.image(TextureKeys.Background, "images/background.jpg");
    this.load.audio(AudioKeys.BG_Music, "audios/anomaly.mp3");
  }

  create() {
    console.log("preloader create");

    this.scene.start(SceneKeys.MainMenu);
  }
}
