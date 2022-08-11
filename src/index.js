const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burgerMenu = $('.burger-menu');
const mobileMenu = $('.mobile-menu');

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle('inactive');
};

const toggleDesktopMobile = () => {
  mobileMenu.classList.toggle('inactive');
};

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleDesktopMobile);
