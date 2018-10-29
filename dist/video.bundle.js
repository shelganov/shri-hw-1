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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/video.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/menu.ts":
/*!************************!*\
  !*** ./src/js/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction initMenu() {\n    var sideMenuTrigger = document.getElementById('js-side-menu-trigger');\n    if (sideMenuTrigger === null)\n        return;\n    sideMenuTrigger.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.add('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.add('content--visible--no');\n        this.classList.add('side-menu--visible--yes');\n    });\n    var sideMenuClose = document.getElementsByClassName('side-menu__cross')[0];\n    sideMenuClose.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.remove('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.remove('content--visible--no');\n        document.getElementsByClassName('hamburger')[0].classList.remove('side-menu--visible--yes');\n    });\n}\nexports.default = initMenu;\n\n\n//# sourceURL=webpack:///./src/js/menu.ts?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/video.ts":
/*!**********************!*\
  !*** ./src/video.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\nvar menu_1 = __importDefault(__webpack_require__(/*! ./js/menu */ \"./src/js/menu.ts\"));\n// import Hls from 'hls.js'\nvar hls_js_1 = __importDefault(__webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'hls.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nfunction initHls(video, url) {\n    if (hls_js_1.default.isSupported()) {\n        var hls = new hls_js_1.default();\n        hls.loadSource(url);\n        hls.attachMedia(video);\n        hls.on(hls_js_1.default.Events.MANIFEST_PARSED, function (e, data) {\n            // Ставим начальное качество минимальным\n            //  hls.autoLevelEnabled = false;\n            //  hls.loadLevel = 0;\n            video.play();\n            //            console.log(hls);\n        });\n        return hls;\n    }\n    else if (video.canPlayType('application/vnd.apple.mpegurl')) {\n        // alert(url)\n        video.src = url;\n        video.addEventListener('loadedmetadata', function () {\n            //     alert('loadmetadata');\n            video.play();\n        });\n    }\n}\nfunction initVideocontrol() {\n    var streams = [\n        \"https://ndrfs-lh.akamaihd.net/i/ndrfs_nds@430233/index_3776_av-p.m3u8\",\n        \"http://pershij-dlovij-hls3.cosmonova.net.ua/hls/pershij-dlovij_ua_mid/index.m3u8\",\n        \"https://586c13b083c0d.streamlock.net/tvaktuellr/tvaktuellr.stream_1/chunklist_w551902489.m3u8\",\n        \"http://hls-edge.cdn.buy-home.tv/bhtvlive/_definst_/live/playlist.m3u8\"\n    ];\n    var hlsArray = [];\n    var videosContainer = document.querySelector('.videotiles');\n    /* Массив источников*/\n    var audioSources = {};\n    var AudioContext = window.AudioContext || window.webkitAudioContext;\n    // Аудио-контекст\n    var context = new AudioContext();\n    var node = context.createScriptProcessor(2048, 1, 1);\n    node.connect(context.destination);\n    // Анализатор\n    var analyser = context.createAnalyser();\n    analyser.smoothingTimeConstant = 0.3;\n    analyser.fftSize = 512;\n    analyser.connect(node);\n    var activeVolume = null;\n    // Все видео\n    var videos = document.querySelectorAll('.video');\n    // Кнопка \"Все камеры\"\n    var cardsBtn = document.querySelectorAll('.card-video__btn');\n    /**\n     * Подключает определенную камеру\n     **/\n    function connectAudioSource(video) {\n        var id = video.id;\n        if (!audioSources[id]) {\n            audioSources[id] = context.createMediaElementSource(video);\n        }\n        audioSources[id].connect(analyser);\n        audioSources[id].connect(context.destination);\n    }\n    /**\n     * Событие поступление данных\n     **/\n    node.onaudioprocess = function () {\n        if (activeVolume) {\n            var volumeArray = new Uint8Array(analyser.frequencyBinCount);\n            // Получаем данные от анализатора\n            analyser.getByteFrequencyData(volumeArray);\n            var volumeAverage = getAverageVolume(volumeArray);\n            // Рисуем уровень громкости\n            activeVolume.clearRect(0, 0, activeVolume.canvas.width, activeVolume.canvas.height);\n            activeVolume.fillStyle = '#ffdb4d';\n            activeVolume.fillRect(0, 0, 2 * volumeAverage, activeVolume.canvas.height);\n        }\n    };\n    /**\n     * Считает среднее массива частот с источника\n     **/\n    function getAverageVolume(array) {\n        var length = array.length;\n        var sum = 0;\n        for (var i = 0; i < array.length; i++) {\n            sum += array[i];\n        }\n        return sum / length;\n    }\n    var _loop_1 = function (i) {\n        hlsArray[i] = initHls(videos[i], streams[i]);\n        // console.log(hlsArray[i]);\n        // Событие - открытие окна\n        videos[i].addEventListener('click', function () {\n            openFullScreen(videos[i]);\n        });\n    };\n    for (var i = 0; i < videos.length; i++) {\n        _loop_1(i);\n    }\n    var _loop_2 = function (i) {\n        cardsBtn[i].addEventListener('click', function (e) {\n            closeFullScreen(cardsBtn[i], e);\n        });\n    };\n    // Событие - закрытие окна\n    for (var i = 0; i < cardsBtn.length; i++) {\n        _loop_2(i);\n    }\n    /**\n     * Открытие фулл режима\n     **/\n    function openFullScreen(video) {\n        var videoWrap = video.parentNode;\n        // Инф-ия о блоке видео\n        var videoData = video.getBoundingClientRect();\n        var videoDataWidth = videoData.width;\n        var videoDataHeight = videoData.height;\n        var videoDataSquare = videoDataWidth * videoDataHeight;\n        var documentSquare = videosContainer.offsetWidth * videosContainer.offsetHeight;\n        console.log(documentSquare / videoDataSquare / 2);\n        // const videoDataWidth = videoData\n        activeVolume = videoWrap.querySelector('.card-video__volume').getContext(\"2d\");\n        if (videoWrap.classList.contains('active'))\n            return;\n        videoWrap.classList.add('active');\n        video.muted = false;\n        connectAudioSource(video);\n        // Позиции центра экрана\n        var positionCenterX = (document.body.clientWidth / 2) - videoData.x - (videoData.width / 2);\n        var positionCenterY = (document.body.clientHeight / 2) - videoData.y - (videoData.height / 2);\n        videoWrap.style.transform = \"translate3d(\" + positionCenterX + \"px, \" + positionCenterY + \"px, 0) scale(2)\";\n        // hlsVideo1.loadLevel = 2;\n        // }\n    }\n    /**\n     * Закрытие full режима\n     * @type {NodeList}\n     */\n    function closeFullScreen(button, e) {\n        e.preventDefault();\n        var parent = button.closest('.card-video');\n        var video = parent.querySelector('video');\n        parent.style.transform = null;\n        video.muted = true;\n        audioSources[video.id].disconnect();\n        //        video.disconnect();\n        setTimeout(function () {\n            parent.classList.remove('active');\n        }, 200);\n        e.stopPropagation();\n    }\n    /**\n     * Изменение яркости\n     * @type {NodeList}\n     */\n    var cardsInputBrightness = document.querySelectorAll('.card-video__input-brightness');\n    for (var i = 0; i < cardsInputBrightness.length; i++) {\n        cardsInputBrightness[i].addEventListener('input', function (e) {\n            this.closest('.card-video').querySelector('.video').style.filter = \"brightness(\" + this.value + \"%)\";\n        });\n    }\n    /**\n     * Изменение Контрастности\n     * @type {NodeList}\n     */\n    var cardsInputContrast = document.querySelectorAll('.card-video__input-contrast');\n    for (var i = 0; i < cardsInputContrast.length; i++) {\n        cardsInputContrast[i].addEventListener('input', function (e) {\n            this.closest('.card-video').querySelector('.video').style.filter = \"contrast(\" + this.value + \"%)\";\n        });\n    }\n}\ndocument.addEventListener('DOMContentLoaded', function () {\n    menu_1.default();\n    // initVideocontrol();\n});\n\n\n//# sourceURL=webpack:///./src/video.ts?");

/***/ })

/******/ });