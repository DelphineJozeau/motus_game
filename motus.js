function tryWord(inputWord, wordToGuess) {
  // TODO: fix jeu sensible à la casse :
  inputWord = inputWord.toLowerCase();
  wordToGuess = wordToGuess.toLowerCase();

  if (inputWord === wordToGuess) {
    return {
      wellPlaced: inputWord.split(''),
      missplaced: [],
      notInWord: []
    };

  } else {

    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];

    let arrayWordToGuess = wordToGuess.split('');
    let arrayInputWord = inputWord.split('');

   

    for (let i = 0; i < arrayWordToGuess.length ; i++) {
      if (arrayWordToGuess[i] === arrayInputWord[i]) {
        wellPlaced.push(arrayInputWord[i]);
      } else {
        missplaced.push(arrayInputWord[i])
      }
    }

    for (const character of arrayInputWord) {
      if (arrayWordToGuess.includes(character) === false) {
        notInWord.push(character)
      }
    }

    return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
  }
}

function guess() {

  let wordToGuess = 'dictionnaire';
  let inputWord = document.getElementById("word").value;

  let result = tryWord(inputWord, wordToGuess)

  document.getElementById("word").value = ''
  document.getElementById("try").innerText = inputWord
  document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')

  if (result.wellPlaced.length === wordToGuess.length) {
    document.getElementById("win").innerText = 'Vous avez gagné'
  }
};