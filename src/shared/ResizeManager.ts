export class ResizeManager {
  private static instance: ResizeManager;
  private currentScene: Phaser.Scene | null = null;
  private resizeCallback: (() => void) | null = null;

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
    const handleResize = () => {
      this.handleResize();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', () => {
      setTimeout(handleResize, 100);
    });
  }

  private handleResize() {
    if (!this.currentScene) return;

    this.currentScene.scale.refresh();
    
    if (this.resizeCallback) {
      this.resizeCallback();
    }
  }

  destroy() {
    this.currentScene = null;
    this.resizeCallback = null;
  }
}