class Ball{
 constructor(x, y, diameter){
          
 var options = {
  isStatic : false,
  'restitution' : 0.4,
} 

 this.diameter = diameter;

this.body = Bodies.circle(x,y,diameter,options);
this.color = color(random(0,255),random(0,255),random(0,255));

World.add(world,this.body);       

}

 display(){

 var pos =this.body.position;
 var angle = this.body.angle;
 
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);

  ellipseMode(RADIUS); 
  ellipse(0,0,this.diameter,this.diameter);
  pop();
 } 
}