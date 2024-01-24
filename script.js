document.addEventListener('DOMContentLoaded', function () {
  const sliders = document.querySelectorAll('.image-slider');

  sliders.forEach((slider) => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slide');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }

    function changeSlide(direction) {
      currentSlide += direction;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      } else if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }

    showSlide(currentSlide);

    const prevBtn = slider.parentElement.querySelector('.prev-btn');
    const nextBtn = slider.parentElement.querySelector('.next-btn');

    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => changeSlide(-1));
      nextBtn.addEventListener('click', () => changeSlide(1));
    }
  });
});


