//Get DOM Elements
const word = document.getElementById('word');
const incorrectLetters = document.getElementById('incorrect-letters');
const popup = document.getElementById('popup-container');
const finalMsg = document.getElementById('final-message');
const playBtn = document.getElementById('play-btn');
const notification = document.getElementById('notification-container');


//Get DOM Elements for Hangman

const figureParts = document.querySelectorAll('.figure-part');

//This is the pool of words which will be used to select a random word

const words = ["found", "row", "mice", "herd", "height", "pony","official", "border", "point", "refused", "powerful", "attention","opposite", "east", "sail", "far", "unit", "am","fully", "send", "size", "lead", "setting", "careful","addition", "had", "fun", "train", "satellites", "afternoon","breakfast", "slightly", "fruit", "fine", "cotton", "traffic","can", "tube", "tonight", "hunt", "rhyme", "when"]
//const words = ["bad","no"]
// Select a word random from words Array;
const selectedWord=words[Math.floor(Math.random() * words.length)];

//Tracking arrays for correct and in correct guesses
const correctLettersArray = [];
const incorrectLettersArray = [];

//Function to display the selected word in the DOM
function displayWord (){
    //Display the selected word
    word.innerHTML =
     ` ${selectedWord.split('')
      .map(letter => `
            <span class="letter">
            ${correctLettersArray.includes(letter) ? letter : ''}
            </span>      
      ` )
        .join('')
    }`;

    //Replace new line character and form inner word

    const innerWord = word.innerText.replace(/\n/g, '');
    
// compare inner word to selected word, if it's the same then game over and user won
    if(innerWord === selectedWord){
        finalMsg.innerText = 'Congratulations! you won!'
        popup.style.display = 'flex';
    }
}
//Function to show the notification
function showNotification(){
    //Add class to show notification container
    notification.classList.add('show');
    //AFter 2 seconds, hide the notification
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}


//Function to update incorrect letters

function updateIncorrectLetters(){
    //Display the incorrect letters
    
    incorrectLetters.innerHTML = `
    ${incorrectLettersArray.length > 0 ? '<p>Incorrect Letters </p>' : ''}
    ${incorrectLettersArray.map(letter=>`<span>${letter}</span>`)}
    `
    console.log('hi')
    //Display the hangman part
    figureParts.forEach((part,index) => {
        console.log('hhh')
        //How many incorrect letter has the user guessed
        const errors = incorrectLettersArray.length;
        if(index < errors){
            part.style.display = 'block';
        } else {
            part.style.display = 'none'
        }
    });

    //Check if user lost
    if(incorrectLettersArray.length === figureParts.length){
        finalMsg.innerText = 'You Lost'
        popup.style.display = 'flex';
    }
}

//Event Handler
// 1. Listen for keyboard key press
window.addEventListener('keydown', e => {
    console.log(e.keyCode, e.key);
    // Check if key pressed is a letter a = 65 and z = 90
    if(e.keyCode >= 65 && e.keyCode <=90){
        const letter = e.key;
        // check if letter is in the selected word
        if(selectedWord.includes(letter)){
            //Check if letter is already in correctletterarray
            if(!correctLettersArray.includes(letter)){


                // Add letter into the correct Letter Array
                correctLettersArray.push(letter);
                // Run the display word function again to display new lettter
                displayWord();
            }

            else {
                showNotification();
            }

        } else{
            //Check if letter is already in incorrect letters array

            if(!incorrectLettersArray.includes(letter)){
                //Add letter into the incorrectletterarray
                incorrectLettersArray.push(letter)
                //Update the incorrect letters UI
                updateIncorrectLetters();
            } else{
                showNotification();
            }
        }
    }


});

//2. Listen for click on play again button
playBtn.addEventListener('click', ()=>{
    //Empty correctletterrry and incorrect letter array
    correctLettersArray.splice(0);
    incorrectLettersArray.splice(0);
    //Select a new random word
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    //Clear inocrrect letters display
    updateIncorrectLetters();
    //Hide the popup
    popup.style.display = 'none';

    //refresh display word
    displayWord();
})

//Execute display word on page load
displayWord();


