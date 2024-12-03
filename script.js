// script.js

const cells = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

const checkWinner = () => {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameActive = false;
      alert(`${currentPlayer} wins!`);
      return;
    }
  }

  if (!gameBoard.includes('')) {
    gameActive = false;
    alert("It's a tie!");
  }
};

const handleCellClick = (index) => {
  if (!gameActive || gameBoard[index]) return;

  gameBoard[index] = currentPlayer;
  cells[index].textContent = currentPlayer;
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

  checkWinner();
};

const resetGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;

  cells.forEach(cell => cell.textContent = '');
};

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

resetButton.addEventListener('click', resetGame);
