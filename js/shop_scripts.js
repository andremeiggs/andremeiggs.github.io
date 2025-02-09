// Burger Menu Toggle
const burgerIcon = document.getElementById('burger-icon');
const mobileMenu = document.getElementById('mobile-menu');
burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('visible');
});

// Shop Section Controls
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    console.log('Previous Product');
});

nextBtn.addEventListener('click', () => {
    console.log('Next Product');
});
// Ensure horizontal scroll for mobile
const shopItemsWrapper = document.querySelector('.shop-items-wrapper');
shopItemsWrapper.addEventListener('wheel', (event) => {
    if (window.innerWidth <= 768) {
        event.preventDefault();
        shopItemsWrapper.scrollLeft += event.deltaY;
    }
});

// JS para formulario de Newsletter (puedes expandir con validación o acciones)
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.newsletter-input').value;
    if (emailInput) {
        alert(`Thank you for subscribing, ${emailInput}!`);
    } else {
        alert('Please enter a valid email address.');
    }
});

// Newsletter Form Submit Handler
document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing!');
});



// Dropdown toggle for desktop
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', function () {
        const parent = this.parentElement;
        parent.classList.toggle('open');
    });
});

// Selección de elementos
const filterButton = document.querySelector('.filter-mobile');
const dropdownMenu = document.querySelector('.filter-order .dropdown-menu');

// Función para mostrar/ocultar el menú desplegable
filterButton?.addEventListener('click', () => {
    dropdownMenu?.classList.toggle('active');
});

// Alternar menú desplegable para desktop
const orderButton = document.querySelector('.filter-order');
orderButton?.addEventListener('click', () => {
    dropdownMenu?.classList.toggle('active');
});

// Cerrar el menú desplegable al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!dropdownMenu?.contains(e.target) && !orderButton?.contains(e.target)) {
        dropdownMenu?.classList.remove('active');
    }
});

// Añadir funcionalidad de filtros dinámicos
const filterItems = document.querySelectorAll(".filters-column .filter-item input");

filterItems.forEach((filter) => {
  filter.addEventListener("change", (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    const products = document.querySelectorAll(".product-card");

    products.forEach((product) => {
      if (isChecked && !product.textContent.toLowerCase().includes(value)) {
        product.style.display = "none";
      } else {
        product.style.display = "flex";
      }
    });
  });
});

// Agregar efecto de desvanecimiento en los links del menú
const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evitar la redirección instantánea
        const targetUrl = link.getAttribute('href'); // Obtener el link del menú
        document.body.classList.add('fade-out'); // Agregar clase para el desvanecimiento

        // Redirigir después de que termine la transición
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 800); // Tiempo de la transición (en ms)
    });
});

// Asegurar que la página cargue con la opacidad normal
window.addEventListener('pageshow', () => {
    document.body.classList.remove('fade-out');
});


