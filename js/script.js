window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger'),
        menu = document.querySelector('.header__nav_menu'),
        menuItem = document.querySelectorAll('.header__nav_menu-item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__nav_menu_active');
    })

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__nav_menu_active');
        })
    })
})