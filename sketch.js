const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28;
var polygon;
var sling;

function setup() {
	createCanvas(1200, 580);


	engine = Engine.create();
  world = engine.world;

    
    ground=new Ground(600,570,1200,20);

    stand1=new Ground(990,250,200,10);
    stand2=new Ground(745,450,200,10);
    
    
    box1=new YellowBox(930,225,30,40);
    box2=new YellowBox(960,225,30,40);
    box3=new YellowBox(990,225,30,40);
    box4=new YellowBox(1020,225,30,40);
    box5=new YellowBox(1050,225,30,40);
    
    box6=new OrangeBox(945,185,30,40);
    box7=new OrangeBox(975,185,30,40);
    box8=new OrangeBox(1005,185,30,40);
    box9=new OrangeBox(1035,185,30,40);

    box10=new RedBox(960,145,30,40);
    box11=new RedBox(990,145,30,40);
    box12=new RedBox(1020,145,30,40);

    box13=new BlueBox(975,105,30,40);
    box14=new BlueBox(1005,105,30,40);

    box15=new BlueBox(990,65,30,40);
   
    
    box16=new BlueBox(670,425,30,40);
    box17=new BlueBox(700,425,30,40);
    box18=new BlueBox(730,425,30,40);
    box19=new BlueBox(760,425,30,40);
    box20=new BlueBox(790,425,30,40);
    box21=new BlueBox(820,425,30,40);

    box22=new OrangeBox(700,385,30,40);
    box23=new OrangeBox(730,385,30,40);
    box24=new OrangeBox(760,385,30,40);
    box25=new OrangeBox(790,385,30,40);

    box26=new RedBox(730,345,30,40); 
    box27=new RedBox(760,345,30,40);   

    box28=new YellowBox(745,305,30,40);
   
    polygon=new Polygon(200,300,50);

    sling=new SlingShot(polygon.body,{x:200,y:300});

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  
  

  

  ground.display();
  stand1.display();
  stand2.display();

  
 
  box1.display();

  box2.display();

  box3.display();

  box4.display();

  box5.display();

  box6.display();

  box7.display();

  box8.display();

  box9.display();

  box10.display();

  box11.display();

  box12.display();

  box13.display();

  box14.display();

  box15.display();
  
  
  box16.display();

  box17.display();

  box18.display();

  box19.display();

  box20.display();

  box21.display();
  
  box22.display();

  box23.display();

  box24.display();

  box25.display();

  box26.display();

  box27.display();

  box28.display();

  polygon.display();

  sling.display();



  }

  

 
 


  function mouseDragged(){
    if(mouseDragged){
    
    
    Matter.Body.setPosition(polygon.body,{x: mouseX , y: mouseY});
    }
  }
  function mouseReleased()
  {
    sling.fly();
  }
  function keyPressed() {
    if (keyCode === 32) {
      Matter.Body.setPosition(polygon.body, {x:100, y:200}) 
      sling.attach(polygon.body);
    }
    drawSprites();  
  }
    
