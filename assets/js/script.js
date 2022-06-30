// DOM 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rpsOptions = ['Rock', 'Paper', 'Scissors'];
const result = document.getElementById("result");
let computerPickDisplay = document.getElementById("computer-pick");
const choices = document.querySelectorAll("rps-buttons");

// let computer pick at random

function createComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return rpsOptions[randomChoice];
}

// run game function
function game(userChoice) {
    let userPick = document.getElementById("user-pick");
    userPick.innerHTML = `chose ${userChoice}`;
    let computerChoice = createComputerChoice();
    computerPickDisplay.innerHTML = `chose ${computerChoice}`;
    displayResult(userChoice, computerChoice);
}

function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie";
    }
}

// event listeners for each button
rock.addEventListener("click", function () {
    game("Rock");
});

paper.addEventListener("click", function () {
    game("Paper");
});

scissors.addEventListener("click", function () {
    game("Scissors");
});