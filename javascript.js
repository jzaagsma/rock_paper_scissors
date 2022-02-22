const playerScore = 0;
const computerScore = 0;
const playerScore_span = document.getElementById("player_score");
const computerScore_span = document.getElementById("computer_score");
const score_div = document.querySelector(".score");
const result_div = document.querySelector(".result");
const rock_div = document.querySelector("rock");
const paper_div = document.querySelector("paper");
const scissors_div = document.querySelector("scissors");

// this is called "caching the DOM", which means storing them for use later. 
// we are storing all of these things in variables so that we can manipulate 
// the DOM using them later. 

// at 31:36 on youtube video