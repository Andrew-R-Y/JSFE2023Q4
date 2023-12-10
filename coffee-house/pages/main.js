const BURGER_BUTTON = document.querySelector('.header__burger-menu');
const HEADER_NAV_MENU = document.querySelector('.header__nav-list');

// burger menu start
function openBurger(event) {
  if (event.target.closest('.header__burger-menu')) {
    HEADER_NAV_MENU.classList.toggle('open-nav');
    BURGER_BUTTON.classList.toggle('open');
  }
  if (
    !event.target.closest('.header__burger-menu') &&
    (event.target.closest('.header__nav-link') ||
      event.target.closest('.link-burger'))
  ) {
    HEADER_NAV_MENU.classList.remove('open-nav');
    BURGER_BUTTON.classList.remove('open');
  }
}

function escapeFunction(event) {
  if (event.code === 'Escape') {
    HEADER_NAV_MENU.classList.remove('open-nav');
    BURGER_BUTTON.classList.remove('open');
  }
}

document.addEventListener('click', openBurger);
document.addEventListener('keyup', escapeFunction);
// burger menu end

// slider start
const SLIDES_LINE = document.querySelector('.slides-line');
const SLIDE = document.querySelector('.slider-image-container');
const NEXT_BUTTON = document.querySelector('.button-next');
const PREV_BUTTON = document.querySelector('.button-prev');

let slideCount = 0;
let slideWidth;

function changeSlide() {
  slideWidth = SLIDE.offsetWidth;
  SLIDES_LINE.style.transform = `translate(-${
    slideCount * (slideWidth + 100)
  }px)`;
}

function nextSlide() {
  slideCount += 1;
  if (slideCount > 2) {
    slideCount = 0;
  }
  changeSlide();
}

function previousSlide() {
  slideCount -= 1;
  if (slideCount < 0) {
    slideCount = 2;
  }
  changeSlide();
}

NEXT_BUTTON.addEventListener('click', nextSlide);
PREV_BUTTON.addEventListener('click', previousSlide);
// slider end
