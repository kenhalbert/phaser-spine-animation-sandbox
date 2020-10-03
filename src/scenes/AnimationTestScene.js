import Phaser from 'phaser';
import Robot from '../entities/Robot';
import PlayerControls from '../input/PlayerControls';
import FistBumpInteraction from '../interactions/FistBumpInteraction';
import RobotInputController from '../controllers/RobotInputController';
import ProximitySwitch from '../physics/ProximitySwitch';

class AnimationTestScene extends Phaser.Scene {
  constructor () {
    super({ key: 'AnimationTestScene' });
  }

  preload () {
    this.load.image('tiles', 'assets/tilesets/robot-platformer-tileset-extruded.png');
    this.load.tilemapTiledJSON('map', 'assets/tilesets/level-1.json');

    this.load.setPath('assets/spine/robot');
    this.load.spine(
      'robot', 
      'robot.json', 
      'robot.atlas'
    );

    this.load.setPath('assets/spine/robotFistBump');
    this.load.spine(
      'robotFistBump', 
      'robotFistBump.json', 
      'robotFistBump.atlas'
    );
  }

  create() {
    this.initProperties();

    this.physics.world.setBounds(0, 0, 2000, 2000);

    this.createMap();

    this.sceneData.player = new Robot(this, 'player');
    this.sceneData.player.initialize(100, 1800);

    this.sceneData.robotNpc = new Robot(this, 'robotNpc');
    this.sceneData.robotNpc.initialize(1660, 384);
    this.sceneData.robotNpc.turnLeft();

    this.physics.add.collider(
      this.sceneData.player.getContainer(), 
      this.sceneData.map.platforms
    );
    this.physics.add.collider(
      this.sceneData.robotNpc.getContainer(), 
      this.sceneData.map.platforms
    );
    this.physics.add.collider(
      this.sceneData.robotNpc.getContainer(), 
      this.sceneData.player.getContainer()
    );

    this.sceneData.controls = new PlayerControls(this);

    this.sceneData.controllers.playerController = new RobotInputController(
      this,
      this.sceneData.controls,
      this.sceneData.player
    );

    this.sceneData.interactions.fistBump = new FistBumpInteraction(this);

    this.cameras.main.setBounds(
      0, 
      0, 
      2000, 
      2000
    );

    this.cameras.main.startFollow(this.sceneData.player.getContainer(), true);

    this.sceneData.controls.onInteract(
      () => {
        if (this.sceneData.interactions.fistBump.canInteract()) {
          this.sceneData.interactions.fistBump.interact();
        }
      }
    );

    this.sceneData.proximitySwitches.playerRobotNpc = new ProximitySwitch(
      this,
      120,
      10,
      this.sceneData.player.getContainer(),
      this.sceneData.robotNpc.getContainer(),
      () => this.events.emit('playerInFistBumpRange'),
      () => this.events.emit('playerOutOfFistBumpRange')
    );

    this.scene.launch('HelpTextSubscene', this);
  }

  update() {
    this.sceneData.proximitySwitches.playerRobotNpc.checkProximity();
    this.sceneData.controllers.playerController.update();
  }

  initProperties() {
    this.sceneData = {
      player: null,
      robotNpc: null,
      controls: null,
      proximitySwitches: {
        playerRobotNpc: null,
      },
      map: {
        platforms: null
      },
      interactions: {
        fistBump: null
      },
      controllers: {
        playerController: null
      }
    };
  }

  createMap() {
    const map = this.make.tilemap({ key: 'map' });

    const tileset = map.addTilesetImage(
      'robot-platformer-tileset',   // this needs to be the name of the tileset in the map data
      'tiles',
      undefined,
      undefined,
      
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