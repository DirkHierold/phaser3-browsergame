import Phaser from "phaser";
import AsteroidScene from "./scenes/AsteroidScene";

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.CANVAS,
    parent: "app",
    width: 600,
    height: 800,
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
    scene: [AsteroidScene],
};

new Phaser.Game(config);
