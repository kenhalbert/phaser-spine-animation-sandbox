/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var phaser_plugins_spine_dist_SpinePlugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser/plugins/spine/dist/SpinePlugin */ \"./node_modules/phaser/plugins/spine/dist/SpinePlugin.js\");\n/* harmony import */ var phaser_plugins_spine_dist_SpinePlugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser_plugins_spine_dist_SpinePlugin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scenes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes */ \"./src/scenes/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  type: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.AUTO,\n  scale: {\n    mode: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scale.RESIZE,\n    width: '100%',\n    height: '100%',\n    autoCenter: phaser__WEBPACK_IMPORTED_MODULE_0___default.a.DOM.CENTER_BOTH,\n    parent: 'content'\n  },\n  physics: {\n    default: 'arcade',\n    arcade: {\n      debug: false,\n      gravity: {\n        y: 500\n      },\n      tileBias: 32 // defaults to 16.  setting it higher prevents tunneling through the terrain.\n\n    }\n  },\n  plugins: {\n    scene: [{\n      key: 'SpinePlugin',\n      plugin: window.SpinePlugin,\n      sceneKey: 'spine'\n    }]\n  },\n  scene: _scenes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/controllers/ControllerBase.js":
/*!*******************************************!*\
  !*** ./src/controllers/ControllerBase.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ControllerBase {\n  constructor(scene) {\n    this.scene = scene;\n    this.isPaused = false;\n  }\n\n  update() {\n    if (this.isPaused) return;\n    this.updateController();\n  }\n\n  updateController() {\n    throw Error('must implement updateController');\n  }\n\n  resume() {\n    this.isPaused = false;\n  }\n\n  pause() {\n    this.isPaused = true;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ControllerBase);\n\n//# sourceURL=webpack:///./src/controllers/ControllerBase.js?");

/***/ }),

/***/ "./src/controllers/RobotInputController.js":
/*!*************************************************!*\
  !*** ./src/controllers/RobotInputController.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ControllerBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ControllerBase */ \"./src/controllers/ControllerBase.js\");\n\n\n\nclass RobotInputController extends _ControllerBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, controls, robot) {\n    super(scene);\n    this.controls = controls;\n    this.robot = robot;\n  }\n\n  updateController() {\n    if (!this.robot.getContainer().active) return;\n    this.robot.update();\n\n    if (this.controls.isJumpActive()) {\n      this.robot.jump();\n    }\n\n    if (this.controls.isMoveLeftActive()) {\n      if (this.controls.isWalkActive()) this.robot.walkLeft();else this.robot.runLeft();\n    } else if (this.controls.isMoveRightActive()) {\n      if (this.controls.isWalkActive()) this.robot.walkRight();else this.robot.runRight();\n    } else {\n      this.robot.idle();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RobotInputController);\n\n//# sourceURL=webpack:///./src/controllers/RobotInputController.js?");

/***/ }),

/***/ "./src/entities/FistBumpingRobots.js":
/*!*******************************************!*\
  !*** ./src/entities/FistBumpingRobots.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SpineEntityBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpineEntityBase */ \"./src/entities/SpineEntityBase.js\");\n\n\n\nclass FistBumpingRobots extends _SpineEntityBase__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  constructor(scene, key) {\n    super(scene, key, 'robotFistBump', 0.2);\n  }\n\n  initializeEntity() {\n    this.spinePhysicsContainer.body.setAllowGravity(false);\n  }\n\n  getDefaultAnimationName() {\n    return 'fistbump';\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FistBumpingRobots);\n\n//# sourceURL=webpack:///./src/entities/FistBumpingRobots.js?");

/***/ }),

/***/ "./src/entities/Robot.js":
/*!*******************************!*\
  !*** ./src/entities/Robot.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpineEntityBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpineEntityBase */ \"./src/entities/SpineEntityBase.js\");\n\n\nclass Robot extends _SpineEntityBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene, key) {\n    super(scene, key, 'robot', 0.2);\n    this.currentState = 'IDLE';\n    this.walkSpeed = 125;\n    this.runSpeed = 600;\n    this.jumpSpeed = 1000;\n    this.gravityY = 1000;\n    this.animationMixTransitionLength = 0.3;\n    this.isInitialized = false;\n    this.scale = 0.2;\n  }\n\n  initializeEntity() {\n    this.spinePhysicsContainer.body.setGravityY(this.gravityY); // smoothly transitions between animations instead of switching immediately\n\n    this.spineObject.setMix('walk', 'idle', this.animationMixTransitionLength);\n    this.spineObject.setMix('walk', 'fall', this.animationMixTransitionLength);\n    this.spineObject.setMix('walk', 'run', this.animationMixTransitionLength);\n    this.spineObject.setMix('idle', 'walk', this.animationMixTransitionLength);\n    this.spineObject.setMix('idle', 'run', this.animationMixTransitionLength);\n    this.spineObject.setMix('run', 'walk', this.animationMixTransitionLength);\n    this.spineObject.setMix('run', 'idle', this.animationMixTransitionLength);\n    this.spineObject.setMix('run', 'fall', this.animationMixTransitionLength);\n    this.spineObject.setMix('fall', 'run', this.animationMixTransitionLength);\n    this.spineObject.setMix('fall', 'idle', this.animationMixTransitionLength);\n    this.spineObject.setMix('fall', 'walk', this.animationMixTransitionLength);\n    this.spineObject.setMix('jump', 'idle', this.animationMixTransitionLength);\n    this.spineObject.setMix('jump', 'fall', this.animationMixTransitionLength);\n  }\n\n  getDefaultAnimationName() {\n    return 'idle';\n  }\n\n  update() {\n    if (!this.isAirborne() && (this.currentState === 'JUMPING' || this.currentState === 'FALLING')) {\n      this.currentState = 'LANDED';\n    }\n\n    if (this.isAirborne() && this.spinePhysicsContainer.body.velocity.y > 0 && this.currentState !== 'FALLING') {\n      this.currentState = 'FALLING';\n      this.changeAnimation(true);\n    }\n  }\n\n  getContainer() {\n    return this.spinePhysicsContainer;\n  }\n\n  getCurrentAnimation() {\n    switch (this.currentState) {\n      case 'IDLE':\n        return 'idle';\n\n      case 'WALK_RIGHT':\n      case 'WALK_LEFT':\n        return 'walk';\n\n      case 'RUN_RIGHT':\n      case 'RUN_LEFT':\n        return 'run';\n\n      case 'JUMPING':\n        return 'jump';\n\n      case 'FALLING':\n        return 'fall';\n\n      default:\n        throw Error(`unsupported state ${this.currentState}`);\n    }\n  }\n\n  changeAnimation(loop) {\n    this.spineObject.play(this.getCurrentAnimation(), loop);\n  }\n\n  turnLeft() {\n    this.spineObject.setScale(-this.scale, this.scale);\n  }\n\n  turnRight() {\n    this.spineObject.setScale(-this.scale, this.scale);\n  }\n\n  walkLeft() {\n    this.spinePhysicsContainer.setVelocityX(-this.walkSpeed);\n    if (this.currentState === 'WALK_LEFT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') return;\n    this.currentState = 'WALK_LEFT';\n    this.spineObject.setScale(-this.scale, this.scale);\n    this.changeAnimation(true);\n  }\n\n  walkRight() {\n    this.spinePhysicsContainer.setVelocityX(this.walkSpeed);\n    if (this.currentState === 'WALK_RIGHT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') return;\n    this.currentState = 'WALK_RIGHT';\n    this.spineObject.setScale(this.scale, this.scale);\n    this.changeAnimation(true);\n  }\n\n  runLeft() {\n    this.spinePhysicsContainer.setVelocityX(-this.runSpeed);\n    if (this.currentState === 'RUN_LEFT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') return;\n    this.currentState = 'RUN_LEFT';\n    this.spineObject.setScale(-this.scale, this.scale);\n    this.changeAnimation(true);\n  }\n\n  runRight() {\n    this.spinePhysicsContainer.setVelocityX(this.runSpeed);\n    if (this.currentState === 'RUN_RIGHT' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') return;\n    this.currentState = 'RUN_RIGHT';\n    this.spineObject.setScale(this.scale, this.scale);\n    this.changeAnimation(true);\n  }\n\n  jump() {\n    if (!this.isAirborne()) {\n      this.spinePhysicsContainer.setVelocityY(-this.jumpSpeed);\n      this.currentState = 'JUMPING';\n      this.changeAnimation(false);\n    }\n  }\n\n  idle() {\n    this.spinePhysicsContainer.setVelocityX(0);\n    if (this.currentState === 'IDLE' || this.currentState === 'JUMPING' || this.currentState === 'FALLING') return;\n    this.currentState = 'IDLE';\n    this.changeAnimation(true);\n  }\n\n  isAirborne() {\n    return !this.spinePhysicsContainer.body.onFloor();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Robot);\n\n//# sourceURL=webpack:///./src/entities/Robot.js?");

/***/ }),

/***/ "./src/entities/SpineEntityBase.js":
/*!*****************************************!*\
  !*** ./src/entities/SpineEntityBase.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _physics_SpineArcadePhysicsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../physics/SpineArcadePhysicsContainer */ \"./src/physics/SpineArcadePhysicsContainer.js\");\n\n\n\nclass SpineEntityBase {\n  constructor(scene, key, spineKey, scale) {\n    this.scene = scene;\n    this.key = key;\n    this.spineKey = spineKey;\n    this.spineObject = null;\n    this.spinePhysicsContainer = null;\n    this.isInitialized = false;\n    this.scale = scale;\n  }\n\n  initialize(x, y) {\n    if (this.isInitialized) throw Error(`${this.key} already initialized`); // create spine object at 0,0 since its position will be inherited from its container\n\n    this.spineObject = this.scene.add.spine(0, 0, this.spineKey, this.getDefaultAnimationName(), true);\n    this.spineObject.scale = this.scale; // use a physics-enabled Container to resolve issues with physics-enabled Spine game objects\n\n    this.spinePhysicsContainer = new _physics_SpineArcadePhysicsContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, `${this.key}_container`, x, y, this.spineObject);\n    this.spinePhysicsContainer.initialize();\n    this.initializeEntity();\n    this.isInitialized = true;\n  }\n\n  initializeEntity() {}\n\n  onAnimationComplete(callback) {\n    this.spineObject.on('complete', callback);\n  }\n\n  getDefaultAnimationName() {\n    throw Error('must implement getDefaultAnimationName');\n  }\n\n  getContainer() {\n    return this.spinePhysicsContainer;\n  }\n\n  destroy() {\n    this.spineObject.off('complete');\n    this.spinePhysicsContainer.destroy();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpineEntityBase);\n\n//# sourceURL=webpack:///./src/entities/SpineEntityBase.js?");

/***/ }),

/***/ "./src/input/PlayerControls.js":
/*!*************************************!*\
  !*** ./src/input/PlayerControls.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass PlayerControls {\n  constructor(scene) {\n    this.keyA = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.A);\n    this.keyD = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.D);\n    this.keyW = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.W);\n    this.keySpace = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SPACE);\n    this.keyShift = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.SHIFT);\n    this.keyEnter = scene.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Input.Keyboard.KeyCodes.ENTER);\n  }\n\n  isMoveLeftActive() {\n    return this.keyA.isDown;\n  }\n\n  isMoveRightActive() {\n    return this.keyD.isDown;\n  }\n\n  isWalkActive() {\n    return this.keyShift.isDown;\n  }\n\n  isJumpActive() {\n    return this.keyW.isDown;\n  }\n\n  onInteract(callback) {\n    this.keyEnter.on('down', callback);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerControls);\n\n//# sourceURL=webpack:///./src/input/PlayerControls.js?");

/***/ }),

/***/ "./src/interactions/FistBumpInteraction.js":
/*!*************************************************!*\
  !*** ./src/interactions/FistBumpInteraction.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_FistBumpingRobots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/FistBumpingRobots */ \"./src/entities/FistBumpingRobots.js\");\n/* harmony import */ var _InteractionBase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InteractionBase */ \"./src/interactions/InteractionBase.js\");\n\n\n\n\nclass FistBumpInteraction extends _InteractionBase__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  constructor(scene) {\n    super(scene);\n    this.actorDistanceX = 120;\n  }\n\n  canInteract() {\n    const playerContainer = this.scene.sceneData.player.getContainer();\n    const robotNpcContainer = this.scene.sceneData.robotNpc.getContainer();\n    return playerContainer.y === robotNpcContainer.y && Math.abs(playerContainer.x - robotNpcContainer.x) <= this.actorDistanceX;\n  }\n\n  doInteraction() {\n    const playerContainer = this.scene.sceneData.player.getContainer();\n    const robotNpcContainer = this.scene.sceneData.robotNpc.getContainer();\n    this.scene.sceneData.controllers.playerController.pause();\n    this.scene.sceneData.player.idle();\n    this.scene.tweens.add({\n      targets: playerContainer,\n      x: robotNpcContainer.x - this.actorDistanceX,\n      duration: 100,\n      ease: 'Linear',\n      onComplete: () => {\n        this.playFistBumpAnimation(playerContainer, robotNpcContainer);\n      }\n    });\n  }\n\n  playFistBumpAnimation(playerContainer, robotNpcContainer) {\n    playerContainer.setVisible(false);\n    playerContainer.setActive(false);\n    robotNpcContainer.setVisible(false);\n    robotNpcContainer.setActive(false);\n    const fistBumpingRobots = new _entities_FistBumpingRobots__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.scene, 'fistBump');\n    fistBumpingRobots.initialize(playerContainer.x + 55, playerContainer.y);\n    fistBumpingRobots.onAnimationComplete(() => {\n      fistBumpingRobots.destroy();\n      playerContainer.setActive(true);\n      playerContainer.setVisible(true);\n      robotNpcContainer.setVisible(true);\n      robotNpcContainer.setActive(true);\n      this.completeInteraction();\n      this.scene.sceneData.controllers.playerController.resume();\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FistBumpInteraction);\n\n//# sourceURL=webpack:///./src/interactions/FistBumpInteraction.js?");

/***/ }),

/***/ "./src/interactions/InteractionBase.js":
/*!*********************************************!*\
  !*** ./src/interactions/InteractionBase.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass InteractionBase {\n  constructor(scene) {\n    this.scene = scene;\n    this.isInteractionInProgress = false;\n  }\n\n  interact() {\n    if (this.isInteractionInProgress) return;\n    this.isInteractionInProgress = true;\n    this.doInteraction();\n  }\n\n  completeInteraction() {\n    this.isInteractionInProgress = false;\n  }\n\n  canInteract() {\n    throw Error('must implement canInteract');\n  }\n\n  doInteraction() {\n    throw Error('must implement doInteraction');\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (InteractionBase);\n\n//# sourceURL=webpack:///./src/interactions/InteractionBase.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\nclass Game extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Game {\n  constructor() {\n    super(_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  }\n\n}\n\nwindow.game = new Game();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/physics/ProximitySwitch.js":
/*!****************************************!*\
  !*** ./src/physics/ProximitySwitch.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass ProximitySwitch {\n  constructor(scene, proximityX, proximityY, firstObject, secondObject, onActivate, onDeactivate) {\n    this.scene = scene;\n    this.proximityX = proximityX;\n    this.proximityY = proximityY;\n    this.firstObject = firstObject;\n    this.secondObject = secondObject;\n    this.onActivate = onActivate;\n    this.onDeactivate = onDeactivate;\n    this.hasBeenActivated = false;\n  }\n\n  checkProximity() {\n    const isPastThresholdY = this.proximityY === null || this.proximityY === undefined || Math.abs(this.firstObject.y - this.secondObject.y) <= this.proximityY;\n    const isPastThresholdX = this.proximityX === null || this.proximityY === undefined || Math.abs(this.firstObject.x - this.secondObject.x) <= this.proximityX;\n\n    if (isPastThresholdX && isPastThresholdY) {\n      if (!this.hasBeenActivated) {\n        this.hasBeenActivated = true;\n        if (this.onActivate) this.onActivate();\n      }\n    } else {\n      if (this.hasBeenActivated) {\n        this.hasBeenActivated = false;\n        if (this.onDeactivate) this.onDeactivate();\n      }\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProximitySwitch);\n\n//# sourceURL=webpack:///./src/physics/ProximitySwitch.js?");

/***/ }),

/***/ "./src/physics/SpineArcadePhysicsContainer.js":
/*!****************************************************!*\
  !*** ./src/physics/SpineArcadePhysicsContainer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass SpineArcadePhysicsContainer extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.GameObjects.Container {\n  constructor(scene, key, x, y, spineObject) {\n    super(scene, x, y);\n    this.key = key;\n    this.scene = scene;\n    this.spineObject = spineObject;\n    this.isInitialized = false;\n  }\n\n  initialize() {\n    if (this.isInitialized) throw Error(`${this.key} already initialized`);\n    this.scene.physics.add.existing(this); // add this container to the scene's display list\n    // adding an object to a container removes it from all other display lists\n    // ... so this is necessary to get the spine object to render.\n\n    this.scene.sys.displayList.add(this);\n    const spineObjectBounds = this.spineObject.getBounds();\n    this.setPhysicsSize(spineObjectBounds.size.x * this.spineObject.scale, spineObjectBounds.size.y * this.spineObject.scale);\n    this.body.setCollideWorldBounds(true);\n    this.add(this.spineObject);\n    this.isInitialized = true;\n  }\n\n  setPhysicsSize(width, height) {\n    this.body.setOffset(width * -0.5, -height);\n    this.body.setSize(width, height);\n  }\n\n  setVelocityX(newVelocity) {\n    this.body.velocity.x = newVelocity;\n  }\n\n  setVelocityY(newVelocity) {\n    this.body.velocity.y = newVelocity;\n  }\n\n  getSpineObject() {\n    return this.spineObject;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpineArcadePhysicsContainer);\n\n//# sourceURL=webpack:///./src/physics/SpineArcadePhysicsContainer.js?");

/***/ }),

/***/ "./src/scenes/AnimationTestScene.js":
/*!******************************************!*\
  !*** ./src/scenes/AnimationTestScene.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _entities_Robot__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Robot */ \"./src/entities/Robot.js\");\n/* harmony import */ var _input_PlayerControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/PlayerControls */ \"./src/input/PlayerControls.js\");\n/* harmony import */ var _interactions_FistBumpInteraction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interactions/FistBumpInteraction */ \"./src/interactions/FistBumpInteraction.js\");\n/* harmony import */ var _controllers_RobotInputController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/RobotInputController */ \"./src/controllers/RobotInputController.js\");\n/* harmony import */ var _physics_ProximitySwitch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../physics/ProximitySwitch */ \"./src/physics/ProximitySwitch.js\");\n\n\n\n\n\n\n\nclass AnimationTestScene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'AnimationTestScene'\n    });\n  }\n\n  preload() {\n    this.load.image('tiles', 'assets/tilesets/robot-platformer-tileset-extruded.png');\n    this.load.tilemapTiledJSON('map', 'assets/tilesets/level-1.json');\n    this.load.setPath('assets/spine/robot');\n    this.load.spine('robot', 'robot.json', 'robot.atlas');\n    this.load.setPath('assets/spine/robotFistBump');\n    this.load.spine('robotFistBump', 'robotFistBump.json', 'robotFistBump.atlas');\n  }\n\n  create() {\n    this.initProperties();\n    this.physics.world.setBounds(0, 0, 2000, 2000);\n    this.createMap();\n    this.sceneData.player = new _entities_Robot__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 'player');\n    this.sceneData.player.initialize(100, 1800);\n    this.sceneData.robotNpc = new _entities_Robot__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, 'robotNpc');\n    this.sceneData.robotNpc.initialize(1660, 384);\n    this.sceneData.robotNpc.turnLeft();\n    this.physics.add.collider(this.sceneData.player.getContainer(), this.sceneData.map.platforms);\n    this.physics.add.collider(this.sceneData.robotNpc.getContainer(), this.sceneData.map.platforms);\n    this.physics.add.collider(this.sceneData.robotNpc.getContainer(), this.sceneData.player.getContainer());\n    this.sceneData.controls = new _input_PlayerControls__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.sceneData.controllers.playerController = new _controllers_RobotInputController__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this, this.sceneData.controls, this.sceneData.player);\n    this.sceneData.interactions.fistBump = new _interactions_FistBumpInteraction__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.cameras.main.setBounds(0, 0, 2000, 2000);\n    this.cameras.main.startFollow(this.sceneData.player.getContainer(), true, 1, 1, 0, 150);\n    this.sceneData.controls.onInteract(() => {\n      if (this.sceneData.interactions.fistBump.canInteract()) {\n        this.sceneData.interactions.fistBump.interact();\n      }\n    });\n    this.sceneData.proximitySwitches.playerRobotNpc = new _physics_ProximitySwitch__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this, 120, 10, this.sceneData.player.getContainer(), this.sceneData.robotNpc.getContainer(), () => this.events.emit('playerInFistBumpRange'), () => this.events.emit('playerOutOfFistBumpRange'));\n    this.scene.launch('HelpTextSubscene', this);\n  }\n\n  update() {\n    this.sceneData.proximitySwitches.playerRobotNpc.checkProximity();\n    this.sceneData.controllers.playerController.update();\n  }\n\n  initProperties() {\n    this.sceneData = {\n      player: null,\n      robotNpc: null,\n      controls: null,\n      proximitySwitches: {\n        playerRobotNpc: null\n      },\n      map: {\n        platforms: null\n      },\n      interactions: {\n        fistBump: null\n      },\n      controllers: {\n        playerController: null\n      }\n    };\n  }\n\n  createMap() {\n    const map = this.make.tilemap({\n      key: 'map'\n    });\n    const tileset = map.addTilesetImage('robot-platformer-tileset', // this needs to be the name of the tileset in the map data\n    'tiles', undefined, undefined, // extrusion alters the dimensions of each tile and shifts their position in the atlas.\n    // so, we have to set margin = extrusionPx, spacing = extrusionPx*2\n    1, 2);\n    map.createStaticLayer('Background', tileset, 0, 0);\n    this.sceneData.map.platforms = map.createStaticLayer('Platforms', tileset, 0, 0);\n    this.sceneData.map.platforms.setCollisionByExclusion(-1, true);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimationTestScene);\n\n//# sourceURL=webpack:///./src/scenes/AnimationTestScene.js?");

/***/ }),

/***/ "./src/scenes/index.js":
/*!*****************************!*\
  !*** ./src/scenes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AnimationTestScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationTestScene */ \"./src/scenes/AnimationTestScene.js\");\n/* harmony import */ var _subscenes_HelpTextSubscene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscenes/HelpTextSubscene */ \"./src/scenes/subscenes/HelpTextSubscene.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([_AnimationTestScene__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _subscenes_HelpTextSubscene__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n//# sourceURL=webpack:///./src/scenes/index.js?");

/***/ }),

/***/ "./src/scenes/subscenes/HelpTextSubscene.js":
/*!**************************************************!*\
  !*** ./src/scenes/subscenes/HelpTextSubscene.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass HelpTextSubscene extends phaser__WEBPACK_IMPORTED_MODULE_0___default.a.Scene {\n  constructor() {\n    super({\n      key: 'HelpTextSubscene'\n    });\n  }\n\n  init(ownerScene) {\n    this.initProperties();\n    this.sceneData.ownerScene = ownerScene;\n  }\n\n  create() {\n    this.sceneData.background = this.add.graphics();\n    this.sceneData.background.lineStyle(1, 0xffffff, 0.8);\n    this.sceneData.background.fillStyle(0x000, 0.3);\n    this.sceneData.background.fillRect(0, 0, 300, 100);\n    this.sceneData.helpText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, \"Press enter to fistbump\");\n    this.sceneData.helpText.setOrigin(0.5);\n    this.positionText();\n    this.setTextVisibility(false);\n    this.sceneData.ownerScene.events.on('playerInFistBumpRange', () => {\n      this.setTextVisibility(true);\n    });\n    this.sceneData.ownerScene.events.on('playerOutOfFistBumpRange', () => {\n      this.setTextVisibility(false);\n    });\n  }\n\n  update() {\n    this.positionText();\n  }\n\n  positionText() {\n    this.sceneData.helpText.x = this.cameras.main.width / 2;\n    this.sceneData.helpText.y = this.cameras.main.height - 102;\n    this.sceneData.background.x = this.cameras.main.width / 2 - 150;\n    this.sceneData.background.y = this.cameras.main.height - 150;\n  }\n\n  setTextVisibility(isVisible) {\n    this.sceneData.helpText.visible = isVisible;\n    this.sceneData.background.visible = isVisible;\n  }\n\n  initProperties() {\n    this.sceneData = {\n      ownerScene: null,\n      helpText: null,\n      background: null\n    };\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HelpTextSubscene);\n\n//# sourceURL=webpack:///./src/scenes/subscenes/HelpTextSubscene.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/ken/code/github/phaser-spine-animation-sandbox/src/main.js */\"./src/main.js\");\n\n\n//# sourceURL=webpack:///multi_./src/main.js?");

/***/ })

/******/ });