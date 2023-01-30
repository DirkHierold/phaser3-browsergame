/* eslint-disable @typescript-eslint/no-empty-function */
export default class SceneBase extends Phaser.Scene {
  gameContainer;
  eventEmitter: Phaser.Events.EventEmitter;

  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    super(config);

    this.gameContainer = document.getElementById("game-container");
    this.eventEmitter = new Phaser.Events.EventEmitter();
  }

  preload() {}

  create() {}

  update() {}

  resizeGameContainer() {
    const winW = window.innerWidth / window.devicePixelRatio;
    const winH = window.innerHeight / window.devicePixelRatio;
    const breakpoints = [
      { scrW: 0, gamW: 400 },
      { scrW: 600, gamW: 450 },
      { scrW: 900, gamW: 550 },
      { scrW: 1200, gamW: 750 },
      { scrW: 1500, gamW: 1000 },
      { scrW: 1800, gamW: 1300 },
    ];
    let currentBreakpoint = null;
    let newViewPortW = 0;
    let newViewPortH = 0;

    for (let i = 0; i < breakpoints.length; i++) {
      currentBreakpoint = breakpoints[i];

      if (winW < currentBreakpoint.scrW) {
        break;
      }
    }

    newViewPortW = currentBreakpoint!.gamW;
    newViewPortH = currentBreakpoint!.gamW * (winH / winW);

    this.game.scale.resize(newViewPortW, newViewPortH);

    this.gameContainer!.style.width = `${window.innerWidth}px`;
    this.gameContainer!.style.height = `${window.innerHeight}px`;
    this.game.canvas.style.width = `${window.innerWidth}px`;
    this.game.canvas.style.height = `${window.innerHeight}px`;

    this.eventEmitter.emit("screenResized");
  }
}
