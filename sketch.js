//Namespacing.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var tank,ground;

function setup() {
    //Creates the canvas
    createCanvas(1200,800);

    engine = Engine.create();
    world = engine.world;

    tank = new Tanker(200,750,100,50);
    ground = new Ground(600,800,1200,20);
}

function draw() {
    //Changes the colour of the background to green.
    background("green");

    Engine.update(engine);

    tank.display();
    ground.display();
}