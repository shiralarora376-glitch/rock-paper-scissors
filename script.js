let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw 🤝";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        result = "You Win 🎉";
    } 
    else {
        computerScore++;
        result = "Computer Wins 😢";
    }

    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
    document.getElementById("result").innerText =
        `You chose ${userChoice}, Computer chose ${computerChoice}. ${result}`;
}
