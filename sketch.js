
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1,side2,side3,dustbin,paper,ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin();
	paper = new Paper(200,200,30);
	ground = new Ground(500,390,1200,20,"white");
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  background(0);
  Engine.update(engine);
  dustbin.display();
  ground.display();
  paper.display();
  
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

