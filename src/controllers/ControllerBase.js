import Phaser from 'phaser';

class ControllerBase {
  constructor (scene) {
    this.scene = scene;
    
    this.isPaused = false;
  }

  update() {
    if (this.isPaused) return;

    this.updateController();
  }

  updateController () {
    throw Error('must implement updateController');
  }

  resume() {
    this.isPaused = false;
  }

  pause() {
    this.isPaused = true;
  }
}

export default ControllerBase;