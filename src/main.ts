import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenu-scene";
import Preloader from "./scenes/Preloader-scene";
import EasyGameScene from "./scenes/EasyGame-scene";
import NormalGameScene from "./scenes/NormalGame-scene";
import HardGameScene from "./scenes/HardGame-scene";
// import EventKeys from "./consts/EventKeys";

const config: Phaser.Types.Core.GameConfig = {
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
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    Preloader,
    EasyGameScene,
    NormalGameScene,
    HardGameScene,
    MainMenuScene,
  ],
};

let game = new Phaser.Game(config);
// window.addEventListener(EventKeys.Load, resizeCanvas);
// window.addEventListener(EventKeys.Resize, resizeCanvas);
// function resizeCanvas(this: Window, ev: Event) {
//   console.log("resizeCanvas");
//   console.log("game.scale vorher = ", game.scale.width, game.scale.height);

//   let gameWidth = 0;
//   let gameHeight = 0;
//   if (window.orientation !== undefined) {
//     // if mobile
//     gameWidth = document.documentElement.clientWidth;
//     gameHeight = document.documentElement.clientHeight;
//     console.log("mobile = ", gameWidth, gameHeight);
//   } else {
//     // if pc
//     gameWidth = window.innerWidth;
//     gameHeight = window.innerHeight;
//     console.log("desktop = ", gameWidth, gameHeight);
//   }
//   // game.scale.setGameSize(window.innerWidth, window.innerHeight);
//   console.log("game.scale nachher = ", game.scale.width, game.scale.height);
// }

export default game;
