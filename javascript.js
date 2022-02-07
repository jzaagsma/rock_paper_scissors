let playerScore = 0;
let computerScore = 0; 

function game(){
    for (gameRound = 1; gameRound <6; gameRound++){
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        function computerPlay(){
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
        function playerPlay(){
            let selection = prompt("Please enter 'Rock', 'Paper', or 'Scissors'");
            let answer = selection.toLowerCase();
            return answer;
        }
        function playRound(playerSelection, computerSelection){
            console.log("Round: " + gameRound);
            if (playerSelection === computerSelection){
                console.log("You tied!");
            } else if(playerSelection === "rock" & computerSelection === "paper"){
                computerScore++; 
                console.log("You lose! Paper beats Rock!");
            } else if(playerSelection === "rock" & computerSelection === "scissors"){
                playerScore++;
                console.log("You win! Rock beats Scissors!");
            } else if(playerSelection === "paper" & computerSelection === "rock"){
                playerScore++;
                console.log("You win! Paper beats Rock!");
            } else if(playerSelection === "paper" & computerSelection === "scissors"){
                computerScore++;
                console.log("You lose! Scissors beats Paper!");
            } else if(playerSelection === "scissors" & computerSelection === "rock"){
                ComputerScore++;
                console.log("You lose! Rock beats Scissors!");
            } else if(playerSelection === "scissors" & computerSelection === "paper"){
                playerScore++;
                console.log("You win! Scissors beats Paper!");
            } else {
                console.log("Error, please check spelling")
            }
        }   
        console.log(playRound(playerSelection, computerSelection));
    }    
}
console.log(game());
console.log(`Score: Player = ${playerScore}: Computer = ${computerScore}`);
let gameWinner = winner();
function winner(){
    if( playerScore > computerScore){
        return "Player";
    } else if (playerScore < computerScore){
        return "Computer";
    } else {
        return "Nobody";
    }
}
console.log(gameWinner + "Wins!");