/**
 * Определяет, имеет ли устройство функцию `touch` или нет
 * @returns {boolean}
 */
function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        document.querySelector('body').classList.add('touch-device');
        return true;
    } catch (e) {
        return false;
    }
}