import Phaser from 'phaser';
import FistBumpingRobots from '../entities/FistBumpingRobots';

class FistBumpInteraction {
  constructor(scene) {
    this.scene = scene;

    this.actorDistanceX = 120;
  }

  canInteract() {
    const playerContainer = this.scene.sceneData.player.getContainer();
    const robotNpcContainer = this.scene.sceneData.robotNpc.getContainer();

    return playerContainer.y === robotNpcContainer.y 
      && Math.abs(playerContainer.x - robotNpcContainer.x) <= this.actorDistanceX;
  }

  interact() {
    const playerContainer = this.scene.sceneData.player.getContainer();
    const robotNpcContainer = this.scene.sceneData.robotNpc.getContainer();

    this.scene.tweens.add({
      targets: playerContainer,
      x: robotNpcContainer.x - this.actorDistanceX,
      duration: 100,
      ease: 'Linear',

      onComplete: () => {
        this.doInteraction(playerContainer, robotNpcContainer);
      }
    });
  }

  doInteraction(playerContainer, robotNpcContainer) {
    playerContainer.setVisible(false);
    playerContainer.setActive(false);
    
    robotNpcContainer.setVisible(false);
    robotNpcContainer.setActive(false);

    const fistBumpingRobots = new FistBumpingRobots(this.scene, 'fistBump');
    fistBumpingRobots.initialize(playerContainer.x + 55, playerContainer.y);

    fistBumpingRobots.onAnimationComplete(
      () => {
        fistBumpingRobots.destroy();

        playerContainer.setActive(true);
        playerContainer.setVisible(true);

        robotNpcContainer.setVisible(true);
        robotNpcContainer.setActive(true);
      }
    )
  }
}

export default FistBumpInteraction;