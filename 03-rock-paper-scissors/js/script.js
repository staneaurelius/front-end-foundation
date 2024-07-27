// Check if script is connected
console.log('Welcome to Rock-Paper-Scissors: the Game!');


// Randomize computer choice
function getComputerChoice() {
    const randomNumber = Math.random();
    let computerChoice;

    if (randomNumber < 1/3) {
        computerChoice = 'rock';
    } else if (randomNumber > 2/3) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    };

    return computerChoice;
};


// Playing a round
function playRound(humanChoice, computerChoice) {
    let winner;

    if (humanChoice === computerChoice) {
        winner = null;
    } else {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'paper') {
                    winner = 'computer';
                } else {
                    winner = 'human';
                };
                break;

            case 'paper':
                if (computerChoice === 'scissors') {
                    winner = 'computer';
                } else {
                    winner = 'human';
                };
                break;

            case 'scissors':
                if (computerChoice === 'rock') {
                    winner = 'computer';
                } else {
                    winner = 'human';
                };
                break;
        };
    };

    return winner;
};

// Play game using UI
const playerStatus = document.querySelector('.player-status');
const computerStatus = document.querySelector('.computer-status');
const buttons = document.querySelectorAll('button')

function getPlayerChoice (buttonId) {
    let playerChoice = document.createElement('img');
    playerChoice.src = `images/${buttonId}.png`;
    playerChoice.style.cssText = `
        width: 96px;
        height: 96px;
    `;
    return playerChoice;
};

function changeComputerChoice (computerChoice) {
    let computerImage = document.createElement('img');
    computerImage.src = `images/${computerChoice}.png`;
    computerImage.style.cssText = `
        width: 96px;
        height: 96px;
    `;
    return computerImage;
}

buttons.forEach((button) => {
    button.addEventListener('click', function(e) {
        // Change player choice to the selected hand sign
        const playerChoice = e.target.id;
        const playerImage = getPlayerChoice(playerChoice);
        playerStatus.firstElementChild.replaceWith(playerImage);

        // Change computer choice
        const computerChoice = getComputerChoice();
        const computerImage = changeComputerChoice(computerChoice);
        computerStatus.firstElementChild.replaceWith(computerImage);

        // Round scoring
        const winner = playRound(playerChoice, computerChoice);
        let currentPlayerScore = document.querySelector('#player-score');
        let currentComputerScore = document.querySelector('#computer-score');

        let roundConclusion = document.createElement('p');
        roundConclusion.id = 'conclusion-text';
        roundConclusion.style.marginBottom = '36px';

        if (winner === 'human') {
            currentPlayerScore.textContent++;
            roundConclusion.innerHTML = `You win! <span class="${playerChoice}">${playerChoice}</span> beats <span class="${computerChoice}">${computerChoice}</span>`;
        } else if (winner === 'computer') {
            currentComputerScore.textContent++;
            roundConclusion.innerHTML = `You lose! <span class="${computerChoice}">${computerChoice}</span> beats <span class="${playerChoice}">${playerChoice}</span>`;
        } else {
            roundConclusion.textContent = "It's a draw!";
        };
        
        const conclusionText = document.querySelector('#conclusion-text')
        conclusionText.replaceWith(roundConclusion);

        // Final score
        if (currentPlayerScore.textContent == 5 || currentComputerScore.textContent == 5) {
            let gameConclusion;
            if (currentPlayerScore.textContent > currentComputerScore.textContent) {
                gameConclusion = 'Congratulations! You win the game!';
            } else {
                gameConclusion = 'You lost! Try again harder!';
            };
            alert(gameConclusion);

            // Reset everything back
            conclusionText.textContent = 'Make your choice';
            currentPlayerScore.textContent = 0;
            currentComputerScore.textContent = 0;
        };
    });
});