var ground;
var boundary,division;
var ball,plinko;

function setup() {
  createCanvas(800,1000);

  ground = createSprite(400,900,1000,10);

}

function draw() {
  background("grey");
  
  ground.shapeColor = "brown";

  rectMode(CENTER);
  rect(pos.x, pos.y, this.width, this.height);  

  drawSprites();
}  