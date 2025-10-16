import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenuScene";
import Preloader from "./scenes/PreloaderScene";
import GameScene from "./scenes/GameScene";
import { registerServiceWorker } from '../../shared/utils/registerServiceWorker';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  backgroundColor: '#87CEEB',
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

// Register service worker for offline support
registerServiceWorker();

let game = new Phaser.Game(config);

export default game;
