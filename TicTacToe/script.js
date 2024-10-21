const board = document.querySelector(".board");
const boxes = document.querySelectorAll(".box");
const message_box = document.querySelector(".message-paragraph");
const resetBtn = document.querySelector(".reset-btn");

const winningPatters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let currentPlayer = "X";
message_box.textContent = `${currentPlayer}'s turn !`;

function checkWinner(currentPlayer) {
  for (i = 0; i < winningPatters.length; i++) {
    const [a, b, c] = winningPatters[i];
    if (
      boxes[a].textContent === currentPlayer &&
      boxes[b].textContent === currentPlayer &&
      boxes[c].textContent === currentPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkIfDraw() {
  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].textContent === "") {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    if (boxes[i].textContent !== "" || checkWinner(currentPlayer)) {
      return;
    }
    this.textContent = currentPlayer;
    if (checkWinner(currentPlayer)) {
      message_box.textContent = `${currentPlayer} wins! Please restart`;
      return;
    }
    let IsDraw = checkIfDraw();
    if (IsDraw) {
      message_box.textContent = "It's a draw!";
      return;
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message_box.textContent = `${currentPlayer}'s turn !`;
  });
}

resetBtn.addEventListener("click", function () {
  currentPlayer = "X";
  message_box.textContent = `${currentPlayer}'s turn!`;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].textContent = "";
  }
});
