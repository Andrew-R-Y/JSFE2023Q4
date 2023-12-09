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
// burger menu end

function escapeFunction(event) {
  if (event.code === 'Escape') {
    HEADER_NAV_MENU.classList.remove('open-nav');
    BURGER_BUTTON.classList.remove('open');
  }
}

document.addEventListener('click', openBurger);
document.addEventListener('keyup', escapeFunction);
