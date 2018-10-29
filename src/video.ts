import './scss/main.scss';
import initMenu from './js/menu';

// import Hls from 'hls.js'
import Hls from 'hls.js';

interface IWindow {
    AudioContext: typeof AudioContext;
    webkitAudioContext: typeof AudioContext;
    mozAudioContext: typeof AudioContext;
}
declare const window: IWindow;


function initHls(video, url) {
    if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);

        hls.on(Hls.Events.MANIFEST_PARSED, function (e, data) {
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
    let activeVolume = null;

    // Все видео
    const videos = document.querySelectorAll('.video');
    // Кнопка "Все камеры"
    const cardsBtn = document.querySelectorAll('.card-video__btn');

    /**
     * Подключает определенную камеру
     **/
    function connectAudioSource(video) {
        const id = video.id;

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
        const documentSquare = (<HTMLElement>videosContainer).offsetWidth * (<HTMLElement>videosContainer).offsetHeight;


        console.log(documentSquare / videoDataSquare / 2);
        // const videoDataWidth = videoData
        activeVolume = videoWrap.querySelector('.card-video__volume').getContext("2d");

        if (videoWrap.classList.contains('active'))
            return;

        videoWrap.classList.add('active');
        video.muted = false;

        connectAudioSource(video);

        // Позиции центра экрана
        let positionCenterX = (document.body.clientWidth / 2) - videoData.x - (videoData.width / 2);
        let positionCenterY = (document.body.clientHeight / 2) - videoData.y - (videoData.height / 2);
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
        const video = parent.querySelector('video');
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
        cardsInputBrightness[i].addEventListener('input', function (e) {
            this.closest('.card-video').querySelector('.video').style.filter = `brightness(${this.value}%)`;
        });
    }

    /**
     * Изменение Контрастности
     * @type {NodeList}
     */
    let cardsInputContrast = document.querySelectorAll('.card-video__input-contrast');

    for (let i = 0; i < cardsInputContrast.length; i++) {
        cardsInputContrast[i].addEventListener('input', function (e) {
            this.closest('.card-video').querySelector('.video').style.filter = `contrast(${this.value}%)`;
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    // initVideocontrol();
})