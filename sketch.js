//Sprite creation
//Click to create a new sprite with random speed

let canvas;
let canvasWidth = 800;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor(); // no show cursor
}

function draw() {
  background(random(), random(), random());

  fill(0);
  textAlign(CENTER);
  text('Click to create a new sprite, move mouse to hit the wall', width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
  var leftWall = createSprite(100, 400, 10, 800)
}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, 30, 30);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}
