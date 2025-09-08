import { OrientationManager } from '../../shared/OrientationManager';
import { ResizeManager } from '../../shared/ResizeManager';
import { SoundManager } from '../../shared/SoundManager';
import { UIStyles } from '../../shared/UIStyles';

export default class LoadingScene extends Phaser.Scene {
  private progressBar!: Phaser.GameObjects.Graphics;
  private loadingText!: Phaser.GameObjects.Text;
  private percentText!: Phaser.GameObjects.Text;
  private startButton!: Phaser.GameObjects.Text;
  private lastTextChangeProgress = 0;
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
      ...UIStyles.text.title
    }).setOrigin(0.5);

    this.progressBar = this.add.graphics();
    this.add.graphics().fillStyle(UIStyles.colors.background, 0.8).fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    this.loadingText = this.add.text(width / 2, height * 0.6, this.funnyTexts[0], {
      ...UIStyles.text.loading
    }).setOrigin(0.5);

    this.percentText = this.add.text(width / 2, height / 2, "0%", {
      fontSize: "32px",
      fontFamily: 'serif',
      fontWeight: 'bold',
      color: '#DAA520',
      stroke: '#000000',
      strokeThickness: 2
    }).setOrigin(0.5);

    // Real progress tracking
    this.load.on('progress', (progress: number) => {
      const { width, height } = this.cameras.main;
      const percentage = Math.round(progress * 100);
      
      this.percentText.setText(`${percentage}%`);
      this.progressBar.clear().fillStyle(UIStyles.colors.accent, 1).fillRect(width / 2 - 150, height / 2 - 15, 300 * progress, 30);
      
      // Change text every ~14% progress (7 texts total)
      const textChangeThreshold = 0.14;
      if (progress - this.lastTextChangeProgress >= textChangeThreshold) {
        this.currentTextIndex = (this.currentTextIndex + 1) % this.funnyTexts.length;
        this.loadingText.setText(this.funnyTexts[this.currentTextIndex]);
        this.lastTextChangeProgress = progress;
      }
    });

    this.load.on('complete', () => {
      this.completeLoading();
    });

    this.load.image('background', '/images/background-template-2776x1440.png');
    this.load.image('base', '/images/base.png');
    this.load.image('thumb', '/images/thumb.png');
    this.load.spritesheet('playerIdle', '/images/Swordsman_lvl1_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.spritesheet('playerWalk', '/images/Swordsman_lvl1_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('playerAttack', '/images/Swordsman_lvl1_attack_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });
    this.load.spritesheet('playerHurt', '/images/Swordsman_lvl1_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 20 });
    this.load.spritesheet('playerDeath', '/images/Swordsman_lvl1_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 28 });
    this.load.spritesheet('playerWalkAttack', '/images/Swordsman_lvl1_Walk_Attack_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('playerRun', '/images/Swordsman_lvl1_Run_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });
    this.load.spritesheet('playerRunAttack', '/images/Swordsman_lvl1_Run_Attack_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 32 });
    // Slime 1 spritesheets
    this.load.spritesheet('slime1Idle', '/images/Slime1_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime1Walk', '/images/Slime1_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime1Attack', '/images/slime1Attack.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.spritesheet('slime1Hurt', '/images/Slime1_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 19 });
    this.load.spritesheet('slime1Death', '/images/Slime1_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    
    // Slime 2 spritesheets
    this.load.spritesheet('slime2Idle', '/images/Slime2_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime2Walk', '/images/Slime2_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime2Attack', '/images/slime2Attack.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 44 });
    this.load.spritesheet('slime2Hurt', '/images/Slime2_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 19 });
    this.load.spritesheet('slime2Death', '/images/Slime2_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    
    // Slime 3 spritesheets
    this.load.spritesheet('slime3Idle', '/images/Slime3_Idle_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime3Walk', '/images/Slime3_Walk_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 24 });
    this.load.spritesheet('slime3Attack', '/images/slime3Attack.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 36 });
    this.load.spritesheet('slime3Hurt', '/images/Slime3_Hurt_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 19 });
    this.load.spritesheet('slime3Death', '/images/Slime3_Death_full.png', { frameWidth: 64, frameHeight: 64, startFrame: 0, endFrame: 40 });
    this.load.audio('swing1', '/audios/swing.wav');
    this.load.audio('swing2', '/audios/swing2.wav');
    this.load.audio('swing3', '/audios/swing3.wav');
    this.load.audio('blood', '/audios/blood.wav');
    this.load.audio('footstep', '/audios/footstep.ogg');
    this.load.audio('backgroundMusic', '/audios/Magic Elderwood Forest - Overworld.mp3');
    this.load.audio('lose', '/audios/Lose vol. 1.wav');
    this.load.image('heartFull', '/images/hud_heartFull.png');
    this.load.image('heartHalf', '/images/hud_heartHalf.png');
    this.load.image('heartEmpty', '/images/hud_heartEmpty.png');
  }

  create() {
    OrientationManager.getInstance().initialize(this);
    ResizeManager.getInstance().initialize(this, this.handleResize.bind(this));
  }

  private handleResize() {
    // Recalculate positions for all UI elements
    const { width, height } = this.cameras.main;
    
    // Update title position
    const titleText = this.children.list.find(child => 
      child instanceof Phaser.GameObjects.Text && child.text === "Prototype Adventure"
    ) as Phaser.GameObjects.Text;
    if (titleText) {
      titleText.setPosition(width / 2, height * 0.3);
    }
    
    // Update progress bar background
    const progressBg = this.children.list.find(child => 
      child instanceof Phaser.GameObjects.Graphics && child !== this.progressBar
    ) as Phaser.GameObjects.Graphics;
    if (progressBg) {
      progressBg.clear().fillStyle(UIStyles.colors.background, 0.8).fillRect(width / 2 - 160, height / 2 - 25, 320, 50);
    }
    
    // Update loading text position
    if (this.loadingText) {
      this.loadingText.setPosition(width / 2, height * 0.6);
    }
    
    // Update percent text position
    if (this.percentText) {
      this.percentText.setPosition(width / 2, height / 2);
    }
    
    // Update progress bar
    if (this.progressBar) {
      // Get current progress from the text
      const currentProgress = parseInt(this.percentText.text.replace('%', '')) / 100;
      this.progressBar.clear().fillStyle(UIStyles.colors.accent, 1).fillRect(width / 2 - 150, height / 2 - 15, 300 * currentProgress, 30);
    }
    
    // Update start button position if visible
    if (this.startButton) {
      this.startButton.setPosition(width / 2, height / 2);
    }
  }



  private completeLoading() {
    this.showStartButton();
  }

  private showStartButton() {
    const { width, height } = this.cameras.main;

    this.progressBar.setVisible(false);
    this.percentText.setVisible(false);
    this.loadingText.setText("Ready to play!");

    this.startButton = this.add.text(width / 2, height / 2, "Start Game", {
      ...UIStyles.button.primary
    }).setOrigin(0.5).setInteractive();

    // Hover effects
    this.startButton.on('pointerover', () => {
      this.startButton.setStyle({ backgroundColor: '#A0522D' });
    });
    
    this.startButton.on('pointerout', () => {
      this.startButton.setStyle({ backgroundColor: '#8B4513' });
    });

    this.startButton.on('pointerdown', () => {
      // Load audio assets after user interaction
      this.load.audio('swing1', '/audios/swing.wav');
      this.load.audio('swing2', '/audios/swing2.wav');
      this.load.audio('swing3', '/audios/swing3.wav');
      this.load.audio('blood', '/audios/blood.wav');
      this.load.audio('footstep', '/audios/footstep.ogg');
      this.load.audio('backgroundMusic', '/audios/Magic Elderwood Forest - Overworld.mp3');
      this.load.audio('lose', '/audios/Lose vol. 1.wav');
      
      this.load.once('complete', () => {
        const music = this.sound.add('backgroundMusic');
        SoundManager.getInstance().setBackgroundMusic(music);
        this.scene.start('PrototypeGame');
      });
      
      this.load.start();
    });
  }
}