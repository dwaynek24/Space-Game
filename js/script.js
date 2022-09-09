const words= ["Astronomer","Equinox","Meteorite","Starburst", "Telescope" ]
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





console.log(hiddenWord)
console.log(wordToGuess)