import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenu-scene";
import Preloader from "./scenes/Preloader-scene";
import EasyGameScene from "./scenes/EasyGame-scene";
import NormalGameScene from "./scenes/NormalGame-scene";
import HardGameScene from "./scenes/HardGame-scene";

const config: any = {
  //Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: window.innerWidth,
  height: window.innerHeight,
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
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    Preloader,
    EasyGameScene,
    NormalGameScene,
    HardGameScene,
    MainMenuScene,
  ],
  spotOn: false,
};

let game = new Phaser.Game(config);
export default game;
