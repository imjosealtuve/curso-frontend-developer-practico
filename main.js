const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const carrito = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.detail-product');
const productDetailClose = document.querySelector('.detail-product-close');
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleBurgerMenu);
carrito.addEventListener('click', toggleProductDetail);
productDetailClose.addEventListener('click', closeProductDetailAside);


function toggleDesktopMenu(){

  var isProductDetailOpen = productDetail.classList.contains('inactive');
  if(!isProductDetailOpen){
      productDetail.classList.add('inactive');
  }

  var isDetailContainerOpen = productDetailContainer.classList.contains('inactive');
  if(!isDetailContainerOpen){
    productDetailContainer.classList.add('inactive');
}
  desktopMenu.classList.toggle('inactive');

}

function toggleBurgerMenu(){

  var isProductDetailOpen = productDetail.classList.contains('inactive');
  if(!isProductDetailOpen){
      productDetail.classList.add('inactive');
  }

  var isDetailContainerOpen = productDetailContainer.classList.contains('inactive');
  if(!isDetailContainerOpen){
    productDetailContainer.classList.add('inactive');
}
 menuMobile.classList.toggle('inactive');

}

function toggleProductDetail(){

  var isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
  if(!isDesktopMenuOpen){
      desktopMenu.classList.add('inactive');
  }

  var isMenuMobileOpen = menuMobile.classList.contains('inactive');
  if(!isMenuMobileOpen){
      menuMobile.classList.add('inactive');
  }

  var isDetailContainerOpen = productDetailContainer.classList.contains('inactive');
  if(!isDetailContainerOpen){
    productDetailContainer.classList.add('inactive');
}
  productDetail.classList.toggle('inactive');

}

function openProductDetailAside(){

  var isDesktopMenuOpen = desktopMenu.classList.contains('inactive');
  if(!isDesktopMenuOpen){
      desktopMenu.classList.add('inactive');
  }

  var isProductDetailOpen = productDetail.classList.contains('inactive');
  if(!isProductDetailOpen){
    productDetail.classList.add('inactive');
}

var isMenuMobileOpen = menuMobile.classList.contains('inactive');
if(!isMenuMobileOpen){
    menuMobile.classList.add('inactive');
}
productDetailContainer.classList.remove('inactive');

}


function closeProductDetailAside(){

  productDetailContainer.classList.add('inactive');

}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Car',
  price: 2500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'mousepad',
  price: 15,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Premium Bike',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Phone',
  price: 500,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
  name: 'Laptop',
  price: 950,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

/*<section class="main-container">  
<div class="cards-container">

  <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
      <div>
        <p>$120,00</p>
        <p>Bike</p>
      </div>
      <figure>
        <img src="./icons/bt_add_to_cart.svg" alt="">
      </figure>
    </div>
  </div>
</div>
</section>*/

for (product of productList){

  const productCard = document.createElement('div');
  productCard.classList.add('product-card');

  const productImage = document.createElement('img');
  productImage.setAttribute('src', product.image);
  productImage.addEventListener('click', openProductDetailAside)

  const productInfo = document.createElement('div');
  productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

      const productInfoDivP1 = document.createElement('p');
      productInfoDivP1.innerText = '$' + product.price;
      const productInfoDivP2 = document.createElement('p');
      productInfoDivP2.innerText = product.name;
        productInfoDiv.append(productInfoDivP1, productInfoDivP2);

    const productInfoFigure = document.createElement('figure');
      const productInfoCart = document.createElement('img');
      productInfoCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      productInfoFigure.appendChild(productInfoCart)
      productInfo.appendChild(productInfoDiv);
      productInfo.appendChild(productInfoFigure);

    productCard.append(productImage, productInfo);

  cardsContainer.appendChild(productCard);

}

renderProducts(productList);