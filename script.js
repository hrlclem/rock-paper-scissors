const RPS = ['rock', 'paper', 'scissors'];
let playerSelection = prompt('Please choose between Rock, Paper and Scissors:')
let computerSelection = computerPlay()

function playRound() {
    playerSelection = playerSelection.toLowerCase();
    
    // Player choose rock
    if(playerSelection == 'rock' && computerSelection == 'paper') {
        let result = 'You lose! Paper beats Rock');
        return result;
    }
    else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        let result = 'You win! Rock beats Scssors');
        return result;
    }
    else if(playerSelection == 'rock' && computerSelection == 'rock') {
        let result = 'Its a tie!');
        return result;
    }

    // Player choose scissors
    if(playerSelection == 'scissors' && computerSelection == 'rock') {
        let result = 'You lose! Rock beats Scissors');
        return result;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        let result = 'You win! Scissors beats Paper');
        return result;
    }
    else if(playerSelection == 'scissors' && computerSelection == 'scissors') {
        let result = 'Its a tie!');
        return result;
    }

    // Player choose paper
    if(playerSelection == 'paper' && computerSelection == 'scissors') {
        let result = 'You lose! Scissors beats Paper');
        return result;
    }
    else if(playerSelection == 'paper' && computerSelection == 'rock') {
        let result = 'You win! Paper beats Rock');
        return result;
    }
    else if(playerSelection == 'paper' && computerSelection == 'paper') {
        let result = 'Its a tie!');
        return result;
    }
    


}


function computerPlay() {
       return RPS[Math.floor(Math.random() * RPS.length)] 
    }
   
    console.log(computerSelection);

