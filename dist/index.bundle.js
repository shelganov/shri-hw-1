!function(n){var r={};function i(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=3)}([function(e,t,n){},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.getElementById("js-side-menu-trigger");null!==e&&(e.addEventListener("click",function(){document.getElementsByClassName("side-menu")[0].classList.add("side-menu--visible--yes"),document.getElementsByClassName("content")[0].classList.add("content--visible--no"),this.classList.add("side-menu--visible--yes")}),document.getElementsByClassName("side-menu__cross")[0].addEventListener("click",function(){document.getElementsByClassName("side-menu")[0].classList.remove("side-menu--visible--yes"),document.getElementsByClassName("content")[0].classList.remove("content--visible--no"),document.getElementsByClassName("hamburger")[0].classList.remove("side-menu--visible--yes")}))}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),n(0),n(4),n(5),n(6);var i=r(n(7)),a=r(n(2)),c=r(n(8)),s=r(n(9)),o=r(n(10));function l(){var e=document.querySelector(".cards");e&&(e.innerHTML="",i.default(m,s.default))}var d=function(e,t,n,r){var i={type:"CHANGE_TRACK",payload:{artist:e,trackName:t,trackLength:n,coverAlbum:r}};u.dispatch(i)},u=new o.default,p=localStorage.getItem("TrackInfo")?JSON.parse(localStorage.getItem("TrackInfo")):{artist:"Florence & The Machine",trackName:"Big God",trackLength:"4:31",coverAlbum:"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m200x200"},m=u.createStore(p);localStorage.setItem("TrackInfo",JSON.stringify(m.data)),u.register("CHANGE_TRACK",function(e){m.data=e,localStorage.setItem("TrackInfo",JSON.stringify(e)),l()}),document.addEventListener("DOMContentLoaded",function(){a.default(),l();var e=document.querySelectorAll(".card__title");c.default(e);var t=document.querySelector(".player__ctrl_type_next");t&&t.addEventListener("click",function(){d("Beyonce","single ladies","3:20","//avatars.yandex.net/get-music-content/49876/c800fb3b.p.27995/200x200")})})},function(e,t,n){e.exports=n.p+"img/graph.png?8154b85e49e2f35f92fa7e355c6000ac"},function(e,t,n){e.exports=n.p+"img/graph@2x.png?da9cc1f42e724e9d52a0620564c9502d"},function(e,t,n){e.exports=n.p+"img/hoover.png?0d1d6365ef2eea6234077505fc4ff2e9"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n,r,i,a,c,s,o,l=document.querySelector(".cards"),d=document.getElementById("tplBase"),u=document.getElementById("tplPlayer");if(null!==d)for(var p=0;p<t.events.length;p++){if(null===(r=(n=d.content.cloneNode(!0)).querySelector(".card")))return;if(null===(i=r.querySelector(".icon")))return;if(null===(a=r.querySelector(".card__title")))return;if(null===(c=r.querySelector(".card__source")))return;if(null===(s=r.querySelector(".card__time")))return;r.classList.add("card_type_"+t.events[p].type),r.classList.add("card_size_"+t.events[p].size),i.classList.add("icon_thumb_"+t.events[p].icon),a.innerHTML=t.events[p].title,c.innerHTML=t.events[p].source,s.innerHTML=t.events[p].time;var m=document.createElement("div");m.classList.add("card__wrap");var f=document.createElement("div");f.classList.add("card__cross");var v,_=document.createElement("div");if(_.classList.add("card__next"),"critical"==t.events[p].type&&(r.innerHTML+='<div class="card__content"></div>'),t.events[p].description){var y=document.createElement("div");if(y.classList.add("card__text"),y.innerHTML=t.events[p].description,"critical"==t.events[p].type){if(null===(o=r.querySelector(".card__content")))return;o.appendChild(y)}else r.appendChild(y)}if("thermal"==t.events[p].icon){var g=document.createElement("div");g.classList.add("card__special");var h=document.createElement("div"),b=document.createElement("div");h.classList.add("card__temperature"),b.classList.add("card__wet"),h.innerHTML='\n            Температура: \n            <span class="text-bold card__temperature-val">'+t.events[p].data.temperature+'</span>\n            <span class="text-bold"> C</span>',b.innerHTML='\n            Влажность:\n            <span class="text-bold card__wet-val">'+t.events[p].data.humidity+'</span>\n            <span class="text-bold"> %</span>',g.appendChild(h),g.appendChild(b),r.appendChild(g)}if("music"==t.events[p].icon){var L=u.content.cloneNode(!0);if(!t.events[p].data||!t.events[p].data.artist)return;var M=L.querySelector(".player__track-artist"),S=L.querySelector(".player__track-name"),C=L.querySelector(".player__track-length"),x=L.querySelector(".vol-slider-val__length"),k=L.querySelector(".player__cover");if(null==M||null==S||null==C||null==x||null==k)return;M.innerHTML=e.data.artist?e.data.artist:t.events[p].data.artist,S.innerHTML=e.data.trackName?e.data.trackName:t.events[p].data.track.name,C.innerHTML=e.data.trackLength?e.data.trackLength:t.events[p].data.track.length,x.innerHTML=t.events[p].data.volume,k.style.backgroundImage=e.data.coverAlbum?"url("+e.data.coverAlbum+")":"url("+t.events[p].data.albumcover+")",r.appendChild(L)}if("fridge"==t.events[p].icon){var E=document.createElement("div");E.classList.add("card__buttons"),E.innerHTML='\n                <button class="btn btn_color_brand">'+t.events[p].data.buttons[0]+'</button>\n                <button class="btn">'+t.events[p].data.buttons[1]+"</button>\n            ",r.appendChild(E)}"stats"==t.events[p].icon&&((v=document.createElement("div")).classList.add("card__img"),v.innerHTML='<img class="image-graph"\n                                       src="dist/img/graph.png"\n                                       srcset="dist/img/graph@2x.png 2x,\n                                               dist/img/graph@3x.png 3x" alt="">',"critical"==t.events[p].type?r.querySelector(".card__content").appendChild(v):r.appendChild(v)),"cam"==t.events[p].icon&&((v=document.createElement("div")).classList.add("card__img","image-hoover"),v.style.backgroundImage="url(dist/img/hoover.png)","critical"==t.events[p].type?r.querySelector(".card__content").appendChild(v):r.appendChild(v));for(var T=r.querySelectorAll(".card>*"),H=0;H<T.length-1;H++)m.appendChild(T[H]);r.insertBefore(f,r.firstChild),r.insertBefore(_,r.firstChild),r.insertBefore(m,r.firstChild),l.appendChild(n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0;t<e.length;t++)for(var n=e[t].innerHTML.split(" ");e[t].scrollHeight>e[t].offsetHeight;)n.pop(),e[t].innerHTML=n.join(" ")+"..."}},function(e){e.exports={events:[{id:1,type:"info",title:"Еженедельный отчет по расходам ресурсов",source:"Сенсоры потребления",time:"19:00, Сегодня",description:"Так держать! За последнюю неделю вы потратили на 10% меньше ресурсов, чем неделей ранее.",icon:"stats",data:{type:"graph",values:[{electricity:[["1536883200",115],["1536969600",117],["1537056000",117.2],["1537142400",118],["1537228800",120],["1537315200",123],["1537401600",129]]},{water:[["1536883200",40],["1536969600",40.2],["1537056000",40.5],["1537142400",41],["1537228800",41.4],["1537315200",41.9],["1537401600",42.6]]},{gas:[["1536883200",13],["1536969600",13.2],["1537056000",13.5],["1537142400",13.7],["1537228800",14],["1537315200",14.2],["1537401600",14.5]]}]},size:"l"},{id:2,type:"info",title:"Дверь открыта",source:"Сенсор входной двери",time:"18:50, Сегодня",description:null,icon:"key",size:"s"},{id:1,type:"info",title:"Уборка закончена",source:"Пылесос",time:"18:45, Сегодня",description:null,icon:"robot-cleaner",size:"s"},{id:3,type:"info",title:"Новый пользователь",source:"Роутер",time:"18:45, Сегодня",description:null,icon:"router",size:"s"},{id:4,type:"info",title:"Изменен климатический режим",source:"Сенсор микроклимата",time:"18:30, Сегодня",description:"Установлен климатический режим «Фиджи»",icon:"thermal",size:"m",data:{temperature:24,humidity:80}},{id:5,type:"critical",title:"Невозможно включить кондиционер",source:"Кондиционер",time:"18:21, Сегодня",description:"В комнате открыто окно, закройте его и повторите попытку",icon:"ac",size:"m"},{id:6,type:"info",title:"Музыка включена",source:"Яндекс.Станция",time:"18:16, Сегодня",description:"Сейчас проигрывается:",icon:"music",size:"m",data:{albumcover:"https://avatars.yandex.net/get-music-content/193823/1820a43e.a.5517056-1/m200x200",artist:"Florence & The Machine",track:{name:"Big God",length:"4:31"},volume:80}},{id:7,type:"info",title:"Заканчивается молоко",source:"Холодильник",time:"17:23, Сегодня",description:"Кажется, в холодильнике заканчивается молоко. Вы хотите добавить его в список покупок?",icon:"fridge",size:"m",data:{buttons:["Да","Нет"]}},{id:8,type:"info",title:"Зарядка завершена",source:"Оконный сенсор",time:"16:22, Сегодня",description:"Ура! Устройство «Оконный сенсор» снова в строю!",icon:"battery",size:"s"},{id:9,type:"critical",title:"Пылесос застрял",source:"Сенсор движения",time:"16:17, Сегодня",description:"Робопылесос не смог сменить свое местоположение в течение последних 3 минут. Похоже, ему нужна помощь.",icon:"cam",data:{image:"get_it_from_mocks_:3.jpg"},size:"l"},{id:10,type:"info",title:"Вода вскипела",source:"Чайник",time:"16:20, Сегодня",description:null,icon:"kettle",size:"s"}]}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=r(n(11)),a=r(n(12)),c=function(){function e(){this.AppDispatcher=new i.default,this.store={data:{}}}return e.prototype.register=function(e,t){this.AppDispatcher.register(e,t)},e.prototype.dispatch=function(e){this.AppDispatcher.dispatch(e)},e.prototype.createStore=function(e){return this.store=new a.default(e),this.store},e}();t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._container={}}return e.prototype.dispatch=function(t){this._container[t.type].forEach(function(e){e(t.payload)})},e.prototype.register=function(e,t){this._container[e]||(this._container[e]=[]),this._container[e].push(t)},e}();t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){this.data=e};t.default=r}]);