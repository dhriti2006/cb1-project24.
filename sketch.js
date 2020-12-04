 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	myworld = engine.world;

	
   ground = new Ground(400,height,800,20);
	
   dustbin1 = new dustbin(600,680,200,20);
   dustbin2 = new dustbin(700,640,20,100);
   dustbin3 = new dustbin(500,640,20,100);
   paperball1 = new paperball(100,650,25);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
 

  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paperball1.display()

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperball1.body,paperball1.body.position,{x:90,y:-80});
  }
}




