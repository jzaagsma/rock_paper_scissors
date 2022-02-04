const userScore = 0;
const computerScore = 0; 
const computerSelection = computerPlay();


function computerPlay(x){
    let randomNumber = Math.floor((Math.random() *3) +1);
    switch (randomNumber){
        case 1:
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
    }
}

console.log(computerSelection);