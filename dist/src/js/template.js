"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Функция вывода шаблона карточки
 *
 * @param events - json файл с элементами
 */
function renderCards(events) {
    let templateBase = document.getElementById('tplBase');
    let templatePlayer = document.getElementById('tplPlayer');
    let clone;
    let card;
    let cardIcon;
    let cardTitle;
    let cardSource;
    let cardTime;
    let cardContent;
    if (templateBase === null)
        return;
    for (let i = 0; i < events.events.length; i++) {
        clone = templateBase.content.cloneNode(true);
        card = clone.querySelector('.card');
        if (card === null)
            return;
        cardIcon = card.querySelector('.icon');
        if (cardIcon === null)
            return;
        cardTitle = card.querySelector('.card__title');
        if (cardTitle === null)
            return;
        cardSource = card.querySelector('.card__source');
        if (cardSource === null)
            return;
        cardTime = card.querySelector('.card__time');
        if (cardTime === null)
            return;
        // cardContent = card.querySelector('.card__content');
        // console.log(141414)
        // if (cardContent === null)
        //     return;
        card.classList.add(`card_type_${events.events[i].type}`);
        card.classList.add(`card_size_${events.events[i].size}`);
        cardIcon.classList.add(`icon_thumb_${events.events[i].icon}`);
        cardTitle.innerHTML = events.events[i].title;
        cardSource.innerHTML = events.events[i].source;
        cardTime.innerHTML = events.events[i].time;
        let cardTopContent = document.createElement('div');
        cardTopContent.classList.add('card__wrap');
        let cardCross = document.createElement('div');
        cardCross.classList.add('card__cross');
        let cardNext = document.createElement('div');
        cardNext.classList.add('card__next');
        // Тип карточки - критический
        if (events.events[i].type == 'critical') {
            card.innerHTML += `<div class="card__content"></div>`;
        }
        // Блок с описанием
        if (events.events[i].description) {
            let cloneText = document.createElement('div');
            cloneText.classList.add('card__text');
            cloneText.innerHTML = events.events[i].description;
            if (events.events[i].type == 'critical') {
                cardContent = card.querySelector('.card__content');
                if (cardContent === null)
                    return;
                cardContent.appendChild(cloneText);
                // cardContent.appendChild(cloneText);
            }
            else
                card.appendChild(cloneText);
        }
        // Блок с температурой и влажностью
        if (events.events[i].icon == 'thermal') {
            let cloneSpecial = document.createElement('div');
            cloneSpecial.classList.add('card__special');
            let cloneTemp = document.createElement('div');
            let cloneWet = document.createElement('div');
            cloneTemp.classList.add('card__temperature');
            cloneWet.classList.add('card__wet');
            cloneTemp.innerHTML = `
            Температура: 
            <span class="text-bold card__temperature-val">${events.events[i].data.temperature}</span>
            <span class="text-bold"> C</span>`;
            cloneWet.innerHTML = `
            Влажность:
            <span class="text-bold card__wet-val">${events.events[i].data.humidity}</span>
            <span class="text-bold"> %</span>`;
            cloneSpecial.appendChild(cloneTemp);
            cloneSpecial.appendChild(cloneWet);
            card.appendChild(cloneSpecial);
        }
        // Блок с плеером
        if (events.events[i].icon == 'music') {
            let clonePlayer = templatePlayer.content.cloneNode(true);
            if (!events.events[i].data || !events.events[i].data.artist) {
                return;
            }
            const artist = clonePlayer.querySelector('.player__track-artist'), trackName = clonePlayer.querySelector('.player__track-name'), trackLength = clonePlayer.querySelector('.player__track-length'), sliderValLength = clonePlayer.querySelector('.vol-slider-val__length'), playerCover = clonePlayer.querySelector('.player__cover');
            if (artist == null ||
                trackName == null ||
                trackLength == null ||
                sliderValLength == null ||
                playerCover == null) {
                return;
            }
            artist.innerHTML = events.events[i].data.artist;
            trackName.innerHTML = events.events[i].data.track.name;
            trackLength.innerHTML = events.events[i].data.track.length;
            sliderValLength.innerHTML = events.events[i].data.volume;
            playerCover.style.backgroundImage = `url(${events.events[i].data.albumcover})`;
            card.appendChild(clonePlayer);
        }
        // Блок с кнопками
        if (events.events[i].icon == 'fridge') {
            let btnBlock = document.createElement('div');
            btnBlock.classList.add('card__buttons');
            btnBlock.innerHTML = `
                <button class="btn btn_color_brand">${events.events[i].data.buttons[0]}</button>
                <button class="btn">${events.events[i].data.buttons[1]}</button>
            `;
            card.appendChild(btnBlock);
        }
        // Картинка с графом
        if (events.events[i].icon == 'stats') {
            let imgBlock = document.createElement('div');
            imgBlock.classList.add('card__img');
            imgBlock.innerHTML = `<img class="image-graph"
                                       src="dist/img/graph.png"
                                       srcset="dist/img/graph@2x.png 2x,
                                               dist/img/graph@3x.png 3x" alt="">`;
            if (events.events[i].type == 'critical') {
                card.querySelector('.card__content').appendChild(imgBlock);
            }
            else
                card.appendChild(imgBlock);
        }
        // Картинка с пылесосом
        if (events.events[i].icon == 'cam') {
            let imgBlock = document.createElement('div');
            imgBlock.classList.add('card__img', 'image-hoover');
            imgBlock.style.backgroundImage = `url(dist/img/hoover.png)`;
            if (events.events[i].type == 'critical') {
                card.querySelector('.card__content').appendChild(imgBlock);
            }
            else
                card.appendChild(imgBlock);
        }
        // Добавляем дочерние элементы в обертку, кроме последнего
        let cardChildren = card.querySelectorAll(`.card>*`);
        for (let q = 0; q < cardChildren.length - 1; q++) {
            cardTopContent.appendChild(cardChildren[q]);
        }
        card.insertBefore(cardCross, card.firstChild);
        card.insertBefore(cardNext, card.firstChild);
        card.insertBefore(cardTopContent, card.firstChild);
        templateBase.parentNode.appendChild(clone);
    }
}
exports.default = renderCards;
//# sourceMappingURL=template.js.map