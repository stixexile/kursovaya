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
document.addEventListener("DOMContentLoaded", function () {
  // Получаем элемент модального окна
  var modal = document.getElementById("myModal");

  // Получаем элемент <span>, который закрывает модальное окно
  var span = document.getElementsByClassName("close")[0];

  // Функция для открытия модального окна
  window.showModal = function (imageSrc, title, description) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDescription").textContent = description;
    modal.style.display = "block";
  };
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  // Когда пользователь кликает на <span> (x), закрываем модальное окно
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Когда пользователь кликает в любом месте вне модального окна, он закрывается
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // Добавляем слушатель на кнопку "Понятно"
  document
    .querySelector(".modal-close-btn")
    .addEventListener("click", function () {
      modal.style.display = "none";
    });
});
