const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint 

var engine, world;
var ground; 

var ground, stand1, stand2;







function setup() {

  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
  ground=new Ground(width/2,height,width,20) 
  bob = Bodies.circle(50,200,40);
  World.add(world,bob);

  slingshot = new SlingShot(bob,{x:250,y:30})
  b1=new Box(400,350,50,50)
  b2=new Box(400,300,50,50)
  b3=new Box(400,250,50,50)
  b4=new Box(400,200,50,50)
  b5=new Box(400,150,50,50)

  b6=new Box(400,100,50,50)
  b7=new Box(400,50,50,50)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)
ground.display()
slingshot.display()

  ellipseMode(RADIUS)
  ellipse(bob.position.x,bob.position.y, 25,25)
b1.display()
b2.display()
b3.display()
b4.display()
b5.display()
b6.display()
b7.display()
}


function mouseDragged(){

Matter.Body.setPosition(bob,{x:mouseX,y:mouseY})



}