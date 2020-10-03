import Phaser from 'phaser';

class HelpTextSubscene extends Phaser.Scene {
  constructor() {
    super({ key: 'HelpTextSubscene' });
  }

  init(ownerScene) {
    this.initProperties();
    
    this.sceneData.ownerScene = ownerScene;
  }

  create() {
    this.sceneData.background = this.add.graphics();

    this.sceneData.background.lineStyle(1, 0xffffff, 0.8);
    this.sceneData.background.fillStyle(0x000, 0.3);
    this.sceneData.background.fillRect(
      0, 
      0, 
      300, 
      100
    );

    this.sceneData.helpText = this.add.text(
      this.cameras.main.width / 2, 
      this.cameras.main.height / 2, 
      "Press enter to fistbump"
    );

    this.sceneData.helpText.setOrigin(0.5);

    this.positionText();
    this.setTextVisibility(false);

    this.sceneData.ownerScene.events.on('playerInFistBumpRange', () => {
      this.setTextVisibility(true);
    });
    this.sceneData.ownerScene.events.on('playerOutOfFistBumpRange', () => {
      this.setTextVisibility(false);
    });
  }

  update() {
    this.positionText();
  }

  positionText() {
    this.sceneData.helpText.x = this.cameras.main.width / 2;
    this.sceneData.helpText.y = this.cameras.main.height - 102;

    this.sceneData.background.x = this.cameras.main.width / 2 - 150;
    this.sceneData.background.y = this.cameras.main.height - 150;
  }

  setTextVisibility(isVisible) {
    this.sceneData.helpText.visible = isVisible;
    this.sceneData.background.visible = isVisible;
  }

  initProperties() {
    this.sceneData = {
      ownerScene: null,
      helpText: null,
      background: null
    };
  }
}

export default HelpTextSubscene;