// script.js
const images = document.querySelector('.images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

function showImage(index) {
  const totalImages = images.children.length;
  if (index < 0) {
    index = totalImages - 1; // Loop to the last image
  } else if (index >= totalImages) {
    index = 0; // Loop to the first image
  }
  images.style.transform = `translateX(-${index * 100}%)`;
  return index;
}

prevButton.addEventListener('click', () => {
  index = showImage(index - 1);
});

nextButton.addEventListener('click', () => {
  index = showImage(index + 1);
});

// Auto-slide functionality
let autoSlide = setInterval(() => {
  index = showImage(index + 1);
}, 3000);

// Pause auto-slide on hover
document.querySelector('.cricket').addEventListener('mouseover', () => {
  clearInterval(autoSlide);
});

// Resume auto-slide on mouse out
document.querySelector('.cricket').addEventListener('mouseout', () => {
  autoSlide = setInterval(() => {
    index = showImage(index + 1);
  }, 3000);
});
