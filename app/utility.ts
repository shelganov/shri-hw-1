
/**
 * Добавление нулей для даты
 * @param num
 * @returns {string}
 */
function numTo2Digit(num) {
    return num < 10 ? '0' + num :  num;
}

export default numTo2Digit;