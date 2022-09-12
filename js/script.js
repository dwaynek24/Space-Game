const words = ["astronomer", "equinox", "meteorite", "starburst", "telescope"];
var wordToGuess = rand;
const wrongLetterBox = document.querySelector("wrongLetters");
const submitButton = document.querySelector("#sub");
const input = document.querySelector("#inputBox");
let hiddenWord = [];
const guessedLetter = [];
const wrongGuessCount = document.querySelector(".guessCount");
const correctLetters = [];
const wrongLetters = [];
const wordShow = document.querySelector("#wordShowcase");
let guess = "";
var rand = words[Math.floor(Math.random() * words.length)];
var renderV = hiddenWord.join("");
let genHiddenWord = () => {
  for (let i = 0; i < rand.length; i++) {
    hiddenWord.push("_");
  }
  renderWord();

  
};

let renderWord = () => {
  renderV = hiddenWord.join("");

  wordShow.innerHTML = hiddenWord;
};
genHiddenWord();


let compareGuess = () => {
  if (wrongLetters.length === 2) {
    loser();
  } else if (hiddenWord.includes("_") === false) {
    winner();
  } else if (rand.includes(guess)) {
    correctLetters.push(guess);
    correctGuess();

    renderWord();
  } else {
    wrongLetters.push(guess);
  }
  document.querySelector("#wrongLetters").innerHTML = wrongLetters;
};


submitButton.addEventListener("click", function () {
  guess = input.value;
  compareGuess();

  return guess;
});
let correctGuess = () => {
  for (let i = 0; i < rand.length; i++) {
    if (rand[i] == guess) {
      hiddenWord[i] = guess;
    }
  }
};
let loser = () => {
  {
    alert(
      "*explosion... dont quit your day job Spacecowboy..refresh to try again"
    );
  }
};
let winner = () => {
  {
    alert(
      "Blast off was a success! see you later Spacecowboy..refresh to play again."
    );
  }
};

