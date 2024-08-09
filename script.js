document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const productContainer = document.getElementById('productContainer');
  const testimonialContainer = document.querySelector('.testimonial-container');
  const categoryGrid = document.querySelector('.category-grid');
  const artisanSlider = document.querySelector('.artisan-slider');

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Newsletter form submission
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
  });

  // Dynamic product loading
  const products = [
    {
      name: "Handcrafted Brass Lamp",
      price: "₹2,500",
      image: "https://images.unsplash.com/photo-1601049676869-702ea24cfd58?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["decor", "lighting"],
      category: "home"
    },
    {
      name: "Embroidered Silk Scarf",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["clothing", "accessories"],
      category: "fashion"
    },
    {
      name: "Sandalwood Carving",
      price: "₹3,800",
      image: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["art", "decor"],
      category: "home"
    },
    {
      name: "Hand-painted Ceramic Vase",
      price: "₹1,800",
      image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["decor", "art"],
      category: "home"
    },
    {
      name: "Handwoven Pashmina Shawl",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1609803384069-19f3cf521631?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["clothing", "accessories"],
      category: "fashion"
    },
    {
      name: "Madhubani Painting",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["art", "decor"],
      category: "home"
    },
    {
      name: "Handcrafted Leather Journal",
      price: "₹950",
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      tags: ["stationery", "accessories"],
      category: "lifestyle"
    },
    {
      name: "Organic Ayurvedic Tea Set",
      price: "₹1,100",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      tags: ["wellness", "food"],
      category: "lifestyle"
    }
  ];

  function createProductCard(product) {
    return `
      <div class="card" data-category="${product.category}">
        <div class="card-inner" style="--clr:#F4B3B3;">
          <div class="box">
            <div class="imgBox">
              <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="icon">
              <a href="#" class="iconBox"> <span class="material-symbols-outlined">arrow_outward</span></a>
            </div>
          </div>
        </div>
        <div class="content">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <ul>
            ${product.tags.map(tag => `<li style="--clr-tag:#C34729;" class="${tag}">${tag}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  function loadProducts() {
    productContainer.innerHTML = products.map(createProductCard).join('');
  }

  loadProducts();

  // Product filtering
  const filterButtons = `
    <div class="product-filter">
      <button class="filter-button active" data-filter="all">All</button>
      <button class="filter-button" data-filter="home">Home</button>
      <button class="filter-button" data-filter="fashion">Fashion</button>
      <button class="filter-button" data-filter="lifestyle">Lifestyle</button>
    </div>
  `;

  productContainer.insertAdjacentHTML('beforebegin', filterButtons);

  const filterBtns = document.querySelectorAll('.filter-button');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Dynamic testimonial loading
  const testimonials = [
    {
      text: "The quality of the handcrafted items I received is outstanding. Truly a piece of India in my home!",
      author: "this"
    },
    {
      text: "I'm impressed by the authenticity and craftsmanship of every product. Authentic India is my go-to for unique gifts.",
      author: "that"
    },
    {
      text: "The customer service is excellent, and the products arrived beautifully packaged. Highly recommended!",
      author: "yes"
    }
  ];

  function createTestimonialCard(testimonial) {
    return `
      <div class="testimonial">
        <p>"${testimonial.text}"</p>
        <p class="author">- ${testimonial.author}</p>
      </div>
    `;
  }

  function loadTestimonials() {
    testimonialContainer.innerHTML = testimonials.map(createTestimonialCard).join('');
  }

  loadTestimonials();

  // Dynamic category loading
  const categories = [
    { name: "Home Decor", image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { name: "Fashion", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" },
    { name: "Jewelry", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" },
    { name: "Art", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" }
  ];

  function createCategoryCard(category) {
    return `
      <div class="category-item">
        <img src="${category.image}" alt="${category.name}">
        <h3>${category.name}</h3>
      </div>
    `;
  }

  function loadCategories() {
    categoryGrid.innerHTML = categories.map(createCategoryCard).join('');
  }

  loadCategories();

  // Dynamic artisan loading
  const artisans = [
    { name: "Rajesh Kumar", specialty: "Madhubani Painting", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    { name: "Priya Singh", specialty: "Handloom Weaving", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" },
    { name: "Mohammad Ali", specialty: "Brass Work", image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80" }
  ];

  function createArtisanCard(artisan) {
    return `
      <div class="artisan-card">
        <img src="${artisan.image}" alt="${artisan.name}">
        <div class="artisan-info">
          <h3>${artisan.name}</h3>
          <p>${artisan.specialty}</p>
        </div>
      </div>
    `;
  }

  function loadArtisans() {
    artisanSlider.innerHTML = artisans.map(createArtisanCard).join('');
  }

  loadArtisans();

  // Add to cart functionality
  const cartCount = document.querySelector('.cart-count');
  let cartItems = 0;

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('iconBox') || e.target.closest('.iconBox')) {
      e.preventDefault();
      cartItems++;
      cartCount.textContent = cartItems;

      // Animation for adding to cart
      cartCount.classList.add('added');
      setTimeout(() => cartCount.classList.remove('added'), 300);
    }
  });

  // Lazy loading images
  const lazyImages = document.querySelectorAll('img[data-src]');
  const lazyLoadOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px 100px 0px"
  };

  const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, lazyLoadOptions);

  lazyImages.forEach(img => lazyLoadObserver.observe(img));
});