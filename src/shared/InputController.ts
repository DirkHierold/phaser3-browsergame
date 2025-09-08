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
  private attackButtonZone?: Phaser.GameObjects.Zone;
  private isDesktop: boolean;
  private onAttackCallback?: () => void;
  
  // Running state tracking
  private lastKeyPress: { [key: string]: number } = {};
  private doubleTapThreshold: number = 300; // milliseconds
  private isRunning: boolean = false;
  

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.isDesktop = scene.sys.game.device.os.desktop;
  }

  initialize(onAttackCallback?: () => void): void {
    this.onAttackCallback = onAttackCallback;
    
    if (this.isDesktop) {
      this.createKeyboardControls();
    } else {
      // TEMPORARILY DISABLE JOYSTICK TO TEST ATTACK BUTTON
      // this.createVirtualJoystick();
      this.createAttackButton();
    }
  }

  private createVirtualJoystick(): void {
    this.joyStick = new VirtualJoystick(this.scene, {
      x: 100,
      y: this.scene.scale.height - 100,
      radius: 60,
      base: this.scene.add.image(0, 0, 'base').setDisplaySize(110, 110).setDepth(1000),
      thumb: this.scene.add.image(0, 0, 'thumb').setDisplaySize(50, 50).setDepth(1001),
      forceMin: 0,
      enable: true,
      dir: '8dir',
      fixed: true,
      // CRITICAL: Allow other input events to work
      stopPropagation: false
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
    // Position button at center top - far from joystick to test interference
    const buttonX = this.scene.scale.width / 2;
    const buttonY = 100;
    
    // Create HUGE visual button to make it obvious
    this.attackButton = this.scene.add.graphics();
    this.attackButton.lineStyle(5, 0xff0000);
    this.attackButton.strokeCircle(0, 0, 80);
    this.attackButton.fillStyle(0xff0000, 0.5);
    this.attackButton.fillCircle(0, 0, 80);
    this.attackButton.setPosition(buttonX, buttonY);
    this.attackButton.setDepth(2000); // Very high depth

    // Create HUGE interactive zone
    this.attackButtonZone = this.scene.add.zone(buttonX, buttonY, 200, 200);
    this.attackButtonZone.setDepth(2001);
    this.attackButtonZone.setInteractive();

    // Test if zone events work at all
    this.attackButtonZone.on('pointerdown', () => {
      this.debugAttackTap('zone-pointerdown');
    });
    
    // TEST: Global touch detector to see if ANY touches work
    this.scene.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      // Show global touch location for any touch
      if ((this.scene as any).movementStateText) {
        (this.scene as any).movementStateText.setText(`GLOBAL TOUCH: ${pointer.x.toFixed(0)}, ${pointer.y.toFixed(0)}`);
      }
      
      // Check if it's near our button
      const distance = Phaser.Geom.Point.Distance(
        { x: pointer.x, y: pointer.y },
        { x: buttonX, y: buttonY }
      );
      
      if (distance <= 100) {
        this.debugAttackTap('global-near-button');
      }
    });
    
    // FALLBACK: If VirtualJoystick still blocks, create attack zone after joystick
    this.scene.time.delayedCall(100, () => {
      this.createBackupAttackDetection(buttonX, buttonY);
    });
  }
  
  private createBackupAttackDetection(buttonX: number, buttonY: number): void {
    // Manual touch detection using DOM events as ultimate fallback
    const canvas = this.scene.sys.canvas;
    if (canvas) {
      canvas.addEventListener('touchstart', (event: TouchEvent) => {
        event.preventDefault();
        
        const rect = canvas.getBoundingClientRect();
        const touch = event.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        // Scale coordinates to game coordinates
        const scaleX = this.scene.scale.width / rect.width;
        const scaleY = this.scene.scale.height / rect.height;
        const gameX = x * scaleX;
        const gameY = y * scaleY;
        
        // Check if touch is near button
        const distance = Math.sqrt(
          Math.pow(gameX - buttonX, 2) + Math.pow(gameY - buttonY, 2)
        );
        
        if (distance <= 100) {
          this.debugAttackTap('dom-touchstart');
        }
        
        // Show any touch for debugging
        if ((this.scene as any).movementStateText) {
          (this.scene as any).movementStateText.setText(`DOM TOUCH: ${gameX.toFixed(0)}, ${gameY.toFixed(0)}`);
        }
      });
    }
  }

  private debugAttackTap(eventType: string): void {
    // Flash the visual button
    this.attackButton?.setTint(0xffffff);
    this.scene.time.delayedCall(100, () => {
      this.attackButton?.clearTint();
    });
    
    // Show debug message
    if (!this.isDesktop && (this.scene as any).movementStateText) {
      (this.scene as any).movementStateText.setText(`MOBILE: ${eventType.toUpperCase()} DETECTED!`);
      this.scene.time.delayedCall(1000, () => {
        if ((this.scene as any).movementStateText) {
          (this.scene as any).movementStateText.setText('');
        }
      });
    }
    
    this.handleAttackInput();
  }

  private handleAttackInput(): void {
    if (this.onAttackCallback) {
      // Debug: Show that attack button was tapped
      if (!this.isDesktop && (this.scene as any).movementStateText) {
        (this.scene as any).movementStateText.setText('MOBILE: ATTACK BUTTON TAPPED!');
      }
      
      // Simply trigger attack - main game will use its continuously tracked movement state
      this.onAttackCallback();
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
    } else if (this.joyStick && this.cursorKeys) {
      // Use cursor keys generated by VirtualJoystick (more reliable)
      const force = this.joyStick.force;
      
      // Normalize force to 0-1 range (VirtualJoystick seems to return values > 1)
      const normalizedForce = Math.min(force / 60, 1); // 60 is our radius
      
      const forceDeadZone = 0.15;     // Minimum force to register movement
      const runThreshold = 0.7;       // Force threshold for running
      
      if (normalizedForce > forceDeadZone) {
        // Use the cursor keys that VirtualJoystick creates
        if (this.cursorKeys.up.isDown) direction += 'up';
        if (this.cursorKeys.down.isDown) direction += 'down';
        if (this.cursorKeys.left.isDown) direction += 'left';
        if (this.cursorKeys.right.isDown) direction += 'right';
        
        // Determine running based on normalized force
        isRunning = normalizedForce > runThreshold;
      }
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
      // Position large test button at center top
      const buttonX = this.scene.scale.width / 2;
      const buttonY = 100;
      this.attackButton?.setPosition(buttonX, buttonY);
      this.attackButtonZone?.setPosition(buttonX, buttonY);
    }
  }

  destroy(): void {
    this.joyStick?.destroy();
    this.attackButton?.destroy();
    this.attackButtonZone?.destroy();
  }
}