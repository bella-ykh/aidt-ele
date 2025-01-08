// 컨텐츠 슬라이드 // 
const slides = document.querySelectorAll('.slider_cont');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  let currentIndex = 0;

  function updateArrows() {
      if (currentIndex === 0) {
          leftArrow.classList.add('disabled');
      } else {
          leftArrow.classList.remove('disabled');
      }
      if (currentIndex === slides.length - 1) {
          rightArrow.classList.add('disabled');
      } else {
          rightArrow.classList.remove('disabled');
      }
  }

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
      updateArrows();
  }

  function slideLeft() {
    if (currentIndex < slides.length - 1) {
        slides[currentIndex].classList.remove('active');
        slides[currentIndex].style.left = '-100%'; // 현재 슬라이드를 왼쪽으로 이동
        currentIndex++;
        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.left = '0'; // 새 슬라이드가 화면으로 들어옴
        updateArrows();
    }
}

function slideRight() {
    if (currentIndex > 0) {
        slides[currentIndex].classList.remove('active');
        slides[currentIndex].style.left = '100%'; // 현재 슬라이드를 오른쪽으로 이동
        currentIndex--;
        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.left = '0'; // 새 슬라이드가 화면으로 들어옴
        updateArrows();
    }
}

  rightArrow.addEventListener('click', slideLeft);
  leftArrow.addEventListener('click', slideRight);

  // Initialize the first slide
  showSlide(currentIndex);