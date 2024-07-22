// Check if script is connected
console.log('Hello World!');


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


// Game scoring
let humanScore = 0,
    computerScore = 0;


// Playing a round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Computer also choose ${computerChoice}, it's a draw!`);
    } else {
        switch (humanChoice) {
            case 'rock':
                if (computerChoice === 'paper') {
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                };
                break;

            case 'paper':
                if (computerChoice === 'scissors') {
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                };
                break;

            case 'scissors':
                if (computerChoice === 'rock') {
                    computerScore++;
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                } else {
                    humanScore++;
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                };
                break;
        };
    };
};


// Final game
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);