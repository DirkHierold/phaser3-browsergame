import Phaser from "phaser";
import { DirectionKeys } from "../../../shared/utils/consts/DirectionKeys";
import EventKeys from "../../../shared/utils/consts/EventKeys";
import SceneKeys from "../../../shared/utils/consts/SceneKeys";
import Enemies from "../../../shared/Enemy";
import Player from "../../../shared/Player";
import Targets from "../../../shared/Targets";
import Trees from "../model/Trees";
import { AlignGrid } from "../../../shared/utils/AlignGrid";
import { Button } from "../../../shared/utils/Button";

export default class GameScene extends Phaser.Scene {
  private gameWidth = 0;
  private gameHeight = 0;

  private targets!: Targets;

  private asteroids!: Enemies;
  private trees!: Trees;

  private player!: Player;

  private gameOver!: boolean;

  private grid!: AlignGrid;
  private menuGrid!: AlignGrid;

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

    this.gameOver = false;

    this.gameWidth = this.game.scale.width;
    this.gameHeight = this.game.scale.height;

    // Music
    this.bgMusic = data.music;
    this.musicOn = this.registry.get("musicOn");

    this.level = data.level;
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

    // MusicToggle Button
    const musicOnButton = new Button(0, 0, "Music", this, () => { });
    musicOnButton.on(EventKeys.PointerUp, () => {
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
    const backButton = new Button(0, 0, "Back", this, () => { });
    backButton.on(EventKeys.PointerUp, () => {
      this.dieCounter = 0;
      this.scene.start(SceneKeys.MainMenu);
    });
    this.menuGrid.placeAtIndexAndScale(0, backButton, 2, 1);

    const style: Phaser.Types.GameObjects.Text.TextStyle = {
      font: "20px Arial",
      align: "center",
    };

    // Leveltext
    const levelText = this.add.text(
      0,
      0,
      "Level: " +
      (this.level < this.maxLevel ? this.level : this.maxLevel) +
      "/" +
      this.maxLevel,
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

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 3, 3);
        // Player
        this.player = new Player(this);
        this.grid.placeAtIndexAndScale(6, this.player, 1, 1);

        // Targets
        this.targets = new Targets(this);
        const target1= this.targets.addTarget(0,0);

        this.grid.placeAtIndexAndScale(0, target1, 1, 1);
        this.targetIndex = 6;

        // Trees
        this.trees = new Trees(this, this.grid);
        this.trees.addTree(1);
        this.trees.addTree(2);
        this.trees.addTree(7);
        this.trees.addTree(8);

        // Asteroids
        this.asteroids = new Enemies(this);
        const asteroid1  = this.asteroids.addEnemyWithDirection(DirectionKeys.Right);
        this.grid.placeAtIndexAndScale(4, asteroid1, 1, 1);
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

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 5, 7);
        // Player
        this.player = new Player(this);
        this.grid.placeAtIndexAndScale(30, this.player, 1, 1);

        // Targets
        this.targets = new Targets(this);
        const target2 = this.targets.addTarget(0,0);
        this.grid.placeAtIndexAndScale(4, target2, 1, 1);
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
        this.asteroids = new Enemies(this);
        const asteroidA = this.asteroids.addEnemyWithDirection(DirectionKeys.Right);
        const asteroidB = this.asteroids.addEnemyWithDirection(DirectionKeys.Down);
        const asteroidC = this.asteroids.addEnemyWithDirection(DirectionKeys.Right);
        this.grid.placeAtIndexAndScale(10, asteroidA, 1, 1);
        this.grid.placeAtIndexAndScale(22, asteroidB, 1, 1);
        this.grid.placeAtIndexAndScale(22, asteroidC, 1, 1);
        asteroidA.setDepth && asteroidA.setDepth(3);
        asteroidB.setDepth && asteroidB.setDepth(3);
        asteroidC.setDepth && asteroidC.setDepth(3);
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

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 11, 11);

        // Player
        this.player = new Player(this);
        this.grid.placeAtIndexAndScale(60, this.player, 1, 1);

        // Targets
        this.targets = new Targets(this);

        const target3 = [
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0)
        ];
        this.grid.placeAtIndexAndScale(0, target3[0], 1, 1);
        this.grid.placeAtIndexAndScale(10, target3[1], 1, 1);
        this.grid.placeAtIndexAndScale(110, target3[2], 1, 1);
        this.grid.placeAtIndexAndScale(120, target3[3], 1, 1);
        this.grid.placeAtIndexAndScale(24, target3[4], 1, 1);
        this.grid.placeAtIndexAndScale(30, target3[5], 1, 1);
        this.grid.placeAtIndexAndScale(90, target3[6], 1, 1);
        this.grid.placeAtIndexAndScale(96, target3[7], 1, 1);
        
        this.targetIndex = 60;

        // Asteroids
        this.asteroids = new Enemies(this);
        const asteroids3 = [
          this.asteroids.addEnemyWithDirection(DirectionKeys.Right),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Down),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Right),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Down),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left)
        ];
        this.grid.placeAtIndexAndScale(12, asteroids3[0], 1, 1);
        this.grid.placeAtIndexAndScale(20, asteroids3[1], 1, 1);
        this.grid.placeAtIndexAndScale(100, asteroids3[2], 1, 1);
        this.grid.placeAtIndexAndScale(108, asteroids3[3], 1, 1);
        this.grid.placeAtIndexAndScale(36, asteroids3[4], 1, 1);
        this.grid.placeAtIndexAndScale(40, asteroids3[5], 1, 1);
        this.grid.placeAtIndexAndScale(80, asteroids3[6], 1, 1);
        this.grid.placeAtIndexAndScale(84, asteroids3[7], 1, 1);
        asteroids3.forEach(a => a.setDepth && a.setDepth(3));

        // Trees
        this.trees = new Trees(this, this.grid);
        [2,4,5,6,8,22,26,27,28,32,44,46,48,50,52,54,55,57,63,65,66,68,70,72,74,76,88,92,93,94,98,112,114,115,116,118].forEach(idx => this.trees.addTree(idx));
        this.trees.setDepth && this.trees.setDepth(1);
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

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 11, 11);

        // Player
        this.player = new Player(this);
        this.grid.placeAtIndexAndScale(60, this.player, 1, 1);

        // Targets
        this.targets = new Targets(this);
        const target4 = [
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          this.targets.addTarget(0, 0),
          ]
        this.grid.placeAtIndexAndScale(12, target4[0], 1, 1);
        this.grid.placeAtIndexAndScale(20, target4[1], 1, 1);
        this.grid.placeAtIndexAndScale(100, target4[2], 1, 1);
        this.grid.placeAtIndexAndScale(108, target4[3], 1, 1);
        this.targetIndex = 60;

        // Asteroids
        this.asteroids = new Enemies(this);
        const asteroids4 = [
          this.asteroids.addEnemyWithDirection(DirectionKeys.Right),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Down),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Right),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Down),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Right),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Down),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Right),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Down),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Left),
          this.asteroids.addEnemyWithDirection(DirectionKeys.Up)
        ];
        [0,3,33,36,7,10,40,43,77,80,110,113,84,87,117,120,65,115].forEach((idx, i) => {
          this.grid.placeAtIndexAndScale(idx, asteroids4[i], 1, 1);
          asteroids4[i].setDepth && asteroids4[i].setDepth(3);
        });

        // Trees
        this.trees = new Trees(this, this.grid);
        [44,46,47,4,26,37,6,28,39,51,52,54,66,68,69,81,92,114,73,74,76,83,94,116].forEach(idx => this.trees.addTree(idx));
        this.trees.setDepth && this.trees.setDepth(1);
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

        // WorldBounds
        this.grid.placeAtIndexAndScale(0, this.physics.world, 11, 11);

        // Player
        this.player = new Player(this);
        this.grid.placeAtIndexAndScale(60, this.player, 1, 1);

        this.trees = new Trees(this, this.grid);
        this.asteroids = new Enemies(this);
        this.targets = new Targets(this);

        let endTextString = "";
        if (this.dieCounter === 0) {
          endTextString = "You are the best\ndino in the world!";
        } else {
          endTextString = "Next time\ndon't die dino!";
        }
        const endText = this.add.text(0, 0, endTextString, style);
        this.grid.placeAtIndexAndScale(67, endText, 9, 5);
        break;
    }

    // Player hit by asteroid?
    this.physics.add.overlap(
      this.player,
      this.asteroids,
      this.collideWithEnemy,
      undefined,
      this
    );

    // Target reached?
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

  // Fix overlap/collider callback signatures for Phaser 3 ArcadePhysicsCallback
  private asteroidOverlapTree(
    object1: any,
    object2: any
  ): void {
    // asteroid hits tree
    const asteroid = object1 as Phaser.Physics.Arcade.Image;
    const asteroidBody = asteroid.body as Phaser.Physics.Arcade.Body;
    if (asteroidBody) {
      asteroidBody.setVelocity(-asteroidBody.velocity.x, -asteroidBody.velocity.y);
    }
  }

  update() {
    if (this.gameOver) return;

    // Control
    this.player.move(this.input.activePointer);
    this.targets.changeDirection(this.player);
    this.asteroids.changeDirection(this.player);
  }

  private targetReached(
    object1: any,
    object2: any
  ): void {
    // Target reached!
    console.log("Target reached!");
    object2.destroy();
    if (this.targets.getLength() === 0 && !this.lastTargetReached) {
      const lastTarget = this.targets.addTarget(0,0);
      this.grid.placeAtIndexAndScale(this.targetIndex, lastTarget, 1, 1);
      this.lastTargetReached = true;
    } else if (this.targets.getLength() === 0 && this.lastTargetReached) {
      this.restart(true);
    }
  }

  private collideWithEnemy(
    object1: any,
    object2: any
  ): void {
    // Player hit by enemy
    const player = object1 as Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    player.setTint(0xff0000);
    this.dieCounter++;
    this.deathText.setText("Death: " + this.dieCounter);
    this.menuGrid.placeAtIndexAndScale(6, this.deathText, 2, 1);
    this.restart(false);
  }

  private restart(newLevel: boolean) {
    this.physics.pause();
    this.cameras.main.shake(
      undefined,
      undefined,
      undefined,
      (_camera: any, progress: number) => {
        if (progress === 1) {
          this.scene.restart({
            music: this.bgMusic,
            level: newLevel ? ++this.level : this.level,
          });
        }
      }
    );
  }
}
