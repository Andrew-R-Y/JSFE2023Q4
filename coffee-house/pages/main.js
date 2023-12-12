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
const SLIDER_STATE_INDICATORS = document.querySelectorAll('.slider-state');

let slideCount = 0;
let slideWidth;

function changeSlide() {
  slideWidth = SLIDE.offsetWidth;
  SLIDES_LINE.style.transform = `translate(-${
    slideCount * (slideWidth + 500)
  }px)`;
}

function nextSlide() {
  removeAnimation(slideCount);
  slideCount += 1;
  if (slideCount > 2) {
    slideCount = 0;
  }
  changeSlide();
  addAnimation(slideCount);
}

function previousSlide() {
  removeAnimation(slideCount);
  slideCount -= 1;
  if (slideCount < 0) {
    slideCount = 2;
  }
  changeSlide();
  addAnimation(slideCount);
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
    touchTime > 600 ||
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

function addAnimation(slideNumber) {
  SLIDER_STATE_INDICATORS[slideNumber].classList.add('state-active');
}

function removeAnimation(slideNumber) {
  SLIDER_STATE_INDICATORS[slideNumber].classList.remove('state-active');
}

function switchAnimation() {
  removeAnimation(slideCount);
  nextSlide();
  addAnimation(slideCount);
}

function pauseAnimation(event) {
  if (event.targetTouches[0].target.closest('.slider-card')) {
    SLIDER_STATE_INDICATORS[slideCount].classList.add('state-paused');
  }
}

function resumeAnimation(event) {
  for (const slide of SLIDER_STATE_INDICATORS) {
    slide.classList.remove('state-paused');
  }
}

SLIDER_STATE_INDICATORS[0].addEventListener('animationend', switchAnimation);
SLIDER_STATE_INDICATORS[1].addEventListener('animationend', switchAnimation);
SLIDER_STATE_INDICATORS[2].addEventListener('animationend', switchAnimation);

NEXT_BUTTON.addEventListener('click', nextSlide);
PREV_BUTTON.addEventListener('click', previousSlide);
SLIDER.addEventListener('mousedown', slideMouseDown);
SLIDER.addEventListener('mouseup', slideMouseUp);
SLIDER.addEventListener('touchstart', slideTouchDown);
SLIDER.addEventListener('touchend', slideTouchUp);
document.addEventListener('touchstart', pauseAnimation);
document.addEventListener('touchend', resumeAnimation);
// slider end

console.log(`
score (79/90): 
[+] 1. Implementation of the burger menu on both pages: (22/22)
[+] 2. Implementation of the carousel on the home page: (24/24)
[+] 3. Categories of products on the menu page: (16/16)
[+/-] 4. The Modal on the menu page: (9/20)
     -[+] The Modal with the description of a specific product opens when clicking on any part of a card of product: +2
     -[+] The part of the page outside the Modal is darkened: +2
     -[-] When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: (0/2)
     -[+] Clicking on the area around the Modal and Close button closes it: +2
     -[+/-] The Modal is centered on both axes, sizes of modal elements and their layout match the design: (1/2)
     -[+] After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: +2
     -[-] Only one 'Size' option can be selected. Changing this option also changes the final price of the product based on the choice (+$0.00 for S, +$0.50 for M, +$1.00 for L): +4
     -[-] Multiple 'Additives' options can be selected, and each selected option increases the final price of the product by $0.50: +4
 [+] 5. Video on the home page: (8/8)
`);
