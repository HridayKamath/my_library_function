var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
 /* fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;*/

rect1 = createSprite(750,100,50,50);
rect1.shapeColor = "yellow";
rect1.velocityY = 0;
rect1.velocityX = -2;


rect2 = createSprite(300,100,50,50);
rect2.shapeColor = "red";
rect2.velocityY = 0;
rect2.velocityX = 2;




}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 
  if(myIsTouching(movingRect, rect1)){

  movingRect.shapeColor = "red";
  rect1.shapeColor = "red";


  }
  else {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "yellow";
  
    
  }*/

myBounceOff(rect1, rect2);

  drawSprites();
}

