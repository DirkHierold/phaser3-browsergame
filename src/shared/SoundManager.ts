export class SoundManager {
  private static instance: SoundManager;
  private backgroundMusic: Phaser.Sound.BaseSound | null = null;
  private isPausedByUs: boolean = false;

  static getInstance(): SoundManager {
    if (!SoundManager.instance) {
      SoundManager.instance = new SoundManager();
    }
    return SoundManager.instance;
  }

  setBackgroundMusic(music: Phaser.Sound.BaseSound) {
    if (this.backgroundMusic && this.backgroundMusic.isPlaying) {
      this.backgroundMusic.stop();
    }
    this.backgroundMusic = music;
    this.backgroundMusic.play({ loop: true, volume: 0.5 });
    this.isPausedByUs = false;
  }

  pauseBackgroundMusic() {
    if (this.backgroundMusic && this.backgroundMusic.isPlaying && !this.isPausedByUs) {
      this.backgroundMusic.pause();
      this.isPausedByUs = true;
    }
  }

  resumeBackgroundMusic() {
    if (this.backgroundMusic && this.isPausedByUs) {
      // Resume AudioContext if suspended
      const context = (this.backgroundMusic.manager as any)?.context;
      if (context?.state === 'suspended') {
        context.resume();
      }
      
      this.backgroundMusic.resume();
      this.isPausedByUs = false;
    }
  }
}