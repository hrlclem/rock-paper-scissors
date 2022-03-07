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
const rock = document.querySelector('button[name="rock"]');
const paper = document.querySelector('button[name="paper"]');
const scissors = document.querySelector('button[name="scissors"]');
const play = document.querySelector('button[name="play"]');
const submit = document.querySelector('button[name="submit"]');
const playSentence = document.getElementById('playSentence');
const buttons = document.getElementById('buttons');
const number = document.getElementById('number');


// PSEUDO CODE:
// When clicked, computer does selection with computerSelection
// PlayRound runs to see the outcome
// Then score is processed and repeats 5 times
// For each time, div shows the result of the round.
// Add div in DOM that shows final result after 5 games





// PLAY FUNCTIONS

// Launch game
play.addEventListener('click', () => {
    hidePlay(); 
    showNumber();
});


// Select number of games
submit.addEventListener('click', () => {
    hideNumber();
    showButtons();
    gameVal = document.querySelector('input').value;    // Saves number of games' value
});


// Select Move
rock.addEventListener('click', () => {
    game();                                             // Launch game
    i++;                                                // Count number of games
    if (i == gameVal) {resultsDiv();}                       // If number of games == games' value, show results
});

paper.addEventListener('click', () => {
    game();                                             // Launch game
    i++;                                                // Count number of games
    if (i == gameVal) {resultsDiv();}                       // If number of games == games' value, show results
});

scissors.addEventListener('click', () => {
    game();                                             // Launch game
    i++;                                                // Count number of games
    if (i == gameVal) {resultsDiv();}                       // If number of games == games' value, show results
});








// GAME PROCESSING FUNCTIONS

function game() {               // Launch game
    computerSelection = computerPlay();                         // Computer chooses
    playRound(playerSelection, computerSelection, tie);         // Add points depending on selections
    console.log('Computer ' + computerScore +                   // Display results
                ' - Player ' + playerScore + 
                '      //      Tie - ' + tie);        
};




function playRound() {          // Process play:

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


function computerPlay() {           // Computer selection
    return RPS[Math.floor(Math.random() * RPS.length)] 
};

function resultsDiv(){              // Display result
    const newDiv = document.createElement("div");
    newDiv.classList.add('results');
    document.body.appendChild(newDiv);
    if(playerSelection > computerSelection) {
            newDiv.textContent += "You won!"
        }
        else {
            newDiv.textContent += "You lost... Would you like to play again?";
    }
 }





 // DISPLAY FUNCTIONS

function hidePlay() {               // Hide play div
    if (playSentence.style.display === "none") {
      playSentence.style.display = "block";
    } else {
      playSentence.style.display = "none";
    }
}

function showNumber() {            // Display the selection of number of games
    document.getElementById('number').style.display = "block";
}

function hideNumber() {             // Hide number div
    if (number.style.display === "none") {
      number.style.display = "block";
    } else {
      number.style.display = "none";
    }
}

function showButtons() {            // Display buttons to choose from 3 moves
    document.getElementById('buttons').style.display = "block";
 }

