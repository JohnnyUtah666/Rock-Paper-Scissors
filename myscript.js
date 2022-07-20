let choice = [ 
 "rock",
 "paper",
 "scissors"
];

let winner;

function getComputerChoice(array) {
    return array[Math.floor(Math.random()*choice.length)];
}

let playerSelection = prompt("Rock, Paper, or Scissors?")
let computerSelection = getComputerChoice(choice);
playRound(playerSelection, computerSelection);


function playRound(playerSelection, computerSelection) {
     
    if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Rock beats scissors, you win!";

     } else if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Paper beats rock, you lose!";
    
     } else if (playerSelection == "rock" && computerSelection == "rock") {
        winner = "Rock on rock, tie game!";

     } else if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Paper beats rock, you win!";

     } else if (playerSelection == "paper" && computerSelection == "paper") {
        winner = "Paper on paper, tie game!";

     } else if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Scissors beats paper, you lose!";

     } else if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "Rock beats scissors, you lose!";

     } else if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "Scissors beat paper, you win!";

     } else {
        winner = "Scissors on Scissors, tie game!";
        return winner;

}

console.log(getComputerChoice(choice))}