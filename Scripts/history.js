// matchArray is array of 17 values
// matchArray[0] -> player1 name
// matchArray[1] -> player2 name
// matchArray[2] -> winner name
// matchArray[3] -> player1 color
// matchArray[4] -> player2 color
// matchArray[5] -> game cell 1
// matchArray[6] -> game cell 2
// matchArray[7] -> game cell 3
// matchArray[8] -> game cell 4
// matchArray[9] -> game cell 5
// matchArray[10] -> game cell 6
// matchArray[11] -> game cell 7
// matchArray[12] -> game cell 8
// matchArray[13] -> game cell 9
// matchArray[14] -> 1st element in winningLine
// matchArray[15] -> 2nd element in winningLine
// matchArray[16] -> 3rd element in winningLine

var gameResult = `
<div class="match-result">
    <p class="win"></p>
    <span class="player1"></span>
    <span class="player2"></span>
    <br />
    <div id="game-board">
      <div id="game-boxes">
        <table>
          <tr>
            <td><div class="game-box xo-text" id="first-box"></div></td>
            <td>
              <div class="game-box xo-text" id="second-box"></div>
            </td>
            <td>
                <div class="game-box xo-text" id="third-box"></div>
            </td>
          </tr>
          <tr>
            <td>
                <div class="game-box xo-text" id="fourth-box"></div>
            </td>
            <td>
              <div class="game-box xo-text" id="fifth-box"></div>
            </td>
            <td>
              <div class="game-box xo-text" id="sixth-box"></div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="game-box xo-text" id="seventh-box"></div>
            </td>
            <td>
              <div class="game-box xo-text" id="eighth-box"></div>
            </td>
            <td>
              <div class="game-box xo-text" id="ninth-box"></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
</div>
`;

var container = document.getElementsByClassName("container");
var x = 0;
while (hasCookie("match" + (x + 1))) {
  var div = document.createElement("div");
  div.innerHTML = gameResult;
  container[0].appendChild(div);

  var matchDetails = getCookie("match" + (x + 1));
  var matchArray = matchDetails.split(",");

  //who is the winner
  var win = document.getElementsByClassName("win");
  if (matchArray[2] == "") {
    win[x].innerHTML = "Draw";
  } else {
    win[x].innerHTML = "Winner: " + matchArray[2];
  }

  //who is 1p
  var player1 = document.getElementsByClassName("player1");
  player1[x].style.color = matchArray[3];
  player1[x].innerHTML = "1P: " + matchArray[0];

  //who is 2p
  var player2 = document.getElementsByClassName("player2");
  player2[x].style.color = matchArray[4];
  player2[x].innerHTML = "2P: " + matchArray[1];

  //match table
  var gameBox = document.getElementsByClassName("game-box");
  for (var i = 0; i < 9; i++) {
    if (matchArray[i + 5] == "X") {
      gameBox[(x * 9 )+ i].style.color = matchArray[3];
      gameBox[(x * 9 )+ i].innerHTML = matchArray[i + 5];
    }
    else if (matchArray[i + 5] == "O") {
      gameBox[(x * 9 )+ i].style.color = matchArray[4];
      gameBox[(x * 9 )+ i].innerHTML = matchArray[i + 5];
    }
  }

  // winning line
  for (var i = 14; i < 17; i++) {
    if (matchArray[i] != '') {
      var temp = parseInt(matchArray[i]);
      gameBox[(x * 9)+temp].style.backgroundColor = 'black';
    }
  }

  x++;
}

var newGame = document.createElement("button");
newGame.setAttribute("class", "basic-btn");
newGame.setAttribute("onclick", "startNewGame()");
newGame.innerHTML = "New Game";
container[0].appendChild(newGame);

function startNewGame() {
  window.location.assign("choosing.html");
}
