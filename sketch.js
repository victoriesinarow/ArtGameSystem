let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
  drawSprites();
}

function draw() {
  background(50);
  rect(mouseX, mouseY, 100, 100);
}
function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 40, 40);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
