// DOM 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rpsOptions = ['Rock', 'Paper', 'Scissors'];
const result = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");
let userScore = 0;
let computerScore = 0;


// let computer pick random choice
function createComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return rpsOptions[randomChoice];
}

// run game function
function game(userChoice) {
    let computerChoice = createComputerChoice();
    displayResult(userChoice, computerChoice);
}

// display result

function displayResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        result.innerHTML = "It's a tie 😲";
        userScoreDisplay.innerHTML = userScore;
        userScore++;
        computerScoreDisplay.innerHTML = computerScore;
        computerScore++;
    } else if (userChoice === "Rock" && computerChoice === "Scissors") {
        result.innerHTML = "Rock crushes Scissors! You win 😀";
        userScoreDisplay.innerHTML = userScore;
        userScore++;
    } else if (userChoice === "Scissors" && computerChoice === "Paper") {
        result.innerHTML = "Scissors cuts Paper! You win 😀";
        userScoreDisplay.innerHTML = userScore;
        userScore++;
    } else if (userChoice === "Paper" && computerChoice === "Rock") {
        result.innerHTML = "Paper covers Rock! You win 😀";
        userScoreDisplay.innerHTML = userScore;
        userScore++;
    } else if (userChoice == "Paper" && computerChoice === "Scissors") {
        result.innerHTML = "Scissors cuts Paper! You loose 🥺";
        computerScoreDisplay.innerHTML = computerScore;
        computerScore++;
    } else if (userChoice === "Scissors" && computerChoice === "Rock") {
        result.innerHTML = "Rock crushes Scissors! You loose 🥺";
        computerScoreDisplay.innerHTML = computerScore;
        computerScore++;
    } else {
        result.innerHTML = "Paper covers Rock! You loose 🥺";
        computerScoreDisplay.innerHTML = computerScore;
        computerScore++;
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