// Set all needed variables
const RPS = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let gameVal;
let playerScore = 0;
let computerScore = 0;
let tie = 0;
let i = 0;

// Set all selectors
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const play = document.querySelector('button[name="play"]');
const submit = document.querySelector('button[name="submit"]');
const submit2 = document.querySelector('button[name="submit2"]');
const playSentence = document.getElementById('playSentence');
const input = document.getElementById('input');
const input2 = document.getElementById('input2');
const buttons = document.getElementById('buttons');
const launchPlay = document.getElementById('launchPlay');
const sentence1 = document.getElementById('sentence1');
const sentence2 = document.getElementById('sentence2');



// TO DOOOOOOOOOOOOO fix the empty submit button and field, 
// if clicked more than 5 times "I can't do anything for you...", 
// After 5 sec, reset back to step1
//
// Design everything to make it proper game
//
// Maybe update show/Hide to toggle
//
// Reduce code and optimize



// PLAY FUNCTIONS
// Launch game
play.addEventListener('click', () => {
    hidePlay(); 
    showNumber();
});

// Select number of games
submit.addEventListener('click', () => {
    numberGames();
    submit.value = gameVal;
    if (gameVal > 0) {
        showButtons();
        hideNumber();
    } 
    else {
        toggle()
        resetField();
    }
});


// Select Move
rock.addEventListener('click', () => {
    game();                                                 // Launch game
    i++;                                                    // Count number of games
    if (i == gameVal) {resultsDiv(); hideButtons();}        // If number of games == games' value, show results and hide choice
});

paper.addEventListener('click', () => {
    game();                                                 // Launch game
    i++;                                                    // Count number of games
    if (i == gameVal) {resultsDiv(); hideButtons();}        // If number of games == games' value, show results and hide choice
});

scissors.addEventListener('click', () => {
    game();                                                 // Launch game
    i++;                                                    // Count number of games
    if (i == gameVal) {resultsDiv(); hideButtons();}        // If number of games == games' value, show results and hide choice
});












// GAME PROCESSING FUNCTIONS
// Get number of games to play
function numberGames() {
    gameVal = document.querySelector('input').value;            // Saves number of games' value
}



// Launch game
function game() {               
    computerSelection = computerPlay();                         // Computer chooses
    playRound(playerSelection, computerSelection, tie);         // Add points depending on selections
    console.log('Computer ' + computerScore +                   // Display results
                ' - Player ' + playerScore + 
                '      //      Tie - ' + tie);        
};

// Process play
function playRound() {          
    // Player choose rock
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return computerScore, playerScore;
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return computerScore, playerScore;
    }
    else if (playerSelection == 'rock' && computerSelection == 'rock') {
        tie += 1;
        return tie, computerScore, playerScore;
    }


    // Player choose scissors
    if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        playerScore;
        return computerScore, playerScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        computerScore;
        playerScore += 1;
        return computerScore, playerScore;
    }
    else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        tie += 1;
        return tie, computerScore, playerScore;
    }


    // Player choose paper
    if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        playerScore;
        return computerScore, playerScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'rock') {
        computerScore;
        playerScore += 1;
        return computerScore, playerScore;
    }
    else if (playerSelection == 'paper' && computerSelection == 'paper') {
        tie += 1;
        return tie, computerScore, playerScore;
    }
};

// Computer selection
function computerPlay() {           
    return RPS[Math.floor(Math.random() * RPS.length)] 
};












// DISPLAY FUNCTIONS
// Hide playSentence div
function hidePlay() {               
    if (playSentence.style.display === "none") {
      playSentence.style.display = "block";
    } else {
      playSentence.style.display = "none";
    }
}

// Display result
function resultsDiv(){              
    const newDiv = document.createElement("div");
    newDiv.classList.add('results');
    document.body.appendChild(newDiv);
    if(playerScore > computerScore) {
            newDiv.textContent += "You won!"
        }
        else {
            newDiv.textContent += "You lost... Would you like to play again?";
    }
}

// Display/Hide the selection of number of games
function showNumber() {            
    document.getElementById('launchPlay').style.display = "block";
}

function toggle() {
    let k = 0;
    if (k === 0) {
        sentence1.style.display = "none";
        sentence2.style.display = "inline-block";
        k += 1;
    } else {
        sentence1.style.display = "inline-block";
        sentence2.style.display = "none";
        k += 1;
    }
}

function hideNumber() {             
    if (launchPlay.style.display === "none") {
        launchPlay.style.display = "block";
    } else {
        launchPlay.style.display = "none";
    }
}

// Reset integer button and field
function resetField() {         
    input.value = "";
}



// Display/Hide buttons to choose from 3 moves
function showButtons() {            
    document.getElementById('buttons').style.display = "block";
 }

function hideButtons() {
    if (buttons.style.display === "none") {
        buttons.style.display = "block";
      } else {
        buttons.style.display = "none";
      }
}
