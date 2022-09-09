let rand = words[Math.floor(Math.random() * words.length)];
const wordToGuess = rand;
const wrongLetterBox = document.querySelector("wrongLetters")
const submitButton = document.querySelector("#sub")
const input = document.querySelector("#inputBox")
const hiddenWord =[];


let genHiddenWord = () => {
for(let i = 0; i < rand.length;i++){
    hiddenWord.push("_");
}
return hiddenWord    
}
console.log(hiddenWord)

let logWrongLetter = () => {
    document.querySelector("#wrongLetters").innerhtml=input.value;
}

genHiddenWord()
document.querySelector("#wordShowcase").innerHTML =hiddenWord;



submitButton.addEventListener("click", function() {
   console.log(input.value)
    
})  
// look up string.includes
//  a check to see if string includes or does not
// if it does include, replace that in hidden word array
// if it doesnt include place letter wrong letter array
// call render
// replace wrong guesses 




console.log(hiddenWord)
console.log(wordToGuess)