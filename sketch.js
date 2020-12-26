const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5, pig,pig2, log,log2, bird;

function setup(){
    var canvas = createCanvas(1300,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,100,75,75);
    box2 = new Box(1100,100,75,75);
    box3 = new Box(900,400,75,75);
    box4 = new Box(1100,400,75,75);
    box5 = new Box(1000,0,75,75);
    ground = new Ground(width/2,height,1300,20);
    pig = new Pig(1000,400);
    pig2 = new Pig(1000,100);
    log = new Log(1000,200,300,PI/2);
    log2 = new Log(1000,50,300,PI/2);
    log3 = new Log(900,-50,150,PI/7);
    log4 = new Log(1100,-50,150,-PI/7);
    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig2.display();
    log.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
}