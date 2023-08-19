function getComputerChoice() {
    if (Math.floor(Math.random() * 3) == 0) {
        return 'Rock';
    } else if (Math.floor(Math.random() * 3) == 1) {
        return 'Paper';
    } else if (Math.floor(Math.random() * 3) == 2) {
        return 'Scissor';
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let result;
    if( (playerSelection == 'rock' || playerSelection == 'ROCK' || playerSelection == 'Rock' ) 
        && (computerSelection ==)        
    )

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));