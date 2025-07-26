import Phaser from 'phaser';
import Player from '../../shared/Player';
import Obstacles from '../../shared/Obstacles';
import Targets from '../../shared/Targets';
import { Button } from '../../shared/utils/Button';


// https://github.com/fariazz/phaser-sidescroller/blob/master/assets/images/tiles_spritesheet.png

class JumpGame extends Phaser.Scene {

  preloadBar!: Phaser.GameObjects.Sprite;
  map: any;
  backgroundlayer: any;
  blockedLayer: any;
  player: any;
  cursors: any;
  coinSound: any;
  coins: any;
  keyJ!: Phaser.Input.Keyboard.Key;
  keyD!: Phaser.Input.Keyboard.Key;
  pressingDown: boolean = false;

  // Stub methods for player actions
  playerJump(): void {
    // Example: simple jump if touching down
    if (this.player && this.player.body && this.player.body.blocked.down) {
      this.player.body.setVelocityY(-700);
    }
  }

  playerDuck(): void {
    //change image and update the body size for the physics engine
    this.player.setTexture('playerDuck')
    this.player.body.setSize(this.player.duckedDimensions.width, this.player.duckedDimensions.height);

    //we use this to keep track whether it's ducked or not
    this.player.isDucked = true;
  }

  preload() {

    //load game assets
    this.load.tilemapTiledJSON('level1', '/tilemaps/level1.json');
    this.load.image('gameTiles', '/images/tiles_spritesheet.png');

    this.load.image('player', '/images/player.png');
    this.load.image('playerDuck', '/images/player_duck.png');
    // this.load.image('playerDead', 'assets/images/player_dead.png');
    this.load.image('goldCoin', '/images/goldCoin.png');
    // this.load.audio('coin', ['assets/audio/coin.ogg', 'assets/audio/coin.mp3']);

  }

  create() {

    this.map = this.make.tilemap({ key: 'level1' });
    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    const tileset = this.map.addTilesetImage('tiles_spritesheet', 'gameTiles');
    //create layers
    this.backgroundlayer = this.map.createLayer('backgroundLayer', tileset, 0, 0);
    this.blockedLayer = this.map.createLayer('blockedLayer', tileset, 0, 0);
    // collision on blockedLayer
    this.blockedLayer.setCollisionByExclusion([-1]);

    //resizes the camera/world to match the tilemap dimensions
    this.cameras.main.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

    // Initialize this.coins as a physics group BEFORE creating coins
    this.coins = this.add.group(); // ADD THIS LINE

    //create coins
    this.createCoins();

    //create player as a physics sprite, start above the ground
    this.player = this.physics.add.sprite(100, 200, 'player');
    this.player.alive = true;
    // Ensure player body is not immovable and set body size to sprite size
    this.player.body.setSize(this.player.width, this.player.height);
    this.player.body.immovable = false;
    this.player.body.allowGravity = true;
    // (Removed checkCollision overrides to allow normal tilemap collision)

    // Enable collision between player and blockedLayer
    this.physics.add.collider(this.player, this.blockedLayer);

    //properties when the player is ducked and standing, so we can use in update()
    // var playerDuckImg = this.game.cache.getImage('playerDuck');
    // this.player.duckedDimensions = { width: playerDuckImg.width, height: playerDuckImg.height };
    // this.player.standDimensions = { width: this.player.width, height: this.player.height };
    // this.player.anchor.setTo(0.5, 1);

    //the camera will follow the player in the world
    this.cameras.main.startFollow(this.player);

    //move player with cursor keys
    this.cursors = this.input?.keyboard?.createCursorKeys?.() || {};

    //init game controller
    this.initGameController();

    //sounds
    // this.coinSound = this.game.add.audio('coin');
  }

  createCoins(): void {
    // Try to access the object layer using Phaser's getObjectLayer method
    const objectsLayer = this.map.getObjectLayer && this.map.getObjectLayer('objectsLayer');
    if (!objectsLayer || !objectsLayer.objects) {
      console.warn('No objectsLayer or objects found in tilemap:', this.map);
      return;
    }
    objectsLayer.objects.forEach((obj: any) => {
      if (obj.properties && obj.properties.type === 'coin') {
        const y = (obj.height && obj.height > 0) ? obj.y - obj.height : obj.y;
        const textureKey = (obj.properties && obj.properties.sprite) ? obj.properties.sprite : 'goldCoin';
        // Use this.coins.create to add to the physics group
        this.coins.create(obj.x, y, textureKey);
        console.log('Coin at', obj.x, y, 'with texture', textureKey);
      }
    });
  }

  update(time: number, delta: number): void {
    //collision
    this.physics.add.collider(this.player, this.blockedLayer, this.playerHit, undefined, this);
    // TODO: Replace the following line with the correct Phaser 3 overlap logic if needed
    this.physics.add.overlap(this.player, this.coins, this.collect, undefined, this);

    //only respond to keys and keep the speed if the player is alive
    if (this.player.alive) {
      this.player.body.setVelocityX(300); // Set horizontal speed

      if (this.cursors.up.isDown) {
        this.playerJump();
      }
      else if (this.cursors.down.isDown && !this.player.isDucked) {
        this.playerDuck();
      }

      if (!this.cursors.down.isDown && this.player.isDucked && !this.pressingDown) {
        //change image and update the body size for the physics engine
        this.player.setTexture('player')
        this.player.body.setSize(this.player.standDimensions.width, this.player.standDimensions.height);
        this.player.isDucked = false;
      }

      //restart the game if reaching the right edge of the level
      if (this.player.x >= this.map.widthInPixels) {
        this.scene.restart();
      }
    }
  }

  createFromTiledObject(element: any, group: Phaser.GameObjects.Group): void {
    // Create a sprite at the position of the tiled object
    const textureKey = (element.properties && element.properties.sprite) ? element.properties.sprite : 'goldCoin';
    const sprite = group.create(element.x, element.y, textureKey);
    // Copy properties from the tiled object to the sprite if needed
    Object.keys(element.properties || {}).forEach((key) => {
      (sprite as any)[key] = element.properties[key];
    });
  }

  findObjectsByType(type: string, map: any, layer: string): any[] {
    const result: any[] = [];
    const objects = map.objects && map.objects[layer] ? map.objects[layer] : [];
    objects.forEach((element: any) => {
      if (element.properties.type === type) {
        // Phaser uses x, y relative to the tile, Tiled uses bottom left, Phaser uses top left
        element.y -= map.tileHeight;
        result.push(element);
      }
    });
    return result;
  }

  initGameController(): void {
    // Set up keyboard keys for jump (J) and duck (D)
    if (this.input.keyboard) {
      this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
      this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    // Jump on J key down
    this.keyJ.on('down', () => {
      if (this.player && this.player.active) {
        this.playerJump();
      }
    });

    // Duck on D key down, stand on D key up
    this.keyD.on('down', () => {
      if (this.player && this.player.active) {
        this.pressingDown = true;
        this.playerDuck();
      }
    });
    this.keyD.on('up', () => {
      this.pressingDown = false;
      // Optionally: this.playerStand && this.playerStand();
    });
  }

  // Add this method to handle player and blockedLayer collision
  playerHit(player: Phaser.Types.Physics.Arcade.GameObjectWithBody, tile: Phaser.Tilemaps.Tile): void {
    // Cast player to Phaser.Physics.Arcade.Sprite for type-specific properties
    const playerSprite = player as Phaser.Physics.Arcade.Sprite;

    //if hits on the right side or bangs head, die
    if (playerSprite.body && (playerSprite.body.blocked.right || playerSprite.body.blocked.up)) {
      console.log(playerSprite.body.blocked);
      //set to dead (this doesn't affect rendering)
      this.player.alive = false;
      //stop moving
      this.player.body.velocity.x = 0;
      //change sprite image
      this.player.setTexture('playerDead'); // Assuming 'playerDead' texture exists and is loaded
      //go to gameover after a few milliseconds
      this.time.delayedCall(1500, () => this.gameOver && this.gameOver(), [], this);
    }
  }

  collect(player: Phaser.Types.Physics.Arcade.GameObjectWithBody, collectable: Phaser.Types.Physics.Arcade.GameObjectWithBody): void {
    //play audio (uncomment if you add the audio)
    // this.coinSound.play();

    //remove sprite
    collectable.destroy();
  }

  gameOver(): void {
    this.scene.restart();
  }

  fpsText!: Phaser.GameObjects.Text;

  render(): void {
    if (this.physics.config.debug) {
      // Add this to create() to show FPS:
      this.fpsText = this.add.text(20, 70, '', { font: '40px Courier', color: '#00ff00' }).setScrollFactor(0);

      // Add this to update() to update FPS:
      if (this.fpsText) {
        this.fpsText.setText(this.game.loop.actualFps.toFixed(0));
      }
    }
  }


}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.CANVAS,
  width: 600,
  height: 800,
  parent: 'game',
  backgroundColor: '#87CEEB',
  dom: { createContainer: true },
  physics: {
    default: 'arcade',
    arcade: { gravity: { x: 0, y: 1000 }, debug: false }
  },
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: JumpGame,
};

new Phaser.Game(config);
