let choice = [ 
 "rock",
 "paper",
 "scissors"
];

let winner;

function getComputerChoice(array) {
    return array[Math.floor(Math.random()*choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        winner = "Rock beats scissors, you win!";}

    if (playerSelection == "rock" && computerSelection == "paper") {
        winner = "Paper beats rock, you lose!";}
    
    if (playerSelection == "rock" && computerSelection == "rock") {
        winner = "Rock on rock, tie game!";}

    if (playerSelection == "paper" && computerSelection == "rock") {
        winner = "Paper beats rock, you win!";}

    if (playerSelection == "paper" && computerSelection == "paper") {
        winner = "Paper on paper, tie game!";}

    if (playerSelection == "paper" && computerSelection == "scissors") {
        winner = "Scissors beats paper, you lose!";}

    if (playerSelection == "scissors" && computerSelection == "rock") {
        winner = "Rock beats scissors, you lose!";}

    if (playerSelection == "scissors" && computerSelection == "paper") {
        winner = "Scissors beat paper, you win!";}

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        winner = "Scissors on Scissors, tie game!";}
}

console.log(getComputerChoice(choice));