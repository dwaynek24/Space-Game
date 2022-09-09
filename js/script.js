

const words= ["astronomer","equinox","meteorite","starburst", "telescope" ]
const wordToGuess = rand;
const wrongLetterBox = document.querySelector("wrongLetters")
const submitButton = document.querySelector("#sub")
const input = document.querySelector("#inputBox")
const hiddenWord =[];
const guessedLetter = [];
const wrongGuessCount= document.querySelector(".guessCount")
const correctLetters = [];
const wrongLetters = [];
let guess = [];
var rand = words[Math.floor(Math.random() * words.length)];


 let genHiddenWord = () => {
    for(let i = 0; i < rand.length;i++){
        hiddenWord.push("_");
    }
    return hiddenWord ;{
        
    }   
    }
    
    let compareGuess = () => {
        for(let i = 0; i < rand.length;i++) {
      if  (rand.includes(guess)){
        correctLetters.push(guess);
      }
      else {wrongLetters.push(guess)} {document.querySelector("#wrongLetters").innerHTML =wrongLetters;}
    }}

    genHiddenWord()
    document.querySelector("#wordShowcase").innerHTML =hiddenWord;


    
    
    submitButton.addEventListener("click", function() {
        
         guess=input.value
         return guess, 
         console.log(guess),
         compareGuess()
     })  
    
     

     console.log(guess)
    console.log(hiddenWord)
    console.log(rand)
    // look up string.includes
//  a check to see if string includes or does not
// if it does include, replace that in hidden word array
// if it doesnt include place letter wrong letter array
// call render
// replace wrong guesses 

