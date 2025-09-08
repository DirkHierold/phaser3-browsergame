import { SoundManager } from '../../shared/SoundManager';
import { UIStyles } from '../../shared/UIStyles';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  create() {
    const { width, height } = this.cameras.main;
    
    // Add semi-transparent overlay (lighter)
    const overlay = this.add.graphics();
    overlay.fillStyle(UIStyles.colors.background, 0.4);
    overlay.fillRect(0, 0, width, height);
    
    // Game Over text with stroke for better visibility
    this.add.text(width / 2, height / 2 - 80, 'Game Over', {
      ...UIStyles.text.gameOver
    }).setOrigin(0.5);
    
    // New Game button
    const restartButton = this.add.text(width / 2, height / 2 + 50, 'New Game', {
      ...UIStyles.button.primary
    }).setOrigin(0.5).setInteractive();
    
    // Hover effect
    restartButton.on('pointerover', () => {
      restartButton.setStyle({ backgroundColor: '#A0522D' });
    });
    
    restartButton.on('pointerout', () => {
      restartButton.setStyle({ backgroundColor: '#8B4513' });
    });
    
    restartButton.on('pointerdown', () => {
      SoundManager.getInstance().resumeBackgroundMusic();
      this.scene.stop('GameOverScene');
      this.scene.stop('PrototypeGame');
      this.scene.start('PrototypeGame');
    });
  }
  
  resize(gameSize: Phaser.Structs.Size) {
    const { width, height } = gameSize;
    
    // Update overlay
    const overlay = this.children.list[0] as Phaser.GameObjects.Graphics;
    if (overlay) {
      overlay.clear();
      overlay.fillStyle(UIStyles.colors.background, 0.4);
      overlay.fillRect(0, 0, width, height);
    }
    
    // Update text positions
    const gameOverText = this.children.list[1] as Phaser.GameObjects.Text;
    if (gameOverText) {
      gameOverText.setPosition(width / 2, height / 2 - 80);
    }
    
    const restartButton = this.children.list[2] as Phaser.GameObjects.Text;
    if (restartButton) {
      restartButton.setPosition(width / 2, height / 2 + 50);
    }
  }
}