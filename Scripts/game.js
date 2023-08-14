var currentPlayer = "X";
var clickedCellElement;
var allCellsElement = document.getElementsByClassName("game-box");

var player1Name = getCookie("player1Name");
var player2Name = getCookie("player2Name");
var player1Color = getCookie("player1color");
var player2Color = getCookie("player2color");

var winner = "";
setCookie("winner", winner);
var winningLine = new Array(3);
var cookieManipulator = 1;
var matchArray = [player1Name, player2Name, winner, player1Color, player2Color];

setPlayersNamesAndColorsInitial();

function play(event) {
  clickedCellElement = event.srcElement;

  //   setting X and O colors
  setColor(clickedCellElement);

  clickedCellElement.innerHTML = currentPlayer;
  clickedCellElement.disabled = true;

  // If there is a winner
  if (checkWinByRows() || checkWinByCols() || checkWinDiagonal()) {
    for (let i = 0; i < winningLine.length; i++) {
      allCellsElement[winningLine[i]].style.backgroundColor = "black";
    }

    if (currentPlayer == "X") {
      winner = player1Name;
    } else {
      winner = player2Name;
    }

    setCookie("winner", winner);

    matchArray[2] = winner;
    // disable all cells
    for (var i = 0; i < allCellsElement.length; i++) {
      allCellsElement[i].disabled = true;
    }
    setTimeout(goToWinning, 3000);
  } else {
    if (isDraw()) {
      setTimeout(goToWinning, 1000);
    }
  }
  currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
}

function checkWinByRows() {
  if (checkWinByRowsByValue("X") || checkWinByRowsByValue("O")) {
    return true;
  } else {
    return false;
  }
}

function checkWinByRowsByValue(value) {
  if (
    allCellsElement[0].innerHTML === value &&
    allCellsElement[1].innerHTML === value &&
    allCellsElement[2].innerHTML === value
  ) {
    winningLine[0] = 0;
    winningLine[1] = 1;
    winningLine[2] = 2;

    return true;
  } else if (
    allCellsElement[3].innerHTML === value &&
    allCellsElement[4].innerHTML === value &&
    allCellsElement[5].innerHTML === value
  ) {
    winningLine[0] = 3;
    winningLine[1] = 4;
    winningLine[2] = 5;
    return true;
  } else if (
    allCellsElement[6].innerHTML === value &&
    allCellsElement[7].innerHTML === value &&
    allCellsElement[8].innerHTML === value
  ) {
    winningLine[0] = 6;
    winningLine[1] = 7;
    winningLine[2] = 8;
    return true;
  } else {
    return false;
  }
}

function checkWinByCols() {
  if (checkWinByColsByValue("X") || checkWinByColsByValue("O")) {
    return true;
  } else {
    return false;
  }
}

function checkWinByColsByValue(value) {
  if (
    allCellsElement[0].innerHTML === value &&
    allCellsElement[3].innerHTML === value &&
    allCellsElement[6].innerHTML === value
  ) {
    winningLine[0] = 0;
    winningLine[1] = 3;
    winningLine[2] = 6;

    return true;
  } else if (
    allCellsElement[1].innerHTML === value &&
    allCellsElement[4].innerHTML === value &&
    allCellsElement[7].innerHTML === value
  ) {
    winningLine[0] = 1;
    winningLine[1] = 4;
    winningLine[2] = 7;
    return true;
  } else if (
    allCellsElement[2].innerHTML === value &&
    allCellsElement[5].innerHTML === value &&
    allCellsElement[8].innerHTML === value
  ) {
    winningLine[0] = 2;
    winningLine[1] = 5;
    winningLine[2] = 8;
    return true;
  } else {
    return false;
  }
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
    allCellsElement[0].innerHTML === value &&
    allCellsElement[4].innerHTML === value &&
    allCellsElement[8].innerHTML === value
  ) {
    winningLine[0] = 0;
    winningLine[1] = 4;
    winningLine[2] = 8;

    return true;
  } else if (
    allCellsElement[2].innerHTML === value &&
    allCellsElement[4].innerHTML === value &&
    allCellsElement[6].innerHTML === value
  ) {
    winningLine[0] = 2;
    winningLine[1] = 4;
    winningLine[2] = 6;
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

// check for draw
function isDraw() {
  for (var i = 0; i < allCellsElement.length; i++) {
    if (allCellsElement[i].innerHTML == "") {
      return false;
    }
  }
  return true;
}

function goToWinning() {
  var expire = new Date();
  expire.setDate(expire.getDate() + 1);
  expire.setHours(0, 0, 0);
  for (var i = 0; i < allCellsElement.length; i++) {
    var temp = allCellsElement[i].innerHTML;
    matchArray.push(temp);
  }

  for (var i = 0; i < winningLine.length; i++) {
    var temp = winningLine[i];
    matchArray.push(temp);
  }

  while (hasCookie("match" + cookieManipulator)) {
    cookieManipulator++;
  }
  setCookie("match" + cookieManipulator, matchArray, expire);
  window.location.assign("winning.html");
}
