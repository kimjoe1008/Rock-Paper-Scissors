function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randInt = Math.floor(Math.random() * 3);
    return options[randInt];
}

function play(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return 0;
    }else if ((playerSelection === 'rock' && computerSelection === 'scissors')
    ||(playerSelection === 'paper' && computerSelection === 'rock')
    ||(playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 1;
    }else {
        return 2;
    }
}

function game() {
    let wins = 0;
    let losses = 0;
    for (let i = 0; i < 5; i++) {
        let result = 0;
        while (result === 0) {
            let input = prompt('Rock, Paper, or Scissors?');
            result = play(input, getComputerChoice());
            if (result === 0) {
                console.log("It's a tie");
            }
        }
        if (result == 1) {
            wins++;
            console.log('You win!');
        } else{
            losses++;
            console.log('You lose...');
        }
    }
    if (wins>losses) {
        console.log("You won");
    } else {
        console.log('You lost');
    }
}