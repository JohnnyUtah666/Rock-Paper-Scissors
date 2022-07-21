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

function playRound(playerSelection, computerSelection) {
     
    if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        winner = "Rock beats scissors, you win!";

     } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        winner = "Paper beats rock, you lose!";
    
     } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        winner = "Rock on rock, tie game!";

     } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        winner = "Paper beats rock, you win!";

     } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        winner = "Paper on paper, tie game!";

     } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        winner = "Scissors beats paper, you lose!";

     } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        winner = "Rock beats scissors, you lose!";

     } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        winner = "Scissors beat paper, you win!";

     } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        winner = "Scissors on Scissors, tie game!";

     } else {
        winner = "Invalid Input";
     
        return winner;

}
}
console.log(playRound(playerSelection, computerSelection));

console.log(winner);