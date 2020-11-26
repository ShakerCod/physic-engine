const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var ball,ball2,ball3,ball4;
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }

  var ball_options={
    restitution:1.0
  }





  ground=Bodies.rectangle(200,390,300,20,ground_options);
  ball=Bodies.circle(200,100,20,ball_options);
  ball2=Bodies.circle(300,200,20,ball_options);
  ball3=Bodies.circle(100,300,20,ball_options);
  ball4=Bodies.circle(150,250,20,ball_options);



  World.add(world,ground);
  World.add(world,ball);
  World.add(world,ball2);
  World.add(world,ball3);
  World.add(world,ball4);

  console.log(ball);

  console.log(ball.position.x);

 
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);


  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,300,20);  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  ellipseMode(RADIUS);
  ellipse(ball2.position.x,ball2.position.y,10,10);

  ellipseMode(RADIUS);
  ellipse(ball3.position.x,ball3.position.y,10,10);

  ellipseMode(RADIUS);
  ellipse(ball4.position.x,ball4.position.y,10,10);




}