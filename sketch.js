const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	

	
	box1 = new Box(1400,629,150,15);
	box2 = new Box(1484,530,15,180);
	box3 = new Box(1317,530,15,180);
	
	ground1 = new Ground(800,650,1600,30);
	
	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("LIGHTGREY");
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	
	image(boximage,1300,430,200,200);
	
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



