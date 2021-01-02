var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var Lwall, Rwall, Bwall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400, 650, width, 20);
	groundSprite.shapeColor=color(255)
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.05, isStatic:true});
	World.add(world, packageBody);
	rectMode(CENTER);

	//Create a Ground
	rectMode(CENTER);
	ground = Bodies.rectangle(width/2, 650, width, 60 , {isStatic: true} );
 	World.add(world, ground);
	

	Engine.run(engine);
	
	Lwall = new Box(600, 600,20,100);
	Rwall = new Box(300, 600,20,100);
	Bwall = new Box(450, 630, 300, 20);
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  groundSprite.x = ground.position.x 
  groundSprite.y = ground.position.y
  
	

	Lwall.display();
	Bwall.display();
	Rwall.display();
	drawSprites();
}

function keyPressed() {
	Engine.update(engine)
	if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0.5, isStatic: false});
	World.add(world, packageBody);
	packageSprite.velocityY = 4
    
  }
}



