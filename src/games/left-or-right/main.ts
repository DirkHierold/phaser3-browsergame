import Phaser from 'phaser';
import Player from '../../shared/Player';
import Obstacles from '../../shared/Obstacles';
import Targets from '../../shared/Targets';
import { Button } from '../../shared/utils/Button';



class LeftOrRightGame extends Phaser.Scene {
  private levelData: any[] = [];
  private player!: Player;
  private obstacles!: Obstacles;
  private targets!: Targets;
  private scrollSpeed: number = 180;
  private currentLevelY: number = 0;
  private nextElementIndex: number = 0;
  private lastObjectY: number = 0;
  private gameFinished: boolean = false;
  private attemptScore: number = 0;
  private moveParticles!: Phaser.GameObjects.Particles.ParticleEmitter;
  private newGameButton!: Button;
  private canChoose: boolean = true;
  private jumpCount: number = 0;
  private lastPlatformPair: any = null;
  private lastSafeSide: 'left' | 'right' = 'left';

  preload() {
    this.load.json('level', '/left-or-right-level.json');
  }

  create() {
    this.gameFinished = false;
    this.canChoose = true;
    this.jumpCount = 0;
    this.attemptScore += 1;
    this.nextElementIndex = 0;
    this.lastObjectY = 0;
    this.currentLevelY = 0;
    this.cameras.main.setBackgroundColor('#87CEEB');

    const attemptText = this.add.text(this.game.canvas.width / 2, 80, 'Attempt ' + this.attemptScore, { fontSize: '32px', color: '#000' }).setOrigin(0.5, 0.5).setDepth(1000);
    this.time.delayedCall(700, () => attemptText.destroy(), [], this);

    this.physics.world.setBounds(0, 0, 800, 600);
    this.obstacles = new Obstacles(this);
    this.targets = new Targets(this);

    // Startplattform
    const startPlatform = this.obstacles.addBlock(300, 550, 200, 50).setOrigin(0, 0);

    this.player = new Player(this);
    this.player.setOrigin(0, 0).setPosition(375, 500);

    // Partikel
    this.moveParticles = this.add.particles(0, 0, 'particle', {
      speed: { min: -40, max: -80 },
      angle: { min: 160, max: 200 },
      scale: { start: 0.3, end: 0 },
      alpha: { start: 1, end: 0 },
      lifespan: 400,
      quantity: 1,
      frequency: 40,
      follow: this.player,
      followOffset: { x: -10, y: this.player.displayHeight / 2 },
      blendMode: 'ADD',
    });

    this.input.keyboard?.on('keydown-LEFT', () => this.choose('left'));
    this.input.keyboard?.on('keydown-RIGHT', () => this.choose('right'));
    this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
      if (!this.canChoose) return;
      if (pointer.x < this.game.canvas.width / 2) {
        this.choose('left');
      } else {
        this.choose('right');
      }
    });


    // Leveldaten laden wie bei Dash
    this.levelData = this.cache.json.get('level');

    this.spawnNextPair();
  }

  spawnNextPair() {
    if (!this.levelData || this.nextElementIndex >= this.levelData.length) return;
    const data = this.levelData[this.nextElementIndex];
    if (data.type === 'platform-pair') {
      // Spawn two platforms: left and right
      const leftX = 150;
      const rightX = 500;
      const y = data.y;
      const left = this.obstacles.addBlock(leftX, y, data.width, data.height).setOrigin(0, 0);
      const right = this.obstacles.addBlock(rightX, y, data.width, data.height).setOrigin(0, 0);

      this.lastPlatformPair = { left, right, breakLeft: data.breakLeft };
      this.canChoose = true;
    } else if (data.type === 'goal') {
      // Zielplattform + Target
      const x = 300;
      const y = data.y;
      const goal = this.obstacles.addBlock(x, y, data.width, data.height).setOrigin(0, 0);

      const target = this.targets.addTarget(x + 75, y - 50).setOrigin(0, 0);
      this.win()
    }
    this.nextElementIndex++;
  }

  choose(side: 'left' | 'right') {
    if (!this.canChoose || !this.lastPlatformPair) return;
    this.canChoose = false;
    const { left, right, breakLeft } = this.lastPlatformPair;
    let chosen, broken;
    if (side === 'left') {
      chosen = left;
      broken = breakLeft ? left : right;
    } else {
      chosen = right;
      broken = breakLeft ? left : right;
    }
    if ((side === 'left' && breakLeft) || (side === 'right' && !breakLeft)) {
      // Falsche Plattform gewählt      
      this.tweenPlayerTo(chosen.x + 50, chosen.y - 50, () => {
        this.breakPlatform(broken, true);
        this.explode();
      });

    } else {
      // Richtige Plattform gewählt
      this.breakPlatform(broken, false);
      this.jumpCount++;
      this.tweenPlayerTo(chosen.x + 50, chosen.y - 50, () => {
        if (this.jumpCount >= 5) {
          this.spawnNextPair();
        } else {
          this.spawnNextPair();
        }
      });
    }
  }

  breakPlatform(platform: Phaser.GameObjects.GameObject, fatal: boolean) {
    this.tweens.add({
      targets: platform,
      alpha: 0,
      y: "+=40",
      duration: 300,
      onComplete: () => {
        platform.destroy();
      }
    });
    if (fatal) {
      this.cameras.main.shake(200, 0.01);
    }
  }

  tweenPlayerTo(x: number, y: number, onComplete: () => void) {
    this.tweens.add({
      targets: this.player,
      x,
      y,
      duration: 300,
      ease: 'Power2',
      onComplete: () => {
        onComplete();
      }
    });
  }

  win() {
    this.gameFinished = true;
    this.physics.pause();
    this.add.text(400, 300, 'You reached the goal with ' + this.attemptScore + ' attempt' + (this.attemptScore == 1 ? '!' : 's!'), { fontSize: '32px', color: '#000' })
      .setOrigin(0.5);
    this.handleGameFinished();
  }

  explode() {
    this.gameFinished = true;
    this.physics.pause();
    const playerCenterX = this.player.x + this.player.displayWidth / 2;
    const playerCenterY = this.player.y + this.player.displayHeight / 2;
    const explosion = this.add.particles(0, 0, 'explosion', {
      x: playerCenterX,
      y: playerCenterY,
      speed: { min: -200, max: 200 },
      angle: { min: 0, max: 360 },
      scale: { start: 1, end: 0 },
      alpha: { start: 1, end: 0 },
      lifespan: 600,
      quantity: 30,
      blendMode: 'ADD',
    });
    this.player.setVisible(false);
    this.time.delayedCall(700, () => {
      explosion.stop();
      this.moveParticles.stop();
      this.scene.restart();
    }, [], this);
  }

  handleGameFinished() {
    this.physics.pause();
    this.input.keyboard?.off('keydown-LEFT');
    this.input.keyboard?.off('keydown-RIGHT');
    this.input.off('pointerdown');
    const centerX = this.game.scale.width / 2;
    const centerY = this.game.scale.height / 2 + 100;
    if (this.newGameButton) this.newGameButton.destroy();

    this.newGameButton = new Button(centerX, centerY, "NEW GAME", this, () => {
      this.newGameButton.destroy();
      this.scene.restart();
    });
    this.newGameButton.setOrigin(0.5, 0.5).setDepth(1000);

    this.newGameButton.on('pointerdown', () => {
      this.newGameButton.destroy();
      this.scene.restart();
    });
    this.attemptScore = 0;
  }
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 800,
  height: 600,
  parent: 'game',
  backgroundColor: '#87CEEB',
  dom: { createContainer: true },
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 0 }, debug: false }
  },
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: LeftOrRightGame,
};

new Phaser.Game(config);
