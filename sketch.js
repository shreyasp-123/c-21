var sprite1, sprite2
var sprite3
function setup() {
  createCanvas(800,400);
  sprite1  = createSprite(400, 100, 50, 50);
  sprite2 = createSprite(400, 300, 100, 50)
  sprite3 = createSprite (400, 500, 50, 100)
  sprite1.debug = true;
  sprite2.debug = true;
  sprite1.shapeColor = "green"
  sprite2.shapeColor = "green"
  sprite3.shapeColor = "green"
  sprite1.velocityY = 1
  sprite2.velocityY= -1
  sprite3.velocityY = -1
}

function draw() {
  background(255,255,255);
  bounceOff(sprite1, sprite2)


  if(isTouching(sprite1, sprite3)){
    sprite1.shapeColor = "red"
    sprite3.shapeColor = "red"
    
  } else{
    sprite1.shapeColor = "green"
    sprite3.shapeColor = "green"
  }
  drawSprites();
}