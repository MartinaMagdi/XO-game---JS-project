var currentPlayer = "X";
var clickedCellElement;
var allCellsElement = document.getElementsByClassName("game-box");

var player1Name = getCookie("player1Name");
var player2Name = getCookie("player2Name");
var player1Color = getCookie("player1color");
var player2Color = getCookie("player2color");

setPlayersNamesAndColorsInitial();

function play(event) {
  clickedCellElement = event.srcElement;

  //   setting X and O colors
  setColor(clickedCellElement);

  clickedCellElement.innerHTML = currentPlayer;
  clickedCellElement.disabled = true;

  currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");

  // If there is a winner
  if (checkWinByRows() || checkWinByCols() || checkWinDiagonal()) {
    // write your code here when there is a winner
    console.log("winner");
  }
}

function checkWinByRows() {
  // Write your conditions here and return true or false
  return false;
}

function checkWinByCols() {
  // Write your conditions here and return true or false
  return false;
}

function checkWinDiagonal() {
  if (checkWinDiagonalByValue("X") || checkWinDiagonalByValue("O")) {
    return true;
  } else {
    return false;
  }
}

function checkWinDiagonalByValue(value) {
  if (
    (allCellsElement[0].innerHTML === value &&
      allCellsElement[4].innerHTML === value &&
      allCellsElement[8].innerHTML === value) ||
    (allCellsElement[2].innerHTML === value &&
      allCellsElement[4].innerHTML === value &&
      allCellsElement[6].innerHTML === value)
  ) {
    return true;
  } else {
    return false;
  }
}

function setColor(element) {
  if (currentPlayer === "X") {
    element.style.color = player1Color;
  } else {
    element.style.color = player2Color;
  }
}

// The names and color of the first div
function setPlayersNamesAndColorsInitial() {
  var player1Element = document.getElementById("player1-name");
  var player2Element = document.getElementById("player2-name");
  var xElement = document.getElementById("x-value");
  var oElement = document.getElementById("o-value");

  player1Element.innerHTML = player1Name;
  player2Element.innerHTML = player2Name;

  xElement.style.color = player1Color;
  oElement.style.color = player2Color;
}
