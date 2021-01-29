const Engine = Matter.Engine;    
const World= Matter.World;    
const Bodies = Matter.Bodies;    
    
var engine, world;    
      
var boundary1,boundary2,boundary3,boundary4;

var division1,division2,division3,division4,division5;

var divisionHeight = 300;
  
var balls = [];
var plinko = [];

function setup() {   
  createCanvas(800,1000);    
      
  engine = Engine.create();
  world = engine.world;

  for(var j = 40; j <=width; j=j+50 ){
    plinko.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50){
   plinko.push(new Plinko(j,175));
  } 

  boundary1 = new Boundary(800,500,30,1000);
  boundary2 = new Boundary(0,500,30,1000);
  boundary3 = new Boundary(400,1000,1000,30);
  boundary4 = new Boundary(400,0,1000,30);
  
  division1 = new Division(790,850,10,300);
  division2 = new Division(600,850,10,300);
  division3 = new Division(400,850,10,300);
  division4 = new Division(200,850,10,300);
  division5 = new Division(10,850,10,300);
}

function draw() {
  background("grey");

  if(frameCount%60===0){
    balls.push(new Ball(random(width/2-10,width/2+10), 10,10))
  }

  Engine.update(engine);

    boundary1.display();
    boundary2.display();
    boundary3.display();
    boundary4.display();   

    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
}