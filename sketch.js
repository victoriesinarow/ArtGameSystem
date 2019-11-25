let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let frog;
let car1;
//let sound_hit;
//let sound_powerup;
let bug1;
let bug2;
let bug3;
let bug4;
let bug5;


//function preload() {
//    assets/sound_hit = loadSound('hit.wav');
//    assets/sound_up = loadSound('powerup.wav');

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
    
  resetGame();
}

function draw() {
  background(220);
  
  
  if (car1.position.x >= width) {
    car1.position.x = 0;
    car1.setVelocity(random(3, 10), 0);
  }
  

  
  if (frog.bounce(car1)) {   //개구리가 차를 쳤을 때
//    assets_hit.play();
  }
  
  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);
  
  if (frog.bounce(bug1,bug2,bug3,bug4,bug5)) {
//    assets_powerup.play();
    frog.scale = 2;
  }
      
      
  if (frog.overlap(goal)) {
    nextLevel();
  }
  
  drawSprites();
  checkGameOver();
  
}


function resetGame() {
  frog = createSprite(canvasWidth/2, canvasHeight-30, 20, 40);
  goal = createSprite(canvasWidth/2, 0, canvasWidth, 4);
  car1 = createSprite(0, canvasHeight/2, 60, 30);
                      
  bug1 = createSprite(random(canvasWidth), random(canvasHeight), 20, 20);
  bug2 = createSprite(random(canvasWidth), random(canvasHeight), 20, 20);
  bug3 = createSprite(random(canvasWidth), random(canvasHeight), 20, 20);
  bug4 = createSprite(random(canvasWidth), random(canvasHeight), 20, 20);
  bug5 = createSprite(random(canvasWidth), random(canvasHeight), 20, 20);
  
  car1.setVelocity(random(3, 10), 0);
}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    frog.position.x += 10;
  }
  if (keyCode == LEFT_ARROW) {
    frog.position.x -= 10;
  }
}


function checkGameOver() {   //차가 튕겨져 나가기
  if (frog.position.x <= 0 || width <= frog.position.x) {
    fill(255, 0, 0);
    textSize(60);
    textAlign(CENTER);
    text("GAME OVER", width/2, height/2);
    
  }
}


function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}


//function playHitSound() {
//  sound_hit.play();
//}
//
//function playPowerupSound() {
//  sound_powerup.play();
//}
