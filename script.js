const RPS = ['Rock', 'Paper', 'Scissors'];

function computerPlay() {
       return RPS[Math.floor(Math.random() * RPS.length)] 
    }
   
    console.log(computerPlay());

