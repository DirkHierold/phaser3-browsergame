import Phaser from "phaser";
import SceneKeys from "../consts/SceneKeys";
import TextureKeys from "../consts/TextureKeys";
import Enemies from "../model/Enemies";

export default class HelloWorldScene extends Phaser.Scene {
  constructor() {
    super(SceneKeys.HelloWorld);
  }

  create() {
    this.add.image(400, 300, TextureKeys.Background);

    const particles = this.add.particles(TextureKeys.Player);

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0, end: 0.5 },
      blendMode: Phaser.BlendModes.EXCLUSION, //"ADD",
    });

    const logo: Phaser.Types.Physics.Arcade.ImageWithDynamicBody = new Enemies(
      this
    ).addEnemy(200, 300, 130);

    // logo.setVelocity(100, 200);
    // logo.setBounce(1, 1);
    // logo.setCollideWorldBounds(true);
    emitter.startFollow(logo);
  }
}
