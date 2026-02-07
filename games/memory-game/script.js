const grid = document.getElementById("grid");
const status = document.getElementById("status");

const emojis = ["🍎","🍌","🍇","🍉","🍒","🥝","🍑","🍍"];
let cards = [...emojis, ...emojis];

let firstCard = null;
let secondCard = null;
let lock = false;
let matched = 0;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function createBoard() {
  grid.innerHTML = "";
  matched = 0;
  status.innerText = "";

  shuffle(cards);

  cards.forEach(emoji => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerText = "❓";
    card.dataset.emoji = emoji;

    card.addEventListener("click", () => flipCard(card));
    grid.appendChild(card);
  });
}

function flipCard(card) {
  if (lock || card === firstCard || card.classList.contains("flipped")) return;

  card.innerText = card.dataset.emoji;
  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  lock = true;

  if (firstCard.dataset.emoji === secondCard.dataset.emoji) {
    matched += 2;
    resetTurn();
    if (matched === cards.length) {
      status.innerText = "🎉 You Win!";
    }
  } else {
    setTimeout(() => {
      firstCard.innerText = "❓";
      secondCard.innerText = "❓";
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      resetTurn();
    }, 800);
  }
}

function resetTurn() {
  [firstCard, secondCard, lock] = [null, null, false];
}

function resetGame() {
  createBoard();
}

createBoard();
