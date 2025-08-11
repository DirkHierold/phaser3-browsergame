export class GameUtils {
  /**
   * Detects if the device is in landscape mode or is a mobile device
   * @returns boolean - true if mobile device detected
   */
  static isMobileDevice(): boolean {
    return window.orientation !== undefined;
  }

  /**
   * Gets appropriate control text based on device type
   * @returns string - control instructions for the user
   */
  static getControlText(): string {
    if (this.isMobileDevice()) {
      return "Use touch to move!";
    } else {
      return "Use direction keys to move!";
    }
  }

  /**
   * Sets up resize handling for a Phaser scene
   * @param scene - The Phaser scene to add resize handling to
   * @param callback - Optional callback function to execute on resize
   */
  static setupResizeHandling(scene: Phaser.Scene, callback?: () => void): void {
    const handleResize = () => {
      if (callback) {
        callback();
      }
      
      // Force scene to recalculate dimensions
      scene.scale.refresh();
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up on scene shutdown
    scene.events.once('shutdown', () => {
      window.removeEventListener('resize', handleResize);
    });

    // Initial setup
    handleResize();
  }

  /**
   * Sets up orientation change handling for mobile devices
   * @param scene - The Phaser scene to add orientation handling to
   * @param callback - Optional callback function to execute on orientation change
   */
  static setupOrientationHandling(scene: Phaser.Scene, callback?: () => void): void {
    if (!this.isMobileDevice()) {
      return; // Skip if not mobile
    }

    const handleOrientationChange = () => {
      if (callback) {
        callback();
      }
      
      // Force scene to recalculate dimensions after orientation change
      setTimeout(() => {
        scene.scale.refresh();
      }, 100); // Small delay to let device finish orientation change
    };

    // Add orientation change event listener
    window.addEventListener('orientationchange', handleOrientationChange);
    
    // Clean up on scene shutdown
    scene.events.once('shutdown', () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    });
  }

  /**
   * Sets up both resize and orientation handling for a scene
   * @param scene - The Phaser scene to add handlers to
   * @param resizeCallback - Optional callback for resize events
   * @param orientationCallback - Optional callback for orientation events
   */
  static setupResponsiveHandling(
    scene: Phaser.Scene, 
    resizeCallback?: () => void,
    orientationCallback?: () => void
  ): void {
    this.setupResizeHandling(scene, resizeCallback);
    this.setupOrientationHandling(scene, orientationCallback);
  }

  /**
   * Gets current game dimensions from scene
   * @param scene - The Phaser scene
   * @returns object with width and height
   */
  static getGameDimensions(scene: Phaser.Scene): { width: number; height: number } {
    return {
      width: scene.scale.width,
      height: scene.scale.height
    };
  }
}