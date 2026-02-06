let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameOver = false;

const winPatterns = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function play(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = currentPlayer;
  document.querySelectorAll(".board button")[index].innerText = currentPlayer;

  if (checkWin()) {
    document.getElementById("status").innerText =
      `Player ${currentPlayer} Wins 🎉`;
    gameOver = true;
    return;
  }

  if (!board.includes("")) {
    document.getElementById("status").innerText = "It's a Draw 🤝";
    gameOver = true;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").innerText =
    `Player ${currentPlayer} Turn`;
}

function checkWin() {
  return winPatterns.some(pattern =>
    pattern.every(i => board[i] === currentPlayer)
  );
}

function resetGame() {
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  gameOver = false;
  document.getElementById("status").innerText = "Player X Turn";
  document.querySelectorAll(".board button").forEach(b => b.innerText = "");
}
