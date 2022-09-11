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
var renderV =  hiddenWord.join("");
let genHiddenWord = () => {
    for (let i = 0; i < rand.length; i++) {
      hiddenWord.push("_");
    
    }
    renderWord()
  
   
    
   
  
  //   return hiddenWord;
    
    
  };

  let renderWord = () => {
   renderV= hiddenWord.join("")
    
    wordShow.innerHTML=hiddenWord
  }
  genHiddenWord();


let compareGuess = () => {
  if (wrongLetters.length===2) {
  loser()}
  else if(hiddenWord.includes("_")===false){
    winner()
  }
  else if (rand.includes(guess)) {
    console.log("yay")
    correctLetters.push(guess)
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
  console.log(hiddenWord);
    
  
  
  return guess
});
let correctGuess = () => {
    // loop through rand if for loop conditional if ran index i = guess then replace
    for (let i=0; i <rand.length;i++) {
        if (rand[i]== guess){
            hiddenWord[i]=guess
        }
        // console.log(hiddenWord)
    }
    
    
}
let loser = () => {
    {alert("*explosion... dont quit your day job Spacecowboy..refresh to try again")
}}
let winner = () => {
    {alert("Blast off was a success! see you later Spacecowboy..refresh to play again.")
}}

console.log(guess);
console.log(hiddenWord)
console.log(rand);
console.log(wordToGuess)
// look up string.includes
//  a check to see if string includes or does not
// if it does include, replace that in hidden word array
// if it doesnt include place letter wrong letter array
// call render
// replace wrong guesses
