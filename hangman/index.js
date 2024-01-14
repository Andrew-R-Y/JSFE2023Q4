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
  question: 'What planet is closest to the sun?',
  answer: 'Mercury',
};

const pair5 = {
  question: 'What is the 4th letter of the Greek alphabet?',
  answer: 'Delta',
};

const pair6 = {
  question: 'What is the slang name for New York City, used by locals?',
  answer: 'Gotham',
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
  question: `A dude named Chip Morningstar received the first JSON message, a format derived from what core language repped by the "JS"?`,
  answer: 'JavaScript',
};

const pair12 = {
  question: `Linux uses all the letters of what operating system family that it was designed to imitate?`,
  answer: 'Unix',
};
// Quiz questions end

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
  'g',
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
];

function getRandomQuestionNumber(arr) {
  let result = 0;
  result = Math.random() * arr.length;
  result = Math.floor(result);
  return result;
}

let randomNumber = getRandomQuestionNumber(questionsArr);
console.log('Array length is:', questionsArr.length);
console.log('Random number is:', randomNumber);

let currentPair = questionsArr[randomNumber];
let question = currentPair.question;
let answer = currentPair.answer;
console.log('answer:', answer);
answer = answer.toLowerCase();
restOfword = answer;

const KEYWORD = document.querySelector('.quiz-side__keyword');
const HINT = document.querySelector('.quiz-side__hint');
function removePrevValues() {
  while (KEYWORD.firstChild) {
    KEYWORD.firstChild.remove();
  }
  HINT.textContent = '';
}

removePrevValues();

HINT.textContent = `Hint: ${question}`;

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

const usedLetters = [];

fillKeywordField(answer);
const keywordLetters = document.querySelectorAll('.quiz-side__letter');

function buttonHandler(event) {
  const key = event.key.toLowerCase();
  if (usedLetters.includes(key)) {
    return;
  }
  if (!engLettersArr.includes(key)) {
    console.log(
      'Please, check keyboard layout. Only english letters are allowed'
    );
    return;
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
    restOfword.replaceAll(key);
    usedLetters.push(key);
  }
}

document.addEventListener('keyup', buttonHandler);
