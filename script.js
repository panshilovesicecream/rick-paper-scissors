// script.js
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultElement = document.getElementById("result");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner("rock", computerChoice);
    resultElement.innerText = `Computer chose ${computerChoice}. ${result}`;
});

paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner("paper", computerChoice);
    resultElement.innerText = `Computer chose ${computerChoice}. ${result}`;
});

scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = determineWinner("scissors", computerChoice);
    resultElement.innerText = `Computer chose ${computerChoice}. ${result}`;
});