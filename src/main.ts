import Phaser from "phaser";
import GameScene from "./scenes/Game-scene";
import Preloader from "./scenes/Preloader-scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [Preloader, GameScene],
};

const game = new Phaser.Game(config);
export default game;
