import AudioKeys from "../../../shared/utils/consts/AudioKeys";
import SceneKeys from "../../../shared/utils/consts/SceneKeys";

export default class LoadingScene extends Phaser.Scene {
  private progressBar!: Phaser.GameObjects.Graphics;
  private progressBox!: Phaser.GameObjects.Graphics;
  private loadingText!: Phaser.GameObjects.Text;
  private percentText!: Phaser.GameObjects.Text;
  private funnyTexts: string[] = [
    "Waking up the pixels...",
    "Teaching squares to be brave...",
    "Downloading courage...",
    "Buffering heroic moments...",
    "Loading epic fails...",
    "Preparing for inevitable doom...",
    "Charging up the fun meter...",
    "Assembling digital chaos...",
    "Calibrating difficulty spikes..."
  ];
  private currentTextIndex = 0;

  constructor() {
    super({ key: SceneKeys.Loading });
  }

  preload() {
    const { width, height } = this.cameras.main;
    
    // Title
    this.add.text(width / 2, height * 0.3, "Don't Die Square!", {
      fontSize: "48px",
      color: "#ffffff",
      fontFamily: "Arial"
    }).setOrigin(0.5);

    // Progress box
    this.progressBox = this.add.graphics();
    this.progressBox.fillStyle(0x222222, 0.8);
    this.progressBox.fillRect(width / 2 - 160, height / 2 - 25, 320, 50);

    // Progress bar
    this.progressBar = this.add.graphics();

    // Loading text
    this.loadingText = this.add.text(width / 2, height * 0.6, this.funnyTexts[0], {
      fontSize: "24px",
      color: "#ffffff",
      fontFamily: "Arial"
    }).setOrigin(0.5);

    // Percentage text
    this.percentText = this.add.text(width / 2, height / 2, "0%", {
      fontSize: "32px",
      color: "#ffffff",
      fontFamily: "Arial"
    }).setOrigin(0.5);

    // Cycle through funny texts
    this.time.addEvent({
      delay: 1500,
      callback: this.updateFunnyText,
      callbackScope: this,
      loop: true
    });

    // Progress events
    this.load.on("progress", this.updateProgress, this);
    this.load.on("complete", this.loadComplete, this);

    // Load assets
    this.load.audio(AudioKeys.BG_Music, "/audios/anomaly.mp3");
  }

  private updateProgress(progress: number) {
    this.percentText.setText(`${Math.round(progress * 100)}%`);
    
    this.progressBar.clear();
    this.progressBar.fillStyle(0x00ff00, 1);
    this.progressBar.fillRect(
      this.cameras.main.width / 2 - 150,
      this.cameras.main.height / 2 - 15,
      300 * progress,
      30
    );
  }

  private updateFunnyText() {
    this.currentTextIndex = (this.currentTextIndex + 1) % this.funnyTexts.length;
    this.loadingText.setText(this.funnyTexts[this.currentTextIndex]);
  }

  private loadComplete() {
    this.scene.start(SceneKeys.MainMenu);
  }
}