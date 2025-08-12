import { SoundManager } from './SoundManager';

export class OrientationManager {
  private static instance: OrientationManager;
  private currentScene: Phaser.Scene | null = null;
  private isPortraitMode: boolean = false;

  static getInstance(): OrientationManager {
    if (!OrientationManager.instance) {
      OrientationManager.instance = new OrientationManager();
    }
    return OrientationManager.instance;
  }

  initialize(scene: Phaser.Scene) {
    this.currentScene = scene;
    this.setupOrientationListener();
    this.checkOrientation(); // Initial check
  }

  private setupOrientationListener() {
    const handleOrientationChange = () => {
      // Small delay to let ResizeManager handle resize first
      setTimeout(() => this.checkOrientation(), 150);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
  }

  checkOrientation() {
    if (!this.currentScene) return;

    const isDesktop = this.currentScene.sys.game.device.os.desktop;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (!isDesktop && isPortrait && !this.isPortraitMode) {
      this.isPortraitMode = true;
      this.pauseGame();
    } else if (!isDesktop && !isPortrait && this.isPortraitMode) {
      this.isPortraitMode = false;
      this.resumeGame();
    }
  }

  private pauseGame() {
    if (!this.currentScene) return;
    
    if (this.currentScene.scene.isActive()) {
      this.currentScene.scene.pause();
    }
    SoundManager.getInstance().pauseBackgroundMusic();
    this.showTurnMessage();
  }

  private resumeGame() {
    if (!this.currentScene) return;
    
    if (this.currentScene.scene.isPaused()) {
      this.currentScene.scene.resume();
    }
    SoundManager.getInstance().resumeBackgroundMusic();
    this.hideTurnMessage();
  }

  private showTurnMessage() {
    const turnElement = document.getElementById('turn');
    const turnMessageElement = document.getElementById('turn-message');
    if (turnElement && turnMessageElement) {
      const isGerman = navigator.language.toLowerCase().startsWith('de');
      turnMessageElement.textContent = isGerman 
        ? 'Bitte drehe dein Gerät ins Querformat!' 
        : 'Please turn your device to landscape!';
      turnElement.style.display = 'flex';
    }
  }

  private hideTurnMessage() {
    const turnElement = document.getElementById('turn');
    if (turnElement) {
      turnElement.style.display = 'none';
    }
  }

  updateScene(scene: Phaser.Scene) {
    this.currentScene = scene;
  }

  destroy() {
    this.currentScene = null;
  }
}