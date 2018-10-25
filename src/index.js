import './scss/main.scss';

import './img/graph.png';
import './img/hoover.png';

import renderCards from './js/template';
import iniMenu from './js/menu';
import ellipsizeText from './js/ellipsizeText';

const dataEvents = require('./events.json');

document.addEventListener('DOMContentLoaded', function () {
    iniMenu();
    renderCards(dataEvents);

    let cardTitles = document.querySelectorAll('.card__title');
    ellipsizeText(cardTitles);
});