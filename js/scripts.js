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
        }, 500); // Tiempo de la transición (en ms)
    });
});

// Asegurar que la página cargue con la opacidad normal
window.addEventListener('pageshow', () => {
    document.body.classList.remove('fade-out');
});
