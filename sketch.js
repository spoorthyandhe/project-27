
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1,rope2,rope3,rope4,rope5,bob1,bob2,bob3,bob4,bob5,bob;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(400,200,600,50);

	bob1= new Bob(200,300,100,100,500);
	bob2= new Bob(300,300,100,100,500);
	bob3= new Bob(400,300,100,100,500);
	bob4= new Bob(500,300,100,100,500);
	bob5= new Bob(600,300,100,100,500);
	

	rope1=new Rope(bob1.body,roof.body-bob*2,0)
	rope2=new Rope(bob2.body,roof.body-bob*2,0)
	rope3= new Rope(bob3.body,roof.body-bob*2,0)
	rope4=new Rope(bob4.body,roof.body-bob*2,0)
	rope5=new Rope(bob5.body,roof.body-bob*2,0)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();


 roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}



