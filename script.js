const RPS = ['rock', 'paper', 'scissors'];
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let tie = 0;

// GAME:
console.log(game())

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Please choose between Rock, Paper and Scissors:');
        playerSelection = playerSelection.toLowerCase();
        if(playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors'){
            computerSelection = computerPlay();
            playRound(playerSelection, computerSelection, tie);
    
            console.log('Computer ' + computerScore + ' - Player ' + playerScore + '      // Tie - ' + tie);
        }
        else {
            playerSelection = prompt('Could you choose between Rock, Paper and Scissors, please:');
            playerSelection = playerSelection.toLowerCase();
            i--;
        }
    }
    
    if(playerSelection > computerSelection) {
        console.log('Good job! You won!');
    }
    else {
        console.log('You lost... Would you like to play again?');
    }
}

// Process play:
function playRound() {
    playerSelection = playerSelection.toLowerCase();
    // Player choose rock
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        return computerScore, playerScore;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore += 1;
        return computerScore, playerScore;
    }
    else if(playerSelection == 'rock' && computerSelection == 'rock') {
        tie += 1;
        return tie, computerScore, playerScore;
    }

    // Player choose scissors
    if(playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        playerScore;
        return computerScore, playerScore;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        computerScore;
        playerScore += 1;
        return computerScore, playerScore;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'scissors') {
        tie += 1;
        return tie, computerScore, playerScore;
    }

    // Player choose paper
    if(playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        playerScore;
        return computerScore, playerScore;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        computerScore;
        playerScore += 1;
        return computerScore, playerScore;
    }
    else if(playerSelection == 'paper' && computerSelection == 'paper') {
        tie += 1;
        return tie, computerScore, playerScore;
    }
    
}


// Computer selection
function computerPlay() {
    return RPS[Math.floor(Math.random() * RPS.length)] 
 }







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


   
   

