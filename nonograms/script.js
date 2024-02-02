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
    [1, 1, 1, 1, 1],
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
let puzzleName = '';
let puzzle;
let size = 0;

const BUTTONS = document.querySelectorAll('.button');
const GAME = document.querySelector('.game');
for (let i = 0; i < BUTTONS.length; i += 1) {
  BUTTONS[i].textContent = data[i].name;
}

function choosePuzzle(event) {
  if (event.currentTarget.classList.contains('active')) {
    return;
  }
  for (const button of BUTTONS) {
    button.classList.remove('active');
  }
  this.classList.add('active');
  puzzleName = this.textContent;
  puzzle = data.find((item) => {
    return item.name === puzzleName;
  });
  determineSize(puzzle);
  clearGameField();
  fillGameField(puzzle);
}

for (const button of BUTTONS) {
  button.addEventListener('click', choosePuzzle);
}

function determineSize(puzzle) {
  size = puzzle.layout.length + 1;
}

function clearGameField() {
  while (GAME.firstChild) {
    GAME.firstChild.remove();
  }
}

function fillGameField(puzzle) {
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      const cell = document.createElement('span');
      if (i === 0) {
        cell.classList.add('top-clue');
      }
      if (j === 0) {
        cell.classList.add('left-clue');
      }
      if (i !== 0 && j !== 0) {
        cell.classList.add('cell');
        if (puzzle.layout[i - 1][j - 1] === 1) {
          cell.classList.add('valid');
        }
      }
      GAME.append(cell);
    }
  }
}
