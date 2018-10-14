//
// class Video {
//     constructor() {
//         this.data = {
//             brightness: 50,
//             contrast: 50
//         };
//         this.init();
//     }
//
//     init() {
//         this.open();
//     }
//
//     open() {
//         // for (let i = 0; i < Video.VIDEOS.length; i++) {
//         //     Video.VIDEOS[i].addEventListener('click', function() {
//                 let videoWrapper = this.parentNode;
//
//                 if (videoWrapper.classList.contains('active'))
//                     return;
//
//                 this.muted = false;
//
//
//
//                 let videoData = this.getBoundingClientRect();
//                 let videoWrap = this.parentNode;
//                 videoWrap.style.width = videoData.width + 'px';
//                 videoWrap.style.height = videoData.height + 'px';
//
//                 console.log(Video.CONTAINER.offsetHeight / videoData.height);
//
//                 // Задаем absolute обертке видео
// //            videoWrap.style.position = 'absolute';
//                 this.parentNode.classList.add('active');
//
//
//
//                 let positionCenterX = (document.body.clientWidth / 2) - videoData.x - (videoData.width / 2);
//                 let positionCenterY = (document.body.clientHeight / 2) - videoData.y - (videoData.height / 2);
//                 videoWrap.style.transform = `translate3d(${positionCenterX}px, ${positionCenterY}px, 0) scale(2)`;
//
//             // })
//         // }
//     }
//
// }
//
// Video.VIDEOS = document.querySelectorAll('.video');
// Video.CONTAINER = document.querySelector('.videotiles');
//
//
// for (let i = 0; i < Video.VIDEOS.length; i++) {
//     Video.VIDEOS[i].addEventListener('click', function() {
//         console.log(new Video());
//     });
// }
