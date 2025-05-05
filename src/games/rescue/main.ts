import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenu-scene";
import Preloader from "./scenes/Preloader-scene";
import GameScene from "./scenes/Game-scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  parent: "app",
  width: 1280,
  height: 1920,
  dom: {
    createContainer: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: [Preloader, GameScene, MainMenuScene],
};

let game = new Phaser.Game(config);

export default game;
