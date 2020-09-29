import Phaser from 'phaser';
import Robot from '../entities/Robot';
import PlayerControls from '../input/PlayerControls';

class AnimationTestScene extends Phaser.Scene {
  constructor () {
    super({ key: 'AnimationTestScene' });
  }

  preload () {
    this.load.image('tiles', 'assets/tilesets/robot-platformer-tileset-extruded.png');
    this.load.tilemapTiledJSON('map', 'assets/tilesets/level-1.json');

    this.load.setPath('assets/spine/');
    this.load.spine(
      'robot', 
      'robot.json', 
      'robot.atlas'
    );
  }

  create() {
    this.initProperties();
    this.physics.world.setBounds(0, 0, 2000, 2000);

    this.createMap();

    this.sceneData.player = new Robot(this, 'player');
    this.sceneData.player.initialize(100, 1800);

    this.physics.add.collider(
      this.sceneData.player.getContainer(), 
      this.sceneData.map.platforms
    );

    this.sceneData.controls = new PlayerControls(this);

    this.cameras.main.setBounds(
      0, 
      0, 
      2000, 
      2000
    );

    this.cameras.main.startFollow(this.sceneData.player.getContainer(), true);
  }

  update() {
    if (this.sceneData.controls.isMoveLeftActive()) {
      if (this.sceneData.controls.isRunActive())
        this.sceneData.player.runLeft();
      else
        this.sceneData.player.walkLeft();
    } else if (this.sceneData.controls.isMoveRightActive()) {
      if (this.sceneData.controls.isRunActive())
        this.sceneData.player.runRight();
      else
        this.sceneData.player.walkRight();
    } else {
      this.sceneData.player.idle();
    }
  }

  initProperties() {
    this.sceneData = {
      player: null,
      controls: null,
      map: {
        platforms: null
      }
    };
  }

  createMap() {
    const map = this.make.tilemap({ key: 'map' });

    const tileset = map.addTilesetImage(
      'robot-platformer-tileset',   // this needs to be the name of the tileset in the map data
      'tiles',
      64,
      64,
      // extrusion alters the dimensions of each tile and shifts their position in the atlas.
      // so, we have to set margin = extrusionPx, spacing = extrusionPx*2
      1,
      2
    );

    map.createStaticLayer('Background', tileset, 0, 0);

    this.sceneData.map.platforms = map.createStaticLayer('Platforms', tileset, 0, 0);

    this.sceneData.map.platforms.setCollisionByExclusion(-1, true);
  }
}

export default AnimationTestScene;