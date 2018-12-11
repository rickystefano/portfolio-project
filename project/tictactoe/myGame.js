var canvas, context, solved = false; playerTurn = 2;
var cross = new Image;
var circle = new Image;
var tilesWidth =  720/3;
var arrayTiles = [];
var t=u=d=0;
var updown = true;
// var canvasTwo  = document.getElementById("myCanvasTwo");
// var contextTwo = canvasTwo.getContext("2d");


window.addEventListener("load", drawBoard, false);

function drawBoard(){
  canvas  = document.getElementById("myCanvas");
  context = canvas.getContext("2d");

  for(var x = 1; x<3; x++){
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(tilesWidth*x, 0);
    context.lineTo(tilesWidth*x, 720);
    context.moveTo(0, tilesWidth*x);
    context.lineTo(720, tilesWidth*x);
    context.stroke();
  }

  for(var i = 0; i<3; i++){
    arrayTiles.push([]);
    for(var ii = 0 ; ii<3; ii++) {
      arrayTiles[i][ii] = 0;
    }
  }

  // console.log(arrayTiles);

  circle.src = "css/circle.png";
  cross.src  = "css/cross.png";

  canvas.addEventListener("click", playGame, false);
}

function playGame(e){
  var x = Math.floor(e.offsetX/tilesWidth);
  var y = Math.floor(e.offsetY/tilesWidth);
  var turn = "";
  var sx = 0;
  var sy = 0;
  var sw = circle.width;
  var sh = circle.height;
  var cx = x*tilesWidth+10;
  var cy = y*tilesWidth+10;
  var cw = tilesWidth-20;
  var ch = tilesWidth-20;

  if (arrayTiles[y][x] == 0){
    if (playerTurn == 1) {
      arrayTiles[y][x] = 1;
      context.drawImage(circle, sx, sy, sw, sh, cx, cy, cw, ch);
      checkWinner();
      playerTurn = 2;
    } else {
      arrayTiles[y][x] = 2;
      context.drawImage(cross, sx, sy, sw, sh, cx, cy, cw, ch);
      checkWinner();
      playerTurn = 1;
    }
  }
  // console.log(playerTurn);
  // console.log(arrayTiles);
}

function getRandomColor() {
  var str = '#';
  var options = '0123456789ABCDEF';
  for(var i=0; i<6; i++) {
    var randomPick = randomNumBetween(0, (options.length)-1);
    var char       = options[randomPick];
    str += char;
  }
  return str;
}

function randomNumBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

// function won(player){
//   setTimeout(function(){
//     showAnimationOne();
//   }, 150)
// }

function showAnimationOne(){
  context.font = "100px Arial";
  context.fillStyle = getRandomColor();
  context.fillText("Your", 250, 800-(t*5));
  // setTimeout(showAnimationOne, 150);
  t++;
  setTimeout(function(){
    if (t < 160) {
      showAnimationOne();
    } else {
      showAnimationTwo();
      t = 0;
    }
  }, 15);
}

function showAnimationTwo(){

  context.font = "100px Comic Sans";
  context.fillStyle = getRandomColor();
  if (updown) {
    context.clearRect(0,0,720,720);
    context.fillText("GEWONEN", 700-(t*5), 200+(u*5));
    console.log(t);
    // console.log(u);
    u++;
    if (u == 20) {
      u = 0;
      updown=!updown;
    }
  } else {
    context.clearRect(0,0,720,720);
    context.fillText("GEWONEN", 700-(t*5), 300-(d*5));
    console.log(t);
    d++;
    if (d == 20) {
      d = 0;
      updown = !updown;
    }
  }
  t++;
  setTimeout(function(){
    if (t > 245) {
      t = 0;
    }
    showAnimationTwo();
  }, 15);
}
//
// function showAnimationThree(){
//   showAniamtionFour();
// }
//
// function showAnimationFour(){
//   showAnimationFive();
// }
//
// function showAnimationFive(){
//   showAnimationOne();
// }
