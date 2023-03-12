import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";

export default class TestScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.TestScene);
  }
  preload() {
    console.log("preload");
    this.load.image(
      TextureKeys.Background_small,
      "images/template-570x360.png"
    );
  }
  create() {
    console.log("create");
    // const world = {
    //   width: 900, // the width of 2 ground platforms
    //   height: 600, // the hight of the game
    // };

    // the width and height of the world map
    // this.cameras.main.setBounds(0, 0, world.width, world.height);
    // this.physics.world.setBounds(0, 0, world.width, world.height);

    // // draw the background
    // this.add.image(0, 0, TextureKeys.Background).setOrigin(0);
    // .setScrollFactor(1);
    // .setDisplaySize(2280, 1140);
    // take the full height
    //   .setScale(Math.max(this.cameras.main.height / 600, 1))
    // .setScrollFactor(0);

    // draw safe area
    // this.add
    //   .rectangle(
    //     this.cameras.main.width / 2 - +this.game.config.width / 2,
    //     this.cameras.main.height / 2 - +this.game.config.height / 2,
    //     +this.game.config.width,
    //     +this.game.config.height
    //   )
    //   .setStrokeStyle(10, 0xff0000, 1)
    //   .setOrigin(0)
    //   .setDepth(2)
    //   .setScrollFactor(0);

    // console.log(
    //   "this.cameras.main.worldView before = ",
    //   this.cameras.main.worldView
    // );
    // this.cameras.main.setViewport(0, 0, window.innerWidth, window.innerHeight);
    // this.cameras.main.setScroll(180, 80);

    const backgroundImageWidth = 570;
    const backgroundImageHeight = 360;
    console.log(
      "backgroundImage = ",
      backgroundImageWidth,
      backgroundImageHeight
    );
    const displayWidth = this.game.scale.width;
    const displayHeight = this.game.scale.height;
    console.log("display = ", displayWidth, displayHeight);
    const scaleWidth = displayWidth / backgroundImageWidth;
    const scaleHeight = displayHeight / backgroundImageHeight;
    console.log("scale = ", scaleWidth, scaleHeight);
    const maxScale = Math.max(scaleWidth, scaleHeight);
    console.log("maxScale = ", maxScale);
    const newBackgroundImageWidth = backgroundImageWidth * maxScale;
    const newBackgroundImageHeight = backgroundImageHeight * maxScale;
    console.log(
      "newBackgroundImage = ",
      newBackgroundImageWidth,
      newBackgroundImageHeight
    );
    const scrollX = (newBackgroundImageWidth - displayWidth) * 0.5;
    const scrollY = (newBackgroundImageHeight - displayHeight) * 0.5;

    // const scrollX = (backgroundImageWidth - newDisplayWidth) * 0.5;
    // const scrollY = (backgroundImageHeight - newDisplayHeight) * 0.5;
    // const scrollX = (backgroundImageWidth - displayWidth) * 0.5;
    // const scrollY = (backgroundImageHeight - displayHeight) * 0.5;

    console.log("scroll = ", scrollX, scrollY);
    // this.cameras.main.setScroll(scrollX, scrollY);
    // this.cameras.main.setViewport(100, 100, 200, 50);

    // .setScale(0.2);
    this.add
      .image(0, 0, TextureKeys.Background_small)
      .setDisplaySize(this.scale.width / 10, this.scale.width / 10)
      .setOrigin(0);

    // .setDisplaySize(newBackgroundImageWidth, newBackgroundImageHeight);

    // this.add
    //   .rectangle(
    //     scrollX,
    //     scrollY,
    //     this.scale.gameSize.width / 2,
    //     this.scale.gameSize.height / 2,
    //     0xff0000
    //   )
    //   .setOrigin(0);

    console.log(
      "this.cameras.main = ",
      this.cameras.main.width,
      this.cameras.main.height
    );
    console.log(
      "this.game.scale = ",
      this.game.scale.width,
      this.game.scale.height
    );
    console.log(
      "this.game.canvas = ",
      this.game.canvas.width,
      this.game.canvas.height
    );

    console.log("setGameSize");
    // this.game.scale.setGameSize(window.innerWidth, window.innerHeight);
    // this.scale.updateScale();

    // this.scale.width = window.innerWidth

    // backgroundImage.setDisplaySize(
    //   this.game.scale.width,
    //   this.game.scale.height
    // );

    console.log(
      "this.cameras.main = ",
      this.cameras.main.width,
      this.cameras.main.height
    );
    console.log(
      "this.game.scale = ",
      this.game.scale.width,
      this.game.scale.height
    );
    console.log(
      "this.game.canvas = ",
      this.game.canvas.width,
      this.game.canvas.height
    );

    // this.cameras.main.setZoom(minScale);
    // console.log(
    //   "this.cameras.main.worldView after = ",
    //   this.cameras.main.worldView
    // );

    // // this is fixed to the safeArea
    // let scoreTextSafeArea = this.add
    //   .text(safeArea.x + 16, safeArea.y + 16, "score: 0", {
    //     fontSize: "32px",
    //     // fill: "#000",
    //   })
    //   .setOrigin(0)
    //   .setScrollFactor(0);
    // // this is fixed to the safeArea
    // let scoreText = this.add
    //   .text(16, 16, "score: 0", { fontSize: "32px" })
    //   .setOrigin(0)
    //   .setScrollFactor(0);
  }
}
