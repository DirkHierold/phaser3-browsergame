import Phaser from "phaser";
import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Asteroids from "../model/Asteroids";
import Enemies from "../model/Enemies";
import Player from "../model/Player";
import Target from "../model/Target";
import { AlignGrid } from "../utils/AlignGrid";
import DataHandler from "../utils/DataHandler";

export default class GameScene extends Phaser.Scene {
  private gameWidth = 0;
  private gameHeight = 0;

  private target!: Target;

  private enemies!: Enemies;

  private asteroids!: Asteroids;

  private player!: Player;

  private playerSize: number = 0;
  private targetSize: number = 0;
  private enemySize: number = 0;
  private asteroidSize: number = 0;

  private text!: Phaser.GameObjects.Text;

  private localHighscore = 0;

  private score!: number;
  private gameOver!: boolean;

  private grid!: AlignGrid;

  constructor() {
    console.log("constructor");
    super(SceneKeys.Game);
  }

  init() {
    console.log("init");
    this.score = 0;
    this.gameOver = false;

    this.gameWidth = this.game.scale.width;
    this.gameHeight = this.game.scale.height;

    let smallerSide = this.gameWidth;
    if (this.gameWidth > this.gameHeight) {
      smallerSide = this.gameHeight;
    }

    this.playerSize = smallerSide / 10;
    this.targetSize = smallerSide / 10;
    this.enemySize = smallerSide / 10;
    this.asteroidSize = smallerSide / 10;

    this.grid = new AlignGrid(this, 11, 11);
  }

  //  Load the Google WebFont Loader script
  // game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  create() {
    console.log("Game Scene create");

    //turn on the lines for testing and layout
    // this.grid.showNumbers();

    // Background
    this.add
      .tileSprite(0, 0, this.gameWidth, this.gameHeight, TextureKeys.Grass)
      .setOrigin(0);

    // Player
    this.player = new Player(
      this,
      this.gameWidth / 2,
      this.gameHeight / 2,
      this.playerSize
    );

    // Target
    this.target = new Target(this, 0, 0, this.targetSize);

    // Enemies
    this.enemies = new Enemies(this);
    this.enemies.addEnemyInCorner(this.enemySize);

    // Asteroids
    this.asteroids = new Asteroids(this);
    this.asteroids.addInCorner(this.asteroidSize);

    // Score
    this.localHighscore = DataHandler.localHighscore;

    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };
    this.text = this.add.text(0, 0, "", style).setDepth(1);
    this.setText(
      "Score: " + this.score + "\nHighscore: " + this.localHighscore
    );

    //Spieler Gegner getroffen?
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.collideWithEnemy,
      undefined,
      this
    );

    //Spieler Asteroid getroffen?
    this.physics.add.overlap(
      this.player,
      this.asteroids,
      this.collideWithEnemy,
      undefined,
      this
    );

    //Gegner Asteroid getroffen?
    this.physics.add.overlap(
      this.enemies,
      this.asteroids,
      this.enemyCollideWithAsteroid,
      undefined,
      this
    );

    //Ziel Asteroid getroffen?
    this.physics.add.overlap(
      this.asteroids,
      this.target,
      this.asteroidCollideWithTarget,
      undefined,
      this
    );

    //Ziel erreicht?
    this.physics.add.overlap(
      this.player,
      this.target,
      this.targetReached,
      undefined,
      this
    );

    this.physics.add.collider(this.asteroids, this.asteroids);
  }

  update() {
    if (this.gameOver) return;

    //Steuerung
    this.player.move(this.input.activePointer);
    this.target.changeDirection(this.player);
    this.enemies.changeDirection(this.player);

    if (this.enemies.getLength() > 0) {
      this.physics.moveToObject(
        this.enemies.getClosestToPlayer(this.player),
        this.player,
        180
      );
    }
  }

  private getNewTarget() {
    this.target.setRandomPosition();
  }

  private setText(text: string) {
    this.text.setText(text);
    this.grid.placeAtIndexAndScale(80, this.text, 5, 2);
  }

  private targetReached(
    _player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _target: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    // Ziel erreicht!
    console.log("Target reached!");

    //neues Ziel erzeugen
    this.getNewTarget();

    this.score++;
    // neuen Gegner und Asteroid erzeugen nur alle 5 Targets bis maximal 15
    if (this.score % 5 == 0 && this.enemies.getLength() < 15) {
      this.enemies.addEnemyInCorner(this.enemySize);

      this.asteroids.addInCorner(this.asteroidSize);
    }

    this.setText(
      "Score: " + this.score + "\nHighscore: " + this.localHighscore
    );
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

  private enemyCollideWithAsteroid(
    enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _asteroid: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    enemy.destroy();
  }

  private asteroidCollideWithTarget(
    _asteroid: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _target: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    //neues Ziel erzeugen
    this.getNewTarget();
  }

  private restart() {
    //Save Score if new local or global
    DataHandler.handleNewLocalScore(this.score);

    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      backgroundColor: "black",
    };
    this.text
      .setPadding(10)
      .setStyle(textStyle)
      .setInteractive({ useHandCursor: true })
      .on(EventKeys.PointerDown, () => {
        console.log("Back to Main Menu");
        this.scene.start(SceneKeys.MainMenu);
      })
      .on(EventKeys.PointerOver, () => this.text.setStyle({ fill: "green" }))
      .on(EventKeys.PointerOut, () => this.text.setStyle({ fill: "white" }));
    this.setText("Back\n\n" + this.text.text);
  }

  render() {
    // debug helper
  }
}
