export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOverScene' });
  }

  create() {
    const { width, height } = this.cameras.main;
    
    this.add.text(width / 2, height / 2 - 50, 'Game Over', {
      fontSize: '48px',
      color: '#ff0000'
    }).setOrigin(0.5);
    
    const restartButton = this.add.text(width / 2, height / 2 + 50, 'Restart', {
      fontSize: '32px',
      color: '#00ff00',
      backgroundColor: '#222222',
      padding: { x: 20, y: 10 }
    }).setOrigin(0.5).setInteractive();
    
    restartButton.on('pointerdown', () => {
      this.scene.stop('GameOverScene');
      this.scene.start('PrototypeGame');
    });
  }
}