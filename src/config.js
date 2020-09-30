import Phaser from 'phaser';
import 'phaser/plugins/spine/dist/SpinePlugin';
import scenes from './scenes';

export default {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%',
    autoCenter: Phaser.DOM.CENTER_BOTH,
    parent: 'content'
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 500 },
      tileBias: 32  // defaults to 16.  setting it higher prevents tunneling through the terrain.
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