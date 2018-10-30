"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./scss/main.scss");
require("./img/graph.png");
require("./img/graph@2x.png");
require("./img/hoover.png");
const template_1 = __importDefault(require("./js/template"));
const menu_1 = __importDefault(require("./js/menu"));
const ellipsizeText_1 = __importDefault(require("./js/ellipsizeText"));
const events_json_1 = __importDefault(require("./events.json"));
document.addEventListener('DOMContentLoaded', function () {
    menu_1.default();
    template_1.default(events_json_1.default);
    let cardTitles = document.querySelectorAll('.card__title');
    ellipsizeText_1.default(cardTitles);
});
//# sourceMappingURL=index.js.map