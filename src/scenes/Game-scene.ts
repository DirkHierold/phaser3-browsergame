import Phaser from "phaser";
// import AudioKeys from "../consts/AudioKeys";
import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Asteroids from "../model/Asteroids";
// import Enemies from "../model/Enemies";
import Player from "../model/Player";
// import Target from "../model/Target";
import Targets from "../model/Targets";
import { AlignGrid } from "../utils/AlignGrid";
import { Button } from "../utils/Button";
// import DataHandler from "../utils/DataHandler";

export default class GameScene extends Phaser.Scene {
  private gameWidth = 0;
  private gameHeight = 0;

  private targets!: Targets;

  // private enemies!: Enemies;

  private asteroids!: Asteroids;

  private player!: Player;

  private playerSize: number = 0;
  private targetSize: number = 0;
  // private enemySize: number = 0;
  private asteroidSize: number = 0;

  // private text!: Phaser.GameObjects.Text;

  // private localHighscore = 0;

  // private score!: number;
  private gameOver!: boolean;

  private grid!: AlignGrid;
  // private musicRegistered: boolean = false;
  private bgMusic!: Phaser.Sound.BaseSound;
  private musicOn: boolean = false;
  private pauseOn: boolean = false;

  constructor() {
    console.log("constructor");
    super(SceneKeys.Game);
  }

  init(data: any) {
    console.log("init");
    // this.score = 0;
    this.gameOver = false;

    this.gameWidth = this.game.scale.width;
    this.gameHeight = this.game.scale.height;

    let smallerSide = this.gameWidth;
    if (this.gameWidth > this.gameHeight) {
      smallerSide = this.gameHeight;
    }

    this.playerSize = smallerSide / 10;
    this.targetSize = smallerSide / 10;
    // this.enemySize = smallerSide / 10;
    this.asteroidSize = smallerSide / 10;

    this.grid = new AlignGrid(this, 11, 12);

    // Music
    this.bgMusic = data.music;
    this.musicOn = this.registry.get("musicOn");
  }

  create() {
    console.log("Game Scene create");

    //turn on the lines for testing and layout
    // this.grid.showNumbers();

    // Background
    this.add
      .tileSprite(0, 0, this.gameWidth, this.gameHeight, TextureKeys.Grass)
      .setOrigin(0);

    this.physics.world.setBounds(
      0,
      this.game.scale.height / 12,
      this.game.scale.width,
      (this.game.scale.height * 11) / 12
    );

    // MusicToogle Button
    const musicOnButton = new Button(0, 0, "Music", this, () => {});
    musicOnButton.setAlpha(0.5);
    musicOnButton.on(EventKeys.PointerDown, () => {
      this.musicOn = !this.musicOn;
      this.registry.set("musicOn", this.musicOn);
      if (this.musicOn) {
        this.bgMusic.resume();
      } else {
        this.bgMusic.pause();
      }
    });
    this.grid.placeAtIndexAndScale(9, musicOnButton, 2, 1);

    // Pause Button
    const pauseButton = new Button(0, 0, "||", this, () => {});
    pauseButton.setAlpha(0.5);
    pauseButton.on(EventKeys.PointerUp, () => {
      this.pauseOn = !this.pauseOn;
      console.log("Pause:\n" + (this.pauseOn ? "On" : "Off"));
      if (this.pauseOn) {
        this.game.loop.sleep();
      } else {
        this.game.loop.wake();
      }
    });
    this.grid.placeAtIndexAndScale(0, pauseButton, 2, 1);

    // Score
    // this.localHighscore = DataHandler.localHighscore;

    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };
    // this.text = this.add.text(0, 0, "", style);
    // this.setText("Saved: " + this.score + "/8");

    // Leveltext
    const levelText = this.add.text(0, 0, "Level: 1", style);
    this.grid.placeAtIndexAndScale(3, levelText, 5, 1);

    // Player
    this.player = new Player(this, 0, 0, this.playerSize);
    this.grid.placeAtIndex(71, this.player);

    // Targets
    this.targets = new Targets(this);
    const topLeftTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(11, topLeftTarget);

    const topRightTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(21, topRightTarget);

    const bottomLeftTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(121, bottomLeftTarget);

    const bottomRightTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(131, bottomRightTarget);

    const innerTopLeftTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(35, innerTopLeftTarget);

    const innerTopRightTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(41, innerTopRightTarget);

    const innerBottomLeftTarget = this.targets.addTarget(0, 0, this.targetSize);
    this.grid.placeAtIndex(101, innerBottomLeftTarget);

    const innerBottomRightTarget = this.targets.addTarget(
      0,
      0,
      this.targetSize
    );
    this.grid.placeAtIndex(107, innerBottomRightTarget);

    // Enemies
    // this.enemies = new Enemies(this);
    // this.enemies.addEnemyInCorner(this.enemySize);

    // Asteroids
    this.asteroids = new Asteroids(this);
    const topLeftAsteroid = this.asteroids.addOne(0, 0, this.asteroidSize);
    topLeftAsteroid.body.setVelocity(250, 0);
    this.grid.placeAtIndex(23, topLeftAsteroid);

    const topRightAsteroid = this.asteroids.addOne(0, 0, this.asteroidSize);
    topRightAsteroid.body.setVelocity(0, 250);
    this.grid.placeAtIndex(31, topRightAsteroid);

    const bottomLeftAsteroid = this.asteroids.addOne(0, 0, this.asteroidSize);
    bottomLeftAsteroid.body.setVelocity(0, -250);
    this.grid.placeAtIndex(111, bottomLeftAsteroid);

    const bottomRightAsteroid = this.asteroids.addOne(0, 0, this.asteroidSize);
    bottomRightAsteroid.body.setVelocity(-250, 0);
    this.grid.placeAtIndex(119, bottomRightAsteroid);

    const innerTopLeftAsteroid = this.asteroids.addOne(0, 0, this.asteroidSize);
    innerTopLeftAsteroid.body.setVelocity(250, 0);
    this.grid.placeAtIndex(47, innerTopLeftAsteroid);

    const innerTopRightAsteroid = this.asteroids.addOne(
      0,
      0,
      this.asteroidSize
    );
    innerTopRightAsteroid.body.setVelocity(0, 250);
    this.grid.placeAtIndex(51, innerTopRightAsteroid);

    const innerBottomLeftAsteroid = this.asteroids.addOne(
      0,
      0,
      this.asteroidSize
    );
    innerBottomLeftAsteroid.body.setVelocity(0, -250);
    this.grid.placeAtIndex(91, innerBottomLeftAsteroid);

    const innerBottomRightAsteroid = this.asteroids.addOne(
      0,
      0,
      this.asteroidSize
    );
    innerBottomRightAsteroid.body.setVelocity(-250, 0);
    this.grid.placeAtIndex(95, innerBottomRightAsteroid);

    //Spieler Gegner getroffen?
    // this.physics.add.overlap(
    //   this.player,
    //   this.enemies,
    //   this.collideWithEnemy,
    //   undefined,
    //   this
    // );

    //Spieler Asteroid getroffen?
    this.physics.add.overlap(
      this.player,
      this.asteroids,
      this.collideWithEnemy,
      undefined,
      this
    );

    //Gegner Asteroid getroffen?
    // this.physics.add.overlap(
    //   this.enemies,
    //   this.asteroids,
    //   this.enemyCollideWithAsteroid,
    //   undefined,
    //   this
    // );

    //Ziel Asteroid getroffen?
    // this.physics.add.overlap(
    //   this.asteroids,
    //   this.target,
    //   this.asteroidCollideWithTarget,
    //   undefined,
    //   this
    // );

    //Ziel erreicht?
    this.physics.add.overlap(
      this.player,
      this.targets,
      this.targetReached,
      undefined,
      this
    );

    // this.physics.add.collider(this.asteroids, this.asteroids);
  }

  update() {
    if (this.gameOver) return;

    //Steuerung
    this.player.move(this.input.activePointer);
    this.targets.changeDirection(this.player);
    // this.enemies.changeDirection(this.player);

    // if (this.enemies.getLength() > 0) {
    //   this.physics.moveToObject(
    //     this.enemies.getClosestToPlayer(this.player),
    //     this.player,
    //     180
    //   );
    // }
  }

  // private setText(text: string) {
  //   this.text.setText(text);
  //   // this.grid.placeAtIndexAndScale(6, this.text, 3, 1);
  // }

  private targetReached(
    _player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _target: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    // Ziel erreicht!
    console.log("Target reached!");

    // this.score++;
    _target.destroy();
    // neuen Gegner und Asteroid erzeugen nur alle 5 Targets bis maximal 15
    // if (this.score % 5 == 0 && this.enemies.getLength() < 15) {
    //   this.enemies.addEnemyInCorner(this.enemySize);

    //   this.asteroids.addInCorner(this.asteroidSize);
    // }

    // this.setText("Saved: " + this.score + "/8");
    if (this.targets.getLength() == 0) {
      // this.cameras.main.flash();
      this.restart();
    }
  }

  private collideWithEnemy(
    player: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _enemy: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    console.log("CollideWithEnemy");

    // this.physics.pause();

    (player as Phaser.Types.Physics.Arcade.ImageWithDynamicBody).setTint(
      0xff0000
    );

    // this.gameOver = true;
    // //ReloadButton
    this.restart();
  }

  private restart() {
    this.physics.pause();
    this.cameras.main.shake(
      undefined,
      undefined,
      undefined,
      (_camera: any, progress: number) => {
        if (progress == 1) {
          this.scene.restart();
        }
      }
    );
    //Save Score if new local or global
    // DataHandler.handleNewLocalScore(this.score);

    // const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
    //   backgroundColor: "black",
    // };
    // this.text
    //   .setPadding(10)
    //   .setStyle(textStyle)
    //   .setDepth(1)
    //   .setInteractive({ useHandCursor: true })
    //   .on(EventKeys.PointerDown, () => {
    //     console.log("Back to Main Menu");
    //     this.scene.start(SceneKeys.MainMenu);
    //   })
    //   .on(EventKeys.PointerOver, () => this.text.setStyle({ fill: "green" }))
    //   .on(EventKeys.PointerOut, () => this.text.setStyle({ fill: "white" }));
    // this.setText("Back\n\n" + this.text.text);
    // this.grid.placeAtIndexAndScale(80, this.text, 5, 2);
  }
}
