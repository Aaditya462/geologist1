
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer,ground,stone,rubber,sand1,sand2,sand3,sand4,sand5,sand6,sand7,iron

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(200,100);
	ground = new Ground(400,575,800,10);
	stone = new Stone(300,400,100,100);
	rubber = new Rubber(500,400,80,80);
	sand1 = new Sand(390,330,10,10);
	sand2 = new Sand(410,340,10,10);
	sand3 = new Sand(420,305,10,10);
	sand4 = new Sand(425,320,10,10);
	sand5 = new Sand(415,300,10,10);
	sand6 = new Sand(405,350,10,10);
	sand7 = new Sand(390,345,10,10);
	iron = new Iron(400,300,30.50);
	
	Engine.run(engine);
  
}


function draw() {
	background(0);
    Engine.update(engine);
	
	hammer.display();
	ground.display();
	stone.display();
	rubber.display();
	sand1.display();
	sand2.display();
	sand3.display();
	sand4.display();
	sand5.display();
	sand6.display();
	sand7.display();
	iron.display();
}



