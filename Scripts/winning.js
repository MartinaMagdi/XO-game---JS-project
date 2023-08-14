var containerDiv = document.getElementsByClassName("container");
var winningStatusDiv = document.getElementById("winning-status");
var winnerName = getCookie("winner");

if (winnerName) {
  containerDiv[0].classList.add("winning");
  winningStatusDiv.innerHTML = `The winner is <br> <span class='winner-name'>${winnerName}</span`;
} else {
  winningStatusDiv.innerHTML = `No one is winner`;
}

function goTo(path) {
  window.location.href = path;
}
