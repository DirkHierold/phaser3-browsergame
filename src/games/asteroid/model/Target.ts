// filepath: c:\visualStudioCode\phaser3-browsergame\src\games\asteroid\model\Target.ts
import Phaser from "phaser";
import { TextureKeys } from "../scenes/AsteroidScene";

export default class Target extends Phaser.Physics.Arcade.Image {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, TextureKeys.Target);
        scene.physics.world.enable(this);
        scene.add.existing(this);
        this.setCircle(32)
            .setDisplaySize(64, 64)
            .setCollideWorldBounds(true);
    }
}
