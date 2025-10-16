import Phaser from "phaser";
import GameScene from "./scenes/GameScene";
import { registerServiceWorker } from '../../shared/utils/registerServiceWorker';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    parent: "app",
    width: 600,
    height: 800,
    //green background
    backgroundColor: "#008000",
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
    scene: [GameScene],
};

// Register service worker for offline support
registerServiceWorker();

new Phaser.Game(config);
