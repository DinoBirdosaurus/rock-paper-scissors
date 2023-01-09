let buttons = document.querySelectorAll("button");
// computer choice randomizer
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

};
//score keeping
let userScore = 0;
let compScore = 0;

//player input
const getPlayerChoice = userInput => {
    userInput = prompt("Rock, Paper or Scissor?").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        console.log("Error, please type: rock, paper or scissors.");
    }
};

//game logic
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        userScore++;
        compScore++;
        return "Draw!"
    } 
    if (playerSelection === "rock")
        if (computerSelection === "paper") {
            compScore++;
            return "You Lose! Paper covers Rock.";
        } else {
            if (computerSelection === "scissors") {
                userScore++;
                return "You Win! Rock crushes Scissors";
            }
        }
    if (playerSelection === "paper")
        if (computerSelection === "rock") {
            userScore++;
            return "You Win! Paper covers Rock.";
        } else {
            if (computerSelection === "scissors") {
                compScore++;
                return "You Lose! Scissors cut Paper.";
            }
        }
    if (playerSelection === "scissors")
        if (computerSelection === "rock") {
            compScore++;
            return "You Lose! Rock crushes Scissors.";
        } else {
            if (computerSelection === "paper") {
                userScore++;
                return "You Win! Scissors cut Paper.";
            }
        }
    
};

//actual game function
/*
const game = () => {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log("You chose: " + playerSelection);
        console.log("The computer chose: " + computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        console.log("Your Score: " + userScore);
        console.log("Computer Score: " + compScore);
        console.log("=========================")
    }
};

game();
*/






