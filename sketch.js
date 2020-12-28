
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var body1, body2, body3;
var body1Sprite, body2Sprite, body3Sprite;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	body1Sprite=createSprite(600,630,200,20);
	body1Sprite.shapeColor = "red";

	body2Sprite=createSprite(490, 400, 20, 100);
	body2Sprite.shapeColor = "red";

	body3Sprite=createSprite(700, 400, 20, 100);
	body3Sprite.shapeColor = "red";

	paper = new Paper(50,50,20);
	ground = new Ground(400,670,800,20);

	body1 = Bodies.rectangle(600, 650, 200,20, {isStatic:true});
	World.add(world, body1);

	body2 = Bodies.rectangle(490, 610, 20, 100, {isStatic:true});
	World.add(world, body2);

	body3 = Bodies.rectangle(700, 610, 20, 100, {isStatic:true});
	World.add(world, body3);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  body2Sprite.x= body2.position.x;
  body2Sprite.y= body2.position.y;
  body3Sprite.x= body3.position.x;
  body3Sprite.y= body3.position.y;
  body1Sprite.x= body1.position.x;
  body1Sprite.y= body1.position.y;

  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
	}
}



