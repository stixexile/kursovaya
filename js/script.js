document.addEventListener("DOMContentLoaded", function () {
  let index = 0; // Индекс текущего слайда
  const slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;

  function showSlide(n) {
    index = n;
    const offset = -index * 100; // Предполагается, что ширина слайда равна 100% от ширины .slider
    document.querySelector(
      ".slides"
    ).style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
  }

  // Привязка событий к кнопкам
  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // Устанавливаем интервал для автоматической прокрутки
  setInterval(nextSlide, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".custom-image-slider .slide");
  let currentSlide = 0;

  function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
  }

  setInterval(nextSlide, 3000); // Смена слайда каждые 3 секунды
});
