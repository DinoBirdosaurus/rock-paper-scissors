// STEP 1
// create array to store into gameChoices
// get computer to randomly return 1 of 3 variables(rock, paper, scissors)

const gameChoices = ["rock", "paper", "scissors"];
const getComputerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(getComputerChoice);
   //added a second randomizer posing as Player to simulate win-lose-tie scenarios without manual user input  
const getPlayerChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    console.log(getPlayerChoice);

// STEP 2
// create function that starts 1 round of R,P,S
// define hierarchy to R,P,S choices
    //Rock is greater than Scissors
    // Paper is greater than Rock
    // Scissors is greater than Paper
    //If param 1 is equal to param 2, its a tie.
// function should take 2 parameters and determine result as winner, loser or a tie
// If winner, print out "You Win!, Param1 beats Param2"
// If loser, print out " You Lose!, Param1 beats Param2"
// If tie, print out "Its a Tie!, Try Again"

function roundOne(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
            return 'Tie!';
    } 
    if (playerSelection === "paper")
        if (computerSelection === "rock") {
                return "You Win! Paper beats Rock!";
            } else {
                if (computerSelection === "scissors") {
                    return "You Lose! Scissors beats Paper!"
                }
            }
    

    if (playerSelection === "rock") 
        if (computerSelection === "paper") {
                return "You Lose! Paper beats Rock!";
            }  else {
             if (computerSelection === "scissors") {
                return "You Win! Rock beats Scissors!";
             }
        }
    if (playerSelection === "scissors")
        if (computerSelection === "paper") {
            return "You Win! Scissors beats Paper!";
        } else {
            if (computerSelection === "rock") {
                return "You Lose! Rock beats Scissors!";
            }
        }
    }
const playerSelection = getPlayerChoice;
const computerSelection = getComputerChoice;
    console.log(roundOne(playerSelection, computerSelection));