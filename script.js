document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const chain = document.querySelector('.chain');
  let isDarkMode = false;

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
      chain.style.top = '0';
    } else {
      chain.style.top = '-60px';
    }
  });

  const cartIcon = document.querySelector('.cart-icon');
  const cartCount = document.querySelector('.cart-count');
  let cartItems = 0;

  function updateCartCount() {
    cartCount.textContent = cartItems;
  }

  cartIcon.addEventListener('click', () => {
    alert('Cart functionality coming soon!');
  });

  const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartItems++;
      updateCartCount();
      alert('Item added to cart!');
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Lazy loading for images
  const images = document.querySelectorAll('img[data-src]');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, options);

  images.forEach(img => imageObserver.observe(img));
});