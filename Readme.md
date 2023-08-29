# Rock Paper Scissors Game

Welcome to the Rock Paper Scissors game project! This is a simple web-based game built using HTML, CSS, and JavaScript. Players can choose between rock, paper, and scissors, and the game determines the winner based on the classic rules.

## Table of Contents

- [Getting Started](#getting-started)
- [Gameplay](#gameplay)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Clone or download this repository to your local machine to get started with the game.

## Gameplay

The game allows players to choose one of the three options: rock, paper, or scissors. The computer randomly selects its choice, and the game determines the winner based on the following rules:

- Rock crushes scissors
- Scissors cuts paper
- Paper covers rock

The game displays both the player's and computer's choices, along with the game result (win, lose, or tie).

## Technologies Used

- HTML: The structure of the game interface.
- CSS: Styling to make the game visually appealing.
- JavaScript: Implements game logic and user interaction.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pavan-Kamthane/Rock-Paper-Scissors.git

2. Navigate to the project directory:
```bash
cd Rock-Paper-Scissors

```
## Usage
1. Open `index.html` in a browser window for play!
![screenshot](![home screen](image.png))
2. Click on one of the buttons (rock, paper, scissors) to make your choice.
3. The game will display both your choice and the computer's choice, along with the game result.


## Explanation of JavaScript Code
The JavaScript code in this project is responsible for implementing the game logic, user interactions, and dynamically updating the game interface. Let's break down the key components of the code:

### Generating Computer's Choice
'''
function computerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
'''

The computerChoice function generates a random index to select the computer's choice from the choices array, which includes "rock", "paper", and "scissors".

### Playing the Game

'''
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

'''

### Button Event Listeners

'''
const choiceButtons = document.querySelectorAll(".choice");

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.id;
        play(playerChoice);
    });
});
'''

These lines of code set up event listeners for the choice buttons. When a button is clicked, the corresponding play function is called with the player's choice as an argument.

By combining these components, the JavaScript code enables the game to respond to user interactions, update the game interface, and provide an interactive and dynamic gaming experience.

## Contributing
Contributions are welcome! If you find any issues or want to enhance the game, feel free to submit a pull request.
