const Engine = Matter.Engine;    
const World= Matter.World;    
const Bodies = Matter.Bodies;    
    
var engine, world;    
    
var ground;    
var boundary,division;    
var ball1,ball2,ball3,ball4,ball5;
var plinko1,plinko2,plinko3,plinko4,plinko5,plinko6,plinko7,plinko8,plink9,plink10;
var plinko11,plinko12,plinko13,plink014,plinko15,plinko16,plinko17,plinko18,plinko19,plinko20;    
    
function setup() {    
  createCanvas(800,1000);    
    
  var ground_options = {    
    isStatic : true    
  }    
    
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  ball1 = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball5);


  var plinko_option = {
    isStatic : true
  }

  plinko1 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko1);

  plinko2 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko2);

  plinko3 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko3);

  plinko4 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko4);

  plinko5 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko5);

  plinko6 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko6);

  plinko7 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko7);

  plinko8 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko8);

  plinko9 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko9);

  plinko10 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko10);

  plinko11 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko11);

  plinko12 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko12);

  plinko13 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko13);

  plinko14 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko14);

  plinko15 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko15);

  plinko16 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko16);

  plinko17 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko17);
  
  plinko18 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko18);

  plinko19 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko19);

  plinko21 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko21);

  plinko22 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko22);

  plinko23 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko23);

  plinko24 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko24);

  plinko25 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko25);

  plinko26 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko26);

  plinko27 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko27);

  plinko28 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko28);

  plinko29 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko29);

  plinko30 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko30);

  plinko31 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko31);
 
  plinko32 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko32);

  plinko33 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko33);

  plinko34 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko34);

  plinko35 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko35);

  plinko36 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko36);

  plinko37 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko37);

  plinko38 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko38);

  plinko39 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko39);

  plinko40 = Bodies.circle(200,100,20,plinko_option);
  World.add(world,plinko40);

 var division_option = {
   isStatic = true
 }

  division1 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division1);

  division2 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division2);
  
  division3 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division2);

  division4 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division4);

  division5 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division5);

  division6 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division6);

  division7 = Bodies.rectangle(200,100,20,division_option);
  World.add(world,division7);
}

function draw() {
  background("grey");
  
  ground.shapeColor = "brown";

  Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball1.position.x,ball1.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball2.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(ball3.position.x,ball3.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(ball4.position.x,ball4.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(ball5.position.x,ball5.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko1.position.x,plinko1.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko2.position.x,plinko2.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko3.position.x,plinko3.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko4.position.x,plinko4.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko5.position.x,plinko5.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko6.position.x,plinko6.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko7.position.x,plinko7.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko8.position.x,plinko8.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko9.position.x,plinko9.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko10.position.x,plinko10.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko11.position.x,plinko11.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko12.position.x,plinko12.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko13.position.x,plinko13.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko14.position.x,plinko14.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko15.position.x,plinko15.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko16.position.x,plinko16.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko17.position.x,plinko17.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko18.position.x,plinko18.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko19.position.x,plinko19.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko20.position.x,plinko20.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko21.position.x,plinko21.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko22.position.x,plinko22.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko23.position.x,plinko23.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko24.position.x,plinko24.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko25.position.x,plinko25.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko26.position.x,plinko26.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko27.position.x,plinko27.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko27.position.x,plinko27.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko28.position.x,plinko28.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko29.position.x,plinko29.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko30.position.x,plinko30.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko31.position.x,plinko31.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko32.position.x,plinko32.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko33.position.x,plinko33.position.y,20,20);

    ellipseMode(RADIUS);
    ellipse(plinko34.position.x,plinko34.position.y,20,20);

    ellipseMode(RADIUS);
   ellipse(plinko35.position.x,plinko35.position.y,20,20);    

   ellipseMode(RADIUS);
   ellipse(plinko36.position.x,plinko36.position.y,20,20);

   ellipseMode(RADIUS);
   ellipse(plinko37.position.x,plinko37.position.y,20,20);

   ellipseMode(RADIUS);
   ellipse(plinko38.position.x,plinko38.position.y,20,20);

   ellipseMode(RADIUS);
   ellipse(plinko39.position.x,plinko39.position.y,20,20);

   ellipseMode(RADIUS);
   ellipse(plinko40.position.x,plinko40.position.y,20,20);

   rectMode(CENTER);
   rect(division1.position.x,division1.position.y,400,20);

   rectMode(CENTER);
   rect(division2.position.x,division2.position.y,400,20); 

   rectMode(CENTER);
   rect(division3.position.x,division3.position.y,400,20);

   rectMode(CENTER);
   rect(division4.position.x,division4.position.y,400,20);

   rectMode(CENTER);
   rect(division5.position.x,division5.position.y,400,20);

   rectMode(CENTER);
   rect(division6.position.x,division6.position.y,400,20);

   rectMode(CENTER);
   rect(division7.position.x,division7.position.y,400,20);

  drawSprites();
}                                  