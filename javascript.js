const userScore = 0;
const computerScore = 0; 
const computerSelection = computerPlay();
const playerSelection = playerPlay();


function computerPlay(x){
    let randomNumber = Math.floor((Math.random() *3) +1);
    switch (randomNumber){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors';
    }
}

console.log(computerSelection);

function playerPlay(x){
    let selection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
    let answer = selection.toLowerCase();
    return answer;
}

console.log(playerSelection);