let pScore = 0;
let cScore = 0;

const playerScore = document.querySelector(".player-score");
playerScore.textContent = "0";
const computerScore = document.querySelector(".computer-score");
computerScore.textContent = "0";

const playerPick = document.querySelector(".player-pick");
playerPick.textContent = "";
const computerPick = document.querySelector(".computer-pick");
computerPick.textContent = "";

const gameResult = document.querySelector(".game-result");
gameResult.textContent = "";

let getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber)
    {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}

let playGame = (playerChoice) => {
    let computerChoice = getComputerChoice();
    playerPick.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    computerPick.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        pScore++;
        playerScore.textContent = pScore;
    }
    else if (
        (computerChoice === "rock" && playerChoice === "scissors") ||
        (computerChoice === "paper" && playerChoice === "rock") ||
        (computerChoice === "scissors" && playerChoice === "paper")
    ) {
        cScore++;
        computerScore.textContent = cScore;
    } 
}

let playerChoice = "";

const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const retryButton = document.querySelector(".retry-button");

rockButton.addEventListener('click', () => {
    playerChoice = "rock";
    if ((pScore + cScore) < 5) playGame(playerChoice);
    else {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    
        if (pScore > cScore) gameResult.textContent = "Player Wins! Congratulations!!";
        else gameResult.textContent = "Computer Wins! Boo Hoo!";
        retryButton.disabled = false;
        retryButton.style.opacity = 1;
    }
});

paperButton.addEventListener('click', () => {
    playerChoice = "paper";
    if ((pScore + cScore) < 5) playGame(playerChoice);
    else {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    
        if (pScore > cScore) gameResult.textContent = "Player Wins! Congratulations!!";
        else gameResult.textContent = "Computer Wins! Boo Hoo!";
        retryButton.disabled = false;
        retryButton.style.opacity = 1;
    }
});

scissorsButton.addEventListener('click', () => {
    playerChoice = "scissors";
    if ((pScore + cScore) < 5) playGame(playerChoice);
    else {
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    
        if (pScore > cScore) gameResult.textContent = "Player Wins! Congratulations!!";
        else gameResult.textContent = "Computer Wins! Boo Hoo!";
        retryButton.disabled = false;
        retryButton.style.opacity = 1;
    }
});

retryButton.addEventListener('click', () => {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    retryButton.disabled = true;
    gameResult.textContent = "";
    retryButton.style.opacity = 0;
    pScore = 0; cScore = 0;
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    playerPick.textContent = "";
    computerPick.textContent = "";     
});