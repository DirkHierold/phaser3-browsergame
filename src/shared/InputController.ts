import Phaser from 'phaser';
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';

export interface InputState {
  direction: string;
  isMoving: boolean;
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
    
    this.attackKeys = {
      space: this.scene.input.keyboard.addKey('SPACE'),
      enter: this.scene.input.keyboard.addKey('ENTER')
    };

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

  getInputState(): InputState {
    let direction = '';
    
    if (this.isDesktop && this.scene.input.keyboard) {
      if (this.wasdKeys?.up.isDown || this.scene.input.keyboard.addKey('UP').isDown) direction += 'up';
      if (this.wasdKeys?.down.isDown || this.scene.input.keyboard.addKey('DOWN').isDown) direction += 'down';
      if (this.wasdKeys?.left.isDown || this.scene.input.keyboard.addKey('LEFT').isDown) direction += 'left';
      if (this.wasdKeys?.right.isDown || this.scene.input.keyboard.addKey('RIGHT').isDown) direction += 'right';
    } else if (this.cursorKeys) {
      for (let key of Object.keys(this.cursorKeys) as Array<keyof typeof this.cursorKeys>) {
        if (this.cursorKeys[key].isDown) {
          direction += key;
        }
      }
    }

    return {
      direction,
      isMoving: direction !== '',
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