import Phaser from 'phaser';
import Robot from '../entities/Robot';
import PlayerControls from '../input/PlayerControls';

class AnimationTestScene extends Phaser.Scene {
  constructor () {
    super({ key: 'AnimationTestScene' });
  }

  preload () {
    this.load.setPath('assets/spine/');
    this.load.spine('robot', 'robot.json', 'robot.atlas');
  }

  create() {
    this.initProperties();

    this.sceneData.player = new Robot(this, 'player');
    this.sceneData.player.initialize(400, 600);

    this.sceneData.controls = new PlayerControls(this);
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
      controls: null
    };
  }
}

export default AnimationTestScene;