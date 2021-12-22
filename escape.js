
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="yellow";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="green";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="yellow"
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="green";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="purple";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="green";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="purple";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="yellow";


var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="green";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="yellow";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="purple";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="yellow";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="purple";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="green";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="purple";

paddle=createSprite(200,390,100,20)

paddle.shapeColor="gray"
ball=createSprite(200,300,20,20)
ball.shapeColor="gray"
var ball2 = createSprite(200,250,20,20);
ball2.shapeColor="gray"
var puntos=0;
var gameState="serve";
function draw() {
   
   
if (ball.isTouching(ball2))
 {
  playSound("sound://category_hits/retro_game_simple_impact_3.mp3");
  }
  if (ball.isTouching(paddle)||(ball2.isTouching(paddle)))
 {
  playSound("sound://category_hits/retro_game_hit_block_3.mp3");
  }
  background("white");
  paddle.x=World.mouseX
  createEdgeSprites()
  ball.bounceOff(ball2);
  ball2.bounceOff(ball)
  ball.bounceOff(rightEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  ball2.bounceOff(rightEdge);
  ball2.bounceOff(topEdge);
  ball2.bounceOff(leftEdge);
  ball2.bounceOff(paddle);
  //paddle.collide(rightEdge)
 // paddle.collide(leftEdge)
  
  
  if (keyDown("enter")) {
   ball.velocityX=-5
   ball.velocityY=-1
   ball2.velocityX=1
   ball2.velocityY=5
  }
  if (ball.isTouching(box1)|| ball2.isTouching(box1)){
  ball.bounceOff(box1)
  ball2.bounceOff(box1)
  box1.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box2)|| ball2.isTouching(box2)){
  ball.bounceOff(box2)
  ball2.bounceOff(box2)
  box2.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box3)|| ball2.isTouching(box3)){
  ball.bounceOff(box3)
  ball2.bounceOff(box3)
  box3.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box4)|| ball2.isTouching(box4)){
    ball.bounceOff(box4)
  ball2.bounceOff(box4)
  box4.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box5)|| ball2.isTouching(box5)){
    ball.bounceOff(box5)
  ball2.bounceOff(box5)
  box5.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box6)|| ball2.isTouching(box6)){
    ball.bounceOff(box6)
  ball2.bounceOff(box6)
  box6.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box7)|| ball2.isTouching(box7)){
    ball.bounceOff(box7)
  ball2.bounceOff(box7)
  box7.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box8)|| ball2.isTouching(box8)){
    ball.bounceOff(box8)
  ball2.bounceOff(box8)
  box8.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box9)|| ball2.isTouching(box9)){
    ball.bounceOff(box9)
  ball2.bounceOff(box9)
  box9.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box10)|| ball2.isTouching(box10)){
    ball.bounceOff(box10)
  ball2.bounceOff(box10)
  box10.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box11)|| ball2.isTouching(box11)){
    ball.bounceOff(box11)
  ball2.bounceOff(box11)
  box11.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box12)|| ball2.isTouching(box12)){
  ball.bounceOff(box12)
  ball2.bounceOff(box12)
  box12.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box13)|| ball2.isTouching(box13)){
  ball.bounceOff(box13)
  ball2.bounceOff(box13)
  box13.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box14)|| ball2.isTouching(box14)){
    ball.bounceOff(box14)
  ball2.bounceOff(box14)
  box14.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box15)|| ball2.isTouching(box15)){
    ball.bounceOff(box15)
  ball2.bounceOff(box15)
  box15.destroy();
  puntos=puntos+1
  }
  if (ball.isTouching(box16)|| ball2.isTouching(box16)){
    ball.bounceOff(box16)
  ball2.bounceOff(box15)
  box16.destroy();
  puntos=puntos+1
  }
  drawSprites();
 textSize(18);
 text("puntos:"+puntos, 308, 35);
 if (gameState == "serve")
 {
 text("¡Bienvenido!, presiona Enter para comenzar",30,200)
 }
 if (keyDown("enter")) {
   ball.velocityX=-5
   ball.velocityY=-1
   ball2.velocityX=1
   ball2.velocityY=5
  }
 }


