
var gameState = 1;
var bg
var PLAY = 1;
var END = 0;

var sword, enemy, fruit, fruitGroup, enemyGroup;
var swordImage, virusImage, fruit1, fruit2, fruit3, fruit4, gameoverImage;
var ju
var ss

function preload(){
  
 swordImage = loadImage("sword.png");
 virusImage = loadAnimation("bomb.png");
 fruit1 = loadImage("fruit1.png");
 fruit2 = loadImage("fruit2.png");
 fruit3 = loadImage("fruit3.png");
 fruit4 = loadImage("fruit4.png");
 gameoverImage = loadImage("gameover.png");
  
 sound = loadSound("knifeSwooshSound.mp3");
 sound1 = loadSound("gameover.mp3");
  ju = loadImage("juice.png")
  bg = loadImage("bg.jpg")
  ss = loadSound("Neffex.mp3")
  
}

function setup(){
  createCanvas(400,400);
  bg1 = createSprite(200,200,200,200)
  bg1.addImage(bg)
  bg1.scale = 0.83
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.1;
  sword.setCollider("rectangle",0,0,40,40);
  sword.debug = false;
  
  
  sword.visible = false
  
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  score = 0;
  ss.play(false)

}

function draw(){
  background("lightblue");
  
  if(keyDown("r")){
gameState = PLAY
     sword.addImage(swordImage);
    sword.visible = true
    sword.scale = 0.1
   // virus.rotateZ(frameCount%80 / 2)
     sword.visible = false

}
  
  if (gameState === PLAY){
    fruits();
    enemy();
    
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    
    if (fruitGroup.isTouching(sword)){
     
      
      fruitGroup.destroyEach();
    
    
      
      sound.play();
      score = score + 2
      
    }
    else
  {
   if (enemyGroup.isTouching(sword)){
     gameState = END;
     sound1.play();
     //playSpeech("game over",female,English)
     fruitGroup.destroyEach();
     enemyGroup.destroyEach();
     fruitGroup.setVelocityXEach(0);
     enemyGroup.setVelocityXEach(0);
    
     sword.addImage(gameoverImage);
     sword.scale = 0.9
     sword.x = 200;
     sword.y = 200;
     sword.visible = true
   }
      
        
      }
    
  }
  
  if(score == 50){
    
    
  }
  vertex(-2,-2,-2)
    
 
  drawSprites();
  fill("white")
  
  stroke("black")
  strokeWeight(4)
text("Score: "+ score,300,30);
  fill("white")
   text("Press R to Restart",150,10)
  
  strokeWeight(4);
  stroke("lightgreen")
  line(mouseX, mouseY, pmouseX, pmouseY);
  
}
 

function fruits(){
  push()
    if(World.frameCount%80===0){
      position = Math.round(random(1,2));
      
      
    fruit = createSprite(Math.round(random(1,100)),0,20,20);
      console.log(position);
      fruit.scale = 0.2;
     
     if(position == 1)
      
     {
      fruit.x = 420;
       fruit.velocityX = -(7 + (score/4));
      
   
     }
      else
      {
        if(position == 2){
          fruit.y = 0;
          fruit.velocityX = (7 +(score/4));
        }
        }   
        
       fruit.scale = 0.2;
       fruit.debug = false;
    
    
    r = Math.round(random(1,4));
    if(r == 2){
      fruit.addImage(fruit1);
    }else if(r == 2){
      fruit.addImage(fruit2);
    }else if(r == 3){
      fruit.addImage(fruit3);
    }else{
      fruit.addImage(fruit4);
    }
    
    fruit.y = Math.round(random(50,340));
    //fruit.setLifetime = 100;
    //fruit.velocityX = -4;
    fruitGroup.add(fruit)
      // fruitGroup.addAnimation("hahah",ju)
     // fruitGroup = rotateZ(millis() / 1000);
  fruit.rotationSpeed = 20
     // pop()
}
}

function enemy(){
  if(World.frameCount %100 === 0){
    virus = createSprite(400,400,20,20);
    virus.addAnimation("moving",virusImage);
    virus.x = Math.round(random(0,300));
    virus.velocityY = -(8 + (score/10));
    virus.setLifetime = 50;
    virus.scale = 0.10
   virus.rotationSpeed = 20
    virus.debug = false

    
    enemyGroup.add(virus);
  }
}
    
    
    
    
    
    
    
    
    
      
    
    
  
