const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  //engine crete kre k lie
  engine=Engine.create();
  // engine ko world me add krne  lie
  world=engine.world;

  var groundOption={
    isStatic : true
  }

  //body create rectangle shape
  ground=Bodies.rectangle(200,380,50,50, groundOption);
  //ground add in world
  World.add(world,ground);


  var ballOption={
    restitution: 1.5
  }
  ball=Bodies.circle(200,100,20, ballOption);
  World.add(world,ball);



}

function draw() {
  background(12,45,23); 
  Engine.update(engine);
  fill("brown");
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,10);
  fill("yellow");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}