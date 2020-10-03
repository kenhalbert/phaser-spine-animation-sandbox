import Phaser from 'phaser';
import ControllerBase from './ControllerBase';

class RobotInputController extends ControllerBase {
  constructor(scene, controls, robot) {
    super(scene);

    this.controls = controls;
    this.robot = robot;
  }

  updateController() {
    if (!this.robot.getContainer().active) return;
    
    this.robot.update();

    if (this.controls.isJumpActive()) {
      this.robot.jump();
    }

    if (this.controls.isMoveLeftActive()) {
      if (this.controls.isWalkActive())
        this.robot.walkLeft();
      else
        this.robot.runLeft();
    } else if (this.controls.isMoveRightActive()) {
      if (this.controls.isWalkActive())
        this.robot.walkRight();
      else
        this.robot.runRight();
    } else {
      this.robot.idle();
    }
  }
}

export default RobotInputController;