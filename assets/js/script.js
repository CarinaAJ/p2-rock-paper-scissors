// DOM 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let userPick;

let computerPickDisplay = document.getElementById("computer-pick");

// computer pick function

function createComputerChoice() {
    const rpsOptions = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * 3);
    return rpsOptions[randomChoice];
}

computerPickDisplay.innerHTML = `Computer chose ${createComputerChoice()}`;

// user event listener

rock.addEventListener("click", function () {
    let userPick = document.getElementById("user-pick");
    userPick.innerHTML = "You chose Rock";
});

paper.addEventListener("click", function () {
    let userPick = document.getElementById("user-pick");
    userPick.innerHTML = "You chose Paper";
});

scissors.addEventListener("click", function () {
    let userPick = document.getElementById("user-pick");
    userPick.innerHTML = "You chose Scissors";
});