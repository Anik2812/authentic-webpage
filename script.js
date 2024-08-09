document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const chain = document.querySelector('.chain');
  const chainPull = document.querySelector('.chain-pull');
  let isDarkMode = false;
  let isAnimating = false;

  themeToggle.addEventListener('click', () => {
    if (isAnimating) return;
    isAnimating = true;

    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-mode');
    
    if (isDarkMode) {
      animateChain(0, -80, () => {
        isAnimating = false;
      });
    } else {
      animateChain(-80, 0, () => {
        isAnimating = false;
      });
    }
  });

  function animateChain(start, end, callback) {
    const duration = 500;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = easeInOutCubic(progress);
      const currentPosition = start + (end - start) * easeProgress;

      chain.style.top = `${currentPosition}px`;
      chainPull.style.transform = `translateX(-50%) translateY(${-currentPosition}px)`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        callback();
      }
    }

    requestAnimationFrame(step);
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

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