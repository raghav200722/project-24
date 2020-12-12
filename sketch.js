
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= new paper(100,50,20);

	ground = new Ground(400,600,900,20);
	dustbin1 = new Dustbin(600,585,50,10);
	dustbin2 = new Dustbin(630,568,10,40);
	dustbin3 = new Dustbin(572,568,10,40)

	Engine.run(engine);
  
}


function draw() {
  background(0);
  

  ball.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  keyPressed();
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:0.8,y:-0.8});
	}
}

