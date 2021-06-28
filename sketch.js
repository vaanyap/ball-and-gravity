
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var groundObj;
var leftSide;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,10);
  options={
    restitution :0.9
    
  }
  groundObj = new Ground(550,650,10,50);
  leftSide= new Ground(750,650,10,50);
	//Create the Bodies Here.
	options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0 ,
		density: 1.2
	}
	ball = Bodies.circle(180,120,20,options);
  World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
	background(0);
	Engine.update(engine);
	ground.display();
	leftSide.display();
	groundObj.display();
 
  //rectMode(CENTER);
 
  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,25);
  
  //line(ball.position.x, ball.position.y, ball2.position.x, ball2.position.y);

  drawSprites();
 
}
function keyPressed(){
	if(keyCode == RIGHT_ARROW){
	  Body.applyForce(ball,{x:0, y:0},{x:30,y:-20});
	}
  
  }
  

