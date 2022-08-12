const $ = (selector) => document.querySelector(selector);
const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const burgerMenu = $('.burger-menu');
const mobileMenu = $('.mobile-menu');
const cartMenu = $('.navbar-shopping-cart');
const shoppingCartContainer = $('#shopping-cart-container');
const cardsContainer = document.querySelector('.cards-container');

const toggleDesktopMenu = () => {
  const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

  if (isAsideOpen) {
    shoppingCartContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
};

const toggleMenuMobile = () => {
  const isAsideOpen = !shoppingCartContainer.classList.contains('inactive');

  if (isAsideOpen) {
    shoppingCartContainer.classList.add('inactive');
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
  shoppingCartContainer.classList.toggle('inactive');
};

const productList = [
  {
    name: 'Bike',
    price: 120,
    image:
      'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    name: 'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg',
  },
  {
    name: 'Tennis Montain Bike',
    price: 2200,
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg',
  },
];

/* <div class="product-card">
          <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
          <div class="product-info">
            <div>
              <p>$120,00</p>
              <p>Bike</p>
            </div>
            <figure>
              <img src="./src/icons/bt_add_to_cart.svg" alt="">
            </figure>
          </div>
</div> */

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './src/icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMenuMobile);
cartMenu.addEventListener('click', toggleCartMenu);
