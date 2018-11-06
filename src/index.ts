import './scss/main.scss';

import './img/graph.png';
import './img/graph@2x.png';
import './img/hoover.png';

import renderCards from './js/template';
import initMenu from './js/menu';
import ellipsizeText from './js/ellipsizeText';
import dataEvents from './events.json';
import Framework from './framework/Framework';


/**
 * Action - смена трека
 * Подставляем данные в виде заглушки
 * @type {{type: string; payload: {artist: string; trackName: string; trackLength: string}}}
 */
// const changeTrack = {
//     type: 'CHANGE_TRACK',
//     payload:{
//         artist: 'Beyonce',
//         trackName: 'single ladies',
//         trackLength: '3:20'
//     }
// };

const nextTrack = (artist: string, trackName: string, trackLength: string): void => {
    const action = {
        type: 'CHANGE_TRACK',
        payload:{
            artist: 'Beyonce',
            trackName: 'single ladies',
            trackLength: '3:20'
        }
    };
    framework.dispatch(action);
};

/**
 * Инициализируем начальные данные
 */
interface ICurrentTrack {
    artist: string,
    trackName: string
    trackLength: string
}
const currentTrack = <ICurrentTrack> {
    artist: 'Florence & The Machine',
    trackName: 'Big God',
    trackLength: '4:31'
};

const state: any = localStorage.getItem('TrackInfo') ?
    JSON.parse(<any>localStorage.getItem('TrackInfo')) :
    currentTrack;

/**
 * Инициализируем библиотку
 * @type {Framework}
 */
const framework = new Framework();

/**
 * Создаем store
 * @type {any}
 */
const playerStore = framework.createStore(state);
export {playerStore};
console.log(playerStore)
localStorage.setItem('TrackInfo', JSON.stringify(playerStore.data));
// console.log('STORE DATA:');
// console.log(playerStore);

/**
 * Регистрируем коллбеки
 */
framework.register("CHANGE_TRACK", (payload: any) => {
    // const nextTrack = {
    //     artist: payload.artist,
    //     trackName: payload.trackName,
    //     trackLength: payload.trackLength
    // };
    // playerStore.data["artist"] = nextTrack.artist;
    // playerStore.data["trackName"] = nextTrack.trackName;
    // playerStore.data["trackLength"] = nextTrack.trackLength;
    playerStore.data = payload;
    localStorage.setItem('TrackInfo', JSON.stringify(payload));
    // playerStore.change();
    // console.log('NEW STORE DATA:');
    // console.log(playerStore);
});

function renderPage() {
    const root = document.querySelector('.cards');
}


document.addEventListener('DOMContentLoaded', function () {
    initMenu();

    renderCards(dataEvents);
    let cardTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.card__title');
    ellipsizeText(cardTitles);

    const btnNextTrack = document.querySelector<HTMLElement>('.player__ctrl_type_next');

    if (!btnNextTrack)
        return;

    btnNextTrack.addEventListener('click', () => {
        nextTrack("Beyonce", "single ladies", "3:20");

        // framework.dispatch(changeTrack)
    });

});