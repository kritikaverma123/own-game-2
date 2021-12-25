
var bg
var stonesGroup
var steamGroup 
function  preload(params) {
    bgi=loadImage("bg2.jpg")
    stone1i=loadImage("rock.png")
    stone2i=loadImage("stone2.png")
    streami=loadImage("stream.png")
    standingmani=loadImage("standingman.png");
    playeri=loadAnimation("png/Run1.png","png/Run2.png","png/Run3.png","png/Run4.png","png/Run5.png","png/Run6.png","png/Run7.png","png/Run8.png")
}
function setup(){
    canvas=createCanvas(displayWidth-100,displayHeight-170);
    bg=createSprite(0,displayHeight-600,displayWidth,displayHeight)
    bg.scale=2.8
    bg.addImage(bgi)
    bg. velocityX=-2;
    
    standingman= createSprite(200,410,100,100);
    standingman.scale=0.4;
    standingman. addAnimation("running",playeri);
    stonesGroup= createGroup()
    streamGroup = createGroup()

    invisibleGround=createSprite(600,560,1200,20)
    invisibleGround.visible=false
    console.log(standingman.y)
}

function draw(){
    background("white");
    if(bg.x<600){
        bg.x=800

    }
   // spawnstone();
    spawnstream();
    drawSprites()

    standingman.collide(invisibleGround)

    if(keyDown("left")){
standingman.x=standingman.x-3
    }
    
    if(keyDown("right")){
      standingman.x=standingman.x+3
          }
         
          if(keyDown("space") && standingman.y>=200){
            standingman.velocityY=-9
                }    
          standingman.velocityY=standingman.velocityY+0.5        

}
function spawnstone() {
    //write code here to spawn the stone
    if (frameCount % 100 === 0) {
        stone1=createSprite(displayWidth-20,displayHeight-200,100,100)
        stone1.addImage(stone1i)
        stone1.scale=0.15
         stone1.velocityX = -3;
      
       //assign lifetime to the variable
      stone1.lifetime = 500;
      
      
      //add each cloud to the group
      stonesGroup.add(stone1);
    }
  }

  function spawnstream() {
    //write code here to spawn the stone
    if (frameCount % 450 === 0) {
        stream1=createSprite(displayWidth-20,displayHeight-250,100,100)
        stream1.addImage(streami)
        stream1.scale=0.35
        stream1.velocityX = -3;
      
       //assign lifetime to the variable
       stream1.lifetime = 500;
      
      
      //add each cloud to the group
      streamGroup.add(stream1);
    }
  }
  
  
  
  

  
  

