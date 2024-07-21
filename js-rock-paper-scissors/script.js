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

    return computerChoice
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
}


// Game scoring