// Toggle add to cart container on wishlist icon click
const wishlistIcon = document.querySelector('.wishlist-icon');
const addToCartContainer = document.querySelector('.add-to-cart-container');
let isChainPulled = false;

wishlistIcon.addEventListener('click', () => {
  if (!isChainPulled) {
    addToCartContainer.classList.add('show');
    isChainPulled = true;
    animateChain();
  } else {
    addToCartContainer.classList.remove('show');
    isChainPulled = false;
    stopChainAnimation();
  }
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
  isChainPulled = false;
  stopChainAnimation();
});

// Chain animation
let chainAnimationInterval;

function animateChain() {
  chainAnimationInterval = setInterval(() => {
    const chainLinks = document.querySelectorAll('.chain-link');
    chainLinks.forEach((link, index) => {
      link.style.transform = `rotate(${index * 45}deg)`;
    });
  }, 500);
}

function stopChainAnimation() {
  clearInterval(chainAnimationInterval);
  const chainLinks = document.querySelectorAll('.chain-link');
  chainLinks.forEach((link) => {
    link.style.transform = 'rotate(0deg)';
  });
}