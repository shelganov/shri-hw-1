import './scss/main.scss';

import './img/graph.png';
import './img/graph@2x.png';
import './img/hoover.png';

import renderCards from './js/template';
import initMenu from './js/menu';
import ellipsizeText from './js/ellipsizeText';

import dataEvents from './events.json';

document.addEventListener('DOMContentLoaded', function () {
    initMenu();

    renderCards(dataEvents);

    let cardTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.card__title');
    ellipsizeText(cardTitles);
});