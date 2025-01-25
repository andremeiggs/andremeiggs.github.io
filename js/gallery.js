// gallery.js

// Function to update the main image area
function upDate(previewPic) {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url(${previewPic.src})`;
    imageDiv.textContent = `${previewPic.alt}`;
}

// Function to reset the main image area
function unDo() {
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('https://cdn-p.smehost.net/sites/005297e5d91d4996984e966fac4389ea/wp-content/uploads/2017/06/00c04d57e42c56f9116eef3f1df14d53-1024x666.jpg')";
    imageDiv.textContent = "Haz clic en las imágenes o utiliza el teclado para mostrar el efecto.";
}

// Add tabindex and focus/blur events dynamically
function initializeGallery() {
    const previews = document.querySelectorAll('.preview');
    previews.forEach((preview, index) => {
        preview.setAttribute('tabindex', index + 1);
        preview.addEventListener('focus', () => upDate(preview));
        preview.addEventListener('blur', unDo);
    });

    console.log("Tabindex, focus, and blur events added to", previews.length, "images.");
}

// Ensure keyboard navigation works
function setupKeyboardNavigation() {
    const previews = document.querySelectorAll('.preview');
    let currentIndex = 0;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % previews.length;
            previews[currentIndex].focus();
        } else if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + previews.length) % previews.length;
            previews[currentIndex].focus();
        }
    });

    console.log("Keyboard navigation set up for", previews.length, "images.");
}

// Initialize gallery and keyboard navigation on window load
window.onload = () => {
    initializeGallery();
    setupKeyboardNavigation();
};
