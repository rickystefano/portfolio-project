var canvas, context, x, y, newX, newY;
var mouseClicked = false;
var resetButton  = document.getElementById("resetCanvas");

window.addEventListener("load", readyToDraw, false);
resetButton.addEventListener("click", clearCanvas, false);

function readyToDraw(){
  canvas  = document.getElementById("myCanvas");
  context = canvas.getContext("2d");

  canvas.addEventListener("mousedown", onClick, false);
  canvas.addEventListener("mouseup", onRelease, false);
  canvas.addEventListener("mousemove", onMove, false);
  canvas.addEventListener("mouseout", onOut, false);
}

function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function onClick(e){
  mouseClicked = true;
  newY = e.offsetY;
  newX = e.offsetX;
}

function onRelease(){
  mouseClicked = false;
}

function onMove(e){
  if (mouseClicked) {
    y = e.offsetY;
    x = e.offsetX;

    context.beginPath(); //start a new beginPath
    context.moveTo(x, y);
    context.lineTo(newX, newY);
    context.stroke();

    newX = x;
    newY = y;
  }
}

function onOut(e){
  mouseClicked = false;
  x = y = newX = newY = undefined;
}
