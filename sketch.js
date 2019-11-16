//Sprite creation
//Click to create a new sprite with random speed

let canvas;
let canvasWidth = 800;
let canvasHeight = 400;

//var things;
var leftWall;
var rightWall;
var topWall;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor(); // no show cursor
    
  leftWall = createSprite(0, 400, 20, 800);
  rightWall = createSprite(795, 400, 10, 800);
  topWall = createSprite(400, 0, 800, 20);
    
//  things = createSprite(mouseX, mouseY, 30, 30);
//  things.velocity.x = random(-5, 5);
//  things.velocity.y = random(-5, 5);
//  things.mouseIsPressed = true
}



function draw() {
  background(0);

  fill(255);
  textAlign(CENTER);
  text('Click to create a new sprite, move mouse to hit the wall', width/2, height/2);
//  fill(255);
    
  if(s.position.x<leftWall) {
    s.position.x = 1;
    s.velocity.x = abs(s.velocity.x);
  }

  if(s.position.x>rightWall) {
    s.position.x = width-1;
    s.velocity.x = -abs(s.velocity.x);
  }

  if(s.position.y<leftWall) {
    s.position.y = 1;
    s.velocity.y = abs(s.velocity.y);
  }

  if(s.position.y>height) {
    s.position.y = height-1;
    s.velocity.y = -abs(s.velocity.y);
  }
  
    
//    var leftWall = createSprite(0, 400, 20, 800);
//    var rightWall = createSprite(795, 400, 10, 800);
//    var topWall = createSprite(400, 0, 800, 20);
    
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
  
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

//튕기기
function bounce() {
//    if(s.position.x<leftWall) {
//      s.position.x = 1;
//      s.velocity.x = abs(s.velocity.x);
//    }
//
//    if(s.position.x>rightWall) {
//      s.position.x = width-1;
//      s.velocity.x = -abs(s.velocity.x);
//    }
//
//    if(s.position.y<leftWall) {
//      s.position.y = 1;
//      s.velocity.y = abs(s.velocity.y);
//    }
//
//    if(s.position.y>height) {
//      s.position.y = height-1;
//      s.velocity.y = -abs(s.velocity.y);
//    }
}
