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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/events.json":
/*!*************************!*\
  !*** ./src/events.json ***!
  \*************************/
/*! exports provided: events, default */
/***/ (function(module) {

eval("module.exports = {\"events\":[{\"type\":\"info\",\"title\":\"Еженедельный отчет по расходам ресурсов\",\"source\":\"Сенсоры потребления\",\"time\":\"19:00, Сегодня\",\"description\":\"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.\",\"icon\":\"stats\",\"data\":{\"type\":\"graph\",\"values\":[{\"electricity\":[[\"1536883200\",115],[\"1536969600\",117],[\"1537056000\",117.2],[\"1537142400\",118],[\"1537228800\",120],[\"1537315200\",123],[\"1537401600\",129]]},{\"water\":[[\"1536883200\",40],[\"1536969600\",40.2],[\"1537056000\",40.5],[\"1537142400\",41],[\"1537228800\",41.4],[\"1537315200\",41.9],[\"1537401600\",42.6]]},{\"gas\":[[\"1536883200\",13],[\"1536969600\",13.2],[\"1537056000\",13.5],[\"1537142400\",13.7],[\"1537228800\",14],[\"1537315200\",14.2],[\"1537401600\",14.5]]}]},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Дверь открыта\",\"source\":\"Сенсор входной двери\",\"time\":\"18:50, Сегодня\",\"description\":null,\"icon\":\"key\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Уборка закончена\",\"source\":\"Пылесос\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"robot-cleaner\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Новый пользователь\",\"source\":\"Роутер\",\"time\":\"18:45, Сегодня\",\"description\":null,\"icon\":\"router\",\"size\":\"s\"},{\"type\":\"info\",\"title\":\"Изменен климатический режим\",\"source\":\"Сенсор микроклимата\",\"time\":\"18:30, Сегодня\",\"description\":\"Установлен климатический режим «Фиджи»\",\"icon\":\"thermal\",\"size\":\"m\",\"data\":{\"temperature\":24,\"humidity\":80}},{\"type\":\"critical\",\"title\":\"Невозможно включить кондиционер\",\"source\":\"Кондиционер\",\"time\":\"18:21, Сегодня\",\"description\":\"В комнате открыто окно, закройте его и повторите попытку\",\"icon\":\"ac\",\"size\":\"m\"},{\"type\":\"info\",\"title\":\"Музыка включена\",\"source\":\"Яндекс.Станция\",\"time\":\"18:16, Сегодня\",\"description\":\"Сейчас проигрывается:\",\"icon\":\"music\",\"size\":\"m\",\"data\":{\"albumcover\":\"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m1000x1000\",\"artist\":\"Florence & The Machine\",\"track\":{\"name\":\"Big God\",\"length\":\"4:31\"},\"volume\":80}},{\"type\":\"info\",\"title\":\"Заканчивается молоко\",\"source\":\"Холодильник\",\"time\":\"17:23, Сегодня\",\"description\":\"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?\",\"icon\":\"fridge\",\"size\":\"m\",\"data\":{\"buttons\":[\"Да\",\"Нет\"]}},{\"type\":\"info\",\"title\":\"Зарядка завершена\",\"source\":\"Оконный сенсор\",\"time\":\"16:22, Сегодня\",\"description\":\"Ура! Устройство «Оконный сенсор» снова в строю!\",\"icon\":\"battery\",\"size\":\"s\"},{\"type\":\"critical\",\"title\":\"Пылесос застрял\",\"source\":\"Сенсор движения\",\"time\":\"16:17, Сегодня\",\"description\":\"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.\",\"icon\":\"cam\",\"data\":{\"image\":\"get_it_from_mocks_:3.jpg\"},\"size\":\"l\"},{\"type\":\"info\",\"title\":\"Вода вскипела\",\"source\":\"Чайник\",\"time\":\"16:20, Сегодня\",\"description\":null,\"icon\":\"kettle\",\"size\":\"s\"}]};\n\n//# sourceURL=webpack:///./src/events.json?");

/***/ }),

/***/ "./src/img/graph.png":
/*!***************************!*\
  !*** ./src/img/graph.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/graph.png?8154b85e49e2f35f92fa7e355c6000ac\";\n\n//# sourceURL=webpack:///./src/img/graph.png?");

/***/ }),

/***/ "./src/img/graph@2x.png":
/*!******************************!*\
  !*** ./src/img/graph@2x.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/graph@2x.png?da9cc1f42e724e9d52a0620564c9502d\";\n\n//# sourceURL=webpack:///./src/img/graph@2x.png?");

/***/ }),

/***/ "./src/img/hoover.png":
/*!****************************!*\
  !*** ./src/img/hoover.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/hoover.png?0d1d6365ef2eea6234077505fc4ff2e9\";\n\n//# sourceURL=webpack:///./src/img/hoover.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n\n__webpack_require__(/*! ./img/graph.png */ \"./src/img/graph.png\");\n\n__webpack_require__(/*! ./img/graph@2x.png */ \"./src/img/graph@2x.png\");\n\n__webpack_require__(/*! ./img/hoover.png */ \"./src/img/hoover.png\");\n\nvar _template = __webpack_require__(/*! ./js/template */ \"./src/js/template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _menu = __webpack_require__(/*! ./js/menu */ \"./src/js/menu.js\");\n\nvar _menu2 = _interopRequireDefault(_menu);\n\nvar _ellipsizeText = __webpack_require__(/*! ./js/ellipsizeText */ \"./src/js/ellipsizeText.js\");\n\nvar _ellipsizeText2 = _interopRequireDefault(_ellipsizeText);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar dataEvents = __webpack_require__(/*! ./events.json */ \"./src/events.json\");\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    (0, _menu2.default)();\n    (0, _template2.default)(dataEvents);\n\n    var cardTitles = document.querySelectorAll('.card__title');\n    (0, _ellipsizeText2.default)(cardTitles);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/ellipsizeText.js":
/*!*********************************!*\
  !*** ./src/js/ellipsizeText.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n/**\n * Обрезает заголовок по высоте и добавляет `...` если больше 2 строк\n * @param el\n */\nfunction ellipsizeText(el) {\n    for (var i = 0; i < el.length; i++) {\n        var wordArray = el[i].innerHTML.split(' ');\n\n        while (el[i].scrollHeight > el[i].offsetHeight) {\n            wordArray.pop();\n            el[i].innerHTML = wordArray.join(' ') + '...';\n        }\n    }\n}\n\nexports.default = ellipsizeText;\n\n//# sourceURL=webpack:///./src/js/ellipsizeText.js?");

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.default = initMenu;\nfunction initMenu() {\n    var sideMenuTrigger = document.getElementById('js-side-menu-trigger');\n    sideMenuTrigger.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.add('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.add('content--visible--no');\n        this.classList.add('side-menu--visible--yes');\n    });\n\n    var sideMenuClose = document.getElementsByClassName('side-menu__cross')[0];\n    sideMenuClose.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.remove('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.remove('content--visible--no');\n        document.getElementsByClassName('hamburger')[0].classList.remove('side-menu--visible--yes');\n    });\n}\n\n//# sourceURL=webpack:///./src/js/menu.js?");

/***/ }),

/***/ "./src/js/template.js":
/*!****************************!*\
  !*** ./src/js/template.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction renderCards(events) {\n    var templateBase = document.getElementById('tplBase');\n    var templatePlayer = document.getElementById('tplPlayer');\n\n    for (var i = 0; i < events.events.length; i++) {\n        var clone = templateBase.content.cloneNode(true);\n        var card = clone.querySelector('.card');\n        card.classList.add('card_type_' + events.events[i].type);\n        card.classList.add('card_size_' + events.events[i].size);\n        card.querySelector('.icon').classList.add('icon_thumb_' + events.events[i].icon);\n        card.querySelector('.card__title').innerHTML = events.events[i].title;\n        card.querySelector('.card__source').innerHTML = events.events[i].source;\n        card.querySelector('.card__time').innerHTML = events.events[i].time;\n        var cardTopContent = document.createElement('div');\n        cardTopContent.classList.add('card__wrap');\n        var cardCross = document.createElement('div');\n        cardCross.classList.add('card__cross');\n        var cardNext = document.createElement('div');\n        cardNext.classList.add('card__next');\n\n        // Тип карточки - критический\n        if (events.events[i].type == 'critical') {\n            card.innerHTML += '<div class=\"card__content\"></div>';\n        }\n\n        // Блок с описанием\n        if (events.events[i].description) {\n            var cloneText = document.createElement('div');\n            cloneText.classList.add('card__text');\n            cloneText.innerHTML = events.events[i].description;\n\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.card__content').appendChild(cloneText);\n            } else card.appendChild(cloneText);\n        }\n\n        // Блок с температурой и влажностью\n        if (events.events[i].icon == 'thermal') {\n            var cloneSpecial = document.createElement('div');\n            cloneSpecial.classList.add('card__special');\n            var cloneTemp = document.createElement('div');\n            var cloneWet = document.createElement('div');\n            cloneTemp.classList.add('card__temperature');\n            cloneWet.classList.add('card__wet');\n            cloneTemp.innerHTML = '\\n                \\u0422\\u0435\\u043C\\u043F\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430: \\n                <span class=\"text-bold card__temperature-val\">' + events.events[i].data.temperature + '</span>\\n                <span class=\"text-bold\"> C</span>';\n\n            cloneWet.innerHTML = '\\n                \\u0412\\u043B\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C:\\n                <span class=\"text-bold card__wet-val\">' + events.events[i].data.humidity + '</span>\\n                <span class=\"text-bold\"> %</span>';\n\n            cloneSpecial.appendChild(cloneTemp);\n            cloneSpecial.appendChild(cloneWet);\n            card.appendChild(cloneSpecial);\n        }\n\n        // Блок с плеером\n        if (events.events[i].icon == 'music') {\n            var clonePlayer = templatePlayer.content.cloneNode(true);\n            clonePlayer.querySelector('.player__track-artist').innerHTML = events.events[i].data.artist;\n            clonePlayer.querySelector('.player__track-name').innerHTML = events.events[i].data.track.name;\n            clonePlayer.querySelector('.player__track-length').innerHTML = events.events[i].data.track.length;\n            clonePlayer.querySelector('.vol-slider-val__length').innerHTML = events.events[i].data.volume;\n            clonePlayer.querySelector('.player__cover').style.backgroundImage = 'url(' + events.events[i].data.albumcover + ')';\n\n            card.appendChild(clonePlayer);\n        }\n\n        // Блок с кнопками\n        if (events.events[i].icon == 'fridge') {\n            var btnBlock = document.createElement('div');\n            btnBlock.classList.add('card__buttons');\n            btnBlock.innerHTML = '\\n                <button class=\"btn btn_color_brand\">' + events.events[i].data.buttons[0] + '</button>\\n                <button class=\"btn\">' + events.events[i].data.buttons[1] + '</button>\\n            ';\n\n            card.appendChild(btnBlock);\n        }\n\n        // Картинка с графом\n        if (events.events[i].icon == 'stats') {\n            var imgBlock = document.createElement('div');\n            imgBlock.classList.add('card__img');\n            imgBlock.innerHTML = '<img class=\"image-graph\"\\n                                       src=\"dist/img/graph.png\"\\n                                       srcset=\"dist/img/graph@2x.png 2x,\\n                                               dist/img/graph@3x.png 3x\" alt=\"\">';\n\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.card__content').appendChild(imgBlock);\n            } else card.appendChild(imgBlock);\n        }\n\n        // Картинка с пылесосом\n        if (events.events[i].icon == 'cam') {\n            var _imgBlock = document.createElement('div');\n            _imgBlock.classList.add('card__img', 'image-hoover');\n            _imgBlock.style.backgroundImage = 'url(dist/img/hoover.png)';\n\n            // imgBlock.classList.add('card__img');\n            // imgBlock.innerHTML = `\n            //     <div class=\"camera\" touch-action=\"none\">\n            //         <img class=\"camera__img\" src=\"./dist/img/hoover.png\" alt=\"\" >\n            //     </div>`;\n\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.card__content').appendChild(_imgBlock);\n            } else card.appendChild(_imgBlock);\n        }\n\n        // Добавляем дочерние элементы в обертку, кроме последнего\n        var cardChildren = card.querySelectorAll('.card>*');\n\n        for (var q = 0; q < cardChildren.length - 1; q++) {\n            cardTopContent.appendChild(cardChildren[q]);\n        }\n\n        card.insertBefore(cardCross, card.firstChild);\n        card.insertBefore(cardNext, card.firstChild);\n        card.insertBefore(cardTopContent, card.firstChild);\n        templateBase.parentNode.appendChild(clone);\n    }\n}\n\nexports.default = renderCards;\n\n//# sourceURL=webpack:///./src/js/template.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });