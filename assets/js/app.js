// Carousel
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

// Hide all slides except the first one
for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}

// Function to show the next slide
function showNextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'flex';
}

// Event listener for prev button
prevButton.addEventListener('click', () => {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = 'flex';
});

// Event listener for next button
nextButton.addEventListener('click', () => {
  showNextSlide();
});

// Automatically show the next slide every 5 seconds
setInterval(() => {
  showNextSlide();
}, 5000);

// About me
const about = document.querySelector('#about');

function fadeIn() {
  if (window.scrollY + window.innerHeight > about.offsetTop + 100) {
    about.style.opacity = '1';
  }
}

window.addEventListener('scroll', fadeIn);
