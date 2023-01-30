import Phaser from "phaser";
import GameScene from "./scenes/GameScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "app",
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
      debug: false,
    },
  },
  scale: {
    // parent: "phaser-example",
    mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [GameScene],
};

// {
// 	type: Phaser.AUTO,
// 	width: gameWidth,
// 	height: gameHeight,
// 	physics: {
// 		default: 'arcade',
// 		arcade: {
// 			debug: true
// 		}
// 	},
// 	scale: {
// 		parent: 'phaser-example',
// 		mode: Phaser.Scale.FIT,
// 		// autoCenter: Phaser.Scale.CENTER_BOTH
// 	},
// 	scene: {
// 		preload: preload,
// 		create: create,
// 		update: update
// 	}
// };

const game = new Phaser.Game(config);
export default game;
