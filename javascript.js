// I promise to make this game better in the future when I have acquired more experience. For now this is all I've got.
let buttons = document.querySelectorAll(".button");
const evalText = document.querySelector("#eval-text");
const eval = document.querySelector("#eval");
let gameLog = document.createElement('ul');
gameLog.classList.add('round-result');
const resetGame = document.createElement('div');
resetGame.textContent = 'Try Again?';
resetGame.classList.add('button', 'refresh');

//score keeping
let userScore = 0;
let compScore = 0;


// activates divs to turn into clickable buttons for player choice
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const img = button.querySelector("img");
        const computerSelection = getComputerChoice();
        playerSelection = img.alt.toLowerCase(); // this translates image into playerSelection via alt string
        playRound(playerSelection, computerSelection);
        if (userScore === 5 || compScore === 5) {
            refreshPage();
        }
    //console.log()s for debugging
     /*   console.log(`You chose: ${capitalize(playerSelection)}`);
        console.log(`The computer chose: ${capitalize(computerSelection)}`);
        console.log("Your Score: " + userScore);
        console.log("Computer Score: " + compScore);
        console.log("=========================")*/
    // win condition
        
    })
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
    else if (
        (playerSelection == "bolter" && computerSelection == "chainsword") ||
        (playerSelection == "storm-shield" && computerSelection == "bolter") ||
        (playerSelection == "chainsword" && computerSelection == "storm-shield")) {

            userScore += 1;
            result =
                `You Win! ${capitalize(
                playerSelection)} beats ${computerSelection}.`;

            if (userScore == 5) {
                result = "Congrats! You pass the training module.";
                declareWinner();
               // refreshPage();
            }
        
            
    }
     else {
            compScore += 1;    
            result = 
                `You Lose! ${capitalize(
                computerSelection)} beats ${playerSelection}`;
            }
        
            if (compScore == 5) {
                result = "You failed! Try Again!";
                declareWinner();
               // refreshPage();
            }    
              
// results go at the bottom
    document.getElementById("playerScore").innerHTML = userScore;
    document.getElementById("opponentScore").innerHTML = compScore;
    document.getElementById("results-text").innerHTML = result;
};    
// declares winner
const declareWinner = () => {
    if (userScore > compScore) {
        alert ("Congrats! You pass the training module");
        //evalText.textContent = "Congrats! You pass the training module";
       // resetGame.innerText = "Try Again?";
    } else {
        alert ("You failed! Try Again!");
       // evalText.textContent = "You failed! Try Again!";
      //  resetGame.innerText = "Try Again?";
    }
};
// section for additional vanity functions
const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const refreshPage = () => {
    window.location.reload(true);
}
// for reset game button when I figure it out
resetGame.addEventListener('click', refreshPage);

/* =============================================================================

//old player input before ui addition

const getPlayerChoice = userInput => {
    userInput = prompt("bolter, storm-shield or Scissor?").toLowerCase();
    if (userInput === "bolter" || userInput === "storm-shield" || userInput === "chainsword") {
        return userInput;
    } else {
        console.log("Error, please type: bolter, storm-shield or chainsword.");
    }
};


//old game function

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






