let canvas;
let canvasWidth = 400;
let canvasHeight = 400;
var sad;
var unsad;
var emotions;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
   
    
  unsad = createSprite(80, 80);
  unsad.shapeColor = color(0, 100, 200);


//create 2 groups
  emotions = new Group();
    for(var i=0; i<15; i++) {
      var dot = createSprite(width/2, height/2, 80, 80);
      emotions.add(dot);
    }
}

function draw() {
  background(30);
    
  sad = fill (255, 0, 0);
  sad = createSprite(width-360, height-40, 80, 80);
  sad.shapeColor = color(170, 0, 50);

  

//  unsad = createSprite(width-40, height-40, 80, 80);
//  unsad = createSprite(mouseX, mouseY, 80, 80);
//  unsad.shapeColor = color(0, 100, 200);
  unsad.velocity.x = (mouseX-unsad.position.x)/10;
  unsad.velocity.y = (mouseY-unsad.position.y)/10;
  
  unsad.overlap(emotions, collect);
    
    
//  emotions = createSprite(width/2, height/2, 80, 80);
  emotions.shapeColor = color(0, 200, 50);
//  emotions.velocity.x = random(-1, 1);
//  emotions.velocity.y = random(-1, 1);
  drawSprites();
    
 
}


function collect(collector, colllected) {
//collector = unsad
  collected.remove();
}


//let canvas;
//let canvasWidth = 400;
//let canvasHeight = 400;
//let grid;
//let grid_new;
//let score = 0;
//
//function setup() {
//  canvas = createCanvas(canvasWidth, canvasHeight);
//  canvas.position(windowWidth/2 - canvasWidth/2, 20);
//  noCursor();
//
//  noLoop();
//  grid = blankGrid();
//  grid_new = blankGrid();
//  // console.table(grid);
//  addNumber();
//  addNumber();
//  updateCanvas();
//}
//
//// One "move"
//function keyPressed() {
//  let flipped = false;
//  let rotated = false;
//  let played = true;
//  switch (keyCode) {
//    case DOWN_ARROW:
//      // do nothing
//      break;
//    case UP_ARROW:
//      grid = flipGrid(grid);
//      flipped = true;
//      break;
//    case RIGHT_ARROW:
//      grid = transposeGrid(grid);
//      rotated = true;
//      break;
//    case LEFT_ARROW:
//      grid = transposeGrid(grid);
//      grid = flipGrid(grid);
//      rotated = true;
//      flipped = true;
//      break;
//    default:
//      played = false;
//  }
//
//  if (played) {
//    let past = copyGrid(grid);
//    for (let i = 0; i < 4; i++) {
//      grid[i] = operate(grid[i]);
//    }
//    let changed = compare(past, grid);
//    if (flipped) {
//      grid = flipGrid(grid);
//    }
//    if (rotated) {
//      grid = transposeGrid(grid);
//    }
//    if (changed) {
//      addNumber();
//    }
//    updateCanvas();
//
//    let gameover = isGameOver();
//    if (gameover) {
//      console.log("GAME OVER");
//    }
//
//    let gamewon = isGameWon();
//    if (gamewon) {
//      console.log("GAME WON");
//    }
//
//  }
//}
//
//function updateCanvas() {
//  background(255);
//  drawGrid();
//  select('#score').html(score);
//}
//
//function drawGrid() {
//  let w = 100;
//  for (let i = 0; i < 4; i++) {
//    for (let j = 0; j < 4; j++) {
//      noFill();
//      strokeWeight(2);
//      let val = grid[i][j];
//      let s = val.toString();
//      if (grid_new[i][j] === 1) {
//        stroke(200, 0, 200);
//        strokeWeight(16);
//        grid_new[i][j] = 0;
//      } else {
//        strokeWeight(4);
//        stroke(0);
//      }
//
//      if (val != 0) {
//        fill(colorsSizes[s].color);
//      } else {
//        noFill();
//      }
//      rect(i * w, j * w, w, w, 30);
//      if (val !== 0) {
//        textAlign(CENTER, CENTER);
//        noStroke();
//        fill(0);
//        textSize(colorsSizes[s].size);
//        text(val, i * w + w / 2, j * w + w / 2);
//      }
//    }
//  }
//}
