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
            <td><div class="game-box" id="first-box"></div></td>
            <td>
              <div class="game-box" id="second-box"></div>
            </td>
            <td>
                <div class="game-box" id="third-box"></div>
            </td>
          </tr>
          <tr>
            <td>
                <div class="game-box" id="fourth-box"></div>
            </td>
            <td>
              <div class="game-box" id="fifth-box"></div>
            </td>
            <td>
              <div class="game-box" id="sixth-box"></div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="game-box" id="seventh-box"></div>
            </td>
            <td>
              <div class="game-box" id="eighth-box"></div>
            </td>
            <td>
              <div class="game-box" id="ninth-box"></div>
            </td>
          </tr>
        </table>
      </div>
    </div>
</div>
`;

var container = document.getElementsByClassName('container');
var x=0;
while (hasCookie('match'+(x+1))) {
    var div = document.createElement('div');
    div.innerHTML = gameResult;
    container[0].appendChild(div);

    var matchDetails = getCookie('match'+(x+1));
    var matchArray = matchDetails.split(',');

    //who is the winner
    var win =document.getElementsByClassName('win');
    if (matchArray[2]=='') {
        win[x].innerHTML = 'Draw';
    } else {
        win[x].innerHTML = 'Winner: '+matchArray[2];
    }
    
    //who is 1p
    var player1 = document.getElementsByClassName('player1');
    player1[x].innerHTML = '1P: '+matchArray[0];

    //who is 2p
    var player2 = document.getElementsByClassName('player2');
    player2[x].innerHTML = '2P: '+matchArray[1];
    
    //match table
    var gameBox = document.getElementsByClassName('game-box');
    for (var i = 0; i < 9; i++) {
        if (matchArray[i+3] != '-') {
            gameBox[(x*9)+i].innerHTML = matchArray[i+3];
        }
    }

    x++;
}

var newGame = document.createElement('button');
newGame.setAttribute('class','basic-btn');
newGame.setAttribute('onclick','startNewGame()');
newGame.innerHTML = 'New Game';
container[0].appendChild(newGame);

function startNewGame() {
    window.location.assign("game.html");
}