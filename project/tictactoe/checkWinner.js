function checkWinner(){
  if (arrayTiles[0][0] == playerTurn && arrayTiles[0][1] == playerTurn && arrayTiles[0][2] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[1][0] == playerTurn && arrayTiles[1][1] == playerTurn && arrayTiles[1][2] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[2][0] == playerTurn && arrayTiles[2][1] == playerTurn && arrayTiles[2][2] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[0][0] == playerTurn && arrayTiles[1][0] == playerTurn && arrayTiles[2][0] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[0][1] == playerTurn && arrayTiles[1][1] == playerTurn && arrayTiles[2][1] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[0][2] == playerTurn && arrayTiles[1][2] == playerTurn && arrayTiles[2][2] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[0][0] == playerTurn && arrayTiles[1][1] == playerTurn && arrayTiles[2][2] == playerTurn) {
    solved = true;
  }

  if (arrayTiles[0][2] == playerTurn && arrayTiles[1][1] == playerTurn && arrayTiles[2][0] == playerTurn) {
    solved = true;
  }

  if (solved == true) {


    solved = false;

    for (var i = 0; i < arrayTiles.length; i++) {
      for (var ii = 0; ii < arrayTiles.length; ii++) {
        arrayTiles[i][ii] = true;
      }
    }

    showAnimationTwo();
    // var scripts = document.getElementsByTagName("script");
    // var body    = document.getElementsByTagName("body");
    //
    //
    // for(var i = (scripts.length-1); i >= 0; i--){
    //   console.log(scripts[1]);
    //   body[0].removeChild(scripts[i]);
    //   console.log(i);
    //   console.log(scripts[i]);
    //}
  }
}
