export class OrientationManager {
  private static instance: OrientationManager;
  private currentScene: Phaser.Scene | null = null;

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
      setTimeout(() => this.checkOrientation(), 100);
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    window.addEventListener('resize', handleOrientationChange);
  }

  private checkOrientation() {
    if (!this.currentScene) return;

    const isDesktop = this.currentScene.sys.game.device.os.desktop;
    const isPortrait = window.innerHeight > window.innerWidth;

    if (!isDesktop && isPortrait) {
      this.pauseGame();
    } else {
      this.resumeGame();
    }
  }

  private pauseGame() {
    if (!this.currentScene) return;
    
    try {
      if (this.currentScene.scene.isActive()) {
        this.currentScene.scene.pause();
        this.currentScene.sound.pauseAll();
      }
    } catch (e) {
      // Scene might have been destroyed, ignore error
    }
    this.showTurnMessage();
  }

  private resumeGame() {
    if (!this.currentScene) return;
    
    try {
      if (this.currentScene.scene.isPaused()) {
        this.currentScene.scene.resume();
        this.currentScene.sound.resumeAll();
      }
    } catch (e) {
      // Scene might have been destroyed, ignore error
    }
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
    if (this.currentScene) {
      this.currentScene.scale.off('orientationchange', this.handleOrientationChange, this);
    }
    this.currentScene = null;
  }
}