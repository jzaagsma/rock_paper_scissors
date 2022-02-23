let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("player_score");
const computerScore_span = document.getElementById("computer_score");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p"); // This gets the <p> tag
    //out of the "result" div. 
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissors");

// this is called "caching the DOM", which means storing them for use later. 
// we are storing all of these things in variables so that we can manipulate 
// the DOM using them later. This is a lot easier than typing out the 
// document.getElementByID or querySelector every time. There's also a 
// performance benefit, we only run the process one time and then store those 
// variables within the javascript file, rather then pulling them several times 
// from the HTML file. 

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
};

//this function takes a random number between 0 and 2, and selects rock paper or 
//scissors depending on which random number is chosen. This acts as the 
//computers random choice for the game

function win (playerChoice, computerChoice){
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    result_p.innerHTML = playerChoice + " beats " + computerChoice + ", You win!";
    document.getElementById(playerChoice).classList.add("green_glow");
    setTimeout(function() {document.getElementById(playerChoice).classList.remove("green_glow")}, 150);
};

// This function runs whenever the player wins the game. It adds 1 to the player's
// score, displays that on the page, and then displays the winning message by
// manipulating the DOM. A green glow class is also added to the whichever choice
// the player made, and removes that class after 150 ms. 

function lose (playerChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + " beats " + playerChoice + ", You lose!";
    document.getElementById(playerChoice).classList.add("red_glow");
    setTimeout(function() {document.getElementById(playerChoice).classList.remove("red_glow")}, 150);

};

// This function runs whenever the player loses the game. It adds 1 to the computer's
// score, displays that on the page, and then displays the losing message by
// manipulating the DOM. A red glow class is also added to the whichever choice
// the player made, and removes that class after 150 ms. 

function tie (){
    result_p.innerHTML = "It's a tie!"
};

// This function runs whenever the player ties the computer. The tie message
// displays that on the page by manipulating the DOM.

function game(playerChoice) {
    const computerChoice = getComputerChoice();
    switch (playerChoice + computerChoice) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            win(playerChoice, computerChoice);
            break;
        case "RockPaper":
        case "PaperScissors":
        case "ScissorsRock":
            lose(playerChoice, computerChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            tie();
            break;
    }
}

// This function uses the switch case method, which takes the input from the 
// player's choice and compares it to the computer's random choice. It then 
// passes those variables to the win or lose function and simply runs the 
// tied function if there is a tie. 

function main(){
    rock_div.addEventListener('click', function() {
        game("Rock");
    })
    
    paper_div.addEventListener('click', function() {
        game("Paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("Scissors");
    }) 
}

// This function adds event listeners to the rock, paper, and scissors images 
// on the HTML page. Whenever the player clicks on an image, the game function 
// is run with the respective choice. 

main();

