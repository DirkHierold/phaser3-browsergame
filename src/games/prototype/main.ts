import Phaser from 'phaser';
import { InputController } from '../../shared/InputController';
import { OrientationManager } from '../../shared/OrientationManager';
import { ResizeManager } from '../../shared/ResizeManager';
import { SoundManager } from '../../shared/SoundManager';
import { registerServiceWorker } from '../../shared/utils/registerServiceWorker';
import {
  TapIndicator,
  SpeedLines
} from './VisualEffects';

enum PlayerState {
  IDLE = 'idle',
  WALKING = 'walking',
  RUNNING = 'running',
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

enum SlimeState {
  IDLE = 'idle',
  ATTACKING = 'attacking'
}

class PrototypeGame extends Phaser.Scene {
  constructor() {
    super({ key: 'PrototypeGame' });
  }

  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  inputController: InputController;

  // Tap-to-Move properties
  movementTarget?: { x: number; y: number };
  arrivalThreshold: number = 10; // Will be calculated relative to screen size
  playerSpeed: number = 2;
  runSpeed: number = 8; // Drastically increased for snappy, dynamic movement
  isRunning: boolean = false;

  worldBorder: Phaser.GameObjects.Graphics;
  slime: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  slimeType: number = 1;
  slimeState: SlimeState = SlimeState.IDLE;
  slimeFacingDirection: Direction = Direction.DOWN;
  slimeAttackTimer: number = 0;
  slimeAttackInterval: number = 3000; // Attack every 3 seconds
  swordHitbox: Phaser.GameObjects.Zone;
  slime1AttackHitbox: Phaser.GameObjects.Zone; // Upper half-circle
  slime2AttackHitbox: Phaser.GameObjects.Zone; // Forward dash circular
  slime3AttackHitbox: Phaser.GameObjects.Zone; // Area burn circular
  playerSlimeCollider?: Phaser.Physics.Arcade.Collider; // Track player-slime body collision
  swingSounds: Phaser.Sound.BaseSound[];
  bloodSound: Phaser.Sound.BaseSound;
  footstepSound: Phaser.Sound.BaseSound;
  loseSound: Phaser.Sound.BaseSound;


  playerState: PlayerState = PlayerState.IDLE;
  facingDirection: Direction = Direction.DOWN;
  isDeadAndFrozen: boolean = false;

  hearts: Phaser.GameObjects.Sprite[] = [];
  maxHealth: number = 3;
  currentHealth: number = 3;

  // Visual Effects
  speedLines?: SpeedLines;

  // Overlay text elements
  titleText?: Phaser.GameObjects.Text;
  gameOverText?: Phaser.GameObjects.Text;

  preload() {
    // Load all assets directly in PrototypeGame
    this.load.image('background', '/images/background-template-2776x1440.png');
    this.load.image('base', '/images/base.png');
    this.load.image('thumb', '/images/thumb.png');
    this.load.spritesheet('playerIdle', '/images/Swordsman_lvl1_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.spritesheet('playerWalk', '/images/Swordsman_lvl1_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('playerAttack', '/images/Swordsman_lvl1_attack_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });
    this.load.spritesheet('playerHurt', '/images/Swordsman_lvl1_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 20 });
    this.load.spritesheet('playerDeath', '/images/Swordsman_lvl1_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 28 });
    this.load.spritesheet('playerWalkAttack', '/images/Swordsman_lvl1_Walk_Attack_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('playerRun', '/images/Swordsman_lvl1_Run_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });
    this.load.spritesheet('playerRunAttack', '/images/Swordsman_lvl1_Run_Attack_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });

    // Slime 1 spritesheets
    this.load.spritesheet('slime1Idle', '/images/Slime1_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime1Walk', '/images/Slime1_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime1Attack', '/images/slime1Attack.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.spritesheet('slime1Hurt', '/images/Slime1_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 19 });
    this.load.spritesheet('slime1Death', '/images/Slime1_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });

    // Slime 2 spritesheets
    this.load.spritesheet('slime2Idle', '/images/Slime2_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime2Walk', '/images/Slime2_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime2Attack', '/images/slime2Attack.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 44 });
    this.load.spritesheet('slime2Hurt', '/images/Slime2_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 19 });
    this.load.spritesheet('slime2Death', '/images/Slime2_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });

    // Slime 3 spritesheets
    this.load.spritesheet('slime3Idle', '/images/Slime3_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime3Walk', '/images/Slime3_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime3Attack', '/images/slime3Attack.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 36 });
    this.load.spritesheet('slime3Hurt', '/images/Slime3_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 19 });
    this.load.spritesheet('slime3Death', '/images/Slime3_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });

    // Audio
    this.load.audio('swing1', '/audios/swing.wav');
    this.load.audio('swing2', '/audios/swing2.wav');
    this.load.audio('swing3', '/audios/swing3.wav');
    this.load.audio('blood', '/audios/blood.wav');
    this.load.audio('footstep', '/audios/footstep.ogg');
    this.load.audio('backgroundMusic', '/audios/Magic Elderwood Forest - Overworld.mp3');
    this.load.audio('lose', '/audios/Lose vol. 1.wav');

    // UI
    this.load.image('heartFull', '/images/hud_heartFull.png');
    this.load.image('heartHalf', '/images/hud_heartHalf.png');
    this.load.image('heartEmpty', '/images/hud_heartEmpty.png');
  }

  create() {
    // Reset all state variables for clean restart
    this.currentHealth = this.maxHealth;
    this.hearts = [];
    this.isDeadAndFrozen = false;
    this.movementTarget = undefined;
    this.isRunning = false;
    this.playerState = PlayerState.IDLE;
    this.facingDirection = Direction.DOWN;
    this.physics.world.bounds.width = this.scale.width;
    this.physics.world.bounds.height = this.scale.height;

    // Calculate arrival threshold relative to screen size
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);
    this.arrivalThreshold = 10 * baseScale;

    this.createBackground();
    this.createAnimations();
    this.createSounds();
    this.createPlayer();
    this.createSlime();
    this.createSlimeAttackHitboxes();
    this.createHearts();

    // Clean up old input controller if exists
    if (this.inputController) {
      this.inputController.destroy();
    }
    this.inputController = new InputController(this);
    this.inputController.initialize(
      (isMoving, isRunning) => {
        // Normal attack callback
        this.performAttack();
      }
    );

    this.createWorldBorder();
    this.setupCollisions();
    this.setupVisualEffects();
    this.showTitleOverlay();

    // Initialize background music
    const music = this.sound.add('backgroundMusic');
    SoundManager.getInstance().setBackgroundMusic(music);

    // Don't use OrientationManager - no landscape warnings
    ResizeManager.getInstance().initialize(this, this.handleResize.bind(this));
  }

  showTitleOverlay(): void {
    // Create title text overlay
    this.titleText = this.add.text(
      this.scale.width / 2,
      this.scale.height / 2,
      'Prototype Adventure',
      {
        fontSize: '64px',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#FFD700',
        stroke: '#000000',
        strokeThickness: 6
      }
    );
    this.titleText.setOrigin(0.5);
    this.titleText.setDepth(10000);
    this.titleText.setScrollFactor(0);

    // Fade out after 2 seconds
    this.tweens.add({
      targets: this.titleText,
      alpha: 0,
      duration: 1000,
      delay: 2000,
      onComplete: () => {
        this.titleText?.destroy();
      }
    });
  }

  showGameOverOverlay(): void {
    // Create game over text overlay
    this.gameOverText = this.add.text(
      this.scale.width / 2,
      this.scale.height / 2,
      'Game Over',
      {
        fontSize: '72px',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#FF0000',
        stroke: '#000000',
        strokeThickness: 8
      }
    );
    this.gameOverText.setOrigin(0.5);
    this.gameOverText.setDepth(10000);
    this.gameOverText.setScrollFactor(0);
    this.gameOverText.setAlpha(0);

    // Fade in effect
    this.tweens.add({
      targets: this.gameOverText,
      alpha: 1,
      duration: 500,
      ease: 'Power2'
    });
  }

  setupVisualEffects(): void {
    // Create speed lines
    this.speedLines = new SpeedLines(this, this.player);

    // Event listeners for visual effects
    this.events.on('tap-ground', (position: { x: number; y: number }, movementType: string) => {
      new TapIndicator(this, position.x, position.y, 'run');
    });

    this.events.on('tap-slime', (slime: Phaser.GameObjects.Sprite) => {
      new TapIndicator(this, slime.x, slime.y, 'attack');
    });
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
    
    // Update slime attack hitbox sizes to match creation values
    if (this.slime1AttackHitbox) {
      const slime1Radius = 60 * baseScale;
      this.slime1AttackHitbox.setSize(slime1Radius * 2, slime1Radius);
      (this.slime1AttackHitbox.body as Phaser.Physics.Arcade.Body).setSize(slime1Radius * 2, slime1Radius);
    }
    if (this.slime2AttackHitbox) {
      const slime2Radius = 35 * baseScale;
      this.slime2AttackHitbox.setSize(slime2Radius * 2, slime2Radius * 2);
      (this.slime2AttackHitbox.body as Phaser.Physics.Arcade.Body).setCircle(slime2Radius);
    }
    if (this.slime3AttackHitbox) {
      const slime3Radius = 50 * baseScale;
      this.slime3AttackHitbox.setSize(slime3Radius * 2, slime3Radius * 2);
      (this.slime3AttackHitbox.body as Phaser.Physics.Arcade.Body).setCircle(slime3Radius);
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
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-attack-up',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-attack-left',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime1-attack-right',
      frames: this.anims.generateFrameNames('slime1Attack', {
        frames: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]
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
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-attack-up',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-attack-left',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [ 22, 23, 24, 25, 26, 27, 28, 29,30, 31, 32]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime2-attack-right',
      frames: this.anims.generateFrameNames('slime2Attack', {
        frames: [ 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43]
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
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-attack-up',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [9, 10, 11, 12, 13, 14, 15, 16, 17]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-attack-left',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [18, 19, 20, 21, 22, 23, 24, 25, 26]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime3-attack-right',
      frames: this.anims.generateFrameNames('slime3Attack', {
        frames: [27, 28, 29, 30, 31, 32, 33, 34, 35]
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



  update(time: number, delta: number): void {
    this.updateInputState();
    this.updatePlayerState();
    this.handleMovement();
    this.updateAnimation();
    this.updateSwordHitbox();
    this.updateSlimeAttackHitboxes();
    this.updateSlimeBehavior(time, delta);
    this.updateDepthSorting();
    this.updateVisualEffects(delta);
  }

  updateVisualEffects(delta: number): void {
    // Handle speed lines
    if (this.playerState === PlayerState.RUNNING) {
      this.speedLines?.start();
    } else {
      this.speedLines?.stop();
    }
  }

  updateInputState() {
    // Check for movement command from tap-to-move
    const movementCommand = this.inputController.getMovementCommand();

    if (movementCommand) {
      this.movementTarget = movementCommand.targetPosition;
      this.isRunning = movementCommand.movementType === 'run';
    }

    // Footstep sounds
    const isMoving = this.playerState === PlayerState.WALKING || this.playerState === PlayerState.RUNNING;
    if (isMoving && !this.footstepSound.isPlaying && this.currentHealth > 0) {
      const volume = this.isRunning ? 0.3 : 0.2;
      const rate = this.isRunning ? 1.3 : 1.0;
      this.footstepSound.play({ loop: true, volume, rate });
    } else if (!isMoving && this.footstepSound.isPlaying) {
      this.footstepSound.stop();
    }
  }

  updatePlayerState() {
    // Don't change state if player is dead
    if (this.playerState === PlayerState.DEATH) {
      return;
    }

    // Don't change state if animation is playing (priority states)
    if (this.player.anims.isPlaying &&
      (this.playerState === PlayerState.ATTACKING ||
        this.playerState === PlayerState.HURT)) {
      return;
    }

    // Normal state transitions based on movement target
    if (this.movementTarget) {
      if (this.isRunning) {
        this.playerState = PlayerState.RUNNING;
      } else {
        this.playerState = PlayerState.WALKING;
      }
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

  getDirectionFromString(directionStr: string): Direction {
    if (directionStr === 'up') return Direction.UP;
    if (directionStr === 'down') return Direction.DOWN;
    if (directionStr === 'left') return Direction.LEFT;
    if (directionStr === 'right') return Direction.RIGHT;
    return Direction.DOWN;
  }

  handleMovement() {
    if (this.playerState === PlayerState.DEATH) return;

    // Check if we have a movement target
    if (!this.movementTarget) {
      return;
    }

    const dx = this.movementTarget.x - this.player.x;
    const dy = this.movementTarget.y - this.player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Check if this is an attack movement (has onArrival callback)
    const movementCommand = this.inputController.getMovementCommand();
    const hasAttackCallback = !!movementCommand?.onArrival;

    // Collision is ALWAYS enabled - the 85% safe distance in InputController
    // ensures player stops before colliding with slime body

    // Check if arrived at target
    if (distance <= this.arrivalThreshold) {
      this.player.x = this.movementTarget.x;
      this.player.y = this.movementTarget.y;

      // Get arrival callback if exists
      const arrivalCallback = movementCommand?.onArrival;

      // Clear movement
      this.movementTarget = undefined;
      this.inputController.clearMovementCommand();

      // Execute arrival callback (e.g., auto-attack)
      if (arrivalCallback) {
        arrivalCallback();
      }

      return;
    }

    // Move towards target
    const speed = this.isRunning ? this.runSpeed : this.playerSpeed;
    const moveX = (dx / distance) * speed;
    const moveY = (dy / distance) * speed;

    this.player.x += moveX;
    this.player.y += moveY;

    // Update facing direction based on movement
    this.updateFacingDirectionFromMovement(dx, dy);
  }

  private updateFacingDirectionFromMovement(dx: number, dy: number): void {
    if (Math.abs(dx) > Math.abs(dy)) {
      this.facingDirection = dx > 0 ? Direction.RIGHT : Direction.LEFT;
    } else {
      this.facingDirection = dy > 0 ? Direction.DOWN : Direction.UP;
    }
  }

  updateAnimation() {
    // Never update animation if player is dead and frozen
    if (this.isDeadAndFrozen) {
      return;
    }

    // Only update animation if no priority animation is playing
    if (this.player.anims.isPlaying &&
      (this.playerState === PlayerState.ATTACKING ||
        this.playerState === PlayerState.HURT ||
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
      // CRITICAL: Disable all attack hitboxes before destroying old slime
      this.disableAllSlimeAttackHitboxes();
      this.slime.destroy();
    }

    // Reset slime state
    this.slimeState = SlimeState.IDLE;
    this.slimeFacingDirection = this.getDirectionFromString(randomDirection);
    this.slimeAttackTimer = 0;
    
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

  createSlimeAttackHitboxes() {
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);
    
    // Slime1: Upper half-circle attack (projectile spray upward)
    const slime1Radius = 60 * baseScale;
    this.slime1AttackHitbox = this.add.zone(0, 0, slime1Radius * 2, slime1Radius);
    this.physics.add.existing(this.slime1AttackHitbox);
    (this.slime1AttackHitbox.body as Phaser.Physics.Arcade.Body).setSize(slime1Radius * 2, slime1Radius);
    (this.slime1AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
    
    // Slime2: Forward dash circular attack (bigger than slime body)
    const slime2Radius = 35 * baseScale; // Bigger than slime body (7px radius)
    this.slime2AttackHitbox = this.add.zone(0, 0, slime2Radius * 2, slime2Radius * 2);
    this.physics.add.existing(this.slime2AttackHitbox);
    (this.slime2AttackHitbox.body as Phaser.Physics.Arcade.Body).setCircle(slime2Radius);
    (this.slime2AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
    
    // Slime3: Area burn circular attack (larger area)
    const slime3Radius = 50 * baseScale;
    this.slime3AttackHitbox = this.add.zone(0, 0, slime3Radius * 2, slime3Radius * 2);
    this.physics.add.existing(this.slime3AttackHitbox);
    (this.slime3AttackHitbox.body as Phaser.Physics.Arcade.Body).setCircle(slime3Radius);
    (this.slime3AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
  }

  setupCollisions() {
    this.setupSlimeCollisions();
  }

  setupSlimeCollisions() {
    if (!this.slime || !this.slime1AttackHitbox || !this.slime2AttackHitbox || !this.slime3AttackHitbox) return;
    
    // Clear any existing collisions for this slime to prevent duplicates
    const existingColliders = this.physics.world.colliders.getActive();
    existingColliders.forEach((collider: any) => {
      // Clear sword vs slime collisions
      if ((collider.object1 === this.swordHitbox || collider.object2 === this.swordHitbox) &&
          (collider.object1 === this.slime || collider.object2 === this.slime)) {
        this.physics.world.removeCollider(collider);
      }
      // Clear player vs slime body collisions
      if ((collider.object1 === this.player || collider.object2 === this.player) &&
          (collider.object1 === this.slime || collider.object2 === this.slime)) {
        this.physics.world.removeCollider(collider);
      }
      // Clear player vs all attack hitbox collisions
      const attackHitboxes = [this.slime1AttackHitbox, this.slime2AttackHitbox, this.slime3AttackHitbox];
      attackHitboxes.forEach(hitbox => {
        if ((collider.object1 === this.player || collider.object2 === this.player) &&
            (collider.object1 === hitbox || collider.object2 === hitbox)) {
          this.physics.world.removeCollider(collider);
        }
      });
    });
    
    // Set up fresh collision detection for the current slime
    // Player sword can only hit slime body (not attack hitboxes)
    this.physics.add.overlap(this.swordHitbox, this.slime, () => {
      this.killSlime();
    });

    // Player body collision with slime body (passive collision)
    // Store the collider reference so we can enable/disable it during attack approach
    this.playerSlimeCollider = this.physics.add.overlap(this.player, this.slime, () => {
      if (this.playerState !== PlayerState.ATTACKING &&
          this.playerState !== PlayerState.HURT) {
        this.hurtPlayer();
      }
    });
    
    // Set up collision detection for each slime type's attack hitbox
    this.physics.add.overlap(this.player, this.slime1AttackHitbox, () => {
      if (this.slimeType === 1 && this.slimeState === SlimeState.ATTACKING && 
          this.playerState !== PlayerState.ATTACKING && 
          this.playerState !== PlayerState.HURT) {
        this.hurtPlayerFromSlimeAttack();
      }
    });
    
    this.physics.add.overlap(this.player, this.slime2AttackHitbox, () => {
      if (this.slimeType === 2 && this.slimeState === SlimeState.ATTACKING && 
          this.playerState !== PlayerState.ATTACKING && 
          this.playerState !== PlayerState.HURT) {
        this.hurtPlayerFromSlimeAttack();
      }
    });
    
    this.physics.add.overlap(this.player, this.slime3AttackHitbox, () => {
      if (this.slimeType === 3 && this.slimeState === SlimeState.ATTACKING && 
          this.playerState !== PlayerState.ATTACKING && 
          this.playerState !== PlayerState.HURT) {
        this.hurtPlayerFromSlimeAttack();
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

  hurtPlayerFromSlimeAttack() {
    this.playerState = PlayerState.HURT;
    this.player.anims.play(`hurt-${this.facingDirection}`);
    this.footstepSound.stop();

    this.takeDamage();
    this.cameras.main.shake(300, 0.015); // Stronger shake for attack damage

    // Push player away from slime attack
    const pushDistance = 50; // Stronger push for attack
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

    // CRITICAL: Immediately disable all attack hitboxes and set slime to IDLE state
    // This prevents ghost hitboxes from hurting the player during death animation
    this.disableAllSlimeAttackHitboxes();
    this.slimeState = SlimeState.IDLE;

    // Move all attack hitboxes off-screen to hide them in debug mode
    this.hideAllSlimeAttackHitboxes();

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

    if (this.playerState === PlayerState.ATTACKING) {
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

  enableSlimeAttackHitbox() {
    if (this.slimeType === 1 && this.slime1AttackHitbox?.body) {
      (this.slime1AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = true;
    } else if (this.slimeType === 2 && this.slime2AttackHitbox?.body) {
      (this.slime2AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = true;
    } else if (this.slimeType === 3 && this.slime3AttackHitbox?.body) {
      (this.slime3AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = true;
    }
  }
  
  disableAllSlimeAttackHitboxes() {
    if (this.slime1AttackHitbox?.body) {
      (this.slime1AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
    }
    if (this.slime2AttackHitbox?.body) {
      (this.slime2AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
    }
    if (this.slime3AttackHitbox?.body) {
      (this.slime3AttackHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
    }
  }

  hideAllSlimeAttackHitboxes() {
    // Move hitboxes far off-screen to hide them in debug mode
    const offscreenX = -10000;
    const offscreenY = -10000;

    if (this.slime1AttackHitbox) {
      this.slime1AttackHitbox.setPosition(offscreenX, offscreenY);
    }
    if (this.slime2AttackHitbox) {
      this.slime2AttackHitbox.setPosition(offscreenX, offscreenY);
    }
    if (this.slime3AttackHitbox) {
      this.slime3AttackHitbox.setPosition(offscreenX, offscreenY);
    }
  }

  updateSlimeAttackHitboxes() {
    if (!this.slime?.active || this.slimeState !== SlimeState.ATTACKING) return;

    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);
    
    if (this.slimeType === 1 && this.slime1AttackHitbox) {
      // Slime1: Upper half-circle rectangle with bottom edge at slime body bottom
      const slime1HitboxHeight = 60 * baseScale; // Height of the rectangle hitbox
      // Get the actual bottom of the slime body (not sprite)
      const slimeBodyBottomY = this.slime.y + (this.slime.body as Phaser.Physics.Arcade.Body).height / 2;
      // Position hitbox so its bottom edge is at slime body bottom
      // Move the hitbox center up by half its height from the slime body bottom
      this.slime1AttackHitbox.setPosition(this.slime.x, slimeBodyBottomY - (slime1HitboxHeight / 2));
    } else if (this.slimeType === 2 && this.slime2AttackHitbox) {
      // Slime2: Forward dash - position hitbox closer to slime based on facing direction
      const dashDistance = 20 * baseScale; // Much closer to slime
      const positions = {
        [Direction.DOWN]: { x: this.slime.x, y: this.slime.y + dashDistance },
        [Direction.UP]: { x: this.slime.x, y: this.slime.y - dashDistance },
        [Direction.LEFT]: { x: this.slime.x - dashDistance, y: this.slime.y },
        [Direction.RIGHT]: { x: this.slime.x + dashDistance, y: this.slime.y }
      };
      const pos = positions[this.slimeFacingDirection] || { x: this.slime.x, y: this.slime.y };
      this.slime2AttackHitbox.setPosition(pos.x, pos.y);
    } else if (this.slimeType === 3 && this.slime3AttackHitbox) {
      // Slime3: Area burn centered on slime (smaller radius already set in creation)
      this.slime3AttackHitbox.setPosition(this.slime.x, this.slime.y);
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

  performAttack() {
    if (this.playerState === PlayerState.ATTACKING || this.playerState === PlayerState.HURT) return;

    // Turn to face locked slime if exists
    const lockedSlime = this.inputController.getLockedSlime();
    if (lockedSlime) {
      const dx = lockedSlime.x - this.player.x;
      const dy = lockedSlime.y - this.player.y;
      this.updateFacingDirectionFromMovement(dx, dy);
    }

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
        // Remove any existing animation complete listeners to prevent conflicts
        this.player.off('animationcomplete');
        
        this.playerState = PlayerState.DEATH;
        this.footstepSound.stop();
        SoundManager.getInstance().pauseBackgroundMusic();
        this.loseSound.play();
        
        // Force stop current animation and play death animation after brief delay
        this.player.anims.stop();
        const deathAnimKey = `death-${this.facingDirection}`;
        
        // Add small delay to ensure hurt animation is fully stopped
        this.time.delayedCall(50, () => {
          this.player.anims.play(deathAnimKey);
        });
        
        // Calculate total duration: 7 frames at 8fps = 875ms + 50ms delay
        const animationDuration = (7 / 8) * 1000 + 50;
        
        // Wait for animation to complete then freeze on last frame
        this.time.delayedCall(animationDuration, () => {
          // Set frozen flag to prevent any further animation updates
          this.isDeadAndFrozen = true;

          // Get death animation and set to last frame
          const deathAnim = this.anims.get(deathAnimKey);
          if (deathAnim && deathAnim.frames.length > 0) {
            const lastFrame = deathAnim.frames[deathAnim.frames.length - 1];
            this.player.anims.stop();
            this.player.setFrame(lastFrame.frame);
          }

          // Show "Game Over" text overlay
          this.showGameOverOverlay();

          // Auto-restart after 3 seconds
          this.time.delayedCall(3000, () => {
            this.scene.restart();
          });
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

  updateSlimeBehavior(time: number, delta: number): void {
    if (!this.slime || !this.slime.active || this.currentHealth === 0) return;

    // Update attack timer
    this.slimeAttackTimer += delta;

    // Check if slime should attack
    if (this.slimeState === SlimeState.IDLE && this.slimeAttackTimer >= this.slimeAttackInterval) {
      this.performSlimeAttack();
      this.slimeAttackTimer = 0;
    }
  }

  performSlimeAttack(): void {
    if (this.slimeState === SlimeState.ATTACKING) return;
    
    this.slimeState = SlimeState.ATTACKING;
    
    // Calculate direction to face player
    const dx = this.player.x - this.slime.x;
    const dy = this.player.y - this.slime.y;
    
    if (Math.abs(dx) > Math.abs(dy)) {
      this.slimeFacingDirection = dx > 0 ? Direction.RIGHT : Direction.LEFT;
    } else {
      this.slimeFacingDirection = dy > 0 ? Direction.DOWN : Direction.UP;
    }
    
    const directionStr = this.slimeFacingDirection.toLowerCase();
    const attackAnim = `slime${this.slimeType}-attack-${directionStr}`;
    
    this.slime.anims.play(attackAnim);
    
    // Enable the appropriate attack hitbox based on slime type
    this.enableSlimeAttackHitbox();
    
    // Return to idle after attack animation completes
    this.slime.once('animationcomplete', () => {
      this.slimeState = SlimeState.IDLE;
      const idleAnim = `slime${this.slimeType}-idle-${directionStr}`;
      this.slime.anims.play(idleAnim);
      
      // Disable all attack hitboxes when attack is done
      this.disableAllSlimeAttackHitboxes();
    });
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
    arcade: { gravity: { x: 0, y: 0 }, debug: true }
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%'
  },
  scene: [PrototypeGame],
};

// Register service worker for offline support
registerServiceWorker();

new Phaser.Game(config);
