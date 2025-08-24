import Phaser from "phaser";

export default class HealthManager {
  private scene: Phaser.Scene;
  private hearts: Phaser.GameObjects.Image[] = [];
  private maxHealth: number = 3;
  private currentHealth: number = 3;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    this.scene = scene;
    this.createHearts(x, y);
  }

  private createHearts(x: number, y: number) {
    for (let i = 0; i < this.maxHealth; i++) {
      const heart = this.scene.add.image(x + i * 40, y, 'heartFull')
        .setOrigin(0, 0)
        .setScale(0.5)
        .setDepth(100);
      this.hearts.push(heart);
    }
  }

  takeDamage() {
    if (this.currentHealth > 0) {
      this.currentHealth--;
      this.updateHeartDisplay();
    }
  }

  private updateHeartDisplay() {
    for (let i = 0; i < this.maxHealth; i++) {
      if (i < this.currentHealth) {
        this.hearts[i].setTexture('heartFull');
      } else if (i === this.currentHealth && this.currentHealth > 0) {
        this.hearts[i].setTexture('heartHalf');
      } else {
        this.hearts[i].setTexture('heartEmpty');
      }
    }
  }

  isDead(): boolean {
    return this.currentHealth <= 0;
  }

  reset() {
    this.currentHealth = this.maxHealth;
    this.updateHeartDisplay();
  }
}