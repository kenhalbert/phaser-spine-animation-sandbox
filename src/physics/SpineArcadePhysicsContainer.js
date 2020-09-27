import Phaser from 'phaser';

class SpineArcadePhysicsContainer extends Phaser.GameObjects.Container {
  constructor(scene, key, x, y, spineObject) {
    super(scene, x, y);

    this.key = key;
    this.scene = scene;
    this.spineObject = spineObject;

    this.isInitialized = false;
  }

  initialize() {
    if (this.isInitialized) throw Error(`${this.key} already initialized`);

    this.scene.physics.add.existing(this);

    // add this container to the scene's display list
      // adding an object to a container removes it from all other display lists
      // ... so this is necessary to get the spine object to render.
    this.scene.sys.displayList.add(this);

    const spineObjectBounds = this.spineObject.getBounds();
		this.setPhysicsSize(
      spineObjectBounds.size.x * this.spineObject.scale, 
      spineObjectBounds.size.y * this.spineObject.scale
    );

    this.body.setCollideWorldBounds(true);

    this.add(this.spineObject);
    
    this.isInitialized = true;
  }

  setPhysicsSize(width, height) {
		this.body.setOffset(width * -0.5, -height);
		this.body.setSize(width, height);
  }
  
  setVelocityX(newVelocity) {
    this.body.velocity.x = newVelocity;
  }

  setVelocityY(newVelocity) {
    this.body.velocity.y = newVelocity;
  }

  getSpineObject() {
    return this.spineObject;
  }
}

export default SpineArcadePhysicsContainer;