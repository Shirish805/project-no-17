
var sword, swordImage;
var fruit,fruitGroup;
var appleImage, orangeImage;
var grapeImage;
var fruit4, lemonImage;
var alien,alienImage, enemyGroup;
var PLAY=1;
var END=0;
var gameState = PLAY;

var score;
var gameover,gameoverImage;


function preload(){
   alienImage = loadAnimation("alien1.png","alien2.png")
  
  swordImage = loadImage("knife.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
   gameoverImage = loadImage("gameover.png");
  
}

function setup(){
  createCanvas(600,400);
 
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.5;

  gameover = createSprite(300,200,20,20);
  gameover.addImage(gameoverImage);
  gameover.scale = 2;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();

  score = 0
  
  sword.setCollider("circle",0,0,30);
  sword.debug = false;
 
 
}
function draw(){
 
 background("grey");
 
 text("Score="+score,500,30);
   
  sword.x=World.mouseX;
  sword.y=World.mouseY;
    
   r = Math.round(random(1,4));
  
   a = Math.round(random(1,4));
  
Fruit();
enemy();
 
  if(gameState===PLAY){
     gameover.visible=false;
    
   if(fruitGroup.isTouching(sword)) { 
     
         fruitGroup.destroyEach();
         score=score+2; 
   }
  }
  if(enemyGroup.isTouching(sword)) {
    enemyGroup.destroyEach();
    gameState=END
    
  } if (gameState===END) {
    sword.destroy();
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();  
    gameover.visible=true;
  }
  drawSprites();
    
  drawSprites();
  fill("black");
  textSize(18);
  text(" score ="+score,500,20);
}
function Fruit(){
  
 if(World.frameCount%80==0){
   fruit = createSprite(400,200,20,20);
   fruit.scale=0.2;
   fruit.y = Math.round(random(50,340));
   fruit.velocityX=-7;
   fruit.setLifetime = 100;
   if(r==1){
     fruit.addImage(fruit1Image);
   } else if(r ==2) {
      fruit.addImage(fruit2Image);
   }  else if(r ==3) {
      fruit.addImage(fruit3Image);
   }  else if(r ==4) {
      fruit.addImage(fruit4Image);
   }
   fruitGroup.add(fruit);  
}
}
   
function enemy(){
   if(World.frameCount%80==0){
  alien = createSprite(300,300,20,20);
  alien.addAnimation("moving", alienImage); 
  alien.scale=1;
  alien.velocityX=-7; 
  alien.setLifetime = 100;
 
   enemyGroup.add(alien);  
}
}
