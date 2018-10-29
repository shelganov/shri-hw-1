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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n__webpack_require__(/*! ./img/graph.png */ \"./src/img/graph.png\");\n__webpack_require__(/*! ./img/graph@2x.png */ \"./src/img/graph@2x.png\");\n__webpack_require__(/*! ./img/hoover.png */ \"./src/img/hoover.png\");\nvar template_1 = __importDefault(__webpack_require__(/*! ./js/template */ \"./src/js/template.ts\"));\nvar menu_1 = __importDefault(__webpack_require__(/*! ./js/menu */ \"./src/js/menu.ts\"));\nvar ellipsizeText_1 = __importDefault(__webpack_require__(/*! ./js/ellipsizeText */ \"./src/js/ellipsizeText.ts\"));\nvar events_json_1 = __importDefault(__webpack_require__(/*! ./events.json */ \"./src/events.json\"));\ndocument.addEventListener('DOMContentLoaded', function () {\n    menu_1.default();\n    template_1.default(events_json_1.default);\n    var cardTitles = document.querySelectorAll('.card__title');\n    ellipsizeText_1.default(cardTitles);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/js/ellipsizeText.ts":
/*!*********************************!*\
  !*** ./src/js/ellipsizeText.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * Обрезает заголовок по высоте и добавляет `...` если больше 2 строк\n * @param el\n */\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction ellipsizeText(el) {\n    for (var i = 0; i < el.length; i++) {\n        var wordArray = el[i].innerHTML.split(' ');\n        while (el[i].scrollHeight > el[i].offsetHeight) {\n            wordArray.pop();\n            el[i].innerHTML = wordArray.join(' ') + '...';\n        }\n    }\n}\nexports.default = ellipsizeText;\n\n\n//# sourceURL=webpack:///./src/js/ellipsizeText.ts?");

/***/ }),

/***/ "./src/js/menu.ts":
/*!************************!*\
  !*** ./src/js/menu.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nfunction initMenu() {\n    var sideMenuTrigger = document.getElementById('js-side-menu-trigger');\n    if (sideMenuTrigger === null)\n        return;\n    sideMenuTrigger.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.add('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.add('content--visible--no');\n        this.classList.add('side-menu--visible--yes');\n    });\n    var sideMenuClose = document.getElementsByClassName('side-menu__cross')[0];\n    sideMenuClose.addEventListener('click', function () {\n        document.getElementsByClassName('side-menu')[0].classList.remove('side-menu--visible--yes');\n        document.getElementsByClassName('content')[0].classList.remove('content--visible--no');\n        document.getElementsByClassName('hamburger')[0].classList.remove('side-menu--visible--yes');\n    });\n}\nexports.default = initMenu;\n\n\n//# sourceURL=webpack:///./src/js/menu.ts?");

/***/ }),

/***/ "./src/js/template.ts":
/*!****************************!*\
  !*** ./src/js/template.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * Функция вывода шаблона карточки\n *\n * @param events - json файл с элементами\n */\nfunction renderCards(events) {\n    var templateBase = document.getElementById('tplBase');\n    var templatePlayer = document.getElementById('tplPlayer');\n    var clone;\n    var card;\n    var cardIcon;\n    var cardTitle;\n    var cardSource;\n    var cardTime;\n    var cardContent;\n    for (var i = 0; i < events.events.length; i++) {\n        clone = templateBase.content.cloneNode(true);\n        card = clone.querySelector('.card');\n        if (card === null)\n            return;\n        cardIcon = card.querySelector('.icon');\n        if (cardIcon === null)\n            return;\n        cardTitle = card.querySelector('.card__title');\n        if (cardTitle === null)\n            return;\n        cardSource = card.querySelector('.card__source');\n        if (cardSource === null)\n            return;\n        cardTime = card.querySelector('.card__time');\n        if (cardTime === null)\n            return;\n        cardContent = card.querySelector('.card__content');\n        if (cardContent === null)\n            return;\n        card.classList.add(\"card_type_\" + events.events[i].type);\n        card.classList.add(\"card_size_\" + events.events[i].size);\n        cardIcon.classList.add(\"icon_thumb_\" + events.events[i].icon);\n        cardTitle.innerHTML = events.events[i].title;\n        cardSource.innerHTML = events.events[i].source;\n        cardTime.innerHTML = events.events[i].time;\n        var cardTopContent = document.createElement('div');\n        cardTopContent.classList.add('card__wrap');\n        var cardCross = document.createElement('div');\n        cardCross.classList.add('card__cross');\n        var cardNext = document.createElement('div');\n        cardNext.classList.add('card__next');\n        // Тип карточки - критический\n        if (events.events[i].type == 'critical') {\n            card.innerHTML += \"<div class=\\\"card__content\\\"></div>\";\n        }\n        // Блок с описанием\n        if (events.events[i].description) {\n            var cloneText = document.createElement('div');\n            cloneText.classList.add('card__text');\n            cloneText.innerHTML = events.events[i].description;\n            if (events.events[i].type == 'critical') {\n                cardContent.appendChild(cloneText);\n            }\n            else\n                card.appendChild(cloneText);\n        }\n        // Блок с температурой и влажностью\n        if (events.events[i].icon == 'thermal') {\n            var cloneSpecial = document.createElement('div');\n            cloneSpecial.classList.add('card__special');\n            var cloneTemp = document.createElement('div');\n            var cloneWet = document.createElement('div');\n            cloneTemp.classList.add('card__temperature');\n            cloneWet.classList.add('card__wet');\n            // if (!events.events[i].data.temperature || (events.events[i].data.temperature && events.events[i].data.temperature == undefined))\n            //     return;\n            // if (events.events[i].data!.temperature === undefined || events.events[i].data!.humidity === undefined) {\n            //     return;\n            // }\n            cloneTemp.innerHTML = \"\\n                \\u0422\\u0435\\u043C\\u043F\\u0435\\u0440\\u0430\\u0442\\u0443\\u0440\\u0430: \\n                <span class=\\\"text-bold card__temperature-val\\\">\" + events.events[i].data.temperature + \"</span>\\n                <span class=\\\"text-bold\\\"> C</span>\";\n            cloneWet.innerHTML = \"\\n                \\u0412\\u043B\\u0430\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C:\\n                <span class=\\\"text-bold card__wet-val\\\">\" + events.events[i].data.humidity + \"</span>\\n                <span class=\\\"text-bold\\\"> %</span>\";\n            cloneSpecial.appendChild(cloneTemp);\n            cloneSpecial.appendChild(cloneWet);\n            card.appendChild(cloneSpecial);\n        }\n        // Блок с плеером\n        if (events.events[i].icon == 'music') {\n            var clonePlayer = templatePlayer.content.cloneNode(true);\n            if (!events.events[i].data || !events.events[i].data.artist) {\n                return;\n            }\n            clonePlayer.querySelector('.player__track-artist').innerHTML = events.events[i].data.artist;\n            clonePlayer.querySelector('.player__track-name').innerHTML = events.events[i].data.track.name;\n            clonePlayer.querySelector('.player__track-length').innerHTML = events.events[i].data.track.length;\n            clonePlayer.querySelector('.vol-slider-val__length').innerHTML = events.events[i].data.volume;\n            clonePlayer.querySelector('.player__cover').style.backgroundImage = \"url(\" + events.events[i].data.albumcover + \")\";\n            card.appendChild(clonePlayer);\n        }\n        // Блок с кнопками\n        if (events.events[i].icon == 'fridge') {\n            var btnBlock = document.createElement('div');\n            btnBlock.classList.add('card__buttons');\n            btnBlock.innerHTML = \"\\n                <button class=\\\"btn btn_color_brand\\\">\" + events.events[i].data.buttons[0] + \"</button>\\n                <button class=\\\"btn\\\">\" + events.events[i].data.buttons[1] + \"</button>\\n            \";\n            card.appendChild(btnBlock);\n        }\n        // Картинка с графом\n        if (events.events[i].icon == 'stats') {\n            var imgBlock = document.createElement('div');\n            imgBlock.classList.add('card__img');\n            imgBlock.innerHTML = \"<img class=\\\"image-graph\\\"\\n                                       src=\\\"dist/img/graph.png\\\"\\n                                       srcset=\\\"dist/img/graph@2x.png 2x,\\n                                               dist/img/graph@3x.png 3x\\\" alt=\\\"\\\">\";\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.card__content').appendChild(imgBlock);\n            }\n            else\n                card.appendChild(imgBlock);\n        }\n        // Картинка с пылесосом\n        if (events.events[i].icon == 'cam') {\n            var imgBlock = document.createElement('div');\n            imgBlock.classList.add('card__img', 'image-hoover');\n            imgBlock.style.backgroundImage = \"url(dist/img/hoover.png)\";\n            if (events.events[i].type == 'critical') {\n                card.querySelector('.card__content').appendChild(imgBlock);\n            }\n            else\n                card.appendChild(imgBlock);\n        }\n        // Добавляем дочерние элементы в обертку, кроме последнего\n        var cardChildren = card.querySelectorAll(\".card>*\");\n        for (var q = 0; q < cardChildren.length - 1; q++) {\n            cardTopContent.appendChild(cardChildren[q]);\n        }\n        card.insertBefore(cardCross, card.firstChild);\n        card.insertBefore(cardNext, card.firstChild);\n        card.insertBefore(cardTopContent, card.firstChild);\n        templateBase.parentNode.appendChild(clone);\n    }\n}\nexports.default = renderCards;\n\n\n//# sourceURL=webpack:///./src/js/template.ts?");

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