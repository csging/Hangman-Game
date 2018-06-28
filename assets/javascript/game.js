//create array of isograms, aka words with non repeating letters
let words = ["lucario", "pikachu", "bulbasaur", "charizard", "onyx", "squirtle", "nidoking", "scyther"];
//starting game stats
var currentWord = '';
var currentLetters = [];

var blanks = 0;
var gameBlanks = [];
let wrongLetter = [];

let winCount = 0;
let lossCount = 0;
let guesses = 9;

// var validLetters = ["a", 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function startGame() {
    console.log(words)
    //reset guesses
    guesses = 9;
    //generate random word based on length of words
    currentword = words[Math.floor(Math.random() * words.length)];
    currentWord = words[Math.floor(Math.random() * words.length)];
    console.log(currentWord)

    //current word broken into letters
    currentLetters = currentWord.split("");
    //create blanks based on letters in word
    blanks = currentLetters.length;
    console.log(currentWord);
    console.log(currentLetters)
    //reset game stats from previous round
    gameBlanks = [];
    wrongLetter = [];

    //create underscores based on length of currentWord
    for (var i=0; i<blanks; i++) {
        gameBlanks.push("_")
    }
    console.log(gameBlanks)
    
    //prints word blanks, wrongLetter array and displays guesses left
    document.getElementById("word-blanks").innerHTML = gameBlanks.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongLetter.join(" ");
    document.getElementById("guesses-left").innerHTML = guesses;
}
  

function checkLetters(letter) {
    //this boolean will be toggled if the letter is found anywhere in the word
    var letterInWord = false;
    //check if the letter is inside the current word array at all
    for (var i = 0; i < blanks; i++) {
        if(currentWord[i] === letter ){
            letterInWord = true;
        }
    }
    //find and populate every instance of letter in currentWord
    if(letterInWord) {
        for (var j = 0; j < blanks; j++) {
    //set the space in blanks and letter equal to the letter when there is a match
            if (currentWord[j]===letter) {
                gameBlanks[j]=letter;
            }
        }
        console.log(gameBlanks);
    }
    //if the letterInWord isnt in currentWord
    else {
        wrongLetter.push(letter);
        guesses--;
    }
}

function gameRound() {
    console.log("Wins: "+ winCount +" | Losses: "+ lossCount +" | Guesses: "+ guesses)
    //update the dom to show new nubmer of guesses
    document.getElementById("word-blanks").innerHTML = gameBlanks.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongLetter.join(" ");
    document.getElementById("guesses-left").innerHTML = guesses;

    if(currentLetters.toString() === gameBlanks.toString()) {
        //increase wins
        winCount++;
        alert("you win!");
        //restart game
        document.getElementById("win-counter").innerHTML = winCount;
        startGame();
    }

    //if your guesses run out, alert the player and restart the game
    else if (guesses === 0) {
        lossCount++;
        alert("you lose sucker!");
        document.getElementById("win-counter").innerHTML = lossCount;
        startGame();
    }

}

startGame();

document.onkeyup = function(event) {
    var guessLetter = String.fromCharCode(event.which).toLowerCase();
    checkLetters(guessLetter);
    gameRound();
}
