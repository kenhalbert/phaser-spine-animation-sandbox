import Phaser from 'phaser';
import 'phaser/plugins/spine/dist/SpinePlugin';
import scenes from './scenes';

export default {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    width: 800,
    height: 600,
    parent: 'content'
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  plugins: {
    scene: [
      {
        key: 'SpinePlugin',
        plugin: window.SpinePlugin,
        sceneKey: 'spine'
      }
    ]
  },
  scene: scenes
};