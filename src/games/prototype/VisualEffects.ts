import Phaser from 'phaser';

/**
 * Tap Indicator - Shows where the user tapped
 */
export class TapIndicator extends Phaser.GameObjects.Graphics {
  constructor(scene: Phaser.Scene, x: number, y: number, type: 'walk' | 'run' | 'attack') {
    super(scene);

    const config = {
      walk: { color: 0x3498db, radius: 30, lineWidth: 3 },
      run: { color: 0xe67e22, radius: 40, lineWidth: 4 },
      attack: { color: 0xe74c3c, radius: 25, lineWidth: 3 }
    }[type];

    this.lineStyle(config.lineWidth, config.color, 1);
    this.strokeCircle(x, y, config.radius);
    this.setAlpha(1);
    this.setDepth(1000);

    scene.add.existing(this);

    // Fade out animation
    scene.tweens.add({
      targets: this,
      alpha: 0,
      duration: 300,
      ease: 'Power2',
      onComplete: () => this.destroy()
    });

    // Expand animation
    scene.tweens.add({
      targets: this,
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 300,
      ease: 'Power2'
    });
  }
}

/**
 * Attack Range Indicator - Shows attack range around player
 */
export class AttackRangeIndicator extends Phaser.GameObjects.Graphics {
  private player: Phaser.GameObjects.Sprite;
  private attackRange: number;

  constructor(scene: Phaser.Scene, player: Phaser.GameObjects.Sprite, attackRange: number) {
    super(scene);
    this.player = player;
    this.attackRange = attackRange;
    this.setDepth(900);
    scene.add.existing(this);
  }

  update(lockedSlime?: Phaser.GameObjects.Sprite): void {
    this.clear();

    if (!lockedSlime) return;

    // Calculate distance to locked slime
    const distance = Phaser.Math.Distance.Between(
      this.player.x,
      this.player.y,
      lockedSlime.x,
      lockedSlime.y
    );

    // Color: Green if in range, Red if out of range
    const color = distance <= this.attackRange ? 0x2ecc71 : 0xe74c3c;
    const alpha = 0.2;

    this.lineStyle(2, color, alpha * 2);
    this.fillStyle(color, alpha);
    this.fillCircle(this.player.x, this.player.y, this.attackRange);
    this.strokeCircle(this.player.x, this.player.y, this.attackRange);
  }
}

/**
 * Slime Target Highlight - Shows which slime is targeted
 */
export class SlimeTargetHighlight extends Phaser.GameObjects.Graphics {
  private slime: Phaser.GameObjects.Sprite;
  private pulseProgress: number = 0;

  constructor(scene: Phaser.Scene, slime: Phaser.GameObjects.Sprite) {
    super(scene);
    this.slime = slime;
    this.setDepth(950);
    scene.add.existing(this);
  }

  update(delta: number): void {
    this.pulseProgress += delta / 1000; // Convert to seconds

    this.clear();

    // Pulsing effect
    const alpha = 0.5 + Math.sin(this.pulseProgress * 5) * 0.3;

    this.lineStyle(3, 0xff0000, alpha);
    this.strokeCircle(this.slime.x, this.slime.y, this.slime.displayWidth / 2 + 10);
  }
}

/**
 * Charge Indicator - Shows charging progress
 */
export class ChargeIndicator extends Phaser.GameObjects.Graphics {
  private target: Phaser.GameObjects.Sprite;
  private progress: number = 0;
  private duration: number;

  constructor(scene: Phaser.Scene, target: Phaser.GameObjects.Sprite, duration: number = 500) {
    super(scene);
    this.target = target;
    this.duration = duration;
    this.setDepth(999);
    scene.add.existing(this);
  }

  update(delta: number): void {
    this.progress += delta / this.duration;
    this.progress = Math.min(this.progress, 1);

    this.clear();

    const centerX = this.target.x;
    const centerY = this.target.y - 50;

    // Background circle
    this.lineStyle(4, 0x333333, 0.5);
    this.strokeCircle(centerX, centerY, 30);

    // Progress arc
    const startAngle = -90; // Start at top
    const endAngle = startAngle + (360 * this.progress);

    this.lineStyle(4, 0xf39c12, 1);
    this.beginPath();
    this.arc(
      centerX,
      centerY,
      30,
      Phaser.Math.DegToRad(startAngle),
      Phaser.Math.DegToRad(endAngle),
      false
    );
    this.strokePath();

    // Glow effect when complete
    if (this.progress >= 1) {
      this.lineStyle(6, 0xf1c40f, 0.8);
      this.strokeCircle(centerX, centerY, 32);
    }

    // Player pulse effect during charge
    const pulseTo = 1.0 + (this.progress * 0.1);
    this.target.setScale(pulseTo);
  }

  destroy(): void {
    // Reset player scale
    this.target.setScale(1.0);
    super.destroy();
  }
}

/**
 * Charge Attack Visual Effect - Enhanced visual for charge attacks
 */
export class ChargeAttackEffect extends Phaser.GameObjects.Graphics {
  constructor(
    scene: Phaser.Scene,
    player: Phaser.GameObjects.Sprite,
    direction: string
  ) {
    super(scene);
    this.setDepth(998);
    scene.add.existing(this);

    // Flash effect
    this.fillStyle(0xffff00, 0.6);
    this.fillCircle(player.x, player.y, 80);

    // Enhanced sword arc based on direction
    this.lineStyle(5, 0xffd700, 1);
    const arcRadius = 60;
    const startAngle = this.getStartAngle(direction);

    this.beginPath();
    this.arc(
      player.x,
      player.y,
      arcRadius,
      Phaser.Math.DegToRad(startAngle),
      Phaser.Math.DegToRad(startAngle + 120),
      false
    );
    this.strokePath();

    // Fade out and destroy
    scene.tweens.add({
      targets: this,
      alpha: 0,
      duration: 200,
      ease: 'Power2',
      onComplete: () => this.destroy()
    });
  }

  private getStartAngle(direction: string): number {
    const angles: Record<string, number> = {
      down: 60,
      up: 240,
      left: 150,
      right: 330
    };
    return angles[direction] || 0;
  }
}

/**
 * Speed Lines - Shows movement speed for running
 */
export class SpeedLines {
  private particles?: Phaser.GameObjects.Particles.ParticleEmitter;
  private scene: Phaser.Scene;
  private player: Phaser.GameObjects.Sprite;

  constructor(scene: Phaser.Scene, player: Phaser.GameObjects.Sprite) {
    this.scene = scene;
    this.player = player;
    this.createParticles();
  }

  private createParticles(): void {
    // Create a simple texture for the particle
    const graphics = this.scene.add.graphics();
    graphics.fillStyle(0xffffff, 1);
    graphics.fillRect(0, 0, 4, 2);
    graphics.generateTexture('speed-line-particle', 4, 2);
    graphics.destroy();

    this.particles = this.scene.add.particles(0, 0, 'speed-line-particle', {
      speed: { min: -200, max: -100 },
      angle: { min: -10, max: 10 },
      scale: { start: 1, end: 0 },
      alpha: { start: 0.6, end: 0 },
      lifespan: 200,
      frequency: 50,
      quantity: 2,
      tint: 0xffffff,
      blendMode: 'ADD'
    });

    this.particles.startFollow(this.player);
    this.particles.setDepth(900);
  }

  start(): void {
    this.particles?.start();
  }

  stop(): void {
    this.particles?.stop();
  }

  destroy(): void {
    this.particles?.destroy();
  }
}
