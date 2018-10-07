
export default function initMenu() {
    let sideMenuTrigger = document.getElementById('js-side-menu-trigger');
    sideMenuTrigger.addEventListener('click', function () {
        document.getElementsByClassName('side-menu')[0].classList.add('side-menu--visible--yes');
        document.getElementsByClassName('content')[0].classList.add('content--visible--no');
        this.classList.add('side-menu--visible--yes');
    });

    let sideMenuClose = document.getElementsByClassName('side-menu__cross')[0];
    sideMenuClose.addEventListener('click', function () {
        document.getElementsByClassName('side-menu')[0].classList.remove('side-menu--visible--yes');
        document.getElementsByClassName('content')[0].classList.remove('content--visible--no');
        document.getElementsByClassName('hamburger')[0].classList.remove('side-menu--visible--yes');
    });
}