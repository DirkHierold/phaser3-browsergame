import Phaser from 'phaser';

export interface InputState {
  direction: string;
  isMoving: boolean;
  isRunning: boolean;
  isAttacking: boolean;
}

export interface TapTarget {
  type: 'ground' | 'slime';
  position: { x: number; y: number };
  slime?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
  isDoubleTap?: boolean;
  isLongPress?: boolean;
}

export interface MovementCommand {
  targetPosition: { x: number; y: number };
  movementType: 'walk' | 'run';
  onArrival?: () => void;
}

export class InputController {
  private scene: Phaser.Scene;

  // Tap-to-Move properties
  private lastTapTime: number = 0;
  private doubleTapThreshold: number = 300;
  private currentTapTarget?: TapTarget;
  private lockedSlime?: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  // Movement tracking
  private movementCommand?: MovementCommand;

  // Callbacks
  private onAttackCallback?: (isMoving: boolean, isRunning: boolean) => void;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  initialize(
    onAttackCallback?: (isMoving: boolean, isRunning: boolean) => void
  ): void {
    this.onAttackCallback = onAttackCallback;

    // Setup pointer events for both desktop and mobile
    this.scene.input.on('pointerdown', this.handlePointerDown, this);
    this.scene.input.on('pointerup', this.handlePointerUp, this);
  }

  private handlePointerDown(pointer: Phaser.Input.Pointer): void {
    // Don't process input if player is dead
    // @ts-ignore - accessing custom property from scene
    if (this.scene.playerState === 'death' || this.scene.isDeadAndFrozen) {
      return;
    }

    const now = Date.now();
    const isDoubleTap = (now - this.lastTapTime) < this.doubleTapThreshold;

    // Detect what was tapped
    const target = this.detectTapTarget(pointer, isDoubleTap);

    this.currentTapTarget = target;
    this.lastTapTime = now;
  }

  private handlePointerUp(pointer: Phaser.Input.Pointer): void {
    if (!this.currentTapTarget) return;

    // Execute tap action
    if (this.currentTapTarget.type === 'slime') {
      this.executeSlimeTap(this.currentTapTarget);
    } else {
      this.executeGroundTap(this.currentTapTarget);
    }

    this.currentTapTarget = undefined;
  }

  private detectTapTarget(pointer: Phaser.Input.Pointer, isDoubleTap: boolean): TapTarget {
    // Get all slimes from scene
    const slimes = this.getSlimesFromScene();
    const tolerance = 1.3; // 30% larger hitbox

    // Check each slime with expanded bounds
    for (const slime of slimes) {
      if (!slime.active) continue;

      const bounds = slime.getBounds();
      const expandedBounds = Phaser.Geom.Rectangle.Inflate(
        Phaser.Geom.Rectangle.Clone(bounds),
        bounds.width * 0.15, // 15% on each side = 30% total
        bounds.height * 0.15
      );

      if (expandedBounds.contains(pointer.x, pointer.y)) {
        return {
          type: 'slime',
          position: { x: pointer.x, y: pointer.y },
          slime: slime,
          isDoubleTap
        };
      }
    }

    // Default: Ground tap
    return {
      type: 'ground',
      position: { x: pointer.x, y: pointer.y },
      isDoubleTap
    };
  }

  private getSlimesFromScene(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody[] {
    // Access slime from scene - this will be called on the main scene
    const slimes: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody[] = [];

    // @ts-ignore - accessing custom property from scene
    if (this.scene.slime && this.scene.slime.active) {
      // @ts-ignore
      slimes.push(this.scene.slime);
    }

    return slimes;
  }


  private executeGroundTap(target: TapTarget): void {
    // Always run, no more walking
    const movementType = 'run';

    this.movementCommand = {
      targetPosition: target.position,
      movementType
    };

    // Visual feedback
    this.scene.events.emit('tap-ground', target.position, movementType);

    // Haptic feedback
    this.triggerHaptic([10]);

    // Clear locked slime if tapping far away
    if (this.lockedSlime && target.position) {
      const distance = Phaser.Math.Distance.Between(
        this.lockedSlime.x,
        this.lockedSlime.y,
        target.position.x,
        target.position.y
      );

      if (distance > 100) {
        this.lockedSlime = undefined;
        this.scene.events.emit('slime-unlocked');
      }
    }
  }

  private executeSlimeTap(target: TapTarget): void {
    if (!target.slime) return;

    // Lock this slime as target
    this.lockedSlime = target.slime;

    // Visual feedback
    this.scene.events.emit('tap-slime', target.slime);

    // Haptic feedback
    this.triggerHaptic([15, 50, 15]);

    // Check if in attack range
    // @ts-ignore - accessing player from scene
    const player = this.scene.player;
    if (!player) return;

    const baseScale = Math.min(this.scene.scale.width / 800, this.scene.scale.height / 600);
    const attackRange = this.scene.sys.game.device.os.desktop ? 60 * baseScale : 50 * baseScale;

    const distance = Phaser.Math.Distance.Between(
      player.x,
      player.y,
      target.slime.x,
      target.slime.y
    );

    if (distance <= attackRange) {
      // In range - attack immediately
      if (this.onAttackCallback) {
        this.onAttackCallback(false, false);
      }
    } else {
      // Out of range - calculate position at safe distance from slime
      // IMPORTANT: Calculate angle using body centers, but return sprite position
      // Slime body has offset (26, 26) with radius 7
      // Player body has offset (24, 32) with radius 8
      const slimeBody = target.slime.body as Phaser.Physics.Arcade.Body;
      const playerBody = player.body as Phaser.Physics.Arcade.Body;

      // Calculate body centers for accurate angle
      const slimeBodyX = target.slime.x + slimeBody.offset.x + slimeBody.halfWidth;
      const slimeBodyY = target.slime.y + slimeBody.offset.y + slimeBody.halfHeight;
      const playerBodyX = player.x + playerBody.offset.x + playerBody.halfWidth;
      const playerBodyY = player.y + playerBody.offset.y + playerBody.halfHeight;

      const dx = slimeBodyX - playerBodyX;
      const dy = slimeBodyY - playerBodyY;
      const angle = Math.atan2(dy, dx);

      // Calculate target SPRITE position: Stop at 110% of attack range from slime BODY center
      // This ensures player stops BEFORE reaching the slime and doesn't collide with it
      // At 60px range: 110% = 66px from body center - safe distance with no collision
      const safeDistance = attackRange * 1.1;
      const targetBodyX = slimeBodyX - Math.cos(angle) * safeDistance;
      const targetBodyY = slimeBodyY - Math.sin(angle) * safeDistance;

      // Convert from body center position to sprite position
      // Target sprite position = body position - body offset
      const targetX = targetBodyX - playerBody.offset.x - playerBody.halfWidth;
      const targetY = targetBodyY - playerBody.offset.y - playerBody.halfHeight;

      // Always run
      const movementType = 'run';

      this.movementCommand = {
        targetPosition: { x: targetX, y: targetY },
        movementType,
        onArrival: () => {
          if (this.onAttackCallback) {
            this.onAttackCallback(false, false);
          }
        }
      };
    }
  }


  private triggerHaptic(pattern: number[]): void {
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  }

  getMovementCommand(): MovementCommand | undefined {
    return this.movementCommand;
  }

  clearMovementCommand(): void {
    this.movementCommand = undefined;
  }

  getLockedSlime(): Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined {
    return this.lockedSlime;
  }

  // Legacy compatibility - returns empty state since we're tap-based now
  getInputState(): InputState {
    return {
      direction: '',
      isMoving: false,
      isRunning: false,
      isAttacking: false
    };
  }

  updatePositions(): void {
    // No UI elements to update in tap-to-move
  }

  destroy(): void {
    this.scene.input.off('pointerdown', this.handlePointerDown, this);
    this.scene.input.off('pointerup', this.handlePointerUp, this);
  }
}
