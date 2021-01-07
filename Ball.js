class Ball{
 constructor(x, y, r){
          
 var options = {
  isStatic : false,
  'restitution' : 0.4,
} 

this.r = r;

this.body = Bodies.circle(x,y,this.r,diameter,options);
this.color = color(random(0,255),random(0,255),random(0,255));

World.add(world,this.body);       

}

 display(){
 var pos =this.body.position;   
  push();
  translate(pos.x,pos.y);
  rotate(this.body.angle);
  ellipseMode(CENTER); 
  ellipse(0,0,this.diameter,this.diameter);
  pop();
 } 
}