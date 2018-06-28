$(document).ready(function() {

    let words = ['lucario', 'pikachu', 'charizard', 'mewtwo', 'bulbasaur', 'squirtle']
    let guesses;
    let wins;
    let losses;
    
    let rightLetter=[];
    let wrongLetter=[];

    let chosenWord= words[Math.floor(Math.random()*words.length)];

    let letters = chosenWord.split('');
    let blanks = letters.length;

    
})