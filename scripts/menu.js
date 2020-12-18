const $menu = document.querySelector('.menu')
const $btnMenuOpen = document.querySelector('.btnMenu_open')
const $btnMenuClose = document.querySelector('.btnMenu_close')


$btnMenuOpen.addEventListener('click', () => {
    $menu.classList.add('menu_open');
    $btnMenuOpen.classList.add('bntMenuClicado');
});

$btnMenuClose.addEventListener('click', () => {
    $menu.classList.remove('menu_open');
    $btnMenuClose.classList.remove('bntMenuClicado');
});
