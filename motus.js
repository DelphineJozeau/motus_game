//le mot à deviner  et celui entré
let wordToGuess = 'dictionnaire';
let inputWord = document.getElementById("word").value;

// les id HTML
const tryID = document.getElementById("try");
const wellID = document.getElementById("well");
const missID = document.getElementById("miss");
const notID = document.getElementById("not");
const winID = document.getElementById("win");

function tryWord(inputWord, wordToGuess) {

  inputWord = inputWord.toLowerCase();

  if (inputWord === wordToGuess) {
    return {
      wellPlaced: inputWord.split(''),
      missplaced: [],
      notInWord: []
    };

  } else {
    let arrayWordToGuess = wordToGuess.split('');
    let arrayInputWord = inputWord.split('');

    for (let i = 0; i < arrayWordToGuess.length; i++) {
      if (arrayWordToGuess[i] === arrayInputWord[i]) {
        wellPlaced.push(arrayInputWord[i]);
      } else {
        missplaced.push(arrayInputWord[i])
      }
    }

    notInWord = getNotInWord(arrayInputWord, arrayWordToGuess, notInWord);

    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}

function getNotInWord(arrayInputWord, arrayWordToGuess, notInWord) {
  for (const character of arrayInputWord) {
    if (arrayWordToGuess.includes(character) === false) {
      notInWord.push(character)
    }
  }
  return notInWord
}

//écrire dans le HTML
function innerText(result) {
  tryID.innerText = inputWord;
  wellID.innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
  missID.innerText = 'Mal placé: ' + result.missplaced.join(', ')
  notID.innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
}

function didWin(result) {
  if (result.wellPlaced.length === wordToGuess.length) {
    winID.innerText = 'Vous avez gagné'
  }
}

//activé au click :
function guessTheWord() {
  let result = tryWord(inputWord, wordToGuess);
  inputWord.value = '';
  //écrire innertext
  innerText(result);
  //gagné !
  didWin(result);
};

