
function rockPapSciGame() {
var userChoice = prompt("Choose: rock, paper, or scissors");
if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
    alert("That is not one of the options. Please enter rock, paper, or scissors.");
} else {
    var compChoice = Math.random();
    if (compChoice < 0.33) {
        compChoice = 'rock';
    } else if (compChoice < 0.67) {
        compChoice = 'paper';
    } else {
        compChoice = 'scissors';
    }
    if (userChoice === compChoice) {
        alert("It's a tie! You and the computer chose" + compChoice + ".");
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'paper' && compChoice === 'rock') ||
        (userChoice === 'scissors' && compChoice === 'paper')
    ) {
        alert("You win! Your " + userChoice + " beat the computer's " + compChoice + ".");
    } else {
        alert("You lose! Computer's " + compChoice + " beats your " + userChoice + ".");
    }
}
}
rockPapSciGame()
