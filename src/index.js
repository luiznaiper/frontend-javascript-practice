const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burgerMenu = $('.burger-menu');
const mobileMenu = $('.mobile-menu');
const cartMenu = $('.navbar-shopping-cart');
const asideCart = $('.product-detail');

const toggleDesktopMenu = () => {
  const isAsideOpen = !asideCart.classList.contains('inactive');

  if (isAsideOpen) {
    asideCart.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
};

const toggleMenuMobile = () => {
  const isAsideOpen = !asideCart.classList.contains('inactive');

  if (isAsideOpen) {
    asideCart.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
};

const toggleCartMenu = () => {
  const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
  const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

  if (isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
  }
  if (isDesktopMenuOpen) {
    desktopMenu.classList.add('inactive');
  }
  asideCart.classList.toggle('inactive');
};

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMenuMobile);
cartMenu.addEventListener('click', toggleCartMenu);
