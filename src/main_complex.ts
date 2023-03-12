import Phaser from "phaser";
import MainMenuScene from "./scenes/MainMenu-scene";
import Preloader from "./scenes/Preloader-scene";
import GameScene from "./scenes/Game-scene";
import TestScene from "./scenes/TestScene_complex";

const newDisplaySize: number[] = getNewDisplaySize();

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: newDisplaySize[0],
  height: newDisplaySize[1],
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

  scene: [TestScene, Preloader, GameScene, MainMenuScene],
};

let game = new Phaser.Game(config);

function getNewDisplaySize(): number[] {
  console.log("getNewDisplaySize");
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

  const displayWidth = w;
  const displayHeight = h;
  console.log("display before = ", displayWidth, displayHeight);
  let newDisplayWidth = displayWidth;
  let newDisplayHeight = displayHeight;
  const scaleFactor = displayWidth / displayHeight;
  if (scaleFactor < 4 / 3) {
    newDisplayWidth = displayWidth;
    newDisplayHeight = (displayWidth / 4) * 3;
  } else if (scaleFactor > 16 / 9) {
    newDisplayWidth = (displayHeight / 9) * 16;
    newDisplayHeight = displayHeight;
  }
  console.log("newDisplay = ", newDisplayWidth, newDisplayHeight);
  return [newDisplayWidth, newDisplayHeight];
}

function resizeWindow() {
  console.log("resizeWindow");
  const newDisplaySize: number[] = getNewDisplaySize();
  // resize the game
  game.scale.setGameSize(newDisplaySize[0], newDisplaySize[1]);
}
// window.addEventListener("load", resizeWindow);
window.addEventListener("resize", resizeWindow);

export default game;
