import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";

export default class TestScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.TestScene);
  }
  preload() {
    console.log("preload");
    this.load.image(TextureKeys.Background, "images/template-2280x1440.png");
  }
  create() {
    const world = {
      width: 600, // the width of 2 ground platforms
      height: 900, // the hight of the game
    };

    // the width and height of the world map
    this.cameras.main.setBounds(0, 0, world.width, world.height);
    this.physics.world.setBounds(0, 0, world.width, world.height);

    // draw the sky
    let sky = this.add
      .image(0, 0, TextureKeys.Background)
      .setOrigin(0)
      // take the full height
      //   .setScale(Math.max(this.cameras.main.height / 600, 1))
      .setScrollFactor(0);

    // draw safe area
    let safeArea = this.add
      .rectangle(
        this.cameras.main.width / 2 - +this.game.config.width / 2,
        this.cameras.main.height / 2 - +this.game.config.height / 2,
        +this.game.config.width,
        +this.game.config.height
      )
      .setStrokeStyle(10, 0xff0000, 1)
      .setOrigin(0)
      .setDepth(2)
      .setScrollFactor(0);

    // this is fixed to the safeArea
    let scoreTextSafeArea = this.add
      .text(safeArea.x + 16, safeArea.y + 16, "score: 0", {
        fontSize: "32px",
        // fill: "#000",
      })
      .setOrigin(0)
      .setScrollFactor(0);
    // this is fixed to the safeArea
    let scoreText = this.add
      .text(16, 16, "score: 0", { fontSize: "32px" })
      .setOrigin(0)
      .setScrollFactor(0);

    // the resize function
    const resizeScene = () => {
      console.log("resizeScene");
      // update position of safe area
      safeArea.x = this.cameras.main.width / 2 - +this.game.config.width / 2;
      safeArea.y = this.cameras.main.height / 2 - +this.game.config.height / 2;

      // adjust the score text
      scoreTextSafeArea.x = safeArea.x + 16;
      scoreTextSafeArea.y = safeArea.y + 16;
      scoreText.x = 16;
      scoreText.y = 16;

      // adjust sky
      sky.width = this.cameras.main.width;
      sky.height = this.cameras.main.height;
      //   sky.setScale(Math.max(this.cameras.main.height / 600, 1));
    };

    this.scale.on(
      "resize",
      (
        gameSize: { width: number; height: number },
        baseSize: any,
        displaySize: any,
        resolution: any
      ) => {
        console.log("scale.on");
        console.log("gameSize = ", gameSize);
        console.log("baseSize = ", baseSize);
        console.log("displaySize = ", displaySize);
        console.log("resolution = ", resolution);
        // this.cameras.resize(gameSize.width, gameSize.height);
        resizeScene();
      }
    );
  }
}
