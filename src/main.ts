import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenu-scene";
import Preloader from "./scenes/Preloader-scene";
import GameScene from "./scenes/Game-scene";

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

  scene: [Preloader, GameScene, MainMenuScene],
};

let game = new Phaser.Game(config);

function resizeWindow() {
  console.log("resizeWindow");
  let w: number = 0;
  let h: number = 0;

  if (window.orientation !== undefined) {
    // if mobile
    w = document.documentElement.clientWidth;
    console.log(
      "document.documentElement.clientWidth = ",
      document.documentElement.clientWidth
    );
    h = document.documentElement.clientHeight;
    console.log(
      "document.documentElement.clientHeight = ",
      document.documentElement.clientHeight
    );
  } else {
    // if pc
    w = window.innerWidth;
    console.log("window.innerWidth = ", window.innerWidth);
    h = window.innerHeight;
    console.log("window.innerHeight = ", window.innerHeight);
  }
  console.log("game.scale.width = ", game.scale.width);
  console.log("game.scale.height = ", game.scale.height);
  console.log("game.canvas.width = ", game.canvas.width);
  console.log("game.canvas.height = ", game.canvas.height);

  // resize the game
  game.scale.setGameSize(w, h);
}
window.addEventListener("load", resizeWindow);
window.addEventListener("resize", resizeWindow);

export default game;
