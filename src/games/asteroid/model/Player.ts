import Phaser from "phaser";
import { TextureKeys } from "../scenes/AsteroidScene";

export default class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, TextureKeys.Player);
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setCircle(32)
            .setDisplaySize(64, 64)
            .setCollideWorldBounds(true);
    }
}
