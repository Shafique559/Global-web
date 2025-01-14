let currentSlide = 0;
const slides = document.querySelectorAll('.client-slide');
const totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 5000);
let moveCount = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 2) % totalSlides; // Move one slide at a time
    moveCount++;
    
    if (moveCount >= 4) {
        moveCount = 0; // Reset move count
        currentSlide = (currentSlide + 2) % totalSlides; // Extra move right
    }

    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 2 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function pauseSlide() {
    clearInterval(slideInterval);
}

function resumeSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}

showSlide(currentSlide);
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('change', () => {
        const nav = document.querySelector('nav ul');
        if (menuToggle.checked) {
            nav.style.display = 'flex';
        } else {
            nav.style.display = 'none';
        }
    });
});