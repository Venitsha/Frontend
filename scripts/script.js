// JavaScript Document
console.log("hi");

const slides = document.querySelectorAll('main > ul li');
let currentIndex = 0;

const updateCarousel = () => {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
  });
  document.getElementById('prev').disabled = currentIndex === 0;
  document.getElementById('next').disabled = currentIndex === slides.length - 1;
};

document.getElementById('prev').addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
  if (currentIndex < slides.length - 1) currentIndex++;
  updateCarousel();
});

updateCarousel();