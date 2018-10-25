
function renderCards(events) {
    let templateBase = document.getElementById('tplBase');
    let templatePlayer = document.getElementById('tplPlayer');

    for (let i = 0; i < events.events.length; i++) {
        let clone = templateBase.content.cloneNode(true);
        let card = clone.querySelector('.card');
        card.classList.add(`card_type_${events.events[i].type}`);
        card.classList.add(`card_size_${events.events[i].size}`);
        card.querySelector('.icon').classList.add(`icon_thumb_${events.events[i].icon}`);
        card.querySelector('.card__title').innerHTML = events.events[i].title;
        card.querySelector('.card__source').innerHTML = events.events[i].source;
        card.querySelector('.card__time').innerHTML = events.events[i].time;
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
                card.querySelector('.card__content').appendChild(cloneText);
            } else
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
            card.appendChild(cloneSpecial)
        }

        // Блок с плеером
        if (events.events[i].icon == 'music') {
            let clonePlayer = templatePlayer.content.cloneNode(true);
            clonePlayer.querySelector('.player__track-artist').innerHTML = events.events[i].data.artist;
            clonePlayer.querySelector('.player__track-name').innerHTML = events.events[i].data.track.name;
            clonePlayer.querySelector('.player__track-length').innerHTML = events.events[i].data.track.length;
            clonePlayer.querySelector('.vol-slider-val__length').innerHTML = events.events[i].data.volume;
            clonePlayer.querySelector('.player__cover').style.backgroundImage = `url(${events.events[i].data.albumcover})`;

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
            } else
                card.appendChild(imgBlock);
        }

        // Картинка с пылесосом
        if (events.events[i].icon == 'cam') {
            let imgBlock = document.createElement('div');
            imgBlock.classList.add('card__img','image-hoover');
            imgBlock.style.backgroundImage = `url(dist/img/hoover.png)`;

            // imgBlock.classList.add('card__img');
            // imgBlock.innerHTML = `
            //     <div class="camera" touch-action="none">
            //         <img class="camera__img" src="./dist/img/hoover.png" alt="" >
            //     </div>`;

            if (events.events[i].type == 'critical') {
                card.querySelector('.card__content').appendChild(imgBlock);
            } else
                card.appendChild(imgBlock);
        }

        // Добавляем дочерние элементы в обертку, кроме последнего
        let cardChildren = card.querySelectorAll(`.card>*`);

        for (let q = 0; q < cardChildren.length - 1; q++) {
            cardTopContent.appendChild(cardChildren[q]);
        }

        card.insertBefore(cardCross,card.firstChild);
        card.insertBefore(cardNext,card.firstChild);
        card.insertBefore(cardTopContent, card.firstChild);
        templateBase.parentNode.appendChild(clone);
    }
}

export default renderCards;