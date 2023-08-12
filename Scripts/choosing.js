var player1Name = document.getElementById("player1-name");
var player2Name = document.getElementById("player2-name");
var player1Color = document.getElementById("player1-color");
var player2Color = document.getElementById("player2-color");

function submitStart() {
  if (player1Name.value == "") {
    setCookie("player1Name", "Player1");
  } else {
    setCookie("player1Name", player1Name.value);
  }

  if (player2Name.value == "") {
    setCookie("player2Name", "Player2");
  } else {
    setCookie("player2Name", player2Name.value);
  }

  setCookie("player1color", player1Color.value);
  setCookie("player2color", player2Color.value);
  window.location.assign("game.html");
}
