var isWin = true;
var containerDiv = document.getElementsByClassName("container");
var winningStatusDiv = document.getElementById("winning-status");

if (isWin) {
  containerDiv[0].classList.add("winning");
  winningStatusDiv.innerHTML = `The winner is <br> <span class='winner-name'>Martina</span`;
} else {
  winningStatusDiv.innerHTML = `No one is winner`;
}
