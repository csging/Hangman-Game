//create array of words
let words = [ 'blue', 'red', 'green', 'lavender', 'fuschia'];

//chose word randomly
let chosenWord = words[Math.floor(Math.random()* words.length)];

console.log(chosenWord); 

//create underscores based on length of word
var underscore = [];
let underscoreMaker = ()  => {
    {
    for (var i=0; i < chosenWord.length; i++)
    underscore.push('_');
    }
    return underscore;
}
document.getElementById("word-blanks").innerHTML = underscoreMaker ();
// console.log(underscoreMaker());

//get users guess letter

document.addEventListener('keypress', (event) => {
    let keycode = event.keyCode;
    let guessLetter = String.fromCharCode(keycode);
    console.log(guessLetter);
});



//check if guess letter is right
if (chosenWord.indexOf())
//if right push letter to right array

//if wrong push letter to wrong array



