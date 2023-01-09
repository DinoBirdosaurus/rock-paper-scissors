let buttons = document.querySelectorAll(".button");


//score keeping
let userScore = 0;
let compScore = 0;

//player input
/*
const getPlayerChoice = userInput => {
    userInput = prompt("bolter, storm-shield or Scissor?").toLowerCase();
    if (userInput === "bolter" || userInput === "storm-shield" || userInput === "chainsword") {
        return userInput;
    } else {
        console.log("Error, please type: bolter, storm-shield or chainsword.");
    }
};
*/

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        const computerSelection = getComputerChoice();
        playerSelection = img.alt.toLowerCase(); // this translates image into playerSelection via alt string
        playRound(playerSelection, computerSelection);
        //showResults();
        console.log(`You chose: ${capitalize(playerSelection)}`);
        console.log(`The computer chose: ${capitalize(computerSelection)}`);
        console.log("Your Score: " + userScore);
        console.log("Computer Score: " + compScore);
        console.log("=========================")
        
        
        console.log(button.addEventListener);
    });
});
// computer choice randomizer
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "bolter";
        case 1:
            return "storm-shield";
        case 2:
            return "chainsword";
    }

};
//game logic
const playRound = (playerSelection, computerSelection) => {
    let result = "";
    if (playerSelection === computerSelection) {
        userScore;
        compScore;
        result = "Draw!";
    } 
    if (playerSelection === "bolter")
        if (computerSelection === "storm-shield") {
            compScore++;
            result =
                `You Lose! ${capitalize(
                computerSelection)} blocks ${playerSelection}.`;
        } else {
            if (computerSelection === "chainsword") {
                userScore++;
                result = 
                `You Win! ${capitalize(
                playerSelection)} has range advantage over ${computerSelection}`;
            }
        }
    if (playerSelection === "storm-shield")
        if (computerSelection === "bolter") {
            userScore++;
            result =
             `You Win! ${capitalize(
             playerSelection)} blocks ${computerSelection}.`;
        } else {
            if (computerSelection === "chainsword") {
                compScore++;
              result = 
              `You Lose! ${capitalize(
                computerSelection)} cuts through ${playerSelection}.`;
            }
        }
    if (playerSelection === "chainsword")
        if (computerSelection === "bolter") {
            compScore++;
            result = 
            `You Lose! ${capitalize(
                computerSelection)} has range advantage over ${playerSelection}.`;
        } else {
            if (computerSelection === "storm-shield") {
                userScore++;
               result = 
               `You Win! ${capitalize(
                playerSelection)} cuts through ${computerSelection}.`;
            }
        }
    document.getElementById("results-text").innerHTML = result;
    return
    
};
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const storeUserScore = () => {
    let userScoreBoard = document.querySelector("#playerScore");

    userScoreBoard.textContent = userScore;
};

const storeCompScore = () => {
    let cpuScoreBoard = document.querySelector("#opponentScore");

    cpuScoreBoard.textContent = compScore;
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






