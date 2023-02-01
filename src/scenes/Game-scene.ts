import Phaser from "phaser";
import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Enemies from "../model/Enemies";
import Player from "../model/Player";
import Target from "../model/Target";
import LocalStorage from "../utils/LocalStorage";

let gameWidth = 0;
let gameHeight = 0;

let target: Target;

let enemies: Enemies;
let player: Player;

let playerSize: number;
let targetSize: number;
let enemySize: number;

let text: Phaser.GameObjects.Text;

const localStorage = new LocalStorage(window.localStorage); //window.localStorage;

let highscore = 0;
let alltime = 0;

export default class GameScene extends Phaser.Scene {
  private score!: number;
  private gameOver!: boolean;

  constructor() {
    console.log("constructor");
    super(SceneKeys.Game);

    this.resizeCanvas();
    window.addEventListener(EventKeys.Resize, this.resizeCanvas, false);
  }

  init() {
    console.log("init");
    this.score = 0;
    this.gameOver = false;
  }

  //  Load the Google WebFont Loader script
  // game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
  private resizeCanvas() {
    console.log("resizeCanvas");
    if (window.orientation !== undefined) {
      // if mobile
      gameWidth = document.documentElement.clientWidth;
      gameHeight = document.documentElement.clientHeight;
    } else {
      // if pc
      gameWidth = window.innerWidth;
      gameHeight = window.innerHeight;
    }

    console.log("setSizes");
    let smallerSide = gameWidth;
    if (smallerSide > gameHeight) {
      smallerSide = gameHeight;
    }

    playerSize = smallerSide / 10;
    targetSize = smallerSide / 10;
    enemySize = smallerSide / 10;
  }

  create() {
    console.log("create");

    // Background
    this.add
      .tileSprite(0, 0, gameWidth, gameHeight, TextureKeys.Background)
      .setOrigin(0);

    // Player
    player = new Player(this, 0, 0, playerSize);

    // Target
    target = new Target(this, 0, 0, targetSize);

    // Enemies
    enemies = new Enemies(this);
    enemies.addEnemy(player, enemySize);

    // Score
    highscore = localStorage.getHighscoreIfAvailable();
    alltime = localStorage.getAlltimeIfAvailable();

    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "28px Arial",
      align: "center",
    };
    text = this.add
      .text(gameWidth / 2, gameHeight / 2, "", style)
      .setOrigin(0.5)
      .setDepth(1);
    this.drawScores();

    //Gegner getroffen?
    this.physics.add.overlap(
      player,
      enemies,
      this.collideWithEnemy,
      undefined,
      this
    );

    //Ziel erreicht?
    this.physics.add.overlap(
      player,
      target,
      this.targetReached,
      undefined,
      this
    );

    this.physics.add.collider(enemies, enemies);
  }

  update() {
    if (this.gameOver) return;

    //Steuerung
    player.move(this.input.activePointer);

    target.changeDirection(player);
  }

  private getNewTarget() {
    target.setRandomPosition();
  }

  private drawScores() {
    text.setText(
      "Score: " +
        this.score +
        "\nHighscore: " +
        highscore +
        "\nAlltime: " +
        alltime
    );
  }

  private targetReached(
    _player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _target: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    // Ziel erreicht!
    console.log("Target reached!");

    //neues Ziel erzeugen
    this.getNewTarget();

    // neuen Gegner erzeugen
    enemies.addEnemy(player, enemySize);

    this.score++;
    alltime++;

    highscore = localStorage.setHighscoreIfNew(this.score, highscore);
    localStorage.setAlltime(alltime);

    this.drawScores();
  }

  private collideWithEnemy(
    player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    console.log("CollideWithEnemy");

    this.physics.pause();

    (player as Phaser.Types.Physics.Arcade.ImageWithDynamicBody).setTint(
      0xff0000
    );

    this.gameOver = true;
    //ReloadButton
    this.restart();
  }

  private restart() {
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      backgroundColor: "green",
    };
    text
      .setText(text.text + "\n\nNew Game")
      .setPadding(10)
      .setStyle(textStyle)
      .setInteractive({ useHandCursor: true })
      .on(EventKeys.PointerDown, () => {
        console.log("Game is restarted");
        this.scene.restart();
      })
      .on(EventKeys.PointerOver, () => text.setStyle({ fill: "#f39c12" }))
      .on(EventKeys.PointerOut, () => text.setStyle({ fill: "#FFF" }));
  }

  render() {
    // debug helper
  }
}
