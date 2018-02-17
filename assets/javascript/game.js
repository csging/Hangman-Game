// JavaScript function that wraps everything
$(document).ready(function() {
    //create array of isograms, aka words with non repeating letters
    let words = ['blacksmith', 'bedrock', 'thwack', 'bling', 'fuschia', 'fjord', 'zephyr', 'dermatoglyphics', 'copyright', 'pneumatics', 'glutamine', 'abduction', 'naughty', 'juxtapose', 'isogram'];

    //starting game stats
    let guesses = 9;
    let rightWord = [];
    let wrongWord = [];
    let wrongLetter = [];
    let rightGuess = [];
    let winCount = 0;
    let lossCount = 0;
    let rightGuessCounter = 0;

    //generate random word based on length of words[]
    let chosenWord = words[Math.floor(Math.random() * words.length)];


    //store number of letters in chosen word to letters
    let letters = chosenWord.split('');
    let blanks = letters.length;
    console.log(letters);
    console.log(blanks);
    console.log(chosenWord);

    let underscore = [];

    //create underscores based on length of chosenWord
    let underscoreMaker = () => {
            {
                for (let i = 0; i < chosenWord.length; i++)
                    underscore.push("_");
            }
            return underscore;
            console.log(underscore);
        }
        //underscores output
    document.getElementById("word-blanks").innerHTML = underscoreMaker();


    console.log(underscoreMaker());

    document.getElementById('guesses-left').innerHTML = guesses;
    // document.getElementById('win-counter').innerHTML = winCount;
    // document.getElementById('loss-counter').innerHTML = lossCount;

    // let docunderscore = document.getElementsByClassName('word-blanks');
    let docright = document.getElementsByClassName('theWord');
    let docwrongguess = document.getElementsByClassName('wrong-guesses')




    //get users guess letter

    document.addEventListener('keypress', (event) => {

        //log the keyCode of the char 
        let keyword = String.fromCharCode(event.keyCode).toLowerCase();
        // console.log(keyword)
        // console.log(event)
        //check if guess letter is right
        if (chosenWord.indexOf(keyword) > -1) {
            // for (let i = 0; i < chosenWord.length; i++) {
            //add chars to the right word array
            if (underscore[chosenWord.indexOf(keyword)] = keyword) {
                // $("word-blanks")
                rightWord.push(keyword);
                //increase right guesses
                rightGuessCounter++;
                console.log(rightWord);
                underscore.innerHTML = underscore.join("");

                document.getElementById('word-blanks').innerHTML = underscore.join('');
                // docright[0].innerHTML = rightGuess.join(' ');

                // underscore[chosenWord.indexOf(keyword)] = keyword;

            } else {
                //push wrong guesses to wrong letter array
                wrongWord.push(keyword);
                //decrease guesses
                guesses--;
                console.log(wrongLetter);
                //output wrong letters to wrong guesses
                document.getElementById('wrong-guesses').innerHTML = wrongLetter;
                document.getElementById('wrong-guesses').innerHTML = wrongWord;
            }

            // }
        }

        // if (underscore.join(' ') == chosenWord) {
        //     alert('you win')
        // }



        //This function takes an arr for an argument (we use it for our id array)
        // function print(arr) {
        //     arr.forEach(function(idName) {
        //         // If the idName variable is an array do this
        //         if (Array.isArray(window[idName])) {
        //             document.getElementById('theWord').textContent = underscore['theWord'].join(' ')
        //         }
        //         // If the idName variable is any other type besides array do this
        //         else {
        //             document.getElementById('wrong-guesses').textContent = window[idName];
        //         }
        //     });
        // }






        // underscore[chosenWord.indexOf(keyword)] = keyword;
        // docunderscore[0]= underscore.join(' ');
        // docright[0] = rightWord;


        // document.getElementById('theWord').innerhtml = blanks.join(' ');

        // //if the char is in the chosen word
        // //add to the right word array
        // if (letters[i] === keyword) {
        //     correctGuess++;
        //     blanks[i] = keyword;
        //     console.log(blanks);

        // }

    });

    //rightGuessCounter = length of chosenWord, so when the rgc = blanks, you win
    if (rightGuessCounter === blanks) {
        //increase win counter
        return winCount++;
        alert('you win!');
        document.getElementById('win-counter').innerHTML = winCount;
    } else if (guesses < 1) {
        //if you have 0 guesses you lose!
        return lossCount++;
        alert('you lose! :(');
        document.getElementById('loss-counter').innerHTML = lossCount;
    }

    //             rightWord.push(keyword);
    //             //and replace the underscore with the right char
    //             underscore[chosenWord.indexOf(keyword)] = keyword;
    //             console.log(underscore);
    //             console.log(rightWord)

    //             if (underscore.join(' ') == chosenWord) {
    //                 console.log("yay");
    //             }

    //             //if not the right character, put in the wrongWord array
    //             else {
    //                 wrongWord.push(keyword);
    //                 console.log(wrongWord);
    //             };
    //         }
    //     })
    // };
    //     //if right push letter to right array
    //     rightWord.push(keyword);
    //     //replace underscore with letter
    //     underscore[chosenWord.indexOf(keyword)] = keyword;
    //     underscore[0].innerHTML = underscore.join(' ');
    //     //checks to see if letter matches the guess letter


    //     //if wrong push letter to wrong array "wrong-guesses" , decrease lives "guesses-left"
    //     document.getElementById("wrong-guesses").innerHTML = "Wrong Guesses: " + --guesses
    //if the player guesses too many wrong answers (9) player loses, increase loss counter "loss-counter"

    //if the player guesses the word correctly increase wins "win-counter"

    //

});