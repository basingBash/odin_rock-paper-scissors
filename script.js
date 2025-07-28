let humanScore = 0;
let computerScore = 0;
playGame();


function getComputerChoice() {
    const computerRandom = Math.random();
    if(computerRandom < 1 / 3) {
        console.log('rock');
        return 'rock';
    } else if (computerRandom < 2 / 3) {
        console.log('paper');
        return 'paper';
    } else {
        console.log('scissors');
        return 'scissors'
    }
}

function getHumanChoice() {
    const playerChoice =  prompt('Move :', ).toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

function playRound(computerMove, playerMove) {
    if(playerMove === computerMove) {
        alert('its a draw');
    } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')) {
        alert('Player Wins!');
        humanScore++;
    } else {
        alert('Computer Wins!')
        computerScore++;
    }
}

function playGame() {
    const maxRound = 5;
    for(let i = 0; i < maxRound; i++) {
        const computerMove = getComputerChoice();
        const playerMove = getHumanChoice();
        playRound(computerMove, playerMove);
    }
    console.log(`player score: ${humanScore}, Computer score: ${computerScore}`)
}
