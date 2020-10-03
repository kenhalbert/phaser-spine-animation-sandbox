import Phaser from 'phaser';

class ProximitySwitch {
  constructor(
    scene, 
    proximityX,
    proximityY,
    firstObject, 
    secondObject,
    onActivate,
    onDeactivate
  ) {
    this.scene = scene;

    this.proximityX = proximityX;
    this.proximityY = proximityY;
    this.firstObject = firstObject;
    this.secondObject = secondObject;
    this.onActivate = onActivate;
    this.onDeactivate = onDeactivate;

    this.hasBeenActivated = false;
  }

  checkProximity() {
    const isPastThresholdY = this.proximityY === null
      || this.proximityY === undefined
      || Math.abs(this.firstObject.y - this.secondObject.y) <= this.proximityY;
    const isPastThresholdX = this.proximityX === null
      || this.proximityY === undefined
      || Math.abs(this.firstObject.x - this.secondObject.x) <= this.proximityX;

    if (isPastThresholdX && isPastThresholdY) {
      if (!this.hasBeenActivated) {
        this.hasBeenActivated = true;
        
        if (this.onActivate) this.onActivate();
      }
    } else {
      if (this.hasBeenActivated) {
        this.hasBeenActivated = false;
        
        if (this.onDeactivate) this.onDeactivate();
      }
    }
  }
}

export default ProximitySwitch;