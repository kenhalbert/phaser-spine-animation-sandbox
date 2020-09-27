import Phaser from 'phaser';
import SpineArcadePhysicsContainer from '../physics/SpineArcadePhysicsContainer';

class Robot {
  constructor(scene, key) {
    this.scene = scene;
    this.key = key;

    this.spineObject = null;
    this.spinePhysicsContainer = null;

    this.currentState = 'IDLE';
    this.walkSpeed = 125;
    this.isInitialized = false;
    this.scale = 0.25;
  }

  initialize(x, y) {
    if (this.isInitialized) throw Error(`${this.key} already initialized`);

    // create spine object at 0,0 since its position will be inherited from its container
    this.spineObject = this.scene.add.spine(0, 0, 'robot', this.getCurrentAnimation(), true);
    this.spineObject.scale = this.scale;

    // use a physics-enabled Container to resolve issues with physics-enabled Spine game objects
    this.spinePhysicsContainer = new SpineArcadePhysicsContainer(
      this.scene,
      `${this.key}_container`,
      x,
      y,
      this.spineObject
    );
    this.spinePhysicsContainer.initialize();

    //this.spineObject.setSkinByName(this.state.skin);

    // smoothly transitions between animations instead of switching immediately
    this.spineObject.setMix('walk', 'idle', 0.3);
    this.spineObject.setMix('idle', 'walk', 0.3);

    this.isInitialized = true;
  }

  getCurrentAnimation() {
    switch (this.currentState) {
      case 'IDLE':
        return 'idle';
      case 'WALK_RIGHT':
      case 'WALK_LEFT':
        return 'walk';
      default:
        throw Error(`unsupported state ${this.currentState}`);
    }
  }

  changeAnimation() {
    this.spineObject.play(this.getCurrentAnimation(), true);
  }

  walkLeft() {
    if (this.currentState === 'WALK_LEFT') return;

    this.currentState = 'WALK_LEFT';

    this.spineObject.setScale(-this.scale, this.scale);

    this.spinePhysicsContainer.setVelocityX(-this.walkSpeed);

    this.changeAnimation();
  }

  walkRight() {
    if (this.currentState === 'WALK_RIGHT') return;

    this.currentState = 'WALK_RIGHT';

    this.spineObject.setScale(this.scale, this.scale);

    this.spinePhysicsContainer.setVelocityX(this.walkSpeed);

    this.changeAnimation();
  }

  idle() {
    if (this.currentState === 'IDLE') return;

    this.currentState = 'IDLE';

    this.spinePhysicsContainer.setVelocityX(0);

    this.changeAnimation();
  }
}

export default Robot;