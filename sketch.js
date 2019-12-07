let canvas;
let canvasWidth = 400;
let canvasHeight = 400;
var sad;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(30);
  
    
  sad = createSprite(random(canvasWidth),random(canvasHeight),80,80);
  drawSprites();
}
