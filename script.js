const RPS = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// Set all selectors
const rock = document.querySelector('button[name="rock"]');
const paper = document.querySelector('button[name="paper"]');
const scissors = document.querySelector('button[name="scissors"]');
const play = document.querySelector('button[name="play"]');


// PSEUDO CODE:
// Launch game, ask to choose your move by clicking a button
// When clicked, computer does selection with computerSelection
// PlayRound runs to see the outcome
// Then score is processed and repeats 5 times
// For each time, div shows the result of the round.
// Add div in DOM that shows final result after 5 games


// Launch game
play.addEventListener('click', () => {
    game();
});


rock.addEventListener('click', () => {
    playerSelection == 'rock';
});

paper.addEventListener('click', () => {
    playerSelection == 'paper';
});

scissors.addEventListener('click', () => {
    playerSelection == 'scissors';
});


// Process play:
function playRound() {
    // playerSelection = playerSelection.toLowerCase();

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





function game() {
    // Run a game of 5 plays
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Please choose between Rock, Paper and Scissors:');
        playerSelection = playerSelection.toLowerCase();

        // Check if RPS is inputted
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection, tie);
    
            // Play results
            console.log('Computer ' + computerScore + ' - Player ' + playerScore + '      //      Tie - ' + tie);
        
        }
        else {
            // Ask to prompt new RPS if something else is inputed
            playerSelection = prompt('Could you choose between Rock, Paper and Scissors, please:');
            playerSelection = playerSelection.toLowerCase();
            i--;
        }
    }

    // Game results
    if (playerSelection > computerSelection) {
        console.log('Good job! You won!');
    }
    else {
        console.log('You lost... Would you like to play again?');
    }
}




// Computer selection
function computerPlay() {
    return RPS[Math.floor(Math.random() * RPS.length)] 
 };







// // Process play:
// function playRound() {
//     playerSelection = playerSelection.toLowerCase();
//     // Player choose rock
//     if(playerSelection == 'rock' && computerSelection == 'paper') {
//         let result = 'You lose! Paper beats Rock';
//         return result;
//     }
//     else if(playerSelection == 'rock' && computerSelection == 'scissors') {
//         let result = 'You win! Rock beats Scissors';
//         return result;
//     }
//     else if(playerSelection == 'rock' && computerSelection == 'rock') {
//         let result = 'Its a tie!';
//         return result;
//     }

//     // Player choose scissors
//     if(playerSelection == 'scissors' && computerSelection == 'rock') {
//         let result = 'You lose! Rock beats Scissors';
//         return result;
//     }
//     else if(playerSelection == 'scissors' && computerSelection == 'paper') {
//         let result = 'You win! Scissors beats Paper';
//         return result;
//     }
//     else if(playerSelection == 'scissors' && computerSelection == 'scissors') {
//         let result = 'Its a tie!';
//         return result;
//     }

//     // Player choose paper
//     if(playerSelection == 'paper' && computerSelection == 'scissors') {
//         let result = 'You lose! Scissors beats Paper';
//         return result;
//     }
//     else if(playerSelection == 'paper' && computerSelection == 'rock') {
//         let result = 'You win! Paper beats Rock';
//         return result;
//     }
//     else if(playerSelection == 'paper' && computerSelection == 'paper') {
//         let result = 'Its a tie!';
//         return result;
//     }
    
// }
