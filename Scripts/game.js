var currentPlayer = "X";
var clickedCellElement;
var allCellsElement = document.getElementsByClassName("game-box");

var player1Name = getCookie("player1Name");
var player2Name = getCookie("player2Name");
var player1Color = getCookie("player1color");
var player2Color = getCookie("player2color");

var winner = '';
var winnningLine = new Array(3);
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
    if (currentPlayer == 'X') {
      winner = player1Name;
    } else {
      winner = player2Name;
    }

    matchArray[2]= winner;
    // disable all cells
    for (var i = 0; i < allCellsElement.length; i++) {
      allCellsElement[i].disabled = true;
    }
    setTimeout(goToWinnning,3000);
  }
  else {
    if (isDraw()) {
      setTimeout(goToWinnning,1000);
    }
  }
  setCookie('winner',winner);
  currentPlayer === "X" ? (currentPlayer = "O") : (currentPlayer = "X");
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


// check for draw
function isDraw (){
  for (var i = 0; i < allCellsElement.length; i++) {
    if (allCellsElement[i].innerHTML == '') {
      return false;
    }
  }
  return true;
}

function goToWinnning() {
  var expire = new Date();
  expire.setDate(expire.getDate()+1);
  expire.setHours(0,0,0);
  for (var i = 0; i < allCellsElement.length; i++) {
    var temp = allCellsElement[i].innerHTML;
    matchArray.push(temp);
  }

  for (var i = 0; i < winnningLine.length; i++) {
    var temp = winnningLine[i];
    matchArray.push(temp);
  }

  while (hasCookie('match'+cookieManipulator)) {
    cookieManipulator++;
  }
  setCookie('match'+cookieManipulator,matchArray,expire);
  window.location.assign('winning.html');
}