
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roofOb;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	bob1 =new Bob(100, 300);
	bob2 =new Bob(200, 300);
	bob3 =new Bob(300, 300);
	bob4 =new Bob(400, 300);
	bob5 =new Bob(500, 300);

	roofOb =new Roof(width/2, height/4, 200, 20);

	rope1 =new Rope(bob1.body, roofOb.body, -50*2, 0);
	rope2 =new Rope(bob2.body, roofOb.body, -50*1, 0);
	rope3 =new Rope(bob3.body, roofOb.body, 0, 0);
	rope4 =new Rope(bob4.body, roofOb.body, 50*1, 0);
	rope5 =new Rope(bob5.body, roofOb.body, 50*2, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
	background ("white");
  rectMode(CENTER);

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
  roofOb.display();
  drawSprites();
 
}



