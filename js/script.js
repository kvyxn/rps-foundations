let textStyleIntro  = "font-family: monospace; font-size: 20px; color: #A39C8F;";
let textStyleInfo   = "font-family: monospace; font-size: 18px; color: #70798C;";
let textStyleDraw   = "font-family: monospace; font-size: 20px; color: #E7AF36;";
let textStyleWin    = "font-family: monospace; font-size: 20px; color: #01796F;";
let textStyleLose   = "font-family: monospace; font-size: 20px; color: #D21F3C;";

console.log("%cThe Rock-Paper-Scissor Game you will absolutely LOVE.", textStyleIntro);
console.log("%c    rock     | Rock      | ROCK      | rOcK      | ...", textStyleInfo);
console.log("%c    paper    | Paper     | PAPER     | pApEr     | ...", textStyleInfo);
console.log("%c    scissor  | Scissor   | SCISSOR   | sCiSsOr   | ...", textStyleInfo);

function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber)
    {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}

function playRound() {
    let computerChoice  = randomChoice();
    let playerChoice    = prompt("Select your Choice: ").toLowerCase();

    if (playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors") {
        let drawMessage     = "It's a Draw! You both picked " + capitalizeString(playerChoice) + ".";
        let winMessage      = "You Win! "  + capitalizeString(playerChoice) + " beats " + capitalizeString(computerChoice) + ".";
        let loseMessage     = "You Lose! " + capitalizeString(computerChoice) + " beats " + capitalizeString(playerChoice) + ".";

        if (playerChoice == computerChoice) {
            console.log("%c" + drawMessage, textStyleDraw);
        }
        else if (playerChoice == "rock") {
            if (computerChoice == "paper") console.log("%c" + loseMessage, textStyleLose);
            else console.log("%c" + winMessage, textStyleWin);
        }
        else if (playerChoice == "paper") {
            if (computerChoice == "scissor") console.log("%c" + loseMessage, textStyleLose);
            else console.log("%c" + winMessage, textStyleWin);
        }
        else if (playerChoice == "scissor") {
            if (computerChoice == "rock") console.log("%c" + loseMessage, textStyleLose);
            else console.log("%c" + winMessage, textStyleWin);
        }
    }
    else {
        console.log("%cYou Lose! Your choice -- " + playerChoice + "-- is not valid. [Check above]", textStyleLose);
    }
}

function playGame() {
    let roundsNo = parseInt(prompt("Enter number of rounds: ", 1));
    for(let i = 1; i <= roundsNo; i++) playRound();
}

playGame();