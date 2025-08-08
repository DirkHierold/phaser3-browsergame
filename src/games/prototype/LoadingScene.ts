export default class LoadingScene extends Phaser.Scene {
  private progressBar!: Phaser.GameObjects.Graphics;
  private loadingText!: Phaser.GameObjects.Text;
  private percentText!: Phaser.GameObjects.Text;
  private startButton!: Phaser.GameObjects.Text;
  private isLoadingComplete = false;
  private realLoadingComplete = false;
  private manualProgress = 0;
  private textTimer!: Phaser.Time.TimerEvent;
  private funnyTexts = [
    "Sharpening swords...",
    "Training slimes...",
    "Loading epic battles...",
    "Preparing for adventure...",
    "Charging magic spells...",
    "Assembling pixels...",
    "Downloading courage..."
  ];
  private currentTextIndex = 0;

  constructor() {
    super({ key: 'LoadingScene' });
  }

  preload() {
    const { width, height } = this.cameras.main;

    this.add.text(width / 2, height * 0.3, "Prototype Adventure", {
      fontSize: "48px",
      color: "#ffffff"
    }).setOrigin(0.5);

    this.progressBar = this.add.graphics();
    this.add.graphics().fillStyle(0x222222, 0.8).fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    this.loadingText = this.add.text(width / 2, height * 0.6, this.funnyTexts[0], {
      fontSize: "24px",
      color: "#ffffff"
    }).setOrigin(0.5);

    this.percentText = this.add.text(width / 2, height / 2, "0%", {
      fontSize: "32px",
      color: "#ffffff"
    }).setOrigin(0.5);

    this.textTimer = this.time.addEvent({
      delay: 375,
      callback: () => {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.funnyTexts.length;
        this.loadingText.setText(this.funnyTexts[this.currentTextIndex]);

        // Stop after one complete cycle if real loading is done
        if (this.realLoadingComplete && this.currentTextIndex === 0) {
          this.textTimer.destroy();
          this.completeLoading();
        }
      },
      loop: true
    });

    this.load.on("complete", () => {
      this.realLoadingComplete = true;
      this.sound.play('backgroundMusic', { loop: true, volume: 0.3 });
    });

    // Manual progress control
    this.time.addEvent({
      delay: 100,
      callback: () => {
        if (this.manualProgress < 1) {
          this.manualProgress += 0.04;
          this.percentText.setText(`${Math.round(this.manualProgress * 100)}%`);
          this.progressBar.clear().fillStyle(0x00ff00, 1).fillRect(width / 2 - 150, height / 2 - 15, 300 * this.manualProgress, 30);
        }
      },
      loop: true
    });

    this.load.image('background', '/images/background-template-2776x1440.png');
    this.load.image('base', '/images/base.png');
    this.load.image('thumb', '/images/thumb.png');
    this.load.spritesheet("playerIdle", "/images/Swordsman_lvl1_Idle_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.spritesheet("playerWalk", "/images/Swordsman_lvl1_Walk_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet("playerAttack", "/images/Swordsman_lvl1_attack_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });
    this.load.spritesheet("playerHurt", "/images/Swordsman_lvl1_Hurt_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 20 });
    this.load.spritesheet("playerWalkAttack", "/images/Swordsman_lvl1_Walk_Attack_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet("slimeIdle", "/images/Slime1_Idle_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet("slimeDeath", "/images/Slime1_Death_full.png", { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.audio('swing1', '/audios/swing.wav');
    this.load.audio('swing2', '/audios/swing2.wav');
    this.load.audio('swing3', '/audios/swing3.wav');
    this.load.audio('blood', '/audios/blood.wav');
    this.load.audio('footstep', '/audios/footstep.ogg');
    this.load.audio('backgroundMusic', '/audios/Magic Elderwood Forest - Overworld.wav');
  }

  create() {
    // Game starts only when start button is clicked
  }

  private completeLoading() {
    this.isLoadingComplete = true;
    this.showStartButton();
  }

  private showStartButton() {
    const { width, height } = this.cameras.main;

    this.progressBar.setVisible(false);
    this.percentText.setVisible(false);
    this.loadingText.setText("Ready to play!");

    this.startButton = this.add.text(width / 2, height / 2, "Start Game", {
      fontSize: "32px",
      color: "#00ff00",
      backgroundColor: "#222222",
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive();

    this.startButton.on('pointerdown', () => {
      this.scene.start('PrototypeGame');
    });
  }
}