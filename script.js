const choices = ["rock", "paper", "scissors"];

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function play(playerChoice) {
    const computer = computerChoice();
    const resultText = document.getElementById("result-text");
    const userChoiceText = document.getElementById("user-choice-text");
    const computerChoiceText = document.getElementById("computer-choice-text");

    // Update user and computer choice placeholders
    userChoiceText.textContent = playerChoice;
    computerChoiceText.textContent = computer;

    if (playerChoice === computer) {
        resultText.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computer === "scissors") ||
        (playerChoice === "paper" && computer === "rock") ||
        (playerChoice === "scissors" && computer === "paper")
    ) {
        resultText.textContent = "You win!";
    } else {
        resultText.textContent = "Computer wins!";
    }
}

const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        play(playerChoice);
    });
});
