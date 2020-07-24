
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4;
var roof1,rope1,rope2,rope3,rope4;
var bob5,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 bob1 = new bob(500,500);
	 bob2 = new bob(550,500);
	 bob3 = new bob(600,500);
	 bob4 = new bob(650,500);
	 bob5 = new bob(700,500)
	 roof1 = new roof(300,50);
	 rope1 = new rope(bob1.body, roof1.body,100,0);
	 rope2 = new rope(bob2.body,roof1.body,50,0);
	 rope3 = new rope(bob3.body,roof1.body,0,0);
	 rope4 = new rope(bob4.body,roof1.body,-50,0);
	 rope5 = new rope (bob5.body,roof1.body,-100,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  bob5.display();
  rope5.display();
  
  drawSprites();
 
}



