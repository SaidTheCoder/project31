const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var particles = []
var plinkos = []
var divisions = []

var divisionHeight = 300;


function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,790,480,10)
 
  division1= new Divisions(5,700,10,300)
  division2= new Divisions(75,700,10,300)
  division3= new Divisions(145,700,10,300)
  division4= new Divisions(215,700,10,300)
  division5= new Divisions(285,700,10,300)
  division6= new Divisions(355,700,10,300)
  division7= new Divisions(425,700,10,300)
  division8= new Divisions(480,700,10,300)

  for (var j = 35; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j = 35; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}
for (var j = 35; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}
for (var j = 35; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,375));
}



}

function draw() {
  background(0);
  Engine.update(engine);

 for(var i = 0; i <plinkos.length; i++){
   plinkos[i].display();
 }

 if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10),10,10))
}

for (var j = 0; j < particles.length; j++){
  particles[j]
}

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();


  drawSprites();
}


