var thickness,wall;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  thickness=random(23,83);
  weight=random(30,52);
  bullet=createSprite(400, 200, 50, 10);
  bullet.shapeColor="white";
  wall=createSprite(1200, 200, thickness, height/2);
  bullet.velocityX=speed;

}

function draw() {
  background(0,0,0); 
  wall.shapeColor="blue";
  
  if(Collide(bullet,wall)) {
    bullet.velocityX=0;
 var damage =0.5*weight*speed*speed/thickness*thickness*thickness;
 if(damage>10){
  bullet.velocityX=0;
  bullet.shapeColor="green";
}
if(damage<10){
  bullet.velocityX=0;
  bullet.shapeColor="red";
}

 }
  
 bullet.collide(wall);
  drawSprites();
}