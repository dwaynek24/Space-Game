const words= ["Astronomer","Equinox","Meteorite","Starburst", "Telescope" ]
var rand = words[Math.floor(Math.random() * words.length)];
const wordToGuess = rand;
const hiddenWord =[];


let genHiddenWord = () => {
for(let i = 0; i < rand.length;i++){
    hiddenWord.push("_");
}
return hiddenWord    
}
console.log(hiddenWord)



genHiddenWord()

console.log(hiddenWord)
console.log(wordToGuess)
const letterGuess = document.querySelector(".letterGuess")
document.querySelector("#wordShowcase").innerHTML =hiddenWord;
const logGuess = document.querySelector("#submitGuess")
logGuess.addEventListener("click", function() {
    
        console.log(letterGuess)
});