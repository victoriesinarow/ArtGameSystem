let canvas;
let canvasWidth = 800;
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
  background(0);
    
  fill(255);
  textAlign(CENTER);
  text('pressure of walls', width/2, height/2);
  
  ellipse(mouseX, mouseY, 100, 100);
}


function mousePressed() {
    var s = createSprite(mouseX, mouseY, 30, 30);
    s.velocity = createVector(-7, 7);
}
