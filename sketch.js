const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, part1, part2, part3, ground;

function setup() {
	createCanvas(1280, 605);

	engine = Engine.create();
	world = engine.world;

	part1 = new Dustbin(1030, 570, 200, 20);
	part2 = new Dustbin(930, 530, 20, 100);
	part3 = new Dustbin(1130, 530, 20, 100);

  ball = new Paper(200, 400);

	ground = new Ground(640, 605, 1280, 55);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  part1.display();
  part2.display();
  part3.display();
  ball.display();
  ground.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.position, {x: 315, y: -105});
	}
}