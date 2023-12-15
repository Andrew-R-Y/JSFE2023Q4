const BODY = document.querySelector('body');
const BURGER_BUTTON = document.querySelector('.header__burger-menu');
const HEADER_NAV_MENU = document.querySelector('.header__nav-list');

window.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

// burger menu start
function openBurger(event) {
  if (event.target.closest('.header__burger-menu')) {
    HEADER_NAV_MENU.classList.toggle('open-nav');
    BURGER_BUTTON.classList.toggle('open');
    BODY.classList.toggle('lock');
  }
  if (
    !event.target.closest('.header__burger-menu') &&
    (event.target.closest('.header__nav-link') ||
      event.target.closest('.link-burger'))
  ) {
    HEADER_NAV_MENU.classList.remove('open-nav');
    BURGER_BUTTON.classList.remove('open');
    BODY.classList.remove('lock');
  }
}

function escapeFunction(event) {
  if (event.code === 'Escape') {
    HEADER_NAV_MENU.classList.remove('open-nav');
    BURGER_BUTTON.classList.remove('open');
    popupWindow.classList.remove('open');
    FORM.reset();
    BODY.classList.remove('lock');
  }
}

document.addEventListener('click', openBurger);
document.addEventListener('keyup', escapeFunction);
// burger menu end

// work with product items start
const CARDS_CONTAINER = document.querySelector('.cards-container');
const CATEGORY_BUTTONS = document.querySelectorAll('.tab');
const COFFEE_BUTTON = document.getElementById('coffee');
const TEA_BUTTON = document.getElementById('tea');
const DESSERT_BUTTON = document.getElementById('dessert');
const REFRESH_BLOCK = document.querySelector('.refresh-block');
const REFRESH_BUTTON = document.querySelector('.refresh-button');

const products = [
  {
    "name": "Irish coffee",
    "description": "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Kahlua coffee",
    "description": "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    "price": "7.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey raf",
    "description": "Espresso with frothed milk, cream and aromatic honey",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ice cappuccino",
    "description": "Cappuccino with soft thick foam in summer version with ice",
    "price": "5.00",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Espresso",
    "description": "Classic black coffee",
    "price": "4.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte",
    "description": "Espresso coffee with the addition of steamed milk and dense milk foam",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Latte macchiato",
    "description": "Espresso with frothed milk and chocolate",
    "price": "5.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Coffee with cognac",
    "description": "Fragrant black coffee with cognac and whipped cream",
    "price": "6.50",
    "category": "coffee",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Cinnamon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Moroccan",
    "description": "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    "price": "4.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Ginger",
    "description": "Original black tea with fresh ginger, lemon and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cranberry",
    "description": "Invigorating black tea with cranberry and honey",
    "price": "5.00",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Sea buckthorn",
    "description": "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    "price": "5.50",
    "category": "tea",
    "sizes": {
      "s": {
        "size": "200 ml",
        "add-price": "0.00"
      },
      "m": {
        "size": "300 ml",
        "add-price": "0.50"
      },
      "l": {
        "size": "400 ml",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Sugar",
        "add-price": "0.50"
      },
      {
        "name": "Lemon",
        "add-price": "0.50"
      },
      {
        "name": "Syrup",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Marble cheesecake",
    "description": "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    "price": "3.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Red velvet",
    "description": "Layer cake with cream cheese frosting",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Cheesecakes",
    "description": "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Creme brulee",
    "description": "Delicate creamy dessert in a caramel basket with wild berries",
    "price": "4.00",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Pancakes",
    "description": "Tender pancakes with strawberry jam and fresh strawberries",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Honey cake",
    "description": "Classic honey cake with delicate custard",
    "price": "4.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Chocolate cake",
    "description": "Cake with hot chocolate filling and nuts with dried apricots",
    "price": "5.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  },

  {
    "name": "Black forest",
    "description": "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    "price": "6.50",
    "category": "dessert",
    "sizes": {
      "s": {
        "size": "50 g",
        "add-price": "0.00"
      },
      "m": {
        "size": "100 g",
        "add-price": "0.50"
      },
      "l": {
        "size": "200 g",
        "add-price": "1.00"
      }
    },
    "additives": [
      {
        "name": "Berries",
        "add-price": "0.50"
      },
      {
        "name": "Nuts",
        "add-price": "0.50"
      },
      {
        "name": "Jam",
        "add-price": "0.50"
      }
    ]
  }
];

let currentTab = 'coffee';
let currentProductsArr;
let desktopWindowSize = true;
let hasAdditionalProducts = false;

function clearMenu() {
  while (CARDS_CONTAINER.firstChild) {
    CARDS_CONTAINER.firstChild.remove();
  }
}

function buttonsOff() {
  for (const button of CATEGORY_BUTTONS) {
    button.classList.remove('active-tab');
  }
}

function checkWindowWidth() {
  if (window.innerWidth > 768) {
    desktopWindowSize = true;
  } else {
    desktopWindowSize = false;
  }
}

checkWindowWidth();

function initialAddProducts() {
  REFRESH_BLOCK.classList.remove('visible');
  clearMenu();
  currentProductsArr = arrFilteredByType(products, currentTab);
  currentProductsArr.forEach((item, index, arr) => {
    prodIndex = index + 1;
    if (desktopWindowSize) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
    } else if (index < 4) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
      if (arr.length > 4) {
        REFRESH_BLOCK.classList.add('visible');
      }
    }
  });
}

initialAddProducts();

COFFEE_BUTTON.addEventListener('click', () => {
  buttonsOff();
  COFFEE_BUTTON.classList.add('active-tab');
  currentTab = 'coffee';
  clearMenu();
  REFRESH_BLOCK.classList.remove('visible');
  currentProductsArr = arrFilteredByType(products, currentTab);
  currentProductsArr.forEach((item, index, arr) => {
    prodIndex = index + 1;
    if (desktopWindowSize) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
    } else if (index < 4) {
      const prodCard = createMenuItem(item);
      addItemToMenu(prodCard);
      if (arr.length > 4) {
        REFRESH_BLOCK.classList.add('visible');
      }
    }
  });
});

TEA_BUTTON.addEventListener('click', () => {
  buttonsOff();
  TEA_BUTTON.classList.add('active-tab');
  currentTab = 'tea';
  clearMenu();
  REFRESH_BLOCK.classList.remove('visible');
  currentProductsArr = arrFilteredByType(products, currentTab);
  currentProductsArr.forEach((item, index, arr) => {
    prodIndex = index + 1;
    if (desktopWindowSize) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
    } else if (index < 4) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
      if (arr.length > 4) {
        REFRESH_BLOCK.classList.add('visible');
      }
    }
  });
});

DESSERT_BUTTON.addEventListener('click', () => {
  buttonsOff();
  DESSERT_BUTTON.classList.add('active-tab');
  currentTab = 'dessert';
  clearMenu();
  REFRESH_BLOCK.classList.remove('visible');
  currentProductsArr = arrFilteredByType(products, currentTab);
  currentProductsArr.forEach((item, index, arr) => {
    prodIndex = index + 1;
    if (desktopWindowSize) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
    } else if (index < 4) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
      if (arr.length > 4) {
        REFRESH_BLOCK.classList.add('visible');
      }
    }
  });
});

function arrFilteredByType(arr, type) {
  return arr.filter((item) => item.category === type);
}

function createMenuItem(itemObj) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('card-item');
  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  const image = document.createElement('img');
  image.classList.add('image-item');
  image.setAttribute(
    'src',
    `../../assets/menu-img/${itemObj.category}-${prodIndex}.jpg`
  );
  image.setAttribute('alt', `${itemObj.name}`);
  imageContainer.prepend(image);
  menuItem.prepend(imageContainer);
  const descriptionBlock = document.createElement('div');
  descriptionBlock.classList.add('description-block');
  const itemName = document.createElement('div');
  itemName.classList.add('item-name');
  itemName.textContent = itemObj.name;
  const itemDescription = document.createElement('div');
  itemDescription.classList.add('item-description');
  itemDescription.textContent = itemObj.description;
  const itemPrice = document.createElement('div');
  itemPrice.classList.add('item-price');
  itemPrice.textContent = `$${itemObj.price}`;
  descriptionBlock.append(itemName);
  descriptionBlock.append(itemDescription);
  descriptionBlock.append(itemPrice);
  menuItem.append(descriptionBlock);
  return menuItem;
}

function addItemToMenu(item) {
  CARDS_CONTAINER.append(item);
}

function additionalProductsLoad() {
  currentProductsArr = arrFilteredByType(products, currentTab);
  currentProductsArr.forEach((item, index) => {
    prodIndex = index + 1;
    if (index >= 4) {
      const prodCard = createMenuItem(item);
      prodCard.addEventListener('click', openPopup);
      addItemToMenu(prodCard);
      REFRESH_BLOCK.classList.remove('visible');
    }
  });
}

window.addEventListener('resize', () => {
  checkWindowWidth();
  initialAddProducts();
});

REFRESH_BUTTON.addEventListener('click', additionalProductsLoad);
// work with product items end

// Popup start
const popupWindow = document.querySelector('.popup');
const FORM = document.querySelector('.popup__content-block');
const POPUP_HEADING = document.querySelector('.popup__heading');
const POPUP_DESCRIPTION = document.querySelector('.popup__description');
const POPUP_INPUT_S = document.getElementById('s');
const POPUP_INPUT_M = document.getElementById('m');
const POPUP_INPUT_L = document.getElementById('l');
const POPUP_VALUE_S = document.querySelector('.value-s');
const POPUP_VALUE_M = document.querySelector('.value-m');
const POPUP_VALUE_L = document.querySelector('.value-l');
const POPUP_INPUT_ADD_FIRST = document.getElementById('add_first');
const POPUP_INPUT_ADD_SECOND = document.getElementById('add_second');
const POPUP_INPUT_ADD_THIRD = document.getElementById('add_third');
const POPUP_ADDITIVE_FIRST = document.querySelector('.additive-name-first');
const POPUP_ADDITIVE_SECOND = document.querySelector('.additive-name-second');
const POPUP_ADDITIVE_THIRD = document.querySelector('.additive-name-third');
const POPUP_PRICE = document.querySelector('.popup__price-value');
let popupPrice;
let currentPrice;

function openPopup(event) {
  if (event.target.closest('.card-item')) {
    const productImageLink = getImageLink(event.currentTarget);
    const productName = getProductName(event.currentTarget);
    setPopupName(productName);
    setPopupImageLink(productImageLink);
    const productObj = getItem(products, productName);
    POPUP_DESCRIPTION.innerHTML = productObj.description;
    POPUP_PRICE.innerHTML = `$${productObj.price}`;
    popupPrice = +productObj.price;
    popupPrice = popupPrice.toFixed(2);
    POPUP_VALUE_S.innerHTML = productObj.sizes.s.size;
    POPUP_VALUE_M.innerHTML = productObj.sizes.m.size;
    POPUP_VALUE_L.innerHTML = productObj.sizes.l.size;
    POPUP_ADDITIVE_FIRST.innerHTML = productObj.additives[0].name;
    POPUP_ADDITIVE_SECOND.innerHTML = productObj.additives[1].name;
    POPUP_ADDITIVE_THIRD.innerHTML = productObj.additives[2].name;
    popupWindow.classList.add('open');
    BODY.classList.add('lock');
    popupWindow.addEventListener('click', function (event) {
      if (
        !event.target.closest('.popup__content') ||
        event.target.closest('.popup__close-button')
      ) {
        popupClose();
      }
    });
  }
}

function calculatePrice () {
  let result = +popupPrice;
  if (POPUP_INPUT_M.checked) {
    result += 0.5; 
  } else if (POPUP_INPUT_L.checked) {
    result += 1;
  }

  if (POPUP_INPUT_ADD_FIRST.checked) {
    result += 0.5;
  }

  if (POPUP_INPUT_ADD_SECOND.checked) {
    result += 0.5;
  }
  if (POPUP_INPUT_ADD_THIRD.checked) {
    result += 0.5;
  }
  currentPrice = result.toFixed(2);
  POPUP_PRICE.innerHTML = `$${currentPrice}`;
}

FORM.addEventListener('click', calculatePrice); 

function getImageLink(card) {
  return card.firstElementChild.firstElementChild.getAttribute('src');
}

function setPopupImageLink(link) {
  popupWindow.firstElementChild.firstElementChild.firstElementChild.firstElementChild.setAttribute(
    'src',
    link
  );
}

function getProductName(card) {
  return card.lastElementChild.firstElementChild.innerHTML;
}

function setPopupName(name) {
  POPUP_HEADING.innerHTML =
    name;
}

function getItem(array, itemName) {
  return array.find((item) => {
    return item.name === itemName;
  });
}

function popupClose() {
  popupWindow.classList.remove('open');
  BODY.classList.remove('lock');
  FORM.reset();
}
// Popup end

console.log(`
score (90/90): 
[+] 1. Implementation of the burger menu on both pages: (22/22)
[+] 2. Implementation of the carousel on the home page: (24/24)
[+] 3. Categories of products on the menu page: (16/16)
[+/-] 4. The Modal on the menu page: (20/20)
     -[+] The Modal with the description of a specific product opens when clicking on any part of a card of product: +2
     -[+] The part of the page outside the Modal is darkened: +2
     -[+] When the Modal is open, the vertical scroll of the page becomes inactive; when closed, it becomes active again: +2
     -[+] Clicking on the area around the Modal and Close button closes it: +2
     -[+] The Modal is centered on both axes, sizes of modal elements and their layout match the design: (2/2)
     -[+] After the Modal is opened, the 'Size' option 'S' is selected, and no option in the 'Additives' section is selected. The product's final price is the same as in the card: +2
     -[+] Only one 'Size' option can be selected. Changing this option also changes the final price of the product based on the choice (+$0.00 for S, +$0.50 for M, +$1.00 for L): +4
     -[+] Multiple 'Additives' options can be selected, and each selected option increases the final price of the product by $0.50: +4
 [+] 5. Video on the home page: (8/8)
`);
