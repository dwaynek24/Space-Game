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
var renderV =  hiddenWord.join("");
let genHiddenWord = () => {
    for (let i = 0; i < rand.length; i++) {
      hiddenWord.push("_");
    
    }
    renderWord()
  
   
    
   console.log(hiddenWord)
  
  //   return hiddenWord;
    
    
  };

  let renderWord = () => {
   renderV= hiddenWord.join("")
    console.log(hiddenWord)
    wordShow.innerHTML=hiddenWord
  }
  genHiddenWord();


let compareGuess = () => {
  
  if (rand.includes(guess)) {
    console.log("yay")
    correctGuess();
   
    
    renderWord()
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
    
  
  
  return guess
});
let correctGuess = () => {
    // loop through rand if for loop conditional if ran index i = guess then replace
    for (let i=0; i <rand.length;i++) {
        if (rand[i]== guess){
            hiddenWord[i]=guess
        }
        console.log(hiddenWord)
    }
    
    
}
let loser = () => {
    if(wrongLetters===[2]) {alert("You Lose:( refresh to try again.")
}}
loser()
console.log(guess);

console.log(rand);
// look up string.includes
//  a check to see if string includes or does not
// if it does include, replace that in hidden word array
// if it doesnt include place letter wrong letter array
// call render
// replace wrong guesses
