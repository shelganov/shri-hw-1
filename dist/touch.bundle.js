/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/touch.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/flat.jpg":
/*!**************************!*\
  !*** ./src/img/flat.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/flat.jpg?5ce2ee3eb96a5f38f3cbb16a22a22b91\";\n\n//# sourceURL=webpack:///./src/img/flat.jpg?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/touch.js":
/*!**********************!*\
  !*** ./src/touch.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n__webpack_require__(/*! ./img/flat.jpg */ \"./src/img/flat.jpg\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MAX_BRIGHT_VALUE = 1;\n\nvar Camera = function () {\n    function Camera() {\n        _classCallCheck(this, Camera);\n\n        /* Активный жест */\n        this.currentGesture = null;\n\n        this.action = {\n            // начальная координата тача (при нажатии)\n            x: 0,\n            y: 0,\n            // дельта координаты тача\n            dx: 0,\n            dy: 0,\n            // текущее смещение координаты\n            currentShiftX: 0,\n            currentShiftY: 0\n        };\n\n        /* Массив жестов */\n        this.gestureCache = [];\n\n        /* Контейнер для камеры */\n        this.camera = null;\n\n        /* Конец картинки по оси Х (для отлова правой границы картинки) */\n        this.imgFinishPositionX = null;\n\n        /* Предыдущий зум (сравнивается с последующим для принятия решения - увеличение или уменьшение зума) */\n        this.prevZoom = -1;\n\n        // this.gestureSpace = -1;\n\n        /* Стандартный масштаб камеры */\n        this.scale = 1;\n\n        this.brightness = 0.5;\n\n        this.prevRotate = 0;\n\n        this.init();\n    }\n\n    _createClass(Camera, [{\n        key: 'init',\n\n\n        /**\n         * Инициализация\n         */\n        value: function init() {\n            var _this = this;\n\n            document.addEventListener('DOMContentLoaded', function () {\n                _this.camera = document.querySelector('.camera');\n                _this.cameraImg = document.querySelector('.camera__img');\n                _this.imgFinishPositionX = _this.cameraImg.width - document.querySelector('.card__img').offsetWidth;\n                _this.imgFinishPositionY = _this.cameraImg.height - document.querySelector('.card__img').offsetHeight;\n                _this.scroll = document.querySelector('.card__img-scroll');\n                document.querySelector('#brightness').innerText = _this.brightness.toFixed(2) * 100 + '%';\n\n                /**\n                 * Тач старт\n                 */\n                _this.camera.addEventListener('pointerdown', function (e) {\n                    _this.currentGesture = true;\n                    _this.gestureCache.push(e);\n\n                    // Координата тач старта\n                    _this.action.x = e.x;\n                    _this.action.y = e.y;\n                    _this.camera.setPointerCapture(e.pointerId);\n                });\n\n                /**\n                 * Тач движение\n                 */\n                _this.camera.addEventListener('pointermove', function (e) {\n                    if (!_this.currentGesture) {\n                        return;\n                    }\n\n                    // Если произошло 2 тача\n                    if (_this.gestureCache.length == 2) {\n                        _this.updateEvent(e);\n\n                        var angle = Math.atan((_this.gestureCache[1].y - _this.gestureCache[0].y) / (_this.gestureCache[1].x - _this.gestureCache[0].x)) * 180 / Math.PI;\n\n                        // Проверяем, какое событие происходит\n                        if (Math.abs(angle) < 20) {\n                            _this.zoom(e);\n                        } else {\n                            _this.rotate(e);\n                        }\n                    } else {\n                        _this.move(e);\n                    }\n                });\n\n                /**\n                 * Тач конец\n                 */\n                _this.camera.addEventListener('pointerup', function (e) {\n                    _this.currentGesture = null;\n                    _this.action.currentShiftX = _this.action.dx;\n                    _this.action.currentShiftY = _this.action.dy;\n\n                    // Задаем максимально возможные позиции картинки по краям\n                    if (_this.action.dx > 0) _this.action.currentShiftX = 0;\n\n                    if (_this.action.dx <= -_this.imgFinishPositionX) _this.action.currentShiftX = -_this.imgFinishPositionX;\n\n                    if (_this.action.dy > 0) _this.action.currentShiftY = 0;\n\n                    if (_this.action.dy <= -_this.imgFinishPositionY) _this.action.currentShiftY = -_this.imgFinishPositionY;\n\n                    _this.removeEvent(e);\n                    _this.prevZoom = -1;\n                });\n\n                _this.camera.addEventListener('pointercancel', function (e) {\n                    _this.currentGesture = null;\n                    _this.removeEvent(e);\n                    _this.prevZoom = -1;\n                });\n            });\n        }\n\n        /**\n         * Обновляет событие\n         * @param e\n         */\n\n    }, {\n        key: 'updateEvent',\n        value: function updateEvent(e) {\n            for (var i = 0; i < this.gestureCache.length; i++) {\n                if (this.gestureCache[i].pointerId == e.pointerId) {\n                    this.gestureCache[i] = e;\n                    break;\n                }\n            }\n        }\n\n        /**\n         * Определяет дельту смещения между координатой 1ого нажатия и координатой после сдвига + изначальное положение\n         * @param e\n         */\n\n    }, {\n        key: 'determDeltaMove',\n        value: function determDeltaMove(e) {\n            this.action.dx = -(this.action.x - e.x) + this.action.currentShiftX;\n            this.action.dy = -(this.action.y - e.y) + this.action.currentShiftY;\n\n            console.log(this.action.dx);\n        }\n\n        /**\n         * Движение камерой\n         * @param e\n         */\n\n    }, {\n        key: 'move',\n        value: function move(e) {\n            this.determDeltaMove(e);\n\n            if (this.action.dx <= 0 && Math.abs(this.action.dx) < this.imgFinishPositionX) {\n                this.camera.style.left = this.action.dx + 'px';\n\n                // Смещение скролла\n                this.scroll.style.transform = 'translateX(' + -((document.querySelector('.card__img').offsetWidth - this.scroll.offsetWidth) * this.action.dx) / (this.cameraImg.offsetWidth - document.querySelector('.card__img').offsetWidth) + '%)';\n            }\n\n            if (this.action.dy <= 0 && Math.abs(this.action.dy) < this.imgFinishPositionY) {\n                this.camera.style.top = this.action.dy + 'px';\n            }\n        }\n\n        /**\n         * Зум\n         */\n\n    }, {\n        key: 'zoom',\n        value: function zoom(e) {\n\n            this.gestureSpace = Math.abs(this.gestureCache[0].clientX - this.gestureCache[1].clientX);\n\n            if (this.prevZoom > 0) {\n                // Если уменьшение зума\n                if (this.prevZoom > this.gestureSpace) {\n\n                    // Изменение зума\n                    var _dZoom = (this.prevZoom - this.gestureSpace) / 100;\n\n                    // Запрещаем масштаб меньше 1\n                    if (this.scale - _dZoom <= 1) return;\n\n                    this.cameraImg.style.transform = 'scale(' + (this.scale - _dZoom) + ',' + (this.scale - _dZoom) + ')';\n                    this.scale = this.scale - _dZoom;\n                }\n                // Если увеличение зума\n                if (this.prevZoom < this.gestureSpace) {\n\n                    var _dZoom2 = (this.gestureSpace - this.prevZoom) / 100;\n\n                    if (this.scale - _dZoom2 >= 3) return;\n\n                    this.cameraImg.style.transform = 'scale(' + (this.scale + _dZoom2) + ',' + (this.scale + _dZoom2) + ')';\n                    this.scale = this.scale + _dZoom2;\n                }\n            }\n\n            this.prevZoom = this.gestureSpace;\n        }\n    }, {\n        key: 'rotate',\n        value: function rotate(e) {\n\n            // this.updateEvent(e);\n\n            var rotate = Math.atan((this.gestureCache[1].y - this.gestureCache[0].y) / (this.gestureCache[1].x - this.gestureCache[0].x));\n\n            if (Math.abs(rotate - this.prevRotate) > 3) {\n                rotate = rotate - Math.PI;\n            }\n\n            // Определяем коэффициент изменения\n            var dRotate = 1;\n\n            if (rotate > this.prevRotate) {\n                dRotate = 1.1;\n            } else if (rotate < this.prevRotate) {\n                dRotate = 0.9;\n            }\n\n            // document.querySelector('#log').innerText = rotate * dRotate;\n            // Определение яркости\n            this.brightness = Math.abs(rotate * dRotate);\n\n            if (this.brightness > this.maxBright) {\n                this.brightness = 1;\n            }\n\n            if (this.brightness <= 0) this.brightness = 0;\n\n            this.prevRotate = rotate;\n\n            // let fixedBrightness = this.brightness.toFixed(2) * 100;\n            document.querySelector('#brightness').innerText = this.brightness.toFixed(2) * 100 + '%';\n            this.cameraImg.style.webkitFilter = 'brightness(' + this.brightness;\n        }\n\n        /**\n         * Удаление эвентов\n         * @param event\n         */\n\n    }, {\n        key: 'removeEvent',\n        value: function removeEvent(event) {\n            for (var i = 0; i < this.gestureCache.length; i++) {\n                if (this.gestureCache[i].pointerId == event.pointerId) {\n                    this.gestureCache.splice(i, 1);\n                    break;\n                }\n            }\n        }\n    }, {\n        key: 'maxBright',\n        get: function get() {\n            return MAX_BRIGHT_VALUE;\n        }\n    }]);\n\n    return Camera;\n}();\n\nnew Camera();\n\n//# sourceURL=webpack:///./src/touch.js?");

/***/ })

/******/ });