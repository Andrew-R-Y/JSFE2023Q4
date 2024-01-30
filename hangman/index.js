// Quiz questions start
const pair1 = {
  question: `What element does 'O' represent on the periodic table?`,
  answer: 'Oxygen',
};

const pair2 = {
  question: `What is the state capital of New York?`,
  answer: 'Albany',
};

const pair3 = {
  question: 'What is the only flag that does not have four sides?',
  answer: 'Nepal',
};

const pair4 = {
  question: 'Which U.S. state is known as the Sunshine State',
  answer: 'Florida',
};

const pair5 = {
  question: 'What is the 4th letter of the Greek alphabet?',
  answer: 'Delta',
};

const pair6 = {
  question: 'Which country gifted the Statue of Liberty to the US?',
  answer: 'France',
};

const pair7 = {
  question: 'What’s the most popular drink in the world that is not alcohol?',
  answer: 'Coffee',
};

const pair8 = {
  question: 'From which country does Gouda cheese originate?',
  answer: 'Netherlands',
};

const pair9 = {
  question:
    'What popular operating system, launched in 1991, also has its own mascot, Tux the penguin?',
  answer: 'Linux',
};

const pair10 = {
  question: `Steve Jobs is famously one of the two men who co-founded Apple in 1976. The other co-founder was also named Steve. What was this other man's surname?`,
  answer: 'Wozniak',
};

const pair11 = {
  question: `What is the most used programming language among developers worldwide as of 2023`,
  answer: 'JavaScript',
};

const pair12 = {
  question: `Linux uses all the letters of what operating system family that it was designed to imitate?`,
  answer: 'Unix',
};

const pair13 = {
  question: 'Which U.S. State is the largest?',
  answer: 'Alaska',
};

const pair14 = {
  question: 'Steve Jobs, the CEO of Apple, is known for wearing a black ___?',
  answer: 'Turtleneck',
};

const pair15 = {
  question: 'Which country drinks the most amount of coffee per person?',
  answer: 'Finland',
};

const pair16 = {
  question: 'What is the capital of Finland?',
  answer: 'Helsinki',
};

const pair17 = {
  question: 'Zagreb is the capital city of which country?',
  answer: 'Croatia',
};

const pair18 = {
  question: 'Which country has the longest coastline in the world?',
  answer: 'Canada',
};

const pair19 = {
  question: 'What product did Amazon originally sell?',
  answer: 'Books',
};

const pair20 = {
  question:
    'Which prestigious university did Microsoft founder Bill Gates drop out of?',
  answer: 'Harvard',
};

const pair21 = {
  question: `What is the name of Elon Musk's aerospace company?`,
  answer: 'SpaceX',
};

const pair22 = {
  question: 'Which company developed the first mobile phone?',
  answer: 'Motorola',
};
// Quiz questions end

const questionsArr = [
  pair1,
  pair2,
  pair3,
  pair4,
  pair5,
  pair6,
  pair7,
  pair8,
  pair9,
  pair10,
  pair11,
  pair12,
  pair13,
  pair14,
  pair15,
  pair16,
  pair17,
  pair18,
  pair19,
  pair20,
  pair21,
  pair22,
];

const engLettersArr = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

let usedQuestionsNumbersArr = [];
function restartAllQuestions() {
  alert(
    `Congratulations! You answered all questions! If you want to play one more round - press "OK", all the questions will be repeated`
  );
  usedQuestionsNumbersArr = [];
}

// Create DOM start
// Create main start
const main = document.createElement('main');
main.classList.add('page-wrapper');

const gameWrapper = document.createElement('div');
gameWrapper.classList.add('game-wrapper');

// gallow side start
const gallowSide = document.createElement('div');
gallowSide.classList.add('gallow-side');

const gallowSideGallow = document.createElement('div');
gallowSideGallow.classList.add('gallow-side__gallow');

const gallowImage = document.createElement('img');
gallowImage.classList.add('gallow-side__image');
gallowImage.setAttribute('src', './img/hangman-0.svg');
gallowImage.setAttribute('alt', 'gallow image');

const mainHeading = document.createElement('h1');
mainHeading.classList.add('gallow-side__main-heading');
mainHeading.textContent = 'hangman game';

gallowSideGallow.append(gallowImage);
gallowSide.append(gallowSideGallow);
gallowSide.append(mainHeading);
// gallow side end

// quiz side start
const quizSide = document.createElement('div');
quizSide.classList.add('quiz-side');

const quizSideKeyword = document.createElement('div');
quizSideKeyword.classList.add('quiz-side__keyword');

const quizSideText = document.createElement('div');
quizSideText.classList.add('quiz-side__text');

const quizSideHint = document.createElement('p');
quizSideHint.classList.add('quiz-side__hint');

const quizSideIncorrectCount = document.createElement('p');
quizSideIncorrectCount.classList.add('uiz-side__incorrect-count');
quizSideIncorrectCount.innerHTML = 'Incorrect guesses:&nbsp;';
const spanCount = document.createElement('span');
spanCount.classList.add('quiz-side__count');
spanCount.setAttribute('id', 'count');
spanCount.textContent = '0';

const spanMaxCount = document.createElement('span');
spanMaxCount.classList.add('quiz-side__count');
spanMaxCount.innerHTML = '&nbsp;/&nbsp;6';

const quizSideBoard = document.createElement('div');
quizSideBoard.classList.add('quiz-side__keyboard');
for (let i = 0; i < engLettersArr.length; i += 1) {
  const btn = document.createElement('button');
  btn.classList.add('quiz-side__button');
  btn.textContent = engLettersArr[i];
  quizSideBoard.append(btn);
}

quizSideIncorrectCount.append(spanCount);
quizSideIncorrectCount.append(spanMaxCount);
quizSideText.append(quizSideHint);
quizSideText.append(quizSideIncorrectCount);

quizSide.append(quizSideKeyword);
quizSide.append(quizSideText);
quizSide.append(quizSideBoard);
// quiz side end

gameWrapper.append(gallowSide);
gameWrapper.append(quizSide);
main.append(gameWrapper);
//Create main end

// Create popup start
const popup = document.createElement('div');
popup.classList.add('popup');

const popupBody = document.createElement('div');
popupBody.classList.add('popup__body');

const popupContent = document.createElement('div');
popupContent.classList.add('popup__content');

const popupResult = document.createElement('p');
popupResult.classList.add('popup__result');

const popupAnswer = document.createElement('p');
popupAnswer.classList.add('popup__answer');

const popupButtons = document.createElement('div');
popupButtons.classList.add('popup__buttons');

const popupBtnPlay = document.createElement('button');
popupBtnPlay.classList.add('popup__button');
popupBtnPlay.classList.add('popup__button-play');
const playSpan = document.createElement('span');
playSpan.textContent = 'Play again';
popupBtnPlay.append(playSpan);

const popupBtnClose = document.createElement('button');
popupBtnClose.classList.add('popup__button');
popupBtnClose.classList.add('popup__button-close');
const closeSpan = document.createElement('span');
closeSpan.textContent = 'Close';
popupBtnClose.append(closeSpan);

popupButtons.append(popupBtnPlay);
popupButtons.append(popupBtnClose);

popupContent.append(popupResult);
popupContent.append(popupAnswer);
popupContent.append(popupButtons);

popupBody.append(popupContent);
popup.append(popupBody);
// Create popup end

document.body.append(main);
document.body.append(popup);
// Create DOM end

const KEYWORD = document.querySelector('.quiz-side__keyword');
const HINT = document.querySelector('.quiz-side__hint');
const GALLOW_IMAGE = document.querySelector('.gallow-side__image');
const MISTAKES_COUNTER = document.getElementById('count');
const POPUP_WINDOW = document.querySelector('.popup');
const POPUP_RESULT = document.querySelector('.popup__result');
const POPUP_ANSWER = document.querySelector('.popup__answer');
const POPUP_CLOSE_BTN = document.querySelector('.popup__button-close');
const POPUP_PLAY_BTN = document.querySelector('.popup__button-play');
const VIRTUAL_KEYBOARD = document.querySelector('.quiz-side__keyboard');
const BUTTONS = document.querySelectorAll('.quiz-side__button');

let prevRanomNumber;
let wrongAttemptCount = 0;
let usedLetters = [];
let gameStopped = false;
let randomNumber;
let currentPair;
let question;
let answer;
let answerOriginal;
let restOfword;
let keywordLetters;

function getRandomQuestionNumber(arr) {
  if (usedQuestionsNumbersArr.length === questionsArr.length) {
    restartAllQuestions();
  }
  let result = 0;
  result = Math.random() * arr.length;
  result = Math.floor(result);
  if (
    (result === prevRanomNumber &&
      questionsArr.length - usedQuestionsNumbersArr.length !== 1) ||
    usedQuestionsNumbersArr.includes(result)
  ) {
    return getRandomQuestionNumber(arr);
  }
  prevRanomNumber = result;
  return result;
}

function closeAndPlay() {
  removePrevValues();
  MISTAKES_COUNTER.textContent = 0;
  usedLetters = [];
  wrongAttemptCount = 0;
  randomNumber = getRandomQuestionNumber(questionsArr);
  currentPair = questionsArr[randomNumber];
  question = currentPair.question;
  answer = currentPair.answer;
  answerOriginal = answer;
  console.log('answer:', answerOriginal);
  answer = answer.toLowerCase();
  restOfword = answer;
  gameStopped = false;
  HINT.textContent = `Hint: ${question}`;
  fillKeywordField(answer);
  keywordLetters = document.querySelectorAll('.quiz-side__letter');
  closePopup();
}

closeAndPlay();

function openPopup() {
  POPUP_WINDOW.classList.add('open');
}

function closePopup() {
  POPUP_WINDOW.classList.remove('open');
}

function removePrevValues() {
  while (KEYWORD.firstChild) {
    KEYWORD.firstChild.remove();
  }
  HINT.textContent = '';
  GALLOW_IMAGE.setAttribute('src', `./img/hangman-0.svg`);
  for (item of BUTTONS) {
    item.removeAttribute('disabled');
    item.classList.remove('disabled');
  }
}

function fillKeywordField(word) {
  for (let i = 0; i < word.length; i += 1) {
    const letter = document.createElement('div');
    letter.classList.add('quiz-side__letter');
    const underscore = document.createElement('span');
    underscore.classList.add('quiz-side__underscore');
    letter.append(underscore);
    KEYWORD.append(letter);
  }
}

function buttonHandler(event) {
  const key = event.key.toLowerCase();
  if (usedLetters.includes(key) || gameStopped) {
    return;
  }
  if (!engLettersArr.includes(key) && key !== 'f5') {
    console.log(
      'Please, check keyboard layout. Only english letters are allowed'
    );
    return;
  }
  const keyNumber = engLettersArr.indexOf(key);
  if (key !== 'f5') {
    BUTTONS[keyNumber].setAttribute('disabled', true);
    BUTTONS[keyNumber].classList.add('disabled');
  }

  if (restOfword.includes(key)) {
    const letterIndexes = [];
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i] === key) {
        letterIndexes.push(i);
      }
    }
    letterIndexes.forEach((index) => {
      keywordLetters[index].textContent = key;
    });
    restOfword = restOfword.replaceAll(key, '');
    usedLetters.push(key);
    if (!restOfword) {
      gameStopped = true;
      POPUP_RESULT.textContent = 'CONGRATULATIONS! YOU WIN !';
      POPUP_ANSWER.textContent = `Correct answer is: ${answerOriginal}`;
      usedQuestionsNumbersArr.push(randomNumber);
      openPopup();
    }
  } else if (!usedLetters.includes(key) && key !== 'f5') {
    wrongLetterHandle(key);
  }
}

function wrongLetterHandle(key) {
  usedLetters.push(key);
  wrongAttemptCount += 1;
  if (wrongAttemptCount <= 6) {
    GALLOW_IMAGE.setAttribute('src', `./img/hangman-${wrongAttemptCount}.svg`);
    MISTAKES_COUNTER.textContent = wrongAttemptCount;
  }
  if (wrongAttemptCount === 6) {
    gameStopped = true;
    POPUP_RESULT.textContent = 'YOU LOOSE !';
    POPUP_ANSWER.textContent = `Correct answer is: ${answerOriginal}`;
    openPopup();
    return;
  }
}

function virtualKeyboardHandler(event) {
  const key = event.target.textContent;
  if (!engLettersArr.includes(key) || gameStopped) {
    return;
  }
  event.target.setAttribute('disabled', true);
  event.target.classList.add('disabled');

  if (restOfword.includes(key)) {
    const letterIndexes = [];
    for (let i = 0; i < answer.length; i += 1) {
      if (answer[i] === key) {
        letterIndexes.push(i);
      }
    }
    letterIndexes.forEach((index) => {
      keywordLetters[index].textContent = key;
    });
    restOfword = restOfword.replaceAll(key, '');
    usedLetters.push(key);
    if (!restOfword) {
      gameStopped = true;
      POPUP_RESULT.textContent = 'CONGRATULATIONS! YOU WIN!';
      POPUP_ANSWER.textContent = `Correct answer is: ${answerOriginal}`;
      openPopup();
    }
  } else if (!usedLetters.includes(key) && key !== 'f5') {
    wrongLetterHandle(key);
  }
}

function popupKeyHandler(event) {
  if (event.code === 'Enter' && gameStopped) {
    closeAndPlay();
  }
  if (event.code === 'Escape' && gameStopped) {
    closePopup();
  }
}

document.addEventListener('keyup', buttonHandler);
VIRTUAL_KEYBOARD.addEventListener('click', virtualKeyboardHandler);
POPUP_CLOSE_BTN.addEventListener('click', closePopup);
POPUP_PLAY_BTN.addEventListener('click', closeAndPlay);
document.addEventListener('keyup', popupKeyHandler);
