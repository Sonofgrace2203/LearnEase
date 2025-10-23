const mobileNav = document.querySelector('.header-menu');
const mobileMenu = document.querySelector('.section-mobile-menu');
const mobileCancel = document.querySelector('.mobile-cancel');
const mobileCancel1 = document.querySelector('.main-body');

function showMobileMenu() {
    mobileMenu.style.display = 'block';
}
mobileNav.addEventListener('click', showMobileMenu);

function hideMobileMenu() {
    mobileMenu.style.display = 'none';
}
mobileCancel.addEventListener('click', hideMobileMenu);
mobileCancel1.addEventListener('click', hideMobileMenu);