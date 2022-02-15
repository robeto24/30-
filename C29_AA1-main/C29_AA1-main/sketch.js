const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var cuerda;
var fondo;
var rabbit;
var melon;
var cut;
var rabbit2;
var cut2;

function preload(){

fondo = loadImage("background.png");
rabbit = loadImage("Rabbit-01.png");
melon = loadImage("melon.png");
cut = loadImage("cut_button.png");



}
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  rabbit2 = createSprite(250,600,50,50)
  rabbit2.addImage(rabbit);
  rabbit2.scale = 0.3;

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  cuerda = new Rope(10,{x:250,y:0});
  var fruit_opcions = {density:0.001};
  fruit = Bodies.circle(250,200,15,fruit_opcions);
  Matter.Composite.add(cuerda.body,fruit);
  cr = new Cuerpo(cuerda,fruit)

  cut2 = createImg("cut_button.png");
  cut2.position(240,0);
  cut2.size(50,50);
  cut2.mouseClicked(soltar)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{

  
  background(fondo);

  ground.show();
  cuerda.show();
  imageMode(CENTER)
  image(melon,fruit.position.x,fruit.position.y,100,100);
  
  Engine.update(engine);
  

 
   drawSprites();
}



function soltar(){

cuerda.break();
cr.soltar2();
cr = null;



} 
