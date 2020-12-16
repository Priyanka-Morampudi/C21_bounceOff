var fixedRect1, movingRect1;

function setup() {
  createCanvas(1200,800);
  fixedRect1 = createSprite(400, 100, 50, 80);
  fixedRect1.shapeColor = "green";
  fixedRect1.debug = true;
  movingRect1 = createSprite(400, 800,80,30);
  movingRect1.shapeColor = "green";
  movingRect1.debug = true;

  movingRect1.velocityY = -5;
  fixedRect1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  
  //calling the function bounceOff
  //the object movingRect will be passed on to object1 and fixedRect will be passed on to object2
  bounceOff(movingRect1,fixedRect1);
  drawSprites();
}

//defining the function bounceOff
function bounceOff(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}

if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}