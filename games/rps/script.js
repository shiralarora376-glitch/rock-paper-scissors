function play(user) {
  const choices = ["rock", "paper", "scissors"];
  const computer = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (user === computer) result = "Draw 🤝";
  else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) result = "You Win 🎉";
  else result = "Computer Wins 😢";

  document.getElementById("result").innerText =
    `You: ${user} | Computer: ${computer} → ${result}`;
}
