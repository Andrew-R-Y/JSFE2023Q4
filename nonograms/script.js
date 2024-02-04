const small = [];
const medium = [];
const large = [];

const s1 = {
  name: 'snake',
  layout: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
};

const s2 = {
  name: 'sharp',
  layout: [
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
  ],
};

const s3 = {
  name: 'shuriken',
  layout: [
    [1, 0, 0, 1, 1],
    [1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 1],
    [1, 1, 0, 0, 1],
  ],
};

const s4 = {
  name: 'car',
  layout: [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
  ],
};

const s5 = {
  name: 'airplane',
  layout: [
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
  ],
};

const m1 = {
  name: 'postcard',
  layout: [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ],
};

const m2 = {
  name: 'leaf',
  layout: [
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

const m3 = {
  name: 'cherries',
  layout: [
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0],
    [1, 1, 1, 0, 0, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
  ],
};

const m4 = {
  name: 'music',
  layout: [
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  ],
};

const m5 = {
  name: 'mouse',
  layout: [
    [0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1, 0],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  ],
};

const l1 = {
  name: 'duck',
  layout: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  ],
};

const l2 = {
  name: 'deer',
  layout: [
    [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1],
    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  ],
};

const l3 = {
  name: 'dolphin',
  layout: [
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  ],
};

const l4 = {
  name: 'clover',
  layout: [
    [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};

const l5 = {
  name: 'cat',
  layout: [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  ],
};

small.push(s2, s2, s3, s4, s5);
medium.push(m1, m2, m3, m4, m5);
large.push(l1, l2, l3, l4, l5);

let data = small;
let level = 'small';
let puzzleName = '';
let puzzle;
let size = 0;
let fieldSize = 0;
let result = 0;
let isGamePaused = true;

const BUTTONS_GAME_SIZE = document.querySelectorAll('.button-level');
let buttons = document.querySelectorAll('.button-game-select');
const GAME = document.querySelector('.game');
const POPUP_WINDOW = document.querySelector('.popup');
const POPUP_RESULT = document.querySelector('.popup__result');
const POPUP_ANSWER = document.querySelector('.popup__answer');
const POPUP_CLOSE_BTN = document.querySelector('.popup__button-close');
const POPUP_PLAY_BTN = document.querySelector('.popup__button-play');
const SHOW_SOLUTION_BTN = document.getElementById('solution');
const RESET_BTN = document.getElementById('reset');
const RANDOM_BTN = document.getElementById('random');
const SELECT_GAME_SECTION = document.getElementById('select-game');

const GO_SOUND = document.getElementById('go-sound');
const CLICK_SOUND = document.getElementById('click-sound');
const RIGHT_CLICK_SOUND = document.getElementById('right-click-sound');
const WIN_SOUND = document.getElementById('win-sound');

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].textContent = data[i].name;
}

function choosePuzzle(event) {
  if (event.currentTarget.classList.contains('active')) {
    return;
  }
  for (const button of buttons) {
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
  fillLineClue(puzzle);
  fillColumnClue(puzzle);
  determineResult(puzzle);
  isGamePaused = false;
  GO_SOUND.pause();
  GO_SOUND.currentTime = 0;
  GO_SOUND.play();
}

function clearSelectGameSection() {
  while (SELECT_GAME_SECTION.firstChild) {
    SELECT_GAME_SECTION.firstChild.remove();
  }
}

function selectGame(event) {
  const btn = event.target;
  if (btn.classList.contains('active')) {
    return;
  }
  clearGameField();
  for (const button of BUTTONS_GAME_SIZE) {
    button.classList.remove('active');
  }
  if (btn.classList.contains('small')) {
    level = 'small';
    GAME.classList.add('grid-small');
    GAME.classList.remove('grid-medium');
    GAME.classList.remove('grid-large');
    btn.classList.add('active');
    data = small;
  }
  if (btn.classList.contains('medium')) {
    level = 'medium';
    GAME.classList.add('grid-medium');
    GAME.classList.remove('grid-small');
    GAME.classList.remove('grid-large');
    btn.classList.add('active');
    data = medium;
  }
  if (btn.classList.contains('large')) {
    level = 'large';
    GAME.classList.add('grid-large');
    GAME.classList.remove('grid-small');
    GAME.classList.remove('grid-medium');
    btn.classList.add('active');
    data = large;
  }
  clearSelectGameSection();
  createGamesButtons(data);
}

function createGamesButtons(data) {
  for (let i = 0; i < data.length; i += 1) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.classList.add('button-game-select');
    button.textContent = data[i].name;
    SELECT_GAME_SECTION.append(button);
  }
  buttons = document.querySelectorAll('.button-game-select');
  for (const button of buttons) {
    button.addEventListener('click', choosePuzzle);
  }
}

for (const button of BUTTONS_GAME_SIZE) {
  button.addEventListener('click', selectGame);
}

for (const button of buttons) {
  button.addEventListener('click', choosePuzzle);
}

function determineSize(puzzle) {
  fieldSize = puzzle.layout.length + 1;
  size = puzzle.layout.length;
}

function determineResult(puzzle) {
  result = 0;
  for (let i = 0; i < puzzle.layout.length; i += 1) {
    result = puzzle.layout[i].reduce((acc, item) => {
      return acc + item;
    }, result);
  }
}

function clearGameField() {
  while (GAME.firstChild) {
    GAME.firstChild.remove();
  }
}

function fillGameField(puzzle, className = 'valid') {
  for (let i = 0; i < fieldSize; i += 1) {
    for (let j = 0; j < fieldSize; j += 1) {
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
          cell.classList.add(className);
        }
      }
      GAME.append(cell);
    }
  }
}

function fillLineClue(puzzle) {
  for (let i = 0; i < size; i += 1) {
    const lineClueArr = [];
    let lineClue = 0;

    for (let j = 0; j < size; j += 1) {
      if (puzzle.layout[i][j] === 1) {
        lineClue += 1;
        if (j === size - 1) {
          lineClueArr.push(lineClue);
        }
      } else if (lineClue !== 0) {
        lineClueArr.push(lineClue);
        lineClue = 0;
      }
      if (j === size - 1) {
        if (lineClueArr.length) {
          lineClueArr.forEach((item) => {
            const clue = document.createElement('span');
            clue.classList.add('clue');
            clue.textContent = item;
            GAME.children[(i + 1) * fieldSize].append(clue);
          });
        }
      }
    }
  }
}

function fillColumnClue(puzzle) {
  for (let i = 0; i < size; i += 1) {
    const columnClueArr = [];
    let columnClue = 0;

    for (let j = 0; j < size; j += 1) {
      if (puzzle.layout[j][i] === 1) {
        columnClue += 1;
        if (j === size - 1) {
          columnClueArr.push(columnClue);
        }
      } else if (columnClue !== 0) {
        columnClueArr.push(columnClue);
        columnClue = 0;
      }
      if (j === size - 1) {
        if (columnClueArr.length) {
          columnClueArr.forEach((item) => {
            const clue = document.createElement('span');
            clue.classList.add('clue');
            clue.textContent = item;
            GAME.children[i + 1].append(clue);
          });
        }
      }
    }
  }
}

function markCell(event) {
  if (isGamePaused) {
    return;
  }
  const cell = event.target;
  if (
    cell.classList.contains('left-clue') ||
    cell.classList.contains('top-clue')
  ) {
    return;
  }
  if (cell.classList.contains('cell')) {
    cell.classList.toggle('mark');
    CLICK_SOUND.pause();
    CLICK_SOUND.currentTime = 0;
    CLICK_SOUND.play();
  }
}

function emptyCell(event) {
  if (isGamePaused) {
    return;
  }
  const cell = event.target;
  if (
    cell.classList.contains('left-clue') ||
    cell.classList.contains('top-clue')
  ) {
    return;
  }
  cell.classList.remove('mark');
  cell.classList.toggle('empty-cell');
  CLICK_SOUND.pause();
  RIGHT_CLICK_SOUND.pause();
  RIGHT_CLICK_SOUND.currentTime = 0;
  RIGHT_CLICK_SOUND.play();
  event.preventDefault();
}

function checkSolution() {
  if (isGamePaused) {
    return;
  }
  let currentSolution = 0;
  for (const cell of GAME.children) {
    if (cell.classList.contains('valid') && cell.classList.contains('mark')) {
      currentSolution += 1;
    }
    if (cell.classList.contains('mark') && !cell.classList.contains('valid')) {
      currentSolution -= 1;
    }
  }
  if (currentSolution === result && result) {
    POPUP_WINDOW.classList.add('open');
    CLICK_SOUND.pause();
    WIN_SOUND.play();
    isGamePaused = true;
  }
}

function playAgain() {
  clearGameField();
  POPUP_WINDOW.classList.remove('open');
  WIN_SOUND.pause();
  WIN_SOUND.currentTime = 0;
  isGamePaused = false;
}

function closePopup() {
  POPUP_WINDOW.classList.remove('open');
  WIN_SOUND.pause();
  WIN_SOUND.currentTime = 0;
}

function showSolution() {
  clearGameField();
  fillGameField(puzzle, 'solution');
  fillLineClue(puzzle);
  fillColumnClue(puzzle);
  isGamePaused = true;
}

function resetField() {
  if (puzzle) {
    clearGameField();
    fillGameField(puzzle);
    fillLineClue(puzzle);
    fillColumnClue(puzzle);
    isGamePaused = false;
  }
}

GAME.addEventListener('click', markCell);
GAME.addEventListener('contextmenu', emptyCell);
GAME.addEventListener('click', checkSolution);
GAME.addEventListener('contextmenu', checkSolution);

POPUP_CLOSE_BTN.addEventListener('click', closePopup);
POPUP_PLAY_BTN.addEventListener('click', playAgain);
SHOW_SOLUTION_BTN.addEventListener('click', showSolution);
RESET_BTN.addEventListener('click', resetField);
