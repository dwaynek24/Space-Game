const words= ["Astronomer","Equinox","Meteorite","Starburst", "Telescope" ]
var rand = words[Math.floor(Math.random() * words.length)];
const wordToGuess = rand;
const hiddenWord =[];
const logGuess = document.querySelector("#sub")
const letterGuess = document.querySelector("#inputBox")

let genHiddenWord = () => {
for(let i = 0; i < rand.length;i++){
    hiddenWord.push("_");
}
return hiddenWord    
}
console.log(hiddenWord)



genHiddenWord()
document.querySelector("#wordShowcase").innerHTML =hiddenWord;



logGuess.addEventListener("click", function() {
    return logGuess
    
})  





console.log(hiddenWord)
console.log(wordToGuess)