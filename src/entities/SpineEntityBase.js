import Phaser from 'phaser';
import SpineArcadePhysicsContainer from '../physics/SpineArcadePhysicsContainer';

class SpineEntityBase {
  constructor(scene, key, spineKey, scale) {
    this.scene = scene;
    this.key = key;
    this.spineKey = spineKey;

    this.spineObject = null;
    this.spinePhysicsContainer = null;

    this.isInitialized = false;
    this.scale = scale;
  }

  initialize(x, y) {
    if (this.isInitialized) throw Error(`${this.key} already initialized`);

    // create spine object at 0,0 since its position will be inherited from its container
    this.spineObject = this.scene.add.spine(0, 0, this.spineKey, this.getDefaultAnimationName(), true);
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

    this.initializeEntity();

    this.isInitialized = true;
  }

  initializeEntity() {}

  onAnimationComplete(callback) {
    this.spineObject.on('complete', callback);
  }

  getDefaultAnimationName() {
    throw Error('must implement getDefaultAnimationName');
  }

  getContainer() {
    return this.spinePhysicsContainer;
  }

  destroy() {
    this.spineObject.off('complete');

    this.spinePhysicsContainer.destroy();
  }
}

export default SpineEntityBase;