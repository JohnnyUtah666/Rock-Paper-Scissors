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
}

console.log(getComputerChoice(choice));