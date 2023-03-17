import Phaser from "phaser";
import DirectionKeys from "../consts/DirectionKeys";
// import AudioKeys from "../consts/AudioKeys";
import EventKeys from "../consts/EventKeys";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Asteroids from "../model/Asteroids";
// import Enemies from "../model/Enemies";
import Player from "../model/Player";
// import Target from "../model/Target";
import Targets from "../model/Targets";
import Trees from "../model/Trees";
import { AlignGrid } from "../utils/AlignGrid";
import { Button } from "../utils/Button";
// import DataHandler from "../utils/DataHandler";

export default class GameScene extends Phaser.Scene {
  private gameWidth = 0;
  private gameHeight = 0;

  private targets!: Targets;

  // private enemies!: Enemies;

  private asteroids!: Asteroids;
  private trees!: Trees;

  private player!: Player;

  // private text!: Phaser.GameObjects.Text;

  // private localHighscore = 0;

  // private score!: number;
  private gameOver!: boolean;

  private grid!: AlignGrid;
  private menuGrid!: AlignGrid;

  // private musicRegistered: boolean = false;
  private bgMusic!: Phaser.Sound.BaseSound;
  private musicOn: boolean = false;

  private level: number = 0;
  private maxLevel: number = 4;
  private lastTargetReached: boolean = false;
  private targetIndex: number = 0;
  private dieCounter: number = 0;
  private deathText!: Phaser.GameObjects.Text;

  constructor() {
    console.log("constructor");
    super(SceneKeys.Game);
  }

  init(data: any) {
    console.log("init", data);
    // this.score = 0;
    this.gameOver = false;

    this.gameWidth = this.game.scale.width;
    this.gameHeight = this.game.scale.height;

    // Music
    this.bgMusic = data.music;
    this.musicOn = this.registry.get("musicOn");

    this.level = data.level < this.maxLevel ? data.level : this.maxLevel;
    this.lastTargetReached = false;

    this.menuGrid = new AlignGrid(
      this,
      0,
      0,
      this.gameWidth,
      this.gameHeight,
      11,
      15,
      false
    );
  }

  create() {
    console.log("Game Scene create");

    // Background
    const background = this.add.tileSprite(0, 0, 0, 0, TextureKeys.Grass);

    // const world = this.physics.world.setBounds(
    //   0,
    //   this.gameHeight / 15,
    //   this.gameWidth,
    //   (this.gameHeight * 14) / 15
    // );

    // MusicToogle Button
    const musicOnButton = new Button(0, 0, "Music", this, () => {});
    musicOnButton.on(EventKeys.PointerDown, () => {
      this.musicOn = !this.musicOn;
      this.registry.set("musicOn", this.musicOn);
      if (this.musicOn) {
        this.bgMusic.resume();
      } else {
        this.bgMusic.pause();
      }
    });
    this.menuGrid.placeAtIndexAndScale(9, musicOnButton, 2, 1);

    // Back Button
    const backButton = new Button(0, 0, "Back", this, () => {});
    backButton.on(EventKeys.PointerUp, () => {
      this.dieCounter = 0;
      this.scene.start(SceneKeys.MainMenu);
    });
    this.menuGrid.placeAtIndexAndScale(0, backButton, 2, 1);

    // Score
    // this.localHighscore = DataHandler.localHighscore;

    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };
    // this.text = this.add.text(0, 0, "", style);
    // this.setText("Saved: " + this.score + "/8");

    // Leveltext
    const levelText = this.add.text(
      0,
      0,
      "Level: " + this.level + "/" + this.maxLevel,
      style
    );
    this.menuGrid.placeAtIndexAndScale(3, levelText, 2, 1);

    this.deathText = this.add.text(0, 0, "Death: " + this.dieCounter, style);
    this.menuGrid.placeAtIndexAndScale(6, this.deathText, 2, 1);

    switch (this.level) {
      case 1:
        // Grid
        this.grid = new AlignGrid(
          this,
          0,
          this.gameHeight / 15,
          this.gameWidth,
          (this.gameHeight * 14) / 15,
          3,
          3
        );

        // Background
        this.grid.placeAtIndexAndScale(0, background, 3, 3);

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 3, 3);
        // Player
        this.player = new Player(this, 6, 1, 1, this.grid);

        // Targets
        this.targets = new Targets(this, this.grid);
        this.targets.addTarget(0);
        this.targetIndex = 6;

        // Trees
        this.trees = new Trees(this, this.grid);
        this.trees.addTree(1);
        this.trees.addTree(2);
        this.trees.addTree(7);
        this.trees.addTree(8);

        // Asteroids
        this.asteroids = new Asteroids(this, this.grid);
        this.asteroids.addAsteroid(4, DirectionKeys.Right);
        break;
      case 2:
        // Grid
        this.grid = new AlignGrid(
          this,
          0,
          this.gameHeight / 15,
          this.gameWidth,
          (this.gameHeight * 14) / 15,
          5,
          7
        );

        // Background
        this.grid.placeAtIndexAndScale(0, background, 5, 7);

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 5, 7);
        // Player
        this.player = new Player(this, 30, 1, 1, this.grid);

        // Targets
        this.targets = new Targets(this, this.grid);
        this.targets.addTarget(4);
        this.targetIndex = 30;

        // Trees
        this.trees = new Trees(this, this.grid);
        this.trees.addTree(1);
        this.trees.addTree(16);
        this.trees.addTree(21);
        this.trees.addTree(26);
        this.trees.addTree(31);

        this.trees.addTree(3);
        this.trees.addTree(8);
        this.trees.addTree(13);
        this.trees.addTree(18);
        this.trees.addTree(33);

        // Asteroids
        this.asteroids = new Asteroids(this, this.grid);
        this.asteroids.addAsteroid(22, DirectionKeys.Down);
        this.asteroids.addAsteroid(10, DirectionKeys.Right);
        this.asteroids.addAsteroid(22, DirectionKeys.Right);
        break;
      case 3:
        this.grid = new AlignGrid(
          this,
          0,
          this.gameHeight / 15,
          this.gameWidth,
          (this.gameHeight * 14) / 15,
          11,
          11
        );
        // Background
        this.grid.placeAtIndexAndScale(0, background, 11, 11);

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 11, 11);

        // Player
        this.player = new Player(this, 60, 1, 1, this.grid);

        // Targets
        this.targets = new Targets(this, this.grid);
        this.targets.addTarget(0);
        this.targets.addTarget(10);
        this.targets.addTarget(110);
        this.targets.addTarget(120);
        this.targets.addTarget(24);
        this.targets.addTarget(30);
        this.targets.addTarget(90);
        this.targets.addTarget(96);
        this.targetIndex = 60;

        // Enemies
        // this.enemies = new Enemies(this);
        // this.enemies.addEnemyInCorner(this.enemySize);

        // Asteroids
        this.asteroids = new Asteroids(this, this.grid);
        this.asteroids.addAsteroid(12, DirectionKeys.Right);
        this.asteroids.addAsteroid(20, DirectionKeys.Down);
        this.asteroids.addAsteroid(100, DirectionKeys.Up);
        this.asteroids.addAsteroid(108, DirectionKeys.Left);

        this.asteroids.addAsteroid(36, DirectionKeys.Right);
        this.asteroids.addAsteroid(40, DirectionKeys.Down);
        this.asteroids.addAsteroid(80, DirectionKeys.Up);
        this.asteroids.addAsteroid(84, DirectionKeys.Left);

        // Trees
        this.trees = new Trees(this, this.grid);
        this.trees.addTree(2);
        this.trees.addTree(4);
        this.trees.addTree(5);
        this.trees.addTree(6);
        this.trees.addTree(8);
        this.trees.addTree(22);
        this.trees.addTree(26);
        this.trees.addTree(27);
        this.trees.addTree(28);
        this.trees.addTree(32);
        this.trees.addTree(44);
        this.trees.addTree(46);
        this.trees.addTree(48);
        this.trees.addTree(50);
        this.trees.addTree(52);
        this.trees.addTree(54);
        this.trees.addTree(55);
        this.trees.addTree(57);

        this.trees.addTree(63);
        this.trees.addTree(65);

        this.trees.addTree(66);
        this.trees.addTree(68);
        this.trees.addTree(70);
        this.trees.addTree(72);
        this.trees.addTree(74);
        this.trees.addTree(76);

        this.trees.addTree(88);
        this.trees.addTree(92);
        this.trees.addTree(93);
        this.trees.addTree(94);
        this.trees.addTree(98);

        this.trees.addTree(112);
        this.trees.addTree(114);
        this.trees.addTree(115);
        this.trees.addTree(116);
        this.trees.addTree(118);
        break;

      case 4:
        this.grid = new AlignGrid(
          this,
          0,
          this.gameHeight / 15,
          this.gameWidth,
          (this.gameHeight * 14) / 15,
          11,
          11
        );
        // Background
        this.grid.placeAtIndexAndScale(0, background, 11, 11);

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 11, 11);

        // Player
        this.player = new Player(this, 60, 1, 1, this.grid);

        // Targets
        this.targets = new Targets(this, this.grid);
        this.targets.addTarget(12);
        this.targets.addTarget(20);
        this.targets.addTarget(100);
        this.targets.addTarget(108);
        this.targetIndex = 60;

        // Asteroids
        this.asteroids = new Asteroids(this, this.grid);
        this.asteroids.addAsteroid(0, DirectionKeys.Right);
        this.asteroids.addAsteroid(3, DirectionKeys.Down);
        this.asteroids.addAsteroid(33, DirectionKeys.Up);
        this.asteroids.addAsteroid(36, DirectionKeys.Left);

        this.asteroids.addAsteroid(7, DirectionKeys.Right);
        this.asteroids.addAsteroid(10, DirectionKeys.Down);
        this.asteroids.addAsteroid(40, DirectionKeys.Up);
        this.asteroids.addAsteroid(43, DirectionKeys.Left);

        this.asteroids.addAsteroid(77, DirectionKeys.Right);
        this.asteroids.addAsteroid(80, DirectionKeys.Down);
        this.asteroids.addAsteroid(110, DirectionKeys.Up);
        this.asteroids.addAsteroid(113, DirectionKeys.Left);

        this.asteroids.addAsteroid(84, DirectionKeys.Right);
        this.asteroids.addAsteroid(87, DirectionKeys.Down);
        this.asteroids.addAsteroid(117, DirectionKeys.Up);
        this.asteroids.addAsteroid(120, DirectionKeys.Left);

        this.asteroids.addAsteroid(11, DirectionKeys.Right);
        this.asteroids.addAsteroid(65, DirectionKeys.Left);
        this.asteroids.addAsteroid(99, DirectionKeys.Right);

        this.asteroids.addAsteroid(1, DirectionKeys.Down);
        this.asteroids.addAsteroid(9, DirectionKeys.Down);
        this.asteroids.addAsteroid(115, DirectionKeys.Up);
        // Trees
        this.trees = new Trees(this, this.grid);
        this.trees.addTree(44);
        this.trees.addTree(46);
        this.trees.addTree(47);
        this.trees.addTree(4);
        this.trees.addTree(26);
        this.trees.addTree(37);

        this.trees.addTree(6);
        this.trees.addTree(28);
        this.trees.addTree(39);
        this.trees.addTree(51);
        this.trees.addTree(52);
        this.trees.addTree(54);

        this.trees.addTree(66);
        this.trees.addTree(68);
        this.trees.addTree(69);
        this.trees.addTree(81);
        this.trees.addTree(92);
        this.trees.addTree(114);

        this.trees.addTree(73);
        this.trees.addTree(74);
        this.trees.addTree(76);
        this.trees.addTree(83);
        this.trees.addTree(94);
        this.trees.addTree(116);
        break;
      default:
        this.grid = new AlignGrid(
          this,
          0,
          this.gameHeight / 15,
          this.gameWidth,
          (this.gameHeight * 14) / 15,
          11,
          11
        );
        // Background
        this.grid.placeAtIndexAndScale(0, background, 11, 11);

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 11, 11);

        // Player
        this.player = new Player(this, 60, 1, 1, this.grid);

        this.trees = new Trees(this, this.grid);
        this.asteroids = new Asteroids(this, this.grid);
        this.targets = new Targets(this, this.grid);

        let endTextString = "";
        if (this.dieCounter == 0) {
          endTextString = "You are the best\ndino in the world!";
          // this.targets.addTarget(61).setActive(false);
        } else {
          endTextString = "Next time\ndon't die dino!";
        }
        const endText = this.add.text(0, 0, endTextString, style);
        this.grid.placeAtIndexAndScale(67, endText, 9, 5);
        break;
    }

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

    this.physics.add.overlap(
      this.asteroids,
      this.trees,
      this.asteroidOverlapTree
    );
    this.physics.add.collider(this.player, this.trees);

    //turn on the lines for testing and layout
    // this.menuGrid.showNumbers();
    // this.grid.showNumbers();
  }

  private asteroidOverlapTree(
    asteroid: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    _tree: Phaser.Types.Physics.Arcade.GameObjectWithBody
  ) {
    let asteroidBody = asteroid.body as Phaser.Physics.Arcade.Body;
    asteroidBody.setVelocity(
      -asteroidBody.velocity.x,
      -asteroidBody.velocity.y
    );
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
    if (this.targets.getLength() == 0 && !this.lastTargetReached) {
      // this.cameras.main.flash();
      this.targets.addTarget(this.targetIndex);
      this.lastTargetReached = true;
    } else if (this.targets.getLength() == 0 && this.lastTargetReached) {
      this.restart(true);
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

    this.dieCounter++;
    this.deathText.setText("Death: " + this.dieCounter);
    this.menuGrid.placeAtIndexAndScale(6, this.deathText, 2, 1);

    // this.gameOver = true;
    // //ReloadButton
    this.restart(false);
  }

  private restart(newLevel: boolean) {
    this.physics.pause();
    this.cameras.main.shake(
      undefined,
      undefined,
      undefined,
      (_camera: any, progress: number) => {
        if (progress == 1) {
          this.scene.restart({
            music: this.bgMusic,
            level: newLevel ? ++this.level : this.level,
          });
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
