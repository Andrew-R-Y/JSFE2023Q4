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
const SLIDER = document.querySelector('.favorite-slider');

let slideCount = 0;
let slideWidth;

function changeSlide() {
  slideWidth = SLIDE.offsetWidth;
  SLIDES_LINE.style.transform = `translate(-${
    slideCount * (slideWidth + 500)
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

let lengthX;
let lengthY;
let touchX;
let touchY;
let endX;
let endY;
let touchDownTime = 0;
let touchUpTime = 0;
let touchTime = 0;

function slideMouseDown(event) {
  touchX = event.pageX;
  touchY = event.pageY;
  if (!event.target.closest('.slider-button')) {
    event.preventDefault();
  }
}

function slideMouseUp(event) {
  endX = event.pageX;
  endY = event.pageY;
  lengthX = endX - touchX;
  lengthY = endY - touchY;
  if (Math.abs(lengthY) > Math.abs(lengthX)) {
    return;
  }
  if (Math.abs(lengthX) > 100) {
    if (lengthX > 0) {
      previousSlide();
    }
    if (lengthX < 0) {
      nextSlide();
    }
  }
  if (!event.target.closest('.slider-button')) {
    event.preventDefault();
  }
}

function slideTouchDown(event) {
  object = event.changedTouches[0];
  touchX = object.pageX;
  touchY = object.pageY;
  touchDownTime = new Date().getTime();
}

function slideTouchUp(event) {
  object = event.changedTouches[0];
  endX = object.pageX;
  endY = object.pageY;
  touchUpTime = new Date().getTime();
  touchTime = touchUpTime - touchDownTime;

  lengthX = endX - touchX;
  lengthY = endY - touchY;
  if (
    Math.abs(lengthY) > Math.abs(lengthX) ||
    touchTime > 400 ||
    Math.abs(lengthY) > 30
  ) {
    return;
  }
  if (Math.abs(lengthX) > 20) {
    if (lengthX > 0) {
      previousSlide();
    }
    if (lengthX < 0) {
      nextSlide();
    }
  }
}

NEXT_BUTTON.addEventListener('click', nextSlide);
PREV_BUTTON.addEventListener('click', previousSlide);
SLIDER.addEventListener('mousedown', slideMouseDown);
SLIDER.addEventListener('mouseup', slideMouseUp);
SLIDES_LINE.addEventListener('touchstart', slideTouchDown);
SLIDES_LINE.addEventListener('touchend', slideTouchUp);
// slider end
