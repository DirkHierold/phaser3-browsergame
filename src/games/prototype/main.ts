import Phaser from 'phaser';
import { InputController } from '../../shared/InputController';
import { OrientationManager } from '../../shared/OrientationManager';
import { ResizeManager } from '../../shared/ResizeManager';
import { SoundManager } from '../../shared/SoundManager';

import LoadingScene from './LoadingScene';
import GameOverScene from './GameOverScene';

enum PlayerState {
  IDLE = 'idle',
  WALKING = 'walking',
  RUNNING = 'running',
  WALKING_ATTACK = 'walking-attack',
  RUNNING_ATTACK = 'running-attack',
  ATTACKING = 'attacking',
  HURT = 'hurt',
  DEATH = 'death'
}

enum Direction {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right'
}

class PrototypeGame extends Phaser.Scene {
  constructor() {
    super({ key: 'PrototypeGame' });
  }

  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  inputController: InputController;

  currentDirection: string = '';
  playerSpeed: number = 2;
  runSpeed: number = 3;
  isRunning: boolean = false;
  
  // Continuously tracked movement state for reliable mobile attacks
  currentMovementState: { isMoving: boolean; isRunning: boolean } = { isMoving: false, isRunning: false };
  
  // Double-tap detection for desktop
  lastKeyPress: { [key: string]: number } = {};
  doubleTapThreshold: number = 300; // milliseconds
  worldBorder: Phaser.GameObjects.Graphics;
  slime: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  slimeType: number = 1;
  swordHitbox: Phaser.GameObjects.Zone;
  swingSounds: Phaser.Sound.BaseSound[];
  bloodSound: Phaser.Sound.BaseSound;
  footstepSound: Phaser.Sound.BaseSound;
  loseSound: Phaser.Sound.BaseSound;


  playerState: PlayerState = PlayerState.IDLE;
  facingDirection: Direction = Direction.DOWN;
  isDead: boolean = false;

  hearts: Phaser.GameObjects.Sprite[] = [];
  maxHealth: number = 3;
  currentHealth: number = 3;

  preload() {
    // Assets are now loaded in LoadingScene
  }

  create() {
    this.currentHealth = this.maxHealth;
    this.hearts = [];
    this.isDead = false;
    this.physics.world.bounds.width = this.scale.width;
    this.physics.world.bounds.height = this.scale.height;
    this.createBackground();
    this.createAnimations();
    this.createSounds();
    this.createPlayer();
    this.createSlime();
    this.createHearts();
    this.inputController = new InputController(this);
    this.inputController.initialize((isMoving, isRunning) => {
      if (isRunning) {
        // Player is running - perform running attack
        this.performRunningAttack();
      } else if (isMoving) {
        // Player is walking - perform walking attack  
        this.performWalkingAttack();
      } else {
        // Player is standing still - perform standing attack
        this.performAttack();
      }
    });
    this.createWorldBorder();
    this.setupCollisions();

    OrientationManager.getInstance().updateScene(this);
    ResizeManager.getInstance().initialize(this, this.handleResize.bind(this));
    
    
  }

  handleResize() {
    if (!this.physics?.world?.bounds) return;
    
    // Store relative positions before resize
    const relativePlayerX = this.player ? this.player.x / this.physics.world.bounds.width : 0.5;
    const relativePlayerY = this.player ? this.player.y / this.physics.world.bounds.height : 0.5;
    const relativeSlimeX = this.slime ? this.slime.x / this.physics.world.bounds.width : 0.5;
    const relativeSlimeY = this.slime ? this.slime.y / this.physics.world.bounds.height : 0.5;

    this.updateWorldBounds();
    this.updateWorldBorder();

    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);

    // Restore player position and scale
    if (this.player) {
      this.player.x = relativePlayerX * this.physics.world.bounds.width;
      this.player.y = relativePlayerY * this.physics.world.bounds.height;
      this.player.setScale(3 * baseScale);
    }

    // Restore slime position and scale
    if (this.slime) {
      this.slime.x = relativeSlimeX * this.physics.world.bounds.width;
      this.slime.y = relativeSlimeY * this.physics.world.bounds.height;
      this.slime.setScale(2 * baseScale);
    }

    // Update sword hitbox size for both desktop and mobile
    if (this.swordHitbox) {
      const hitboxRadius = this.sys.game.device.os.desktop ? 60 * baseScale : 50 * baseScale;
      this.swordHitbox.setSize(hitboxRadius * 2, hitboxRadius * 2);
      (this.swordHitbox.body as Phaser.Physics.Arcade.Body).setCircle(hitboxRadius);
    }

    this.inputController.updatePositions();
    
    // Update hearts position
    this.hearts.forEach((heart, i) => {
      heart.setPosition(20 + i * 40, 20);
    });

    // Update depth sorting after position changes
    this.updateDepthSorting();
  }

  updateWorldBounds() {
    this.physics.world.bounds.width = this.scale.width;
    this.physics.world.bounds.height = this.scale.height;
  }

  updateWorldBorder() {
    if (!this.worldBorder) return;

    this.worldBorder.clear();
    this.worldBorder.lineStyle(4, 0x000000);
    this.worldBorder.strokeRect(0, 0, this.scale.width, this.scale.height);
  }


  createPlayer() {
    this.player = this.physics.add.sprite(this.scale.width / 2, this.scale.height / 2, 'playerIdle', 0);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.player.body.setCircle(8, 24, 32);

    // Scale player based on screen size
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);
    this.player.setScale(3 * baseScale);

    this.player.anims.play('idle-down');
    this.createSwordHitbox();
  }

  createAnimations() {
    if (this.anims.exists('idle-down')) return;
    
    this.anims.create({
      key: 'idle-down',
      frames: this.anims.generateFrameNames('playerIdle', {
        frames: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'idle-left',
      frames: this.anims.generateFrameNames('playerIdle', {
        frames: [
          12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'idle-right',
      frames: this.anims.generateFrameNames('playerIdle', {
        frames: [
          24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'idle-up',
      frames: this.anims.generateFrameNames('playerIdle', {
        frames: [
          36, 37, 38, 39
        ]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'walking-left',
      frames: this.anims.generateFrameNames('playerWalk', {
        frames: [
          6, 7, 8, 9, 10, 11
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'walking-right',
      frames: this.anims.generateFrameNames('playerWalk', {
        frames: [
          12, 13, 14, 15, 16, 17
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'walking-up',
      frames: this.anims.generateFrameNames('playerWalk', {
        frames: [
          18, 19, 20, 21, 22, 23
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'walking-down',
      frames: this.anims.generateFrameNames('playerWalk', {
        frames: [
          0, 1, 2, 3, 4, 5
        ]
      }),
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'running-left',
      frames: this.anims.generateFrameNames('playerRun', {
        frames: [8, 9, 10, 11, 12, 13, 14, 15]
      }),
      frameRate: 15,
      repeat: -1
    });

    this.anims.create({
      key: 'running-right',
      frames: this.anims.generateFrameNames('playerRun', {
        frames: [16, 17, 18, 19, 20, 21, 22, 23]
      }),
      frameRate: 15,
      repeat: -1
    });

    this.anims.create({
      key: 'running-up',
      frames: this.anims.generateFrameNames('playerRun', {
        frames: [24, 25, 26, 27, 28, 29, 30, 31]
      }),
      frameRate: 15,
      repeat: -1
    });

    this.anims.create({
      key: 'running-down',
      frames: this.anims.generateFrameNames('playerRun', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7]
      }),
      frameRate: 15,
      repeat: -1
    });

    this.anims.create({
      key: 'attack-down',
      frames: this.anims.generateFrameNames('playerAttack', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'attack-left',
      frames: this.anims.generateFrameNames('playerAttack', {
        frames: [8, 9, 10, 11, 12, 13, 14, 15]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'attack-right',
      frames: this.anims.generateFrameNames('playerAttack', {
        frames: [16, 17, 18, 19, 20, 21, 22, 23]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'attack-up',
      frames: this.anims.generateFrameNames('playerAttack', {
        frames: [24, 25, 26, 27, 28, 29, 30, 31]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'hurt-down',
      frames: this.anims.generateFrameNames('playerHurt', {
        frames: [0, 1, 2, 3, 4]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'hurt-left',
      frames: this.anims.generateFrameNames('playerHurt', {
        frames: [5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'hurt-right',
      frames: this.anims.generateFrameNames('playerHurt', {
        frames: [10, 11, 12, 13, 14]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'hurt-up',
      frames: this.anims.generateFrameNames('playerHurt', {
        frames: [15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    // SLIME 1 ANIMATIONS
    this.anims.create({
      key: 'slime1-idle-down',
      frames: this.anims.generateFrameNames('slime1Idle', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-idle-up',
      frames: this.anims.generateFrameNames('slime1Idle', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-idle-left',
      frames: this.anims.generateFrameNames('slime1Idle', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-idle-right',
      frames: this.anims.generateFrameNames('slime1Idle', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-walk-down',
      frames: this.anims.generateFrameNames('slime1Walk', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-walk-up',
      frames: this.anims.generateFrameNames('slime1Walk', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-walk-left',
      frames: this.anims.generateFrameNames('slime1Walk', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-walk-right',
      frames: this.anims.generateFrameNames('slime1Walk', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime1-attack-down',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-attack-up',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-attack-left',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-attack-right',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-hurt-down',
      frames: this.anims.generateFrameNames('slime1Hurt', {
        frames: [0, 1, 2, 3, 4]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-hurt-up',
      frames: this.anims.generateFrameNames('slime1Hurt', {
        frames: [5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-hurt-left',
      frames: this.anims.generateFrameNames('slime1Hurt', {
        frames: [10, 11, 12, 13, 14]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-hurt-right',
      frames: this.anims.generateFrameNames('slime1Hurt', {
        frames: [15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-death-down',
      frames: this.anims.generateFrameNames('slime1Death', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-death-up',
      frames: this.anims.generateFrameNames('slime1Death', {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-death-left',
      frames: this.anims.generateFrameNames('slime1Death', {
        frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-death-right',
      frames: this.anims.generateFrameNames('slime1Death', {
        frames: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
      }),
      frameRate: 12,
      repeat: 0
    });

    // SLIME 2 ANIMATIONS
    this.anims.create({
      key: 'slime2-idle-down',
      frames: this.anims.generateFrameNames('slime2Idle', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-idle-up',
      frames: this.anims.generateFrameNames('slime2Idle', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-idle-left',
      frames: this.anims.generateFrameNames('slime2Idle', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-idle-right',
      frames: this.anims.generateFrameNames('slime2Idle', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-walk-down',
      frames: this.anims.generateFrameNames('slime2Walk', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-walk-up',
      frames: this.anims.generateFrameNames('slime2Walk', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-walk-left',
      frames: this.anims.generateFrameNames('slime2Walk', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-walk-right',
      frames: this.anims.generateFrameNames('slime2Walk', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime2-attack-down',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-attack-up',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-attack-left',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-attack-right',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-hurt-down',
      frames: this.anims.generateFrameNames('slime2Hurt', {
        frames: [0, 1, 2, 3, 4]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-hurt-up',
      frames: this.anims.generateFrameNames('slime2Hurt', {
        frames: [5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-hurt-left',
      frames: this.anims.generateFrameNames('slime2Hurt', {
        frames: [10, 11, 12, 13, 14]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-hurt-right',
      frames: this.anims.generateFrameNames('slime2Hurt', {
        frames: [15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-death-down',
      frames: this.anims.generateFrameNames('slime2Death', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-death-up',
      frames: this.anims.generateFrameNames('slime2Death', {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-death-left',
      frames: this.anims.generateFrameNames('slime2Death', {
        frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-death-right',
      frames: this.anims.generateFrameNames('slime2Death', {
        frames: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
      }),
      frameRate: 12,
      repeat: 0
    });

    // SLIME 3 ANIMATIONS
    this.anims.create({
      key: 'slime3-idle-down',
      frames: this.anims.generateFrameNames('slime3Idle', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-idle-up',
      frames: this.anims.generateFrameNames('slime3Idle', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-idle-left',
      frames: this.anims.generateFrameNames('slime3Idle', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-idle-right',
      frames: this.anims.generateFrameNames('slime3Idle', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-walk-down',
      frames: this.anims.generateFrameNames('slime3Walk', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-walk-up',
      frames: this.anims.generateFrameNames('slime3Walk', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-walk-left',
      frames: this.anims.generateFrameNames('slime3Walk', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-walk-right',
      frames: this.anims.generateFrameNames('slime3Walk', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: 'slime3-attack-down',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-attack-up',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-attack-left',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-attack-right',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-hurt-down',
      frames: this.anims.generateFrameNames('slime3Hurt', {
        frames: [0, 1, 2, 3, 4]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-hurt-up',
      frames: this.anims.generateFrameNames('slime3Hurt', {
        frames: [5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-hurt-left',
      frames: this.anims.generateFrameNames('slime3Hurt', {
        frames: [10, 11, 12, 13, 14]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-hurt-right',
      frames: this.anims.generateFrameNames('slime3Hurt', {
        frames: [15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-death-down',
      frames: this.anims.generateFrameNames('slime3Death', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-death-up',
      frames: this.anims.generateFrameNames('slime3Death', {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-death-left',
      frames: this.anims.generateFrameNames('slime3Death', {
        frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-death-right',
      frames: this.anims.generateFrameNames('slime3Death', {
        frames: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'walking-attack-down',
      frames: this.anims.generateFrameNames('playerWalkAttack', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'walking-attack-left',
      frames: this.anims.generateFrameNames('playerWalkAttack', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'walking-attack-right',
      frames: this.anims.generateFrameNames('playerWalkAttack', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'walking-attack-up',
      frames: this.anims.generateFrameNames('playerWalkAttack', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 10,
      repeat: 0
    });

    this.anims.create({
      key: 'running-attack-down',
      frames: this.anims.generateFrameNames('playerRunAttack', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'running-attack-left',
      frames: this.anims.generateFrameNames('playerRunAttack', {
        frames: [8, 9, 10, 11, 12, 13, 14, 15]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'running-attack-right',
      frames: this.anims.generateFrameNames('playerRunAttack', {
        frames: [16, 17, 18, 19, 20, 21, 22, 23]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'running-attack-up',
      frames: this.anims.generateFrameNames('playerRunAttack', {
        frames: [24, 25, 26, 27, 28, 29, 30, 31]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'death-down',
      frames: this.anims.generateFrameNames('playerDeath', {
        frames: [0, 1, 2, 3, 4, 5, 6]
      }),
      frameRate: 8,
      repeat: 0
    });

    this.anims.create({
      key: 'death-left',
      frames: this.anims.generateFrameNames('playerDeath', {
        frames: [7, 8, 9, 10, 11, 12, 13]
      }),
      frameRate: 8,
      repeat: 0
    });

    this.anims.create({
      key: 'death-right',
      frames: this.anims.generateFrameNames('playerDeath', {
        frames: [14, 15, 16, 17, 18, 19, 20]
      }),
      frameRate: 8,
      repeat: 0
    });

    this.anims.create({
      key: 'death-up',
      frames: this.anims.generateFrameNames('playerDeath', {
        frames: [21, 22, 23, 24, 25, 26, 27]
      }),
      frameRate: 8,
      repeat: 0
    });
  }

  createBackground() {
    this.cameras.main.setBackgroundColor('#228B22');
  }

  createWorldBorder() {
    this.worldBorder = this.add.graphics();
    this.worldBorder.lineStyle(4, 0x000000);
    this.worldBorder.strokeRect(0, 0, this.scale.width, this.scale.height);
  }



  update(): void {
    this.updateInputState();
    this.updatePlayerState();
    this.handleMovement();
    this.updateAnimation();
    this.updateSwordHitbox();
    this.updateDepthSorting();
  }

  updateInputState() {
    const inputState = this.inputController.getInputState();
    this.currentDirection = inputState.direction;
    this.isRunning = inputState.isRunning;
    
    // Continuously track movement state for reliable mobile attacks
    this.currentMovementState = {
      isMoving: inputState.isMoving,
      isRunning: inputState.isRunning
    };

    if (this.currentDirection !== '' && !this.footstepSound.isPlaying && this.currentHealth > 0) {
      // Adjust footstep volume and rate based on running
      const volume = this.isRunning ? 0.3 : 0.2;
      const rate = this.isRunning ? 1.3 : 1.0;
      this.footstepSound.play({ loop: true, volume, rate });
    } else if ((this.currentDirection === '' || this.currentHealth === 0) && this.footstepSound.isPlaying) {
      this.footstepSound.stop();
    }
  }

  updatePlayerState() {
    // Don't change state if player is dead or playing death animation
    if (this.isDead || this.playerState === PlayerState.DEATH) {
      return;
    }

    // Don't change state if animation is playing (except for transitions)
    if (this.player.anims.isPlaying &&
      (this.playerState === PlayerState.ATTACKING ||
        this.playerState === PlayerState.HURT ||
        this.playerState === PlayerState.WALKING_ATTACK ||
        this.playerState === PlayerState.RUNNING_ATTACK)) {

      // Allow transition from ATTACKING to movement attacks
      if (this.playerState === PlayerState.ATTACKING && this.currentDirection !== '') {
        const newState = this.isRunning ? PlayerState.RUNNING_ATTACK : PlayerState.WALKING_ATTACK;
        const animKey = this.isRunning ? 'running-attack' : 'walking-attack';
        
        this.playerState = newState;
        this.facingDirection = this.getDirectionFromInput(this.currentDirection);
        const currentFrame = this.player.anims.currentFrame?.index || 0;
        this.player.anims.play(`${animKey}-${this.facingDirection}`);
        if (this.player.anims.currentAnim?.frames) {
          this.player.anims.setCurrentFrame(this.player.anims.currentAnim.frames[Math.min(currentFrame, 5)]);
        }
      }
      return;
    }

    // Normal state transitions when no priority animation is playing
    if (this.currentDirection !== '') {
      if (this.isRunning) {
        this.playerState = PlayerState.RUNNING;
      } else {
        this.playerState = PlayerState.WALKING;
      }
      this.facingDirection = this.getDirectionFromInput(this.currentDirection);
    } else {
      this.playerState = PlayerState.IDLE;
    }
  }

  getDirectionFromInput(input: string): Direction {
    if (input === 'up') return Direction.UP;
    if (input === 'down') return Direction.DOWN;
    if (input.includes('right')) return Direction.RIGHT;
    if (input.includes('left')) return Direction.LEFT;
    return this.facingDirection;
  }

  handleMovement() {
    if (this.isDead || this.playerState === PlayerState.DEATH || 
        (this.playerState !== PlayerState.WALKING && 
         this.playerState !== PlayerState.RUNNING &&
         this.playerState !== PlayerState.WALKING_ATTACK &&
         this.playerState !== PlayerState.RUNNING_ATTACK)) return;

    // Determine current speed based on running state
    const currentSpeed = this.isRunning ? this.runSpeed : this.playerSpeed;
    
    const movements: Record<string, { x: number; y: number }> = {
      'up': { x: 0, y: -currentSpeed },
      'down': { x: 0, y: currentSpeed },
      'left': { x: -currentSpeed, y: 0 },
      'right': { x: currentSpeed, y: 0 },
      'upright': { x: currentSpeed, y: -currentSpeed },
      'downright': { x: currentSpeed, y: currentSpeed },
      'downleft': { x: -currentSpeed, y: currentSpeed },
      'upleft': { x: -currentSpeed, y: -currentSpeed }
    };

    const movement = movements[this.currentDirection];
    if (movement) {
      this.player.x += movement.x;
      this.player.y += movement.y;
    }
  }

  updateAnimation() {
    // Never update animation if player is dead (even after animation completes)
    if (this.isDead) {
      return;
    }

    // Only update animation if no priority animation is playing
    if (this.player.anims.isPlaying &&
      (this.playerState === PlayerState.ATTACKING ||
        this.playerState === PlayerState.HURT ||
        this.playerState === PlayerState.WALKING_ATTACK ||
        this.playerState === PlayerState.RUNNING_ATTACK ||
        this.playerState === PlayerState.DEATH)) {
      return;
    }

    const animKey = `${this.playerState}-${this.facingDirection}`;
    if (!this.player.anims.isPlaying || this.player.anims.currentAnim?.key !== animKey) {
      this.player.anims.play(animKey);
    }
  }

  createSlime() {
    this.respawnSlime();
  }

  respawnSlime() {
    const x = Phaser.Math.Between(100, this.scale.width - 100);
    const y = Phaser.Math.Between(100, this.scale.height - 100);
    const directions = ['down', 'up', 'left', 'right'];
    const randomDirection = Phaser.Utils.Array.GetRandom(directions);
    
    // Randomly choose slime type (1, 2, or 3)
    this.slimeType = Phaser.Math.Between(1, 3);

    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);

    if (this.slime) {
      this.slime.destroy();
    }
    
    // Use appropriate spritesheet based on slime type
    const spriteKey = `slime${this.slimeType}Idle`;
    this.slime = this.physics.add.sprite(x, y, spriteKey, 0);
    this.slime.setScale(2 * baseScale);
    this.slime.body.setCircle(7, 26, 26);
    this.slime.anims.play(`slime${this.slimeType}-idle-${randomDirection}`);
    const slimeBottomY = this.slime.y + (this.slime.displayHeight / 2);
    this.slime.setDepth(slimeBottomY);
    
    // Re-establish collision detection for the new slime
    this.setupSlimeCollisions();
  }

  createSwordHitbox() {
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);
    const hitboxRadius = this.sys.game.device.os.desktop ? 60 * baseScale : 50;
    this.swordHitbox = this.add.zone(0, 0, hitboxRadius * 2, hitboxRadius * 2);
    this.physics.add.existing(this.swordHitbox);
    (this.swordHitbox.body as Phaser.Physics.Arcade.Body).setCircle(hitboxRadius);
    (this.swordHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
  }

  setupCollisions() {
    this.setupSlimeCollisions();
  }

  setupSlimeCollisions() {
    if (!this.slime) return;
    
    // Clear any existing collisions for this slime to prevent duplicates
    if (this.swordHitbox && this.slime) {
      const existingColliders = this.physics.world.colliders.getActive();
      existingColliders.forEach((collider: any) => {
        if ((collider.object1 === this.swordHitbox || collider.object2 === this.swordHitbox) &&
            (collider.object1 === this.slime || collider.object2 === this.slime)) {
          this.physics.world.removeCollider(collider);
        }
        if ((collider.object1 === this.player || collider.object2 === this.player) &&
            (collider.object1 === this.slime || collider.object2 === this.slime)) {
          this.physics.world.removeCollider(collider);
        }
      });
    }
    
    // Set up fresh collision detection for the current slime
    this.physics.add.overlap(this.swordHitbox, this.slime, () => {
      this.killSlime();
    });

    this.physics.add.overlap(this.player, this.slime, () => {
      if (this.playerState !== PlayerState.ATTACKING && this.playerState !== PlayerState.HURT) {
        this.hurtPlayer();
      }
    });
  }

  hurtPlayer() {
    this.playerState = PlayerState.HURT;
    this.player.anims.play(`hurt-${this.facingDirection}`);
    this.footstepSound.stop();

    this.takeDamage();
    this.cameras.main.shake(200, 0.01);

    const pushDistance = 30;
    const dx = this.player.x - this.slime.x;
    const dy = this.player.y - this.slime.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 0) {
      this.player.x += (dx / distance) * pushDistance;
      this.player.y += (dy / distance) * pushDistance;
    }

    this.player.once('animationcomplete', () => {
      this.playerState = PlayerState.IDLE;
    });
  }

  killSlime() {
    const currentAnim = this.slime.anims.currentAnim?.key || `slime${this.slimeType}-idle-down`;
    if (currentAnim.includes('death')) return;

    const direction = currentAnim.split('-')[2] || 'down';
    this.slime.anims.play(`slime${this.slimeType}-death-${direction}`);
    this.bloodSound.play({ volume: 0.3 });
    this.slime.once('animationcomplete', () => {
      this.respawnSlime();
    });
  }

  updateSwordHitbox() {
    if (!this.swordHitbox?.body) return;

    const body = this.swordHitbox.body as Phaser.Physics.Arcade.Body;
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);

    if (this.playerState === PlayerState.WALKING_ATTACK || 
        this.playerState === PlayerState.RUNNING_ATTACK || 
        this.playerState === PlayerState.ATTACKING) {
      body.enable = true;
      const positions = {
        [Direction.DOWN]: { x: this.player.x, y: this.player.y + 23 * baseScale },
        [Direction.UP]: { x: this.player.x, y: this.player.y - 13 * baseScale },
        [Direction.LEFT]: { x: this.player.x - 20 * baseScale, y: this.player.y },
        [Direction.RIGHT]: { x: this.player.x + 20 * baseScale, y: this.player.y }
      };
      const pos = positions[this.facingDirection];
      this.swordHitbox.setPosition(pos.x, pos.y);
    } else {
      body.enable = false;
    }
  }

  createSounds() {
    this.swingSounds = [
      this.sound.add('swing1'),
      this.sound.add('swing2'),
      this.sound.add('swing3')
    ];
    this.bloodSound = this.sound.add('blood');
    this.footstepSound = this.sound.add('footstep');
    this.loseSound = this.sound.add('lose');
  }

  playRandomSwingSound() {
    const randomSound = Phaser.Utils.Array.GetRandom(this.swingSounds);
    randomSound.play();
  }

  performRunningAttack() {
    if (this.playerState === PlayerState.ATTACKING || this.playerState === PlayerState.HURT) return;

    this.playerState = PlayerState.RUNNING_ATTACK;
    const attackAnim = `running-attack-${this.facingDirection}`;
    this.player.anims.play(attackAnim);
    this.playRandomSwingSound();

    this.player.once('animationcomplete', () => {
      this.playerState = PlayerState.RUNNING;
    });

    // Enable sword hitbox
    if (this.swordHitbox?.body) {
      (this.swordHitbox.body as Phaser.Physics.Arcade.Body).enable = true;
    }
  }

  performWalkingAttack() {
    if (this.playerState === PlayerState.ATTACKING || this.playerState === PlayerState.HURT) return;

    this.playerState = PlayerState.WALKING_ATTACK;
    const attackAnim = `walking-attack-${this.facingDirection}`;
    this.player.anims.play(attackAnim);
    this.playRandomSwingSound();

    this.player.once('animationcomplete', () => {
      this.playerState = PlayerState.WALKING;
    });

    // Enable sword hitbox
    if (this.swordHitbox?.body) {
      (this.swordHitbox.body as Phaser.Physics.Arcade.Body).enable = true;
    }
  }

  performAttack() {
    if (this.playerState === PlayerState.ATTACKING || this.playerState === PlayerState.HURT) return;

    this.playerState = PlayerState.ATTACKING;
    const attackAnim = `attack-${this.facingDirection}`;
    this.player.anims.play(attackAnim);
    this.playRandomSwingSound();

    this.player.once('animationcomplete', () => {
      this.playerState = PlayerState.IDLE;
    });
  }

  createHearts() {
    if (!this.anims.exists('heart-damage')) {
      this.anims.create({
        key: 'heart-damage',
        frames: [{ key: 'heartFull' }, { key: 'heartHalf' }, { key: 'heartEmpty' }],
        frameRate: 5,
        repeat: 0
      });
    }

    for (let i = 0; i < this.maxHealth; i++) {
      const heart = this.add.sprite(20 + i * 40, 20, 'heartFull')
        .setOrigin(0, 0)
        .setScale(0.5)
        .setScrollFactor(0)
        .setDepth(100);
      this.hearts.push(heart);
    }
  }

  takeDamage() {
    if (this.currentHealth > 0) {
      this.currentHealth--;
      this.updateHeartDisplay();
      if (this.currentHealth === 0) {
        this.playerState = PlayerState.DEATH;
        this.footstepSound.stop();
        SoundManager.getInstance().pauseBackgroundMusic();
        this.loseSound.play();
        this.player.anims.play(`death-${this.facingDirection}`);
        this.player.once('animationcomplete', () => {
          // Set dead flag AFTER animation completes
          this.isDead = true;
          // Keep player on the last frame of death animation
          const deathAnim = this.player.anims.currentAnim;
          if (deathAnim && deathAnim.frames.length > 0) {
            const lastFrame = deathAnim.frames[deathAnim.frames.length - 1];
            this.player.setFrame(lastFrame.frame);
          }
          this.scene.launch('GameOverScene');
          this.scene.pause();
        });
      }
    }
  }

  updateHeartDisplay() {
    const heartIndex = this.currentHealth;
    if (heartIndex >= 0 && heartIndex < this.maxHealth) {
      this.hearts[heartIndex].play('heart-damage');
    }
  }

  private updateDepthSorting(): void {
    // Use bottom edge Y position for proper 2D pseudo-3D layering
    // Bottom edge represents where character's "feet" touch the ground
    // Higher bottom Y = further south = higher depth = renders in front
    if (this.player?.active) {
      const playerBottomY = this.player.y + (this.player.displayHeight / 2);
      this.player.setDepth(playerBottomY);
    }
    if (this.slime?.active) {
      const slimeBottomY = this.slime.y + (this.slime.displayHeight / 2);
      this.slime.setDepth(slimeBottomY);
    }
  }

}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 900,
  height: 600,
  parent: 'game-container',
  dom: {
    createContainer: true
  },
  audio: {
    disableWebAudio: false,
    noAudio: false
  },
  input: {
    touch: true,
    mouse: true,
    activePointers: 3 // Allow multiple simultaneous touches
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 0 }, debug: false }
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%'
  },
  scene: [LoadingScene, PrototypeGame, GameOverScene],
};

new Phaser.Game(config);
