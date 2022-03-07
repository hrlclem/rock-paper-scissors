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




// Launch game
play.addEventListener('click', () => {
    showNumber();
    hidePlay();
});

// Select number of games
submit.addEventListener('click', () => {
    showButtons();
    hideNumber();
    gameVal = document.querySelector('input').value;
});




// Select Move
rock.addEventListener('click', () => {
    game();
    playRound();
    i++;
    // Display results 
    if (i == gameVal) {result();}
});

paper.addEventListener('click', () => {
    game();
    playRound();
    i++;
    // Display results 
    if (i == gameVal) {result();}
});

scissors.addEventListener('click', () => {
    game();
    playRound();
    i++;
    // Display results 
    if (i == gameVal) {result();}
});




// Launch game
function game() {
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection, tie);

    // Play results
    console.log('Computer ' + computerScore + ' - Player ' + playerScore + '      //      Tie - ' + tie);        
};




// Game results TO DOOOOOOOOOOOOOOOO
function result() {
    if(playerSelection > computerSelection) {
        results.textContent = "You won!"
    }
    else {
        results.textContent = "You lost... Would you like to play again?";
    }
}



// Process play:
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




// Hide play div
function hidePlay() {
    if (playSentence.style.display === "none") {
      playSentence.style.display = "block";
    } else {
      playSentence.style.display = "none";
    }
}


 // Display the selection of number of games
 function showNumber() {
    document.getElementById('number').style.display = "block";
 }


// Hide number div
function hideNumber() {
    if (number.style.display === "none") {
      number.style.display = "block";
    } else {
      number.style.display = "none";
    }
}


 // Display buttons to choose from 3 moves
function showButtons() {
    document.getElementById('buttons').style.display = "block";
 }