"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./scss/main.scss");
const menu_1 = __importDefault(require("./js/menu"));
const hls_js_1 = __importDefault(require("hls.js"));
function initHls(video, url) {
    if (hls_js_1.default.isSupported()) {
        const hls = new hls_js_1.default();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(hls_js_1.default.Events.MANIFEST_PARSED, function () {
            // Ставим начальное качество минимальным
            //  hls.autoLevelEnabled = false;
            //  hls.loadLevel = 0;
            video.play();
            //            console.log(hls);
        });
        return hls;
    }
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // alert(url)
        video.src = url;
        video.addEventListener('loadedmetadata', function () {
            //     alert('loadmetadata');
            video.play();
        });
    }
}
function initVideocontrol() {
    const streams = [
        "https://ndrfs-lh.akamaihd.net/i/ndrfs_nds@430233/index_3776_av-p.m3u8",
        "http://pershij-dlovij-hls3.cosmonova.net.ua/hls/pershij-dlovij_ua_mid/index.m3u8",
        "https://586c13b083c0d.streamlock.net/tvaktuellr/tvaktuellr.stream_1/chunklist_w551902489.m3u8",
        "http://hls-edge.cdn.buy-home.tv/bhtvlive/_definst_/live/playlist.m3u8"
    ];
    const hlsArray = [];
    const videosContainer = document.querySelector('.videotiles');
    /* Массив источников*/
    let audioSources = {};
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    // Аудио-контекст
    const context = new AudioContext();
    const node = context.createScriptProcessor(2048, 1, 1);
    node.connect(context.destination);
    // Анализатор
    const analyser = context.createAnalyser();
    analyser.smoothingTimeConstant = 0.3;
    analyser.fftSize = 512;
    analyser.connect(node);
    let activeVolume;
    // Все видео
    const videos = document.querySelectorAll('.video');
    // Кнопка "Все камеры"
    const cardsBtn = document.querySelectorAll('.card-video__btn');
    /**
     * Подключает определенную камеру
     **/
    function connectAudioSource(video) {
        const id = video.id;
        console.log(audioSources);
        if (!audioSources[id]) {
            audioSources[id] = context.createMediaElementSource(video);
        }
        audioSources[id].connect(analyser);
        audioSources[id].connect(context.destination);
    }
    /**
     * Событие поступление данных
     **/
    node.onaudioprocess = () => {
        if (activeVolume) {
            const volumeArray = new Uint8Array(analyser.frequencyBinCount);
            // Получаем данные от анализатора
            analyser.getByteFrequencyData(volumeArray);
            const volumeAverage = getAverageVolume(volumeArray);
            // Рисуем уровень громкости
            activeVolume.clearRect(0, 0, activeVolume.canvas.width, activeVolume.canvas.height);
            activeVolume.fillStyle = '#ffdb4d';
            activeVolume.fillRect(0, 0, 2 * volumeAverage, activeVolume.canvas.height);
        }
    };
    /**
     * Считает среднее массива частот с источника
     **/
    function getAverageVolume(array) {
        let length = array.length;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / length;
    }
    for (let i = 0; i < videos.length; i++) {
        hlsArray[i] = initHls(videos[i], streams[i]);
        // console.log(hlsArray[i]);
        // Событие - открытие окна
        videos[i].addEventListener('click', () => {
            openFullScreen(videos[i]);
        });
    }
    // Событие - закрытие окна
    for (let i = 0; i < cardsBtn.length; i++) {
        cardsBtn[i].addEventListener('click', (e) => {
            closeFullScreen(cardsBtn[i], e);
        });
    }
    /**
     * Открытие фулл режима
     **/
    function openFullScreen(video) {
        const videoWrap = video.parentNode;
        // Инф-ия о блоке видео
        const videoData = video.getBoundingClientRect();
        const videoDataWidth = videoData.width;
        const videoDataHeight = videoData.height;
        const videoDataSquare = videoDataWidth * videoDataHeight;
        const documentSquare = videosContainer.offsetWidth * videosContainer.offsetHeight;
        if (videoWrap === null)
            return;
        const videoVolume = videoWrap.querySelector('.card-video__volume');
        if (videoVolume === null)
            return;
        const videoVolumeContext = videoVolume.getContext("2d");
        if (videoVolumeContext === null)
            return;
        activeVolume = videoVolumeContext;
        if (videoWrap.classList.contains('active'))
            return;
        videoWrap.classList.add('active');
        video.muted = false;
        connectAudioSource(video);
        // Позиции центра экрана
        let positionCenterX = (document.body.clientWidth / 2) - (videoData).left - (videoData.width / 2);
        let positionCenterY = (document.body.clientHeight / 2) - videoData.top - (videoData.height / 2);
        videoWrap.style.transform = `translate3d(${positionCenterX}px, ${positionCenterY}px, 0) scale(2)`;
        // hlsVideo1.loadLevel = 2;
        // }
    }
    /**
     * Закрытие full режима
     * @type {NodeList}
     */
    function closeFullScreen(button, e) {
        e.preventDefault();
        const parent = button.closest('.card-video');
        if (parent === null)
            return;
        const video = parent.querySelector('video');
        if (video === null)
            return;
        parent.style.transform = null;
        video.muted = true;
        audioSources[video.id].disconnect();
        //        video.disconnect();
        setTimeout(() => {
            parent.classList.remove('active');
        }, 200);
        e.stopPropagation();
    }
    /**
     * Изменение яркости
     * @type {NodeList}
     */
    let cardsInputBrightness = document.querySelectorAll('.card-video__input-brightness');
    for (let i = 0; i < cardsInputBrightness.length; i++) {
        cardsInputBrightness[i].addEventListener('input', () => {
            if (cardsInputBrightness[i] == null)
                return;
            let parent = cardsInputBrightness[i].closest('.card-video');
            if (parent === null)
                return;
            let parentVideo = parent.querySelector('.video');
            if (parentVideo === null)
                return;
            parentVideo.style.filter = `brightness(${cardsInputBrightness[i].value}%)`;
        });
    }
    /**
     * Изменение Контрастности
     * @type {NodeList}
     */
    let cardsInputContrast = document.querySelectorAll('.card-video__input-contrast');
    for (let i = 0; i < cardsInputContrast.length; i++) {
        cardsInputContrast[i].addEventListener('input', (e) => {
            if (cardsInputContrast[i] == null)
                return;
            let parent = cardsInputContrast[i].closest('.card-video');
            if (parent === null)
                return;
            let parentVideo = parent.querySelector('.video');
            if (parentVideo === null)
                return;
            parentVideo.style.filter = `contrast(${cardsInputContrast[i].value}%)`;
        });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    menu_1.default();
    initVideocontrol();
});
//# sourceMappingURL=video.js.map