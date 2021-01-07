class Plinko  {
 constructor(x, y, diameter){
                   
  var options = {
   isStatic : true,
  'restitution' : 0,
  'density' : 1,
 } 
                  
  this.body = Bodies.circle(x,y,diameter/3,options);
  this.diameter = diameter;
               
  World.add(world, this.body);
}
         
display(){
  fill("white");
  ellipseMode(CENTER); 
  ellipse(0,0,this.diameter,this.diameter);
 } 
}