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

small.push(s1, s2, s3, s4, s5);
medium.push(m1, m2, m3, m4, m5);
large.push(l1, l2, l3, l4, l5);

const sizesArr = [small, medium, large];
let data = small;
let level = 'small';
let puzzleName = '';
let puzzle;
let size = 0;
let fieldSize = 0;
let result = 0;
let isGamePaused = true;
let isFirstGame = true;

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
const MUTE_BTN = document.getElementById('mute');
const SELECT_GAME_SECTION = document.getElementById('select-game');
const TIME = document.querySelector('.time');
const POPUP_SECONDS = document.getElementById('popup__seconds');

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
  if (!MUTE_BTN.classList.contains('active')) {
    GO_SOUND.play();
  }
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
  puzzle = '';
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
    cell.classList.remove('empty-cell');
    cell.classList.toggle('mark');
    CLICK_SOUND.pause();
    CLICK_SOUND.currentTime = 0;
    if (!startTime) {
      startTimer();
    }
    if (!MUTE_BTN.classList.contains('active')) {
      CLICK_SOUND.play();
    }
  }
}

function emptyCell(event) {
  if (isGamePaused) {
    return;
  }
  const cell = event.target;
  if (
    cell.classList.contains('left-clue') ||
    cell.classList.contains('top-clue') ||
    cell.classList.contains('clue')
  ) {
    return;
  }
  cell.classList.remove('mark');
  cell.classList.toggle('empty-cell');
  CLICK_SOUND.pause();
  RIGHT_CLICK_SOUND.pause();
  RIGHT_CLICK_SOUND.currentTime = 0;
  if (!startTime) {
    startTimer();
  }
  if (!MUTE_BTN.classList.contains('active')) {
    RIGHT_CLICK_SOUND.play();
  }
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
    if (!MUTE_BTN.classList.contains('active')) {
      WIN_SOUND.play();
    }
    isGamePaused = true;
    clearInterval(interval);
    setPopupTime();
    resetTime();
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
  if (!puzzle) {
    return;
  }
  clearGameField();
  fillGameField(puzzle, 'solution');
  fillLineClue(puzzle);
  fillColumnClue(puzzle);
  isGamePaused = true;
  resetTime();
  clearInterval(interval);
}

function resetField() {
  if (puzzle) {
    clearGameField();
    fillGameField(puzzle);
    fillLineClue(puzzle);
    fillColumnClue(puzzle);
    isGamePaused = false;
    resetTime();
    clearInterval(interval);
  }
}

function mute() {
  MUTE_BTN.classList.toggle('active');
}

function randomGame(event, ...args) {
  clearSelectGameSection();
  clearGameField();
  for (const button of BUTTONS_GAME_SIZE) {
    button.classList.remove('active');
  }
  let randomSizeNumber;
  if (!args.length) {
    randomSizeNumber = Math.floor(Math.random() * 3);
  } else {
    randomSizeNumber = args[0];
  }
  data = sizesArr[randomSizeNumber];
  GAME.className = 'game';
  switch (randomSizeNumber) {
    case 0:
      GAME.classList.add('grid-small');
      break;
    case 1:
      GAME.classList.add('grid-medium');
      break;
    case 2:
      GAME.classList.add('grid-large');
      break;
  }
  BUTTONS_GAME_SIZE[randomSizeNumber].classList.add('active');
  createGamesButtons(data);
  let randomGameNumber;
  if (!args.length) {
    randomGameNumber = Math.floor(Math.random() * data.length);
  } else {
    randomGameNumber = args[1];
  }
  puzzle = data[randomGameNumber];
  buttons[randomGameNumber].classList.add('active');
  determineSize(puzzle);
  clearGameField();
  fillGameField(puzzle);
  fillLineClue(puzzle);
  fillColumnClue(puzzle);
  determineResult(puzzle);
  isGamePaused = false;
  GO_SOUND.pause();
  GO_SOUND.currentTime = 0;
  if (!MUTE_BTN.classList.contains('active') && !isFirstGame) {
    GO_SOUND.play();
  }
  isFirstGame = false;
}
randomGame(null, 0, 0);

let startTime;
let currentTime;
let seconds;
let minutes;
let interval;

function resetTime() {
  startTime = 0;
  currentTime = 0;
  seconds = 0;
  minutes = 0;
  TIME.textContent = `00:00`;
}

function startTimer() {
  startTime = Date.now();
  interval = setInterval(() => {
    currentTime = Date.now() - startTime;
    seconds = Math.floor((currentTime / 1000) % 60);
    minutes = Math.floor((currentTime / 1000 / 60) % 60);
    seconds = String(seconds).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    const resultTime = `${minutes}:${seconds}`;
    TIME.textContent = resultTime;
  }, 1000);
}

function setPopupTime() {
  const result = Math.floor((Date.now() - startTime) / 1000);
  POPUP_SECONDS.textContent = result;
}

GAME.addEventListener('click', markCell);
GAME.addEventListener('contextmenu', emptyCell);
GAME.addEventListener('click', checkSolution);
GAME.addEventListener('contextmenu', checkSolution);

POPUP_CLOSE_BTN.addEventListener('click', closePopup);
POPUP_PLAY_BTN.addEventListener('click', playAgain);
SHOW_SOLUTION_BTN.addEventListener('click', showSolution);
RESET_BTN.addEventListener('click', resetField);
MUTE_BTN.addEventListener('click', mute);
RANDOM_BTN.addEventListener('click', randomGame);

console.log(`Score: 205 / 250

- [x] Basic scope (80/80):
- [x] layout, design, responsive UI: (20/20);
- [x] at the beginning state of the game, the frame has size 5x5. The sequence of numbers is logically arranged and help the player solve the nonogram: (20/20);
- [x] cells and clues are divided by dividers as described in Basic block: (5/5);
- [x] when user clicks on cells using mouse left-click - it should be mark as dark. When user click on dark cell - it should be mark as empty (white) cell: (15/15);
- [x] the game should end when the player reveals all black cells correctly and related message is displayed at the end of the game: (20/20);

- [+/-] Andvanced scope (75/90):
- [x] the game should have at least 5 templates for easy level (5x5) and the player is able to choose what picture he/she wants to solve. (15/15);
- [x] a player is able to fill in a cell in the grid changing the color of the grid to crossed-cell(X) using right mouse-click. Context menu doesn't appear: (20/20)
- [x] the game can be restarted without reloading the page: (15/15);
- [x] game duration is displayed, stop-watch will start after first click on field (not on clues) and related message is displayed at the end of the game: (10/10)
- [x] sound accompaniment (on/off) for every events (see Advanced block): (15/15);
- [ ] implemented saving the state of the latest game and "Continue last game" button: (0/15);

- [+/-] Hacker scope (50/80)
- [ ] option to choose different themes for the game board (dark/light themes): (0/15);
- [x] ability to change the size (5x5, 10x10, 15x15) is implemented and there are least 5 templates for each level: (20/20);
- [ ] implemented saving the latest 5 win results with sorting: (0/15);
- [x] "random game" button is implemented. When player clicks on button - the random template appears (both template and level must be chosen randomly by algorithm): (15/15);
- [x] "Solution" button is implemented. When player clicks on button - the field is filled in cells with right solution. Such games is not recorded into winning table: (15/15);`);
