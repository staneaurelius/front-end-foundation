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


// Prompt user to input hand signal
function getHumanChoice() {
    let humanChoice;
    let validity = false;

    while (!validity) {
        humanChoice = prompt('What is your hand signal? (Rock / Paper / Scissors)').toLowerCase();
        switch (humanChoice) {
            case 'rock':
                validity = true;
                break;
            case 'scissors':
                validity = true;
                break;
            case 'paper':
                validity = true;
                break;
            default:
                console.log('Please enter a valid hand signal!');
        };
    };

    return humanChoice;
};


// Playing a round
function playRound(humanChoice, computerChoice) {
    let winner;

    if (humanChoice === computerChoice) {
        winner = null;
        console.log(`Computer also choose ${computerChoice}, it's a draw!`);
    } else {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'paper') {
                    winner = 'computer';
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    winner = 'human';
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                };
                break;

            case 'paper':
                if (computerChoice === 'scissors') {
                    winner = 'computer';
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    winner = 'human';
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                };
                break;

            case 'scissors':
                if (computerChoice === 'rock') {
                    winner = 'computer';
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    winner = 'human';
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                };
                break;
        };
    };

    return winner;
};


// Final game
function playGame() {
    let humanScore = 0,
        computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const winner = playRound(humanSelection, computerSelection);
        
        // Game scoring
        if (winner) {
            winner === 'human' ? humanScore++ : computerScore++;
        };

        console.log(`Current score:\n    Player: ${humanScore}\n    Computer: ${computerScore}`);
    };
};

// playGame();