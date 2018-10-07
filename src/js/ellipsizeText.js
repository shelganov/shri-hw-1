/**
 * Обрезает заголовок по высоте и добавляет `...` если больше 2 строк
 * @param el
 */
function ellipsizeText(el) {
    for (let i = 0; i < el.length; i++) {
        var wordArray = el[i].innerHTML.split(' ');
        console.log(el[i].scrollHeight);
        while (el[i].scrollHeight > el[i].offsetHeight) {
            wordArray.pop();
            el[i].innerHTML = wordArray.join(' ') + '...';

        }
    }
}

export default ellipsizeText;