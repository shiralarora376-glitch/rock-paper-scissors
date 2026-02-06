// Board state
let board = ["", "", "", "", "", "", "", "", ""];

// Current player
let currentPlayer = "X";

// Game over flag
let gameOver = false;

// Winning combinations
const winPatterns = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

// Play function (called on button click)
function play(index) {
  // Stop if cell already filled or game over
  if (board[index] !== "" || gameOver) {
    return;
  }

  // Update board & UI
  board[index] = currentPlayer;
  document.querySelectorAll(".board button")[index].innerText = currentPlayer;

  // Check win
  if (checkWin()) {
    document.getElementById("status").innerText =
      "Player " + currentPlayer + " Wins 🎉";
    gameOver = true;
    return;
  }

  // Check draw
  if (!board.includes("")) {
    document.getElementById("status").innerText = "It's a Draw 🤝";
    gameOver = true;
    return;
  }

  // Switch player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  document.getElementById("status").innerText =
    "Player " + currentPlayer + " Turn";
}

// Check winning logic
function checkWin() {
  for (let pattern of winPatterns) {
    if (
      board[pattern[0]] === currentPlayer &&
      board[pattern[1]] === currentPlayer &&
      board[pattern[2]] === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

// Reset game
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;

  document.getElementById("status").innerText = "Player X Turn";
  document.querySelectorAll(".board button").forEach(btn => {
    btn.innerText = "";
  });
}
