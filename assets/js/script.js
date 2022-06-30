// DOM 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rpsOptions = ['Rock', 'Paper', 'Scissors'];
const result = document.getElementById("result");

// replace ABOVE with just choices to create a more generic function?

// computerPickDisplay needed!
let computerPickDisplay = document.getElementById("computer-pick");
const choices = document.querySelectorAll("rps-buttons");



// computer pick function

function createComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return rpsOptions[randomChoice];
}


// user event listener - must be an easier way to do this
function game(userChoice) {
    let userPick = document.getElementById("user-pick");
    userPick.innerHTML = `chose ${userChoice}`;
    let computerChoice = createComputerChoice();
    computerPickDisplay.innerHTML = `Computer chose ${computerChoice}`;

    displayResult(userChoice, computerChoice);

}

function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie";
    }
    
}



rock.addEventListener("click", function () {
    game("Rock");
});

paper.addEventListener("click", function () {
    game("Paper");
});

scissors.addEventListener("click", function () {
    game("Scissors");
});