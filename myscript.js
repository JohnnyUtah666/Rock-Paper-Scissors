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
        return "Rock beats scissors, you win!";}

    if (playerSelection == "rock" && computerSelection == "paper") {
        return "Paper beats rock, you lose!";}
    
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Rock on rock, tie game!";}

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "Paper beats rock, you win!";}

    if (playerSelection == "paper" && computerSelection == "paper") {
        return "Paper on paper, tie game!";}

    if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Scissors beats paper, you lose!";}

    if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Rock beats scissors, you lose!";}

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Scissors beat paper, you win!";}

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Scissors on Scissors, tie game!";}
}

console.log(getComputerChoice(choice));