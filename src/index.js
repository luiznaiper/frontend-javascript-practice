const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');

const toggleDesktopMenu = () => {
  desktopMenu.classList.toggle('inactive');
};

menuEmail.addEventListener('click', toggleDesktopMenu);
