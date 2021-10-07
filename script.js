const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const CHOICES = [ROCK, PAPER, SCISSORS];

// Returns computer selection
function computerPlay() {
    rand_index = Math.floor(Math.random() * CHOICES.length());
    computerSelection = CHOICES[rand_index];
    return computerSelection;
}

// Validates and returns player selection
function getPlayerSelection() {
    let validPlayerSelection = False;
    while (validPlayerSelection === False) {
        player_input = prompt("Enter 'Rock', 'Paper', or 'Scissors': ");
        for (i in CHOICES) {
            if (player_input.equalsIgnoreCase(i)) {
                player_input = i;
                return player_input;
            }
        }
        console.log("Invalid selection: Please choose Rock, Paper, or Scissors!");
    }
}

// Determines the winner of the round and returns the winner as a string
function playRound(playerSelection, computerSelection) {
    result = '';
    if (playerSelection === ROCK) {
        switch (computerSelection) {
            case PAPER:
                result = 'computer';
                break;
            case SCISSORS:
                result = 'player';
                break;
            default:
                result = 'tie';
        }
    }
    if (playerSelection === PAPER) {
        switch (computerSelection) {
            case SCISSORS:
                result = 'computer';
                break;
            case ROCK:
                result = 'player';
                break;
            default:
                result = 'tie';
        }
    }
    if (playerSelection === SCISSORS) {
        switch (computerSelection) {
            case ROCK:
                result = 'computer';
                break;
            case PAPER:
                result = 'player';
                break;
            default:
                result = 'tie';
        }
    }
    return result;
}

// Runs game until winner is determined and round/game results are printed to the console
function playGame() {
    let num_of_computer_wins = 0;
    let num_of_player_wins = 0;
    let num_of_ties = 0;
    let num_of_rounds = 0;

    function printCurrentScore() {
        console.log("ROUND: " + num_of_rounds);
        console.log("Player: " + num_of_player_wins);
        console.log("Computer: " + num_of_computer_wins);
        console.log("Ties: " + num_of_ties);
    }

    console.log("Welcome to Rock Papper Scissors! You will play versus the computer. First to win 3 rounds wins the game!");

    while (num_of_computer_wins < 3 || num_of_player_wins < 3) {
        let playerSelection = getPlayerSelection()
        let computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);

        num_of_rounds++;

        if (winner === 'computer') {
            console.log("You Lose! " + computerSelection + " beats " + playerSelection + ".");
            num_of_computer_wins++;    
        } else if (winner === 'player') {
            console.log("You Win! " + playerSelection + " beats " + computerSelection + ".");
            num_of_player_wins++;
        } else {
            console.log("You tied! Both players selected " + playerSelection + ".");
            num_of_ties++;
        }
        printCurrentScore();
    }
    if (num_of_computer_wins > num_of_player_wins) {
        console.log("Congratulations! You won the game!")
    } else {
        console.log("Sorry, you lost! Better luck next game!")
    }
}

