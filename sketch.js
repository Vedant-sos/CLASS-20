
var fixedrect;
var movingrect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(100, 100, 50, 50);
  fixedrect.shapeColor="blue";
  movingrect=createSprite(400,100,50,50);
  movingrect.shapeColor="red";
  fixedrect.velocityX=5;
  movingrect.velocityX=-5;
}

function draw() {
  background(255,255,255);
  BounceOff(fixedrect,movingrect);
  drawSprites();
}

