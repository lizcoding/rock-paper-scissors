const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const CHOICES = [ROCK, PAPER, SCISSORS];

// Add event listener to player buttons
const rockButton = document.querySelector('.rock-button');
const paperButton = document.querySelector('.paper-button');
const scissorsButton = document.querySelector('.scissors-button');

rockButton.addEventListener('click', playRoundRock);
paperButton.addEventListener('click', playRoundPaper);
scissorsButton.addEventListener('click', playRoundScissors);

let num_of_computer_wins = 0;
let num_of_player_wins = 0;
let num_of_ties = 0;
let num_of_rounds = 0;

let round_number = document.getElementById('round-number');
let player_score = document.getElementById('player-score');
let computer_score = document.getElementById('computer-score');
let ties = document.getElementById('number-of-ties');

function printCurrentScore() {
    round_number.textContent = ("ROUND: " + num_of_rounds);
    player_score.textContent = ("Player: " + num_of_player_wins);
    computer_score.textContent = ("Computer: " + num_of_computer_wins);
    ties.textContent = ("Ties: " + num_of_ties);
}

// Returns computer selection
function getComputerPlay() {
    const rand_index = Math.floor(Math.random() * CHOICES.length);
    const computerSelection = CHOICES[rand_index];
    return computerSelection;
}

// Make these lambda functions defined in event listener
function playRoundRock() {
    updateResults(playRound(ROCK))
}

function playRoundPaper() {
    updateResults(playRound(PAPER))
}

function playRoundScissors() {
    updateResults(playRound(SCISSORS))
}

let result_str = document.getElementById('result-str');
// Determines the winner of the round and returns the winner as a string
function playRound(playerSelection) {
    const computerSelection = getComputerPlay()
    let result = '';
    if (playerSelection === ROCK) {
        switch (computerSelection) {
            case PAPER:
                result = 'computer';
                result_str.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection + ".");
                break;
            case SCISSORS:
                result = 'player';
                result_str.textContent = ("You Win! " + playerSelection + " beats " + computerSelection + ".");
                break;
            default:
                result = 'tie';
                result_str.textContent = ("You tied! Both players selected " + playerSelection + ".");
        }
    }
    if (playerSelection === PAPER) {
        switch (computerSelection) {
            case SCISSORS:
                result = 'computer';
                result_str.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection + ".");
                break;
            case ROCK:
                result = 'player';
                result_str.textContent = ("You Win! " + playerSelection + " beats " + computerSelection + ".");
                break;
            default:
                result = 'tie';
                result_str.textContent = ("You tied! Both players selected " + playerSelection + ".");
        }
    }
    if (playerSelection === SCISSORS) {
        switch (computerSelection) {
            case ROCK:
                result = 'computer';
                result_str.textContent = ("You Lose! " + computerSelection + " beats " + playerSelection + ".");
                break;
            case PAPER:
                result = 'player';
                result_str.textContent = ("You Win! " + playerSelection + " beats " + computerSelection + ".");
                break;
            default:
                result = 'tie';
                result_str.textContent = ("You tied! Both players selected " + playerSelection + ".");
        }
    }
    return result;
}

// Runs game until winner is determined and round/game results are printed to the console
function updateResults(roundResults) {
    if (num_of_computer_wins < 5 && num_of_player_wins < 5) {
        num_of_rounds++;
        if (roundResults === 'computer') {
            num_of_computer_wins++;    
        } else if (roundResults === 'player') {
            num_of_player_wins++;
        } else {
            num_of_ties++;
        }
        printCurrentScore();
    }
    if (num_of_player_wins == 5) {
        result_str.textContent = ("Congratulations! You won the game!")
    } 
    if (num_of_computer_wins == 5) {
        result_str.textContent = ("Sorry, you lost! Better luck next game!")
    }
}

