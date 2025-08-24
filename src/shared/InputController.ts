import Phaser from 'phaser';
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';

export interface InputState {
  direction: string;
  isMoving: boolean;
  isRunning: boolean;
  isAttacking: boolean;
}

export class InputController {
  private scene: Phaser.Scene;
  private joyStick?: VirtualJoystick;
  private cursorKeys?: { up: Phaser.Input.Keyboard.Key; down: Phaser.Input.Keyboard.Key; left: Phaser.Input.Keyboard.Key; right: Phaser.Input.Keyboard.Key; };
  private wasdKeys?: { up: Phaser.Input.Keyboard.Key; down: Phaser.Input.Keyboard.Key; left: Phaser.Input.Keyboard.Key; right: Phaser.Input.Keyboard.Key; };
  private attackKeys?: { space: Phaser.Input.Keyboard.Key; enter: Phaser.Input.Keyboard.Key; };
  private attackButton?: Phaser.GameObjects.Graphics;
  private isDesktop: boolean;
  private onAttackCallback?: (isMoving: boolean) => void;
  
  // Running state tracking
  private lastKeyPress: { [key: string]: number } = {};
  private doubleTapThreshold: number = 300; // milliseconds
  private isRunning: boolean = false;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.isDesktop = scene.sys.game.device.os.desktop;
  }

  initialize(onAttackCallback?: (isMoving: boolean) => void): void {
    this.onAttackCallback = onAttackCallback;
    
    if (this.isDesktop) {
      this.createKeyboardControls();
    } else {
      this.createVirtualJoystick();
      this.createAttackButton();
    }
  }

  private createVirtualJoystick(): void {
    this.joyStick = new VirtualJoystick(this.scene, {
      x: 100,
      y: this.scene.scale.height - 100,
      radius: 60,
      base: this.scene.add.image(0, 0, 'base').setDisplaySize(110, 110),
      thumb: this.scene.add.image(0, 0, 'thumb').setDisplaySize(48, 48),
    });
    this.cursorKeys = this.joyStick.createCursorKeys();
  }

  private createKeyboardControls(): void {
    if (!this.scene.input.keyboard) return;
    
    this.wasdKeys = {
      up: this.scene.input.keyboard.addKey('W'),
      down: this.scene.input.keyboard.addKey('S'),
      left: this.scene.input.keyboard.addKey('A'),
      right: this.scene.input.keyboard.addKey('D')
    };
    
    // Add arrow keys for double-tap detection
    const arrowKeys = {
      up: this.scene.input.keyboard.addKey('UP'),
      down: this.scene.input.keyboard.addKey('DOWN'),
      left: this.scene.input.keyboard.addKey('LEFT'),
      right: this.scene.input.keyboard.addKey('RIGHT')
    };
    
    this.attackKeys = {
      space: this.scene.input.keyboard.addKey('SPACE'),
      enter: this.scene.input.keyboard.addKey('ENTER')
    };

    // Double-tap detection for WASD keys
    this.wasdKeys.up.on('down', () => this.handleKeyPress('up'));
    this.wasdKeys.down.on('down', () => this.handleKeyPress('down'));
    this.wasdKeys.left.on('down', () => this.handleKeyPress('left'));
    this.wasdKeys.right.on('down', () => this.handleKeyPress('right'));
    
    // Double-tap detection for arrow keys
    arrowKeys.up.on('down', () => this.handleKeyPress('up'));
    arrowKeys.down.on('down', () => this.handleKeyPress('down'));
    arrowKeys.left.on('down', () => this.handleKeyPress('left'));
    arrowKeys.right.on('down', () => this.handleKeyPress('right'));
    
    // Reset running state when keys are released
    this.wasdKeys.up.on('up', () => this.handleKeyRelease());
    this.wasdKeys.down.on('up', () => this.handleKeyRelease());
    this.wasdKeys.left.on('up', () => this.handleKeyRelease());
    this.wasdKeys.right.on('up', () => this.handleKeyRelease());
    arrowKeys.up.on('up', () => this.handleKeyRelease());
    arrowKeys.down.on('up', () => this.handleKeyRelease());
    arrowKeys.left.on('up', () => this.handleKeyRelease());
    arrowKeys.right.on('up', () => this.handleKeyRelease());

    this.attackKeys.space.on('down', () => this.handleAttackInput());
    this.attackKeys.enter.on('down', () => this.handleAttackInput());
  }

  private createAttackButton(): void {
    this.attackButton = this.scene.add.graphics();
    this.attackButton.lineStyle(1, 0xff0000);
    this.attackButton.strokeCircle(0, 0, 55);
    this.attackButton.setPosition(this.scene.scale.width - 100, this.scene.scale.height - 100);
    this.attackButton.setInteractive(new Phaser.Geom.Circle(0, 0, 55), Phaser.Geom.Circle.Contains);

    this.attackButton.on('pointerdown', () => this.handleAttackInput());
  }

  private handleAttackInput(): void {
    if (this.onAttackCallback) {
      const inputState = this.getInputState();
      this.onAttackCallback(inputState.isMoving);
    }
  }

  private handleKeyPress(direction: string): void {
    const now = Date.now();
    const lastPress = this.lastKeyPress[direction];
    
    if (lastPress && (now - lastPress) < this.doubleTapThreshold) {
      // Double-tap detected - enable running
      this.isRunning = true;
    }
    
    this.lastKeyPress[direction] = now;
  }

  private handleKeyRelease(): void {
    // Check if any movement keys are still pressed
    if (this.isDesktop && this.wasdKeys && this.scene.input.keyboard) {
      const arrowKeys = {
        up: this.scene.input.keyboard.addKey('UP'),
        down: this.scene.input.keyboard.addKey('DOWN'),
        left: this.scene.input.keyboard.addKey('LEFT'),
        right: this.scene.input.keyboard.addKey('RIGHT')
      };
      
      const anyKeyPressed = 
        this.wasdKeys.up.isDown || this.wasdKeys.down.isDown || 
        this.wasdKeys.left.isDown || this.wasdKeys.right.isDown ||
        arrowKeys.up.isDown || arrowKeys.down.isDown ||
        arrowKeys.left.isDown || arrowKeys.right.isDown;
      
      if (!anyKeyPressed) {
        this.isRunning = false;
      }
    }
  }

  getInputState(): InputState {
    let direction = '';
    let isRunning = false;
    
    if (this.isDesktop && this.scene.input.keyboard) {
      if (this.wasdKeys?.up.isDown || this.scene.input.keyboard.addKey('UP').isDown) direction += 'up';
      if (this.wasdKeys?.down.isDown || this.scene.input.keyboard.addKey('DOWN').isDown) direction += 'down';
      if (this.wasdKeys?.left.isDown || this.scene.input.keyboard.addKey('LEFT').isDown) direction += 'left';
      if (this.wasdKeys?.right.isDown || this.scene.input.keyboard.addKey('RIGHT').isDown) direction += 'right';
      
      // Use desktop running state from double-tap detection
      isRunning = this.isRunning;
    } else if (this.cursorKeys && this.joyStick) {
      for (let key of Object.keys(this.cursorKeys) as Array<keyof typeof this.cursorKeys>) {
        if (this.cursorKeys[key].isDown) {
          direction += key;
        }
      }
      
      // Mobile: Check joystick distance to determine running
      const force = this.joyStick.force;
      const threshold = 0.7; // Run if joystick is pushed > 70% to edge
      isRunning = force > threshold;
    }

    return {
      direction,
      isMoving: direction !== '',
      isRunning,
      isAttacking: false
    };
  }

  updatePositions(): void {
    if (!this.isDesktop) {
      this.joyStick?.setPosition(100, this.scene.scale.height - 100);
      this.attackButton?.setPosition(this.scene.scale.width - 100, this.scene.scale.height - 100);
    }
  }

  destroy(): void {
    this.joyStick?.destroy();
    this.attackButton?.destroy();
  }
}