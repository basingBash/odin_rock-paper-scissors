document.addEventListener('DOMContentLoaded', () => {
    const playerInput = document.querySelectorAll('.input');
    const display = document.querySelector('div');
    const playGame = document.querySelector('.playGame');
    const para = document.querySelector('.rounds');
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    playGame.disabled = true;

    function computerChoice() {
        const random = Math.random();
        if (random < 1 / 3) {
            return 'rock';
        } else if (random < 2 / 3) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    playGame.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        rounds = 0;
        playGame.disabled = true;
        playerInput.forEach((button) => button.disabled = false);
        display.textContent = 'New Game Started!';
    })

    function playRound(playerMove, computerMove) {
        if(playerMove === computerMove) {
            display.textContent = 'its a tie!'
        } else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock')){
            humanScore++;
            display.textContent = ' +1 point to the Player';
        } else {
            computerScore++;
            display.textContent = ' +1 point to the Computer';
        }
        console.log(`Player : ${humanScore} | computer : ${computerScore}`);
        rounds++;
    }
    playerInput.forEach((button) => {
        button.addEventListener('click', () => {
            const playerMove = button.dataset.choice;
            const computerMove = computerChoice();
            playRound(playerMove, computerMove);
            maxRounds();
            
        })
    })
    function maxRounds() {
        if(rounds >= 5) {
            playerInput.forEach((button) => button.disabled = true);
            if(humanScore > computerScore) {
                display.textContent = `Game Over: Player Wins!`
            } else if (humanScore < computerScore){
                display.textContent = `Game Over: Computer Wins!`
            } else if (humanScore == computerScore) {
                display.textContent = `Game Over: Its a Tie!`
            }
            playGame.disabled = false;
        }
    }
    
})