const Engine = Matter.Engine;    
const World= Matter.World;    
const Bodies = Matter.Bodies;    
    
var engine, world;    
      
var boundary1,boundary2,boundary3,boundary4;

var division1,division2,division3,division4,division5;

var balls;

var divisionHeight = 300;
  
var ball = [];
var plinko = [];
var divisio = [];

//var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plink9,plink10;
//var plinko11,plinko12,plinko13,plink014,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20;

function setup() {    
  createCanvas(800,1000);    

  if(frameCount%60===0){
    balls.push(new Ball(random(width/2-10,width/2+10), 10,10))
  }

  for(var j = 40; j <=width; j=j+50 ){
    plinko.push(new Plinko(j,75));
  }
 for(var j = 15; j <=width-10; j=j+50){
  plinko.push(new Plinko(j,175));
 } 
  
  ball1 = new Ball(400,1000,10,10);
  ball2 = new Ball(400,1000,10,10);
  ball3 = new Ball(400,1000,10,10);
  ball4 = new Ball(400,1000,10,10);
  ball5 = new Ball(400,1000,10,10);

  boundary1 = new Boundary(800,500,30,900);
  boundary2 = new Boundary(800,1000,30,900);
  boundary3 = new Boundary(400,1000,30,900);
  boundary4 = new Boundary(400,2000,30,900);
  
  division1 = new Division(600,480,30,50);
  division2 = new Division(600,480,30,50);
  division3 = new Division(600,480,30,50);
  division4 = new Division(600,480,30,50);
  division5 = new Division(600,480,30,50);
}

function draw() {
  background("grey");
  
  ground.shapeColor = "brown";

  Engine.update(engine);

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();

    plinko1.display();
    plinko2.display();
    plinko3.display();
    plinko4.display();
    plinko5.display();
    plinko6.display();
    plinko7.display();
    plinko8.display();
    plinko9.display();
    plinko10.display();
    plinko11.display();
    plinko12.display();
    plinko13.display();
    plinko14.display();
    plinko15.display();
    plinko16.display();
    plinko17.display();
    plinko18.display();
    plinko19.display();
    plinko20.display();
    plinko21.display();
    plinko22.display();
    plinko23.display();
    plinko24.display();
    plinko25.display();
    plinko26.display();
    plinko27.display();
    plinko28.display();
    plinko29.display();
    plinko30.display();

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