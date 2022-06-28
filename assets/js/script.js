// DOM 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let computerPickDisplay = document.getElementById("computer-pick");

// computer pick function

function createComputerChoice(){
    const rpsOptions = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random()*3);
    return rpsOptions[randomChoice];
}

computerPickDisplay.innerHTML = createComputerChoice();