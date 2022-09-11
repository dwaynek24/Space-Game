const words = ["astronomer", "equinox", "meteorite", "starburst", "telescope"];
const wordToGuess = rand;
const wrongLetterBox = document.querySelector("wrongLetters");
const submitButton = document.querySelector("#sub");
const input = document.querySelector("#inputBox");
const hiddenWord = [];
const guessedLetter = [];
const wrongGuessCount = document.querySelector(".guessCount");
const correctLetters = [];
const wrongLetters = [];
const wordShow = document.querySelector("#wordShowcase");
let guess = "";
var rand = words[Math.floor(Math.random() * words.length)];

let genHiddenWord = () => {
    for (let i = 0; i < rand.length; i++) {
      hiddenWord.push("_");
    
    }
  
    hiddenWord.join("");
    console.log(hiddenWord)
    wordShow.innerHTML=hiddenWord
    
   console.log(hiddenWord)
  
  //   return hiddenWord;
    
    
  };
  genHiddenWord();


let compareGuess = () => {
  // for(let i = 0; i < rand.length;i++) {
  if (rand.includes(guess)) {
    correctGuess();
   
    // hiddenWord.push(guess);
    correctLetters.push(guess);
  } else {
    wrongLetters.push(guess);
  }
  document.querySelector("#wrongLetters").innerHTML = wrongLetters;

  // }
  console.log(correctLetters);
  console.log(wrongLetters);
};


submitButton.addEventListener("click", function () {
  guess = input.value;
  compareGuess();
  
  
  return guess, console.log(guess)
});
let correctGuess = () => {
    // loop through rand if for loop conditional if ran index i = guess then replace
    for (let i=0; i <rand.length;i++) {
        if (rand[i]== guess){
            hiddenWord.innerHTML= guess
        }
        console.log(hiddenWord)
    }
    
    
}


console.log(guess);

console.log(rand);
// look up string.includes
//  a check to see if string includes or does not
// if it does include, replace that in hidden word array
// if it doesnt include place letter wrong letter array
// call render
// replace wrong guesses
