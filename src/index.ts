import './scss/main.scss';

import './img/graph.png';
import './img/graph@2x.png';
import './img/hoover.png';

import renderCards from './js/template';
import initMenu from './js/menu';
import ellipsizeText from './js/ellipsizeText';
// import Framework from './framework/Framework';

import dataEvents from './events.json';
// import Store from "./framework/Store";
//
// /**
//  * Action - смена трека
//  * @type {{type: string; payload: {artist: string; trackName: string; trackLength: string}}}
//  */
// const changeTrack = {
//     type: 'CHANGE_TRACK',
//     payload:{
//         artist: 'Beyonce',
//         trackName: 'single ladies',
//         trackLength: '3:20'
//     }
// };
//
// /**
//  * Инициализируем начальные данные
//  */
// interface ICurrentTrack {
//     artist: string,
//     trackName: string
//     trackLength: string
// }
// const currentTrack = <ICurrentTrack> {
//     artist: 'Florence & The Machine',
//     trackName: 'Big God',
//     trackLength: '4:31'
// };
//
// const state: any = localStorage.getItem('TrackInfo') ?
//     JSON.parse(<any>localStorage.getItem('TrackInfo')) :
//     currentTrack;
//
// /**
//  * Инициализируем библиотку
//  * @type {Framework}
//  */
// const framework = new Framework();
//
// /**
//  * Создаем store
//  * @type {any}
//  */
// const playerStore = framework.createStore(state);
// localStorage.setItem('TrackInfo', JSON.stringify(playerStore.data));
// console.log('STORE DATA:');
// console.log(playerStore);
//
// /**
//  * Регистрируем коллбеки
//  */
// framework.register("CHANGE_TRACK", (payload: any) => {
//     const currentTrack = {
//         artist: payload.artist,
//         trackName: payload.trackName,
//         trackLength: payload.trackLength
//     };
//     playerStore.data["artist"] = currentTrack.artist;
//     playerStore.data["trackName"] = currentTrack.trackName;
//     playerStore.data["trackLength"] = currentTrack.trackLength;
//     localStorage.setItem('TrackInfo', JSON.stringify(currentTrack));
//
//     // playerStore.update();
//     console.log('NEW STORE DATA:');
//     console.log(playerStore);
// });


document.addEventListener('DOMContentLoaded', function () {
    initMenu();

    renderCards(dataEvents);

    let cardTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.card__title');
    ellipsizeText(cardTitles);

    // const btnNextTrack = document.querySelector<HTMLElement>('.player__ctrl_type_next');
    //
    // if (!btnNextTrack)
    //     return;
    //
    // btnNextTrack.addEventListener('click', () => {
    //     framework.dispatch(changeTrack)
    // });

});