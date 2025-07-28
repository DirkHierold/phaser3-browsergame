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
  playerSpeed: number = 200;
  cursorDebugText: Phaser.GameObjects.Text;

  init() {
    this.gameWidth = Number(this.game.config.width);
    this.gameHeight = Number(this.game.config.height);
    this.gameWidthMiddle = this.gameWidth / 2;
    this.gameHeightMiddle = this.gameHeight / 2;
  }

  preload() {


    this.load.image('player', '/images/player.png');
  }

  create() {

    this.physics.world.bounds.width = this.gameWidth;
    this.physics.world.bounds.height = this.gameHeight;
    this.cursorDebugText = this.add.text(10, 10, '');
    this.createPlayer();
    this.createVirtualJoystick();
    this.updateJoystickState();
  }

  createPlayer() {
    this.player = this.physics.add.sprite(this.gameWidthMiddle, this.gameHeightMiddle, 'player');
    this.physics.add.existing(this.player);
    this.player.body.setCollideWorldBounds(true);
    this.player.setScale(1.25);
    // this.player.setFrame(18);
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
    let velocityX = 0;
    let velocityY = 0;

    // Use Object.keys with type assertion for safer iteration
    for (let key of Object.keys(this.cursorKeys) as Array<keyof typeof this.cursorKeys>) {
      if (this.cursorKeys[key].isDown) {
        direction += key;
      }
    }

    // If no direction, stop the player and return
    if (direction.length === 0) {
      this.player.setVelocity(0, 0); // Stop player using physics velocity
      // this.stopPlayerAnimations();
      return;
    }

    // Set velocity based on direction
    if (direction.includes("up")) {
      velocityY = -this.playerSpeed;
    }
    if (direction.includes("down")) {
      velocityY = this.playerSpeed;
    }
    if (direction.includes("right")) {
      velocityX = this.playerSpeed;
    }
    if (direction.includes("left")) {
      velocityX = -this.playerSpeed;
    }

    // Normalize diagonal speed (optional, for constant speed in all directions)
    if (velocityX !== 0 && velocityY !== 0) {
      const diagonalSpeed = this.playerSpeed / Math.sqrt(2);
      velocityX = (velocityX > 0) ? diagonalSpeed : -diagonalSpeed;
      velocityY = (velocityY > 0) ? diagonalSpeed : -diagonalSpeed;
    }

    this.player.setVelocity(velocityX, velocityY); // Apply velocity using physics

    // If last cursor direction is different, then stop all player animations
    if (this.lastCursorDirection !== direction) {
      // this.stopPlayerAnimations();
    }

    // Set the new cursor direction
    this.lastCursorDirection = direction;

    // Set debug info about the cursor
    this.setCursorDebugInfo();
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

  movePlayer() {
    if (this.lastCursorDirection === "up") {
      this.player.y -= this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-up');
    } else if (this.lastCursorDirection === "down") {
      this.player.y += this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-down');
    } else if (this.lastCursorDirection === "right") {
      this.player.x += this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-right');
    } else if (this.lastCursorDirection === "left") {
      this.player.x -= this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-left');
    } else if (this.lastCursorDirection === "upright") {
      this.player.x += this.playerSpeed;
      this.player.y -= this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-right');
    } else if (this.lastCursorDirection === "downright") {
      this.player.x += this.playerSpeed;
      this.player.y += this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-right');
    } else if (this.lastCursorDirection === "downleft") {
      this.player.x -= this.playerSpeed;
      this.player.y += this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-left');
    } else if (this.lastCursorDirection === "upleft") {
      this.player.x -= this.playerSpeed;
      this.player.y -= this.playerSpeed;
      // if (!this.player.anims.isPlaying)
      //   this.player.anims.play('walking-left');
    } else {
      // this.stopPlayerAnimations();
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
