export class ResizeManager {
  private static instance: ResizeManager;
  private currentScene: Phaser.Scene | null = null;
  private resizeCallback: (() => void) | null = null;
  private resizeHandler: (() => void) | null = null;
  private isListenerSetup: boolean = false;

  static getInstance(): ResizeManager {
    if (!ResizeManager.instance) {
      ResizeManager.instance = new ResizeManager();
    }
    return ResizeManager.instance;
  }

  initialize(scene: Phaser.Scene, callback?: () => void) {
    this.currentScene = scene;
    this.resizeCallback = callback || null;
    this.setupResizeListener();
    this.handleResize(); // Initial resize
  }

  updateScene(scene: Phaser.Scene, callback?: () => void) {
    this.currentScene = scene;
    this.resizeCallback = callback || null;
  }



  private setupResizeListener() {
    if (this.isListenerSetup) {
      return; // Already setup
    }

    this.resizeHandler = () => {
      this.handleResize();
    };

    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('orientationchange', () => {
      setTimeout(this.resizeHandler!, 100);
    });
    this.isListenerSetup = true;
  }

  private handleResize() {
    if (!this.currentScene) return;

    this.currentScene.scale.refresh();

    if (this.resizeCallback) {
      this.resizeCallback();
    }
  }

  triggerResize() {
    this.handleResize();
  }

  destroy() {
    if (this.resizeHandler && this.isListenerSetup) {
      window.removeEventListener('resize', this.resizeHandler);
      this.isListenerSetup = false;
    }
    this.currentScene = null;
    this.resizeCallback = null;
    this.resizeHandler = null;
  }
}