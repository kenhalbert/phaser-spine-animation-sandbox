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
    this.runSpeed = 600;
    this.jumpSpeed = 1000;
    this.gravityY = 1000;
    this.animationMixTransitionLength = 0.3;
    this.isInitialized = false;
    this.scale = 0.2;
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

    this.spinePhysicsContainer.body.setGravityY(this.gravityY);

    //this.spineObject.setSkinByName(this.state.skin);

    // smoothly transitions between animations instead of switching immediately
    this.spineObject.setMix('walk', 'idle', this.animationMixTransitionLength);
    this.spineObject.setMix('walk', 'fall', this.animationMixTransitionLength);
    this.spineObject.setMix('walk', 'run', this.animationMixTransitionLength);
    this.spineObject.setMix('idle', 'walk', this.animationMixTransitionLength);
    this.spineObject.setMix('idle', 'run', this.animationMixTransitionLength);
    this.spineObject.setMix('run', 'walk', this.animationMixTransitionLength);
    this.spineObject.setMix('run', 'idle', this.animationMixTransitionLength);
    this.spineObject.setMix('run', 'fall', this.animationMixTransitionLength);
    this.spineObject.setMix('jump', 'fall', this.animationMixTransitionLength);
    this.spineObject.setMix('fall', 'run', this.animationMixTransitionLength);
    this.spineObject.setMix('fall', 'idle', this.animationMixTransitionLength);
    this.spineObject.setMix('jump', 'idle', this.animationMixTransitionLength);

    this.isInitialized = true;
  }

  update() {
    if (!this.isAirborne() && (this.currentState === 'JUMPING' || this.currentState === 'FALLING')) {
      this.currentState = 'LANDED';
    }

    if (this.isAirborne() && this.spinePhysicsContainer.body.velocity.y > 0 && this.currentState !== 'FALLING') {
      this.currentState = 'FALLING';

      this.changeAnimation(true);
    }
  }

  getContainer() {
    return this.spinePhysicsContainer;
  }

  getCurrentAnimation() {
    switch (this.currentState) {
      case 'IDLE':
        return 'idle';
      case 'WALK_RIGHT':
      case 'WALK_LEFT':
        return 'walk';
      case 'RUN_RIGHT':
      case 'RUN_LEFT':
        return 'run';
      case 'JUMPING':
        return 'jump';
      case 'FALLING':
        return 'fall';
      default:
        throw Error(`unsupported state ${this.currentState}`);
    }
  }

  changeAnimation(loop) {
    this.spineObject.play(this.getCurrentAnimation(), loop);
  }

  walkLeft() {
    this.spinePhysicsContainer.setVelocityX(-this.walkSpeed);

    if (this.currentState === 'WALK_LEFT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') 
      return;

    this.currentState = 'WALK_LEFT';

    this.spineObject.setScale(-this.scale, this.scale);

    this.changeAnimation(true);
  }

  walkRight() {
    this.spinePhysicsContainer.setVelocityX(this.walkSpeed);

    if (this.currentState === 'WALK_RIGHT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') 
      return;

    this.currentState = 'WALK_RIGHT';

    this.spineObject.setScale(this.scale, this.scale);


    this.changeAnimation(true);
  }

  runLeft() {
    this.spinePhysicsContainer.setVelocityX(-this.runSpeed);

    if (this.currentState === 'RUN_LEFT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') 
      return;

    this.currentState = 'RUN_LEFT';

    this.spineObject.setScale(-this.scale, this.scale);

    this.changeAnimation(true);
  }

  runRight() {
    this.spinePhysicsContainer.setVelocityX(this.runSpeed);

    if (this.currentState === 'RUN_RIGHT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') 
      return;

    this.currentState = 'RUN_RIGHT';

    this.spineObject.setScale(this.scale, this.scale);

    this.changeAnimation(true);
  }

  jump() {
    if (!this.isAirborne()) {
      this.spinePhysicsContainer.setVelocityY(-this.jumpSpeed);

      this.currentState = 'JUMPING';

      this.changeAnimation(false);
    }
  }

  idle() {
    this.spinePhysicsContainer.setVelocityX(0);

    if (this.currentState === 'IDLE' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') 
      return;

    this.currentState = 'IDLE';

    this.changeAnimation(true);
  }

  isAirborne() {
    return !this.spinePhysicsContainer.body.onFloor();
  }
}

export default Robot;