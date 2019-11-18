let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

var leftWall;
var rightWall;
var topWall;
var bottomWall;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
    
  leftWall = createSprite(0, 400, 20, 800);
  rightWall = createSprite(795, 400, 10, 800);
  topWall = createSprite(400, 0, 800, 20);
  bottomWall = createSprite(0, 400, 20, 800);
}

function draw() {
  background(30);
  rect(mouseX, mouseY, 100, 100);
}
