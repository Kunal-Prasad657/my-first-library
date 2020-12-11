var fixedRect, movingRect;
var a,b;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  a=createSprite(200,500,80,50);
  b=createSprite(200,100,80,30);
  movingRect.velocityY=3;
  fixedRect.velocityY =-3;
  a.velocityY=-3;
  b.velocityY=3;
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(a,b);
  
  drawSprites();
}


