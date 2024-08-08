// Toggle add to cart container on wishlist icon click
const wishlistIcon = document.querySelector('.wishlist-icon');
const addToCartContainer = document.querySelector('.add-to-cart-container');

wishlistIcon.addEventListener('click', () => {
  addToCartContainer.classList.toggle('show');
});

// Add to cart functionality
const quantityInput = document.querySelector('.quantity-input');
const addToCartBtn = document.querySelector('.add-to-cart-btn');
const cartCount = document.querySelector('.cart-count');

let cartItems = 0;

addToCartBtn.addEventListener('click', () => {
  const quantity = parseInt(quantityInput.value);
  cartItems += quantity;
  cartCount.textContent = cartItems;
  addToCartContainer.classList.remove('show');
});