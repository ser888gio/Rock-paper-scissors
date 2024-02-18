let choices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.choiceButton')

buttons.forEach(button => {
    button.addEventListener('click', () =>{
        let playerChoice = button.value;
        whoIsWinner(playerChoice)
    })
})

function computerMove() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function whoIsWinner(playerChoice) {
    let computerChoice = computerMove();
    let result = ""

    if (computerScore < 5 && playerScore < 5){
        if (playerChoice === computerChoice) {
            result = "Draw";
            playerScore += 1;
            computerScore += 1;
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "You won";
            playerScore += 1;
        } else {
            result = "Computer won";
            computerScore += 1;
        }
    }else{
        result = "Game over";
    }

    document.getElementById("playerChoice").innerHTML = playerChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    document.getElementById("result").innerHTML = result;
    document.getElementById("your_score").innerHTML = playerScore;
    document.getElementById("comp_score").innerHTML = computerScore;
}
