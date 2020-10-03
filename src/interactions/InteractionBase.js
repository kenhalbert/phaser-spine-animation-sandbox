import Phaser from 'phaser';

class InteractionBase {
  constructor (scene) {
    this.scene = scene;

    this.isInteractionInProgress = false;
  }
  
  interact() {
    if (this.isInteractionInProgress) return;

    this.isInteractionInProgress = true;

    this.doInteraction();
  }

  completeInteraction() {
    this.isInteractionInProgress = false;
  }

  canInteract() {
    throw Error('must implement canInteract');
  }

  doInteraction() {
    throw Error('must implement doInteraction');
  }
}

export default InteractionBase;