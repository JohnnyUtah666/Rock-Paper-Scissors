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
       return winner = "Rock beats scissors, you win!";

     } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
       return winner = "Paper beats rock, you lose!";
    
     } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "rock") {
        return winner = "Rock on rock, tie game!";

     } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
      return winner = "Paper beats rock, you win!";

     } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        return winner = "Paper on paper, tie game!";

     } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        return winner = "Scissors beats paper, you lose!";

     } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        return winner = "Rock beats scissors, you lose!";

     } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        return winner = "Scissors beat paper, you win!";

     } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "scissors") {
        return winner = "Scissors on Scissors, tie game!";

     } else {
        return winner = "Invalid Input";

}
}
console.log(playRound(playerSelection, computerSelection));

console.log(winner);