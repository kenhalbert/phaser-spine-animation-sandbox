import Phaser from 'phaser';

class PlayerControls {
  constructor (scene) {
    this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keySpace = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.keyShift = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
  }

  isMoveLeftActive() {
    return this.keyA.isDown;
  }

  isMoveRightActive() {
    return this.keyD.isDown;
  }

  isRunActive() {
    return this.keyShift.isDown;
  }

  isJumpActive() {
    return this.keyW.isDown;
  }
}

export default PlayerControls;