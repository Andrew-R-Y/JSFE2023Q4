const BURGER_BUTTON = document.querySelector('.header__burger-menu');
const HEADER_NAV_MENU = document.querySelector('.header__nav-list');

function openBurger(event) {
  if (event.target.closest('.header__burger-menu')) {
    HEADER_NAV_MENU.classList.toggle('open-nav');
  }
  if (
    !event.target.closest('.header__burger-menu') &&
    (event.target.closest('.header__nav-link') ||
      event.target.closest('.link-burger'))
  ) {
    HEADER_NAV_MENU.classList.remove('open-nav');
  }
}

function escapeFunction(event) {
  if (event.code === 'Escape') {
    HEADER_NAV_MENU.classList.remove('open-nav');
  }
}

document.addEventListener('click', openBurger);
document.addEventListener('keyup', escapeFunction);
