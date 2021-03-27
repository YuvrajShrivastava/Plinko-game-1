var particles = [];
var plinkos = [];
var divisions= [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var divisionHieght=300;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for (var j = 40; j <=width; j = j+50){
		plinkos.push(new Plinko(j,75));
	}
	for (var j = 15; j <=width-10; j = j+50){
		plinkos.push(new Plinko(j,175));
	}
	for (var j = -10; j <=width-20; j = j+50){
		plinkos.push(new Plinko(j,275));
	}
	for (var j = -35; j <=width-30; j = j+50){
		plinkos.push(new Plinko(j,375));
	}
	for(var k = 0; k<=width; k=k+80){
		divisions.push(new Divisions(k,450+divisionHieght/2,10,divisionHieght));


	}
	/*if(frameCount%60===0){
		particles.push(new Particle(random(width/2-10,width/2+10),10,10))

	}*/
	ground1 = new Ground(240,725,480,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10))

}
  for (var g =0; g<plinkos.length; g++){
	  plinkos[g].display();
  }
  for (var k =0; k<divisions.length;k++){
	  divisions[k].display();
  }
  for (var j =0; j<particles.length;j++){
	particles[j].display();
}
 // ground1.display();
  drawSprites();
 
}



