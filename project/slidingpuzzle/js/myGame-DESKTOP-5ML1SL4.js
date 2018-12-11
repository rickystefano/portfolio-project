var ax, ay, blankX, blankY, tilesNumbers, canvas, context, maxCoordinates, cutPoint, solved;
var imageStatus = []; //arraytiles = imageposition ?
var arrayTiles = []; //koordinat gambar diacak
var imagePosition = []; //koordinat gambar asli
var imageObject = new Image;
var locationX, locationY;

window.addEventListener("load", onLoad, false);

function onLoad(){
  canvas  = document.getElementById("myCanvas");
  context = canvas.getContext("2d");
  document.getElementById("img").src = "./picture.jpg";

  canvas.addEventListener("click", getTiles, false);
//  canvas.addEventListener();
  imageObject.src = "./picture.jpg"
}

function shuffle(length){
  arrayTiles      = [];
  tilesNumbers    = length;
  maxCoordinates  = canvas.height;
  cutPoint        = maxCoordinates/length;

  context.clearRect(0,0,maxCoordinates, maxCoordinates);

  for(var i = 0; i<length; i++){
    imageStatus.push([]);
    imagePosition.push([]);
    arrayTiles.push([]);
    for(var ii = 0 ; ii<length; ii++) {
      imageStatus[i][ii] = false;
      imagePosition[i][ii] = false;
      arrayTiles[i][ii] = false;
    }
  }

  for(var b = 0; b < length; b++){
    for (var a = 0; a < length; a++) {
      getTilesNumber();
      if (ay == tilesNumbers-1 && ax == tilesNumbers-1) {
        blankX = a;
        blankY = b;
      }
      arrayTiles[b][a]=[ax, ay];
      loadImage(ax, ay, a, b);
    }
  }

  loadImage();
}

function loadImage(sx, sy, cx, cy){
  var sourceX      = sx*cutPoint;
  var sourceY      = sy*cutPoint;
  var sourceWidth  = cutPoint;
  var sourceHeight = cutPoint;
  var canvasX      = cutPoint*cx;
  var canvasY      = cutPoint*cy;
  var canvasWidth  = sourceWidth;
  var canvasHeight = sourceHeight;

  if (sx == tilesNumbers-1 && sy == tilesNumbers-1) {
    context.fillStyle = "white";
    context.fillRect(canvasX, canvasY, canvasWidth, canvasHeight);
  }
  else {
    context.drawImage(imageObject, sourceX, sourceY, sourceWidth,
    sourceHeight, canvasX, canvasY, canvasWidth, canvasHeight);
  }
}

function getTiles(e){
  locationX = Math.floor(e.offsetX/cutPoint);
  locationY = Math.floor(e.offsetY/cutPoint);

  if ((locationX == blankX+1 && locationY == blankY) || (locationX == blankX-1 && locationY == blankY)
  || (locationY == blankY+1 && locationX == blankX) || (locationY == blankY-1 && locationX == blankX)) {
    loadImage(arrayTiles[locationY][locationX][0], arrayTiles[locationY][locationX][1], blankX, blankY);
    loadImage(arrayTiles[blankY][blankX][0], arrayTiles[blankY][blankX][1], locationX, locationY);
    arrayTiles[blankY][blankX] = arrayTiles[locationY][locationX];
    arrayTiles[locationY][locationX] = [tilesNumbers-1, tilesNumbers-1];
    blankX = locationX;
    blankY = locationY;
    checkSolved();
  }
}

function getTilesNumber(){
  ax = Math.floor(Math.random()*tilesNumbers);
  ay = Math.floor(Math.random()*tilesNumbers);
  if (!imagePosition[ay][ax]) {
    imagePosition[ay][ax] = true;
  } else {
    getTilesNumber();
  }
}

function checkSolved(){
  for(r = 0; r<tilesNumbers; r++){
    for(s= 0;s<tilesNumbers; s++){
      if(arrayTiles[r][s] == [s, r]){
        solved = true;
      }
      else {
        solved = false;
      }
    }
  }

  if (solved == true) {
    alert("Hoi Tom!");
  }
}
