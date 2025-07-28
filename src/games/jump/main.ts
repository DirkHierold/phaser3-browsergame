import Phaser from 'phaser';
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';

class JumpGame extends Phaser.Scene {

  player: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  gameWidth: number;
  gameHeight: number;
  gameWidthMiddle: number;
  gameHeightMiddle: number;
  joyStick: VirtualJoystick;
  cursorKeys: { up: Phaser.Input.Keyboard.Key; down: Phaser.Input.Keyboard.Key; left: Phaser.Input.Keyboard.Key; right: Phaser.Input.Keyboard.Key; };

  lastCursorDirection: string;
  playerSpeed: number = 1;
  cursorDebugText: Phaser.GameObjects.Text;

  init() {
    this.gameWidth = Number(this.game.config.width);
    this.gameHeight = Number(this.game.config.height);
    this.gameWidthMiddle = this.gameWidth / 2;
    this.gameHeightMiddle = this.gameHeight / 2;
  }

  preload() {

    this.load.spritesheet("playerIdle", "/images/Swordsman_lvl1_Idle_full.png", {
      frameWidth: 64,
      frameHeight: 64,
      startFrame: 0,
      endFrame: 40
    });

    this.load.spritesheet("playerWalk", "/images/Swordsman_lvl1_Walk_full.png", {
      frameWidth: 64,
      frameHeight: 64,
      startFrame: 0,
      endFrame: 24
    });
  }

  create() {

    this.physics.world.bounds.width = this.gameWidth;
    this.physics.world.bounds.height = this.gameHeight;
    this.cursorDebugText = this.add.text(10, 10, '');
    this.createAnimations();
    this.createPlayer();
    this.createVirtualJoystick();
    this.updateJoystickState();
  }

  createPlayer() {
    this.player = this.physics.add.sprite(this.gameWidthMiddle, this.gameHeightMiddle, 'playerIdle', 1);
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.player.setScale(1.25);
    this.player.setFrame(18);
  }

  createAnimations() {
    this.anims.create({
      key: 'idle-down',
      frames: this.anims.generateFrameNames('playerIdle', {
        frames: [
          0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
        ]
      }),
      yoyo: true,
      frameRate: 12,
      repeat: -1
    });

    this.anims.create({
      key: 'walking-left',
      frames: this.anims.generateFrameNames('playerWalk', {
        frames: [
          6, 7, 8, 9, 10, 11
        ]
      }),
      yoyo: true,
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
      yoyo: true,
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
      yoyo: true,
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
      yoyo: true,
      frameRate: 12,
      repeat: -1
    });
  }

  createVirtualJoystick() {
    // https://rexrainbow.github.io/phaser3-rex-notes/docs/site/virtualjoystick/
    this.joyStick = new VirtualJoystick(this, {
      x: 150,
      y: 450,
      radius: 100,
      //base: baseGameObject,
      //thumb: thumbGameObject,
      // dir: '8dir',
      // forceMin: 16,
      // fixed: true,
      // enable: true
    });
    this.cursorKeys = this.joyStick.createCursorKeys();
  }

  update(time: number, delta: number): void {
    this.updateJoystickState();
  }

  updateJoystickState() {
    let direction = '';

    // Use Object.keys with type assertion for safer iteration
    for (let key of Object.keys(this.cursorKeys) as Array<keyof typeof this.cursorKeys>) {
      if (this.cursorKeys[key].isDown) {
        direction += key;
      }
    }

    // If no direction if provided then stop 
    // the player animations and exit the method
    if (direction.length === 0) {
      this.stopPlayerAnimations();
      return;
    }

    // If last cursor direction is different
    //  the stop all player animations
    if (this.lastCursorDirection !== direction) {
      this.stopPlayerAnimations();
    }

    // Set the new cursor direction
    this.lastCursorDirection = direction;

    // Handle the player moving
    this.movePlayer();

    // Set debug info about the cursor
    // this.setCursorDebugInfo();
  }

  setCursorDebugInfo() {
    const force = Math.floor(this.joyStick.force * 100) / 100;
    const angle = Math.floor(this.joyStick.angle * 100) / 100;
    let text = `Direction: ${this.lastCursorDirection}\n`;
    text += `Force: ${force}\n`;
    text += `Angle: ${angle}\n`;
    text += `FPS: ${this.sys.game.loop.actualFps}\n`;
    this.cursorDebugText.setText(text);
  }

  stopPlayerAnimations() {
    this.player.anims.stop();
    // this.player.anims.stop('walking-right');
    // this.player.anims.stop('walking-up');
    // this.player.anims.stop('walking-down');
  }

  movePlayer() {
    if (this.lastCursorDirection === "up") {
      this.player.y -= this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-up');
    } else if (this.lastCursorDirection === "down") {
      this.player.y += this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-down');
    } else if (this.lastCursorDirection === "right") {
      this.player.x += this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-right');
    } else if (this.lastCursorDirection === "left") {
      this.player.x -= this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-left');
    } else if (this.lastCursorDirection === "upright") {
      this.player.x += this.playerSpeed;
      this.player.y -= this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-right');
    } else if (this.lastCursorDirection === "downright") {
      this.player.x += this.playerSpeed;
      this.player.y += this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-right');
    } else if (this.lastCursorDirection === "downleft") {
      this.player.x -= this.playerSpeed;
      this.player.y += this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-left');
    } else if (this.lastCursorDirection === "upleft") {
      this.player.x -= this.playerSpeed;
      this.player.y -= this.playerSpeed;
      if (!this.player.anims.isPlaying)
        this.player.anims.play('walking-left');
    } else {
      this.stopPlayerAnimations();
    }
  }

}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  parent: 'game',
  backgroundColor: '#87CEEB',
  dom: {
    createContainer: true
  },
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 0 }, debug: false }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: JumpGame,
};

new Phaser.Game(config);
