//Sprite creation
//Click to create a new sprite with random speed

let canvas;
let canvasWidth = 800;
let canvasHeight = 400;

//var things;
var leftWall;
var rightWall;
var topWall;
//var stretchy;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor(); // no show cursor
    
  leftWall = createSprite(0, 400, 20, 800);
  rightWall = createSprite(795, 400, 10, 800);
  topWall = createSprite(400, 0, 800, 20);
//  stretchy = createSprite(400, 200, 10, 10);
//
//
//    stretchy.draw = function() {
//        fill(237, 205, 0);
//
//        push();
//        rotate(radians(this.gerDirection()));
//        rect(0, 0, 100+this.getSpeed(), 100-this.getSpeed());
//        pop();
//    };
//
//    stretchy.maxSpeed = 15;
}



function draw() {
  background(0);

  fill(255);
  textAlign(CENTER);
  text('Click to create a new sprite, move mouse to hit the wall', width/2, height/2);
  
  stretchy.velocity.x = (mouseX-stretchy.position.x)/15;
  stretchy.velocity.y = (mouseX-stretchy.position.y)/15;
//  fill(255);

    
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();
  
}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX, mouseY, random(), random());
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
//  s.velocity.x = random(-5, 5);
//  s.velocity.y = random(-5, 5);
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
}

