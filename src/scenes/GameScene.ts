import Phaser from "phaser";

let gameWidth = 0;
let gameHeight = 0;

let target: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

let enemies: Phaser.Physics.Arcade.Group;
let player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

let playerSize: number;
let targetSize: number;
let enemySize: number;

let text: Phaser.GameObjects.Text;

const localStorage = window.localStorage;

let highscore = 0;
let alltime = 0;

let actualtouchX;
let actualtouchY;
let oldtouchX: number;
let oldtouchY: number;

export default class GameScene extends Phaser.Scene {
  private score!: number;
  private gameOver!: boolean;
  private isDown!: boolean;

  constructor(config: Phaser.Types.Scenes.SettingsConfig) {
    console.log("constructor");
    super(config);

    this.resizeCanvas();
    window.addEventListener("resize", this.resizeCanvas, false);
  }

  init() {
    console.log("init");
    this.score = 0;
    this.gameOver = false;
    this.isDown = false;
  }

  preload() {
    console.log("preload");
    this.load.image("player", "images/dino.png");
    this.load.image("target", "images/dino1.png");
    this.load.image("enemy", "images/asteroid.png");
    this.load.image("background", "images/grass.jpg");

    // gameWidth = this.scale.width;
    // gameHeight = this.scale.height;
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
    // console.log(smallerSide,gameWidth)
    playerSize = smallerSide / 10;
    targetSize = smallerSide / 10;
    enemySize = smallerSide / 10;
    console.log(playerSize, targetSize, enemySize);
  }

  create() {
    console.log("create");

    // Background
    this.add.tileSprite(0, 0, gameWidth, gameHeight, "background").setOrigin(0);

    // Player
    player = this.physics.add.image(0, 0, "player").setOrigin(0);
    player.setDisplaySize(playerSize, playerSize);
    player.setBodySize(player.width / 2, (player.height * 7) / 8);
    player.setCollideWorldBounds(true);
    // player.body.setSize(player.width / 2, (player.height * 7) / 8);
    player.body.setOffset(player.width / 10, player.height / 8);

    // Target
    target = this.physics.add.image(0, 0, "target").setOrigin(0);
    target.setDisplaySize(targetSize, targetSize);
    target.setRandomPosition();

    target.setCollideWorldBounds(true);
    target.toggleFlipX();
    target.body.setSize(target.body.width / 2, (target.body.height * 7) / 8);
    target.body.setOffset((target.body.width * 3) / 4, target.body.height / 8);

    // Enemies
    enemies = this.physics.add.group();
    this.getNewEnemy();

    // this.physics.add.collider(player, targets, targetReached);
    // this.physics.add.collider(player, enemies, collideWithEnemy);
    // this.physics.add.collider(enemies, enemies);

    if (localStorage.getItem("highscore") !== null) {
      highscore = parseInt(localStorage.getItem("highscore")!);
    }

    if (localStorage.getItem("alltime")) {
      alltime = parseInt(localStorage.getItem("alltime")!);
    }

    const style = { font: "28px Courier", fill: "black", align: "center" };
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
    this.handleMouse();

    // let aktuellezeit = new Date();
    // restzeit = spielzeit - Math.floor((aktuellezeit.getTime()-startzeit.getTime()) / 1000);
    // $('#spielzeit').html('Spielzeit: ' + restzeit);
    // if (restzeit <= 0) {
    //     // spielende();
    // }
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

  private getNewEnemy() {
    const posX = (player.x + gameWidth / 2) % gameWidth;
    const posY = (player.y + gameHeight / 2) % gameHeight;

    let enemy: any = this.add.image(posX, posY, "enemy");
    enemy.setDisplaySize(enemySize, enemySize);

    enemies.add(enemy);
    this.physics.world.enable(enemy, Phaser.Physics.Arcade.DYNAMIC_BODY);

    enemy.body.setCircle(enemy.width / 2);
    enemy.body.setVelocity(
      Math.pow(-1, Phaser.Math.Between(0, 1)) * Phaser.Math.Between(60, 180),
      Math.pow(-1, Phaser.Math.Between(0, 1)) * Phaser.Math.Between(60, 180)
    );
    enemy.body.setCollideWorldBounds(true);
    enemy.body.setBounce(1, 1);
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
    this.getNewEnemy();

    this.score++;
    alltime++;

    localStorage.setItem("score", this.score.toString());
    localStorage.setItem("alltime", alltime.toString());
    if (this.score > highscore) {
      highscore = this.score;
      localStorage.setItem("highscore", highscore.toString());
    }

    this.drawScores();
  }

  private collideWithEnemy(
    player: any,
    _enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    console.log("CollideWithEnemy");

    this.physics.pause();

    player.setTint(0xff0000);

    this.gameOver = true;
    //ReloadButton
    this.restart();
  }

  private restart() {
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      backgroundColor: "green",
    };
    text
      .setText("New Game\n\n" + text.text)
      .setPadding(10)
      .setStyle(textStyle)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        console.log("Game is restarted");
        this.scene.restart();
      })
      .on("pointerover", () => text.setStyle({ fill: "#f39c12" }))
      .on("pointerout", () => text.setStyle({ fill: "#FFF" }));

    // const button = new Button(
    //   gameWidth / 2,
    //   gameHeight / 2,
    //   "Score: " +
    //     this.score +
    //     "\nHighscore: " +
    //     highscore +
    //     "\nAlltime: " +
    //     alltime,
    //   this,
    //   () => {
    //     console.log("Game is restarted");
    //     // this.registry.destroy(); // destroy registry
    //     // this.events.off(); // disable all active events
    //     // this.scene.stop();
    //     // this.scene.start();

    //     this.scene.restart();
    //   }
    // );
    // gameIn.registry.destroy(); // destroy registry
    // gameIn.events.off(); // disable all active events
    // gameIn = new Phaser.Game(config);
    // preload();
    // create();
    // update();
  }

  private handleMouse() {
    // console.log("handleMouse");
    if (this.input.activePointer.isDown && !this.isDown) {
      // console.log("this.input.activePointer.isDown && !isDown");

      oldtouchX = this.input.activePointer.x;
      oldtouchY = this.input.activePointer.y;
      this.isDown = true;
    } else if (this.input.activePointer.isDown && this.isDown) {
      // console.log("this.input.activePointer.isDown && isDown");
      actualtouchX = this.input.activePointer.x;
      actualtouchY = this.input.activePointer.y;

      player.x += actualtouchX - oldtouchX;
      player.y += actualtouchY - oldtouchY;

      // Player looks to the right and changes to left
      if (actualtouchX - oldtouchX < 0 && player.flipX) {
        player.toggleFlipX();
        player.body.setOffset(player.width / 10, player.height / 8);
        // Player looks to the left and changes to right
      } else if (actualtouchX - oldtouchX > 0 && !player.flipX) {
        // player.toggleFlipX();
        player.toggleFlipX();
        player.body.setOffset((player.width * 2) / 5, player.height / 8);
      }

      //Player is right from Target
      if (player.body.x > target.body.x + target.body.width && !target.flipX) {
        target.toggleFlipX();
        target.body.setOffset((target.width * 2) / 5, target.height / 8);
        //Player is left from Target
      } else if (
        player.body.x + player.body.width < target.body.x &&
        target.flipX
      ) {
        target.toggleFlipX();
        target.body.setOffset(target.width / 10, target.height / 8);
      }

      oldtouchX = actualtouchX;
      oldtouchY = actualtouchY;
    } else {
      // console.log("else");
      this.isDown = false;
    }
  }

  render() {
    // debug helper
  }
}
