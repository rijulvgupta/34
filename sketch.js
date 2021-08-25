
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	backgroundImage = loadImage("images/GamingBackground.png");
}

function setup() {
	createCanvas(900,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground (200, 400, 600, 5);
  superhero= new Superhero(50,3,100,100);
  
  block1 = new Block(160,350,30,40);  
  block2 = new Block(190,350,30,40);
  block3 = new Block(220,350,30,40);
  block4 = new Block(250,350,30,40);
  block5 = new Block(280,350,30,40);
  block6 = new Block(310,350,30,40);
  block9 = new Block(160,315,30,40);
  block10 = new Block(190,315,30,40);
  block11 = new Block(220,315,30,40);
  block12 = new Block(250,315,30,40);
  block13 = new Block(280,315,30,40);
  block14 = new Block(310,315,30,40);
  block15 = new Block(160,280,30,40);  
  block16 = new Block(190,280,30,40);
  block17 = new Block(220,280,30,40);
  block18 = new Block(250,280,30,40);
  block19 = new Block(280,280,30,40);
  block20 = new Block(310,280,30,40);
  block21 = new Block(160,245,30,40);
  block22 = new Block(190,245,30,40);
  block23 = new Block(220,245,30,40);
  block24 = new Block(250,245,30,40);
  block25 = new Block(280,245,30,40);
  block26 = new Block(310,245,30,40);
  monster = new Monster(400,250,100,100);
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

  
   superhero.display();
  ground.display();
  stroke(15);
  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
 
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster.display();


 
}
function mouseDragged(){
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}



