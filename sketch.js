let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  createSprite(10,400);
}

function draw() {
  background(50);
  rect(mouseX, mouseY, 100, 100);
  drawSprites();
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 35, 35);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
