document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.querySelector('.theme-toggle');
  const productContainer = document.getElementById('productContainer');
  const testimonialContainer = document.querySelector('.testimonial-container');

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
      tags: ["branding", "packaging"],
      category: "decor"
    },
    {
      name: "Embroidered Silk Scarf",
      price: "₹1,200",
      image: "https://images.unsplash.com/photo-1613235788366-270e7ac489f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["branding", "marketing"],
      category: "clothing"
    },
    {
      name: "Sandalwood Carving",
      price: "₹3,800",
      image: "https://images.unsplash.com/photo-1673847401561-fcd75a7888c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["branding", "packaging", "marketing"],
      category: "art"
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
      <button class="filter-button" data-filter="decor">Decor</button>
      <button class="filter-button" data-filter="clothing">Clothing</button>
      <button class="filter-button" data-filter="art">Art</button>
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
      author: "This"
    },
    {
      text: "I'm impressed by the authenticity and craftsmanship of every product. Authentic India is my go-to for unique gifts.",
      author: "That"
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
});