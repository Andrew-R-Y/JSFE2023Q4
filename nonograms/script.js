const data = [];

const n1 = {
  name: 'snake',
  layout: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
};

const n2 = {
  name: 'sharp',
  layout: [
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
  ],
};

const n3 = {
  name: 'shuriken',
  layout: [
    [1, 0, 0, 1, 1],
    [1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1],
  ],
};

const n4 = {
  name: 'car',
  layout: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
  ],
};

const n5 = {
  name: 'airplane',
  layout: [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ],
};

const n6 = {
  name: 'empty',
  layout: [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ],
};

data.push(n1, n2, n3, n4, n5);

const BUTTONS = document.querySelectorAll('.button');
console.log(BUTTONS.length);
for (let i = 0; i < BUTTONS.length; i += 1) {
  BUTTONS[i].textContent = data[i].name;
}

function toggleActiveOnButton(event) {
  if (event.currentTarget.classList.contains('active')) {
    return;
  }
  for (const button of BUTTONS) {
    button.classList.remove('active');
  }
  this.classList.add('active');
}

for (const button of BUTTONS) {
  button.addEventListener('click', toggleActiveOnButton);
}
