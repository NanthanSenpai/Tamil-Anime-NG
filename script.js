// Toggle Menu functionality
function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Carousel functionality
let slideIndex = 0;

function moveSlide(n) {
  const slides = document.querySelectorAll('.carousel img');
  slideIndex += n;
  if (slideIndex < 0) slideIndex = slides.length - 1;
  if (slideIndex >= slides.length) slideIndex = 0;
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

  window.addEventListener('resize', function() {
    document.body.style.height = `${window.innerHeight}px`;
  });
