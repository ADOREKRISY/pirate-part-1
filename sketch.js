const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImage
var tower
var towerImage
var angle
var canon

function preload() {
 backgroundImage=loadImage("assets/background.gif")
 towerImage=loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options={isStatic:true}
  ground=Bodies.rectangle(0,height-1,width*2,1,options)
  tower=Bodies.rectangle(160,350,160,310,options)
  canon=new Canon(180,110,130,100,angle)
}

function draw() {
  background(189);
 image(backgroundImage,0,0,1200,600)
 
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,width*2,1)

  push()
  imageMode(CENTER)
    //rect(tower.position.x,tower.position.y,160,310)
    image(towerImage,tower.position.x,tower.position.y,160,310)
  pop()

  canon.display()
}
