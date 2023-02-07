import Phaser from "phaser";
import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import StorageKeys from "../consts/StorageKeys";
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

let highscore = 0;
let alltime = 0;

export default class NormalGameScene extends Phaser.Scene {
  private score!: number;
  private gameOver!: boolean;
  private localStorage!: LocalStorage;

  constructor() {
    console.log("constructor");
    super(SceneKeys.NormalGame);

    this.resizeCanvas();
    window.addEventListener(EventKeys.Resize, this.resizeCanvas, false);
  }

  init() {
    console.log("init");
    this.score = 0;
    this.gameOver = false;
    this.localStorage = new LocalStorage(
      window.localStorage,
      StorageKeys.NormalStorage
    );
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
    player = new Player(this, gameWidth / 2, gameHeight / 2, playerSize);

    if (this.registry.get("spotOn")) this.cameras.main.startFollow(player);

    // Target
    target = new Target(this, 0, 0, targetSize);

    // Enemies
    enemies = new Enemies(this);
    enemies.addEnemyFarAwayFromPlayer(player, enemySize);

    // Score
    highscore = this.localStorage.getHighscoreIfAvailable();
    alltime = this.localStorage.getAlltimeIfAvailable();

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

    // neuen Gegner erzeugen nur alle 2 Targets bis maximal 20
    if (this.score % 2 == 0 && enemies.getLength() < 20)
      // neuen Gegner erzeugen
      enemies.addEnemyFarAwayFromPlayer(player, enemySize);

    this.score++;
    alltime++;

    highscore = this.localStorage.setHighscoreIfNew(this.score, highscore);
    this.localStorage.setAlltime(alltime);

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
      backgroundColor: "black",
    };
    text
      .setText("Back\n\n" + text.text)
      .setPadding(10)
      .setStyle(textStyle)
      .setInteractive({ useHandCursor: true })
      .on(EventKeys.PointerDown, () => {
        console.log("Back to Main Menu");
        this.scene.start(SceneKeys.MainMenu);
      })
      .on(EventKeys.PointerOver, () => text.setStyle({ fill: "#f39c12" }))
      .on(EventKeys.PointerOut, () => text.setStyle({ fill: "#FFF" }));
  }

  render() {
    // debug helper
  }
}
