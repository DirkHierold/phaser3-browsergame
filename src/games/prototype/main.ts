import Phaser from 'phaser';
import { InputController } from '../../shared/InputController';
import { OrientationManager } from '../../shared/OrientationManager';
import { ResizeManager } from '../../shared/ResizeManager';

import LoadingScene from './LoadingScene';

enum PlayerState {
  IDLE = 'idle',
  WALKING = 'walking',
  WALKING_ATTACK = 'walking-attack',
  ATTACKING = 'attacking',
  HURT = 'hurt'
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
  gameWidth: number;
  gameHeight: number;
  gameWidthMiddle: number;
  gameHeightMiddle: number;
  inputController: InputController;

  currentDirection: string = '';
  playerSpeed: number = 2;
  cursorDebugText: Phaser.GameObjects.Text;
  bg: Phaser.GameObjects.Image;
  worldBorder: Phaser.GameObjects.Graphics;
  attackButton: Phaser.GameObjects.Graphics;
  slime: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  swordHitbox: Phaser.GameObjects.Zone;
  swingSounds: Phaser.Sound.BaseSound[];
  bloodSound: Phaser.Sound.BaseSound;
  footstepSound: Phaser.Sound.BaseSound;
  backgroundMusic: Phaser.Sound.BaseSound;

  playerState: PlayerState = PlayerState.IDLE;
  facingDirection: Direction = Direction.DOWN;
  isWalkingAttack: boolean = false;

  init() {
    this.gameWidth = 800;
    this.gameHeight = 600;
    this.gameWidthMiddle = this.gameWidth / 2;
    this.gameHeightMiddle = this.gameHeight / 2;
  }

  preload() {
    // Assets are now loaded in LoadingScene
  }

  create() {
    this.physics.world.bounds.width = this.scale.width;
    this.physics.world.bounds.height = this.scale.height;
    this.createBackground();
    this.cursorDebugText = this.add.text(10, 10, '');
    this.createAnimations();
    this.createSounds();
    this.createPlayer();
    this.createSlime();
    this.inputController = new InputController(this);
    this.inputController.initialize((isMoving) => {
      if (isMoving) {
        this.performWalkingAttack();
      } else {
        this.performAttack();
      }
    });
    this.createWorldBorder();
    this.setupCollisions();

    OrientationManager.getInstance().updateScene(this);
    ResizeManager.getInstance().updateScene(this, this.handleResize.bind(this));
  }

  handleResize() {
    // Store relative positions before resize
    const relativePlayerX = this.player ? this.player.x / this.physics.world.bounds.width : 0.5;
    const relativePlayerY = this.player ? this.player.y / this.physics.world.bounds.height : 0.5;
    const relativeSlimeX = this.slime ? this.slime.x / this.physics.world.bounds.width : 0.5;
    const relativeSlimeY = this.slime ? this.slime.y / this.physics.world.bounds.height : 0.5;

    this.updateBackground();
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



    // Update sword hitbox size for desktop
    if (this.swordHitbox && this.sys.game.device.os.desktop) {
      const hitboxSize = 120 * baseScale;
      this.swordHitbox.setSize(hitboxSize, hitboxSize);
    }

    this.inputController.updatePositions();
  }

  updateBackground() {
    // Background update logic would go here
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

    this.anims.create({
      key: 'slime-idle-down',
      frames: this.anims.generateFrameNames('slimeIdle', {
        frames: [0, 1, 2, 3, 4, 5]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime-idle-up',
      frames: this.anims.generateFrameNames('slimeIdle', {
        frames: [6, 7, 8, 9, 10, 11]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime-idle-left',
      frames: this.anims.generateFrameNames('slimeIdle', {
        frames: [12, 13, 14, 15, 16, 17]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime-idle-right',
      frames: this.anims.generateFrameNames('slimeIdle', {
        frames: [18, 19, 20, 21, 22, 23]
      }),
      frameRate: 8,
      repeat: -1
    });

    this.anims.create({
      key: 'slime-death-down',
      frames: this.anims.generateFrameNames('slimeDeath', {
        frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime-death-up',
      frames: this.anims.generateFrameNames('slimeDeath', {
        frames: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime-death-left',
      frames: this.anims.generateFrameNames('slimeDeath', {
        frames: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]
      }),
      frameRate: 12,
      repeat: 0
    });

    this.anims.create({
      key: 'slime-death-right',
      frames: this.anims.generateFrameNames('slimeDeath', {
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
  }

  createBackground() {
    this.cameras.main.setBackgroundColor('#228B22');
  }

  createWorldBorder() {
    this.worldBorder = this.add.graphics();
    this.worldBorder.lineStyle(4, 0x000000);
    this.worldBorder.strokeRect(0, 0, this.scale.width, this.scale.height);
  }

  update(_time: number, _delta: number): void {
    this.updateInputState();
    this.updatePlayerState();
    this.handleMovement();
    this.updateAnimation();
    this.updateSwordHitbox();
  }

  updateInputState() {
    const inputState = this.inputController.getInputState();
    this.currentDirection = inputState.direction;

    if (this.currentDirection !== '' && !this.footstepSound.isPlaying) {
      this.footstepSound.play({ loop: true, volume: 0.2 });
    } else if (this.currentDirection === '' && this.footstepSound.isPlaying) {
      this.footstepSound.stop();
    }
  }

  setCursorDebugInfo() {
    if (!this.cursorDebugText) return;
    let text = `Direction: ${this.currentDirection}\n`;
    text += `FPS: ${this.sys.game.loop.actualFps}\n`;
    this.cursorDebugText.setText(text);
  }

  stopPlayerAnimations() {
    this.player.anims.stop();
  }

  updatePlayerState() {
    // Don't change state if animation is playing (except for transitions)
    if (this.player.anims.isPlaying &&
      (this.playerState === PlayerState.ATTACKING ||
        this.playerState === PlayerState.HURT ||
        this.playerState === PlayerState.WALKING_ATTACK)) {

      // Allow transition from ATTACKING to WALKING_ATTACK
      if (this.playerState === PlayerState.ATTACKING && this.currentDirection !== '') {
        this.playerState = PlayerState.WALKING_ATTACK;
        this.facingDirection = this.getDirectionFromInput(this.currentDirection);
        const currentFrame = this.player.anims.currentFrame?.index || 0;
        this.player.anims.play(`walking-attack-${this.facingDirection}`);
        if (this.player.anims.currentAnim?.frames) {
          this.player.anims.setCurrentFrame(this.player.anims.currentAnim.frames[Math.min(currentFrame, 5)]);
        }
      }
      return;
    }

    // Normal state transitions when no priority animation is playing
    if (this.currentDirection !== '') {
      this.playerState = PlayerState.WALKING;
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
    if (this.playerState !== PlayerState.WALKING && this.playerState !== PlayerState.WALKING_ATTACK) return;

    const movements: Record<string, { x: number; y: number }> = {
      'up': { x: 0, y: -this.playerSpeed },
      'down': { x: 0, y: this.playerSpeed },
      'left': { x: -this.playerSpeed, y: 0 },
      'right': { x: this.playerSpeed, y: 0 },
      'upright': { x: this.playerSpeed, y: -this.playerSpeed },
      'downright': { x: this.playerSpeed, y: this.playerSpeed },
      'downleft': { x: -this.playerSpeed, y: this.playerSpeed },
      'upleft': { x: -this.playerSpeed, y: -this.playerSpeed }
    };

    const movement = movements[this.currentDirection];
    if (movement) {
      this.player.x += movement.x;
      this.player.y += movement.y;
    }
  }

  updateAnimation() {
    // Only update animation if no priority animation is playing
    if (this.player.anims.isPlaying &&
      (this.playerState === PlayerState.ATTACKING ||
        this.playerState === PlayerState.HURT ||
        this.playerState === PlayerState.WALKING_ATTACK)) {
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

    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);

    if (this.slime) {
      this.slime.setPosition(x, y);
      this.slime.setScale(2 * baseScale);
    } else {
      this.slime = this.physics.add.sprite(x, y, 'slimeIdle', 0);
      this.slime.setScale(2 * baseScale);
      this.slime.body.setCircle(7, 26, 26);
    }
    this.slime.anims.play(`slime-idle-${randomDirection}`);
  }

  createSwordHitbox() {
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);
    const hitboxRadius = this.sys.game.device.os.desktop ? 60 * baseScale : 30;
    this.swordHitbox = this.add.zone(0, 0, hitboxRadius * 2, hitboxRadius * 2);
    this.physics.add.existing(this.swordHitbox);
    (this.swordHitbox.body as Phaser.Physics.Arcade.Body).setCircle(hitboxRadius);
    (this.swordHitbox.body as Phaser.Physics.Arcade.Body).enable = false;
  }

  setupCollisions() {
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
    const currentAnim = this.slime.anims.currentAnim?.key || 'slime-idle-down';
    if (currentAnim.includes('death')) return;

    const direction = currentAnim.split('-')[2] || 'down';
    this.slime.anims.play(`slime-death-${direction}`);
    this.bloodSound.play({ volume: 0.3 });
    this.slime.once('animationcomplete', () => {
      this.respawnSlime();
    });
  }

  updateSwordHitbox() {
    if (!this.swordHitbox?.body) return;

    const body = this.swordHitbox.body as Phaser.Physics.Arcade.Body;
    const baseScale = Math.min(this.scale.width / 800, this.scale.height / 600);

    if (this.playerState === PlayerState.WALKING_ATTACK || this.playerState === PlayerState.ATTACKING) {
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
  }

  playRandomSwingSound() {
    const randomSound = Phaser.Utils.Array.GetRandom(this.swingSounds);
    randomSound.play();
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
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 0 }, debug: true }
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%'
  },
  scene: [LoadingScene, PrototypeGame],
};

new Phaser.Game(config);
