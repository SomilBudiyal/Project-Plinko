class Plinko  {
 constructor(x, y){
                   
  var options = {
   isStatic : true,
  'restitution' : 0,
 } 
      
  this.diameter = 70;
  this.body = Bodies.circle(x,y,this.diameter/3,options);
               
  World.add(world, this.body);
}
         
display(){
  fill("white");
  ellipseMode(RADIUS); 
  ellipse(0,0,this.diameter,this.diameter);
 } 
}