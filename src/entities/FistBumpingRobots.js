import Phaser from 'phaser';
import SpineEntityBase from './SpineEntityBase';

class FistBumpingRobots extends SpineEntityBase {
  constructor(scene, key) {
    super(scene, key, 'robotFistBump', 0.2);
  }

  initializeEntity() {
    this.spinePhysicsContainer.body.setAllowGravity(false);
  }

  getDefaultAnimationName() {
    return 'fistbump';
  }
}

export default FistBumpingRobots;