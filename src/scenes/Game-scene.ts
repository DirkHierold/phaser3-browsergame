import Phaser from "phaser";
import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Enemies from "../model/Enemies";
import Player from "../model/Player";
import Target from "../model/Target";
import DataHandler from "../utils/DataHandler";

export default class GameScene extends Phaser.Scene {
  private gameWidth = 0;
  private gameHeight = 0;

  private target!: Target;

  private enemies!: Enemies;
  private player!: Player;

  private playerSize: number = 0;
  private targetSize: number = 0;
  private enemySize: number = 0;

  private text!: Phaser.GameObjects.Text;

  private localHighscore = 0;

  private score!: number;
  private gameOver!: boolean;

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
  }

  //  Load the Google WebFont Loader script
  // game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  create() {
    console.log("create");

    // Background
    this.add
      .tileSprite(0, 0, this.gameWidth, this.gameHeight, TextureKeys.Background)
      .setOrigin(0);

    // Player
    this.player = new Player(
      this,
      this.gameWidth / 2,
      this.gameHeight / 2,
      this.playerSize
    );

    if (this.registry.get("spotOn")) this.cameras.main.startFollow(this.player);

    // Target
    this.target = new Target(this, 0, 0, this.targetSize);

    // Enemies
    this.enemies = new Enemies(this);
    this.enemies.addEnemyFarAwayFromPlayer(this.player, this.enemySize);

    // Score
    this.localHighscore = DataHandler.localHighscore;

    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "128px Arial",
      align: "center",
    };
    this.text = this.add
      .text(this.gameWidth / 2, this.gameHeight / 2, "", style)
      .setOrigin(0.5)
      .setDepth(1);
    this.drawScores();

    //Gegner getroffen?
    this.physics.add.overlap(
      this.player,
      this.enemies,
      this.collideWithEnemy,
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

    this.physics.add.collider(this.enemies, this.enemies);
  }

  update() {
    if (this.gameOver) return;

    //Steuerung
    this.player.move(this.input.activePointer);

    this.target.changeDirection(this.player);
  }

  private getNewTarget() {
    this.target.setRandomPosition();
  }

  private drawScores() {
    this.text.setText(
      "Score: " + this.score + "\nHighscore: " + this.localHighscore
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

    this.score++;
    // neuen Gegner erzeugen nur alle 5 Targets bis maximal 15
    if (this.score % 5 == 0 && this.enemies.getLength() < 15)
      this.enemies.addEnemyFarAwayFromPlayer(this.player, this.enemySize);

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
    //Save Score if new local or global
    DataHandler.handleNewLocalScore(this.score);

    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      backgroundColor: "black",
    };
    this.text
      .setText("Back\n\n" + this.text.text)
      .setPadding(10)
      .setStyle(textStyle)
      .setInteractive({ useHandCursor: true })
      .on(EventKeys.PointerDown, () => {
        console.log("Back to Main Menu");
        this.scene.start(SceneKeys.MainMenu);
      })
      .on(EventKeys.PointerOver, () => this.text.setStyle({ fill: "green" }))
      .on(EventKeys.PointerOut, () => this.text.setStyle({ fill: "white" }));
  }

  render() {
    // debug helper
  }
}
