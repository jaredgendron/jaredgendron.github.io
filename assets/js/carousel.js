const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
const pagination = carousel.querySelector('.pagination');
const pageButtons = pagination.querySelectorAll('.page-btn');

let currentSlide = 0;
let timer = null;

function showSlide(n) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  // Show the requested slide
  slides[n].classList.add('active');

  // Update the current slide index
  currentSlide = n;

  // Update the pagination buttons
  pageButtons.forEach((button, i) => {
    if (i === currentSlide) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

function nextSlide() {
  let next = currentSlide + 1;
  if (next >= slides.length) {
    next = 0;
  }
  showSlide(next);
}

// Start the automatic slideshow
timer = setInterval(nextSlide, 3000);

// Pause the automatic slideshow on mouseover
carousel.addEventListener('mouseover', () => {
  clearInterval(timer);
});

// Resume the automatic slideshow on mouseout
carousel.addEventListener('mouseout', () => {
  timer = setInterval(nextSlide, 3000);
});

// Show the first slide
showSlide(currentSlide);

// Add click listeners to the pagination buttons
pageButtons.forEach((button, i) => {
  button.addEventListener('click', () => {
    showSlide(i);
  });
});
