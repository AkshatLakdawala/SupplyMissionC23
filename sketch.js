//making variables for package,helicopter and their images
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;

// Making body for package and making a variale for ground 
var packageBody,ground

// Making constants for engine,world and bodies 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world,bodies;
var safeArea1,safeArea2,safeArea3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	// giving rectMode to center so that it remains in the center
	rectMode(CENTER);
	
// Creating sprite for package, adiing Image to it and giving scale to it
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	// Creating sprite for helicopter, adiing Image to it and giving scale to it
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	// creating sprite for ground and giving color to it
	/*groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)*/



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	/*ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);*/


	Engine.run(engine);

	 safeArea1 = new SafeArea(400,690,200,20);
	 safeArea2 = new SafeArea(300,650,20,100);
	 safeArea3 = new SafeArea(500,650,20,100);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  safeArea1.display();
  safeArea2.display();
  safeArea3.display();
  
 // Sprites and bodies behave differently so making their x positions equal
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  // calling the function so that package fall on ground
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // To make the package fall on the ground
	Body.setStatic(packageBody,false);
	packageSprite.scale = 0.2;
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
  }
}



