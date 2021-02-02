var girl, img
var edges
var score = 0

function preload(){
img = loadImage("girl.png")
run = loadAnimation("run1.png","run2.png","run3.png","run4.png","run5.png","run6.png")
runLeft = loadAnimation("run1-2.png","run2-2.png","run3-2.png","run4-2.png","run5-2.png","run6-2.png")
monImg = loadImage("ghost.png")
coinImg = loadImage("coin.png")
wall = loadImage("wall.png")
floor = loadImage("floor.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  console.log(width+","+height)

  backg = createSprite(width/2, height/2)
  backg.addImage(floor)
  backg.scale = 8

  edges = createEdgeSprites();
  girl = createSprite(180, 1780, 40, 40);
  girl.addAnimation("ran",run);
  girl.addAnimation("runLeft",runLeft)

  gem = createSprite(3620, 150, 40, 40)

 // key = createSprite(80, 80, 40, 40)

  wall1 = createSprite(225, 1500, 440, 40);
  //wall1.addImage(wall)
  wall2 = createSprite(225, 1280, 40, 400);
  //wall2.addImage(wall)
  wall3 = createSprite(225, 800, 440, 40);
  //wall3.addImage(wall)
  wall4 = createSprite(720, 1735, 40, 400);
  //wall4.addImage(wall)
  wall5 = createSprite(900, 1745, 400, 40);
 // wall5.addImage(wall)
  wall6 = createSprite(1350, 1735, 40, 400);
//  wall6.addImage(wall)
  wall7 = createSprite(1050, 1090, 700, 40);
//  wall7.addImage(wall)
  wall8 = createSprite(1040, 1080, 40, 500);
//  wall8.addImage(wall)
  wall9 = createSprite(1390, 900, 40, 500);
 // wall9.addImage(wall)
  wall10 = createSprite(1940, 1420, 600, 40);
 // wall10.addImage(wall)
  wall11 = createSprite(1890, 1730, 600, 40);
 // wall11.addImage(wall)
  wall12 = createSprite(2200, 1910, 40, 400);
 // wall12.addImage(wall)
  wall13 = createSprite(570, 500, 600, 40);
 // wall13.addImage(wall)
  wall14 = createSprite(120, 200, 600, 40);
 // wall14.addImage(wall)
  wall15 = createSprite(1150, 100, 40, 400);
//  wall15.addImage(wall)
  wall16 = createSprite(2130, 1040, 600, 40);
 // wall16.addImage(wall)
  wall18 = createSprite(2550, 1650, 40, 600);
  wall18.addImage(wall)
  wall19 = createSprite(2850, 1740, 600, 40);
  wall19.addImage(wall)
  wall20 = createSprite(3550, 1650, 40, 600);
  wall20.addImage(wall)
  wall21 = createSprite(3260, 1440, 600, 40);
  wall21.addImage(wall)
  wall22 = createSprite(3030, 880, 40, 600);
  wall22.addImage(wall)
  wall23 = createSprite(3030, 880, 600, 40);
  wall23.addImage(wall)
  wall24 = createSprite(1830, 260, 600, 40);
  wall24.addImage(wall)
  wall25 = createSprite(1840, 0, 40, 550);
  wall25.addImage(wall)
  wall26 = createSprite(2600, 100, 40, 550);
  wall26.addImage(wall)
  wall26.scale=2
  wall26.rotation = 90;

  
  winWall1 = createSprite(3400, 100, 40, 550);
  winWall2 = createSprite(3655, 360, 550, 40);

  portal1 = createSprite(10, height/2-250, 20, 1600)
  portal1.visible = false;
  portal2 = createSprite(width-10,height/2-250, 20, 1600)
  portal2.visible = false;

  monster1 = createSprite(100,100,50,50)
  monster1.addImage(monImg)
  monster1.velocityX=4;
  monster1.velocityY=5;

  monster2 = createSprite(width-100,height-100,50,50)
  monster2.addImage(monImg)
  monster2.velocityX=-3;
  monster2.velocityY=-4;

  monster3 = createSprite(width/2, height-100,50,50)
  monster3.addImage(monImg)
  monster3.velocityX=4;
  monster3.velocityY=-5;

  monster4 = createSprite(width/2, 100,50,50)
  monster4.addImage(monImg)
  monster4.velocityX=3;
  monster4.velocityY=4;

  guard1 = createSprite(1990, 1220, 40, 40)
  guard1.velocityY = 4;

  // coin1 = createSprite(570, 1750, 20, 20)
  // coin1.addImage(coinImg)
  // coin2 = createSprite(570, 1450, 20, 20)
  // coin2.addImage(coinImg)
  // coin3 = createSprite(570, 1150, 20, 20)
  // coin3.addImage(coinImg)
  // coin4 = createSprite(570, 900, 20, 20)
  // coin4.addImage(coinImg)
  // coin5 = createSprite(220, 900, 20, 20)
  // coin5.addImage(coinImg)
  // coin6 = createSprite(70, 1150, 20, 20)
  // coin6.addImage(coinImg)
  // coin7 = createSprite(890, 890, 20, 20)
  // coin7.addImage(coinImg)
  // coin8 = createSprite(890, 1300, 20, 20)
  // coin8.addImage(coinImg)
  // coin9 = createSprite(890, 1580, 20, 20)
  // coin9.addImage(coinImg)
  // coin10 = createSprite(1200, 1400, 20, 20)
  // coin10.addImage(coinImg)
  // coin11 = createSprite(1600, 1200, 20, 20)
  // coin11.addImage(coinImg)
  // coin12 = createSprite(1900, 1580, 20, 20)
  // coin12.addImage(coinImg)
  // coin13 = createSprite(2200, 1200, 20, 20)
  // coin13.addImage(coinImg)
  // coin14 = createSprite(2400, 1600, 20, 20)
  // coin14.addImage(coinImg)
  // coin15 = createSprite(2800, 1580, 20, 20)
  // coin15.addImage(coinImg)
  // coin16 = createSprite(3300, 1700, 20, 20)
  // coin16.addImage(coinImg)

  for(var i = 100; i<width-300; i=i+400){
    coin = createSprite(i,380,20,20)
    coin.addImage(coinImg)
  }

  for(var i = 320; i<width-300; i=i+400){
    coin = createSprite(i,650,20,20)
    coin.addImage(coinImg)
  }

  for(var i = 120; i<width-300; i=i+550){
    coin = createSprite(i,960,20,20)
    coin.addImage(coinImg)
  }

  for(var i = 120; i<width-300; i=i+400){
    coin = createSprite(i,1290,20,20)
    coin.addImage(coinImg)
  }

  coin2Group = createGroup();

  for(var i = 520; i<width-300; i=i+630){
    coin = createSprite(i,1550,20,20)
    coin.addImage(coinImg)
    coin2Group.add(coin)
  }

  coin1Group = createGroup();

  for(var i = 520; i<width-300; i=i+640){
    coin = createSprite(i,1880,20,20)
    coin.addImage(coinImg)
    coin1Group.add(coin)
  }



}

function draw() {
  background(200);  


  if(keyDown("right")){
    girl.velocityX = 4
    girl.velocityY = 0
    girl.changeAnimation("ran",run);
  }
  if(keyDown("left")){
    girl.velocityX = -4
    girl.velocityY = 0
    girl.changeAnimation("runLeft",runLeft)
  }
  if(keyDown("up")){
    girl.velocityY = -4
    girl.velocityX = 0
  }
  if(keyDown("down")){
    girl.velocityY = 4
    girl.velocityX = 0
  }

  for(var i = 0; i<coin1Group.length; i++){
    
    if(girl.isTouching(coin1Group.get(i))){
      coin1Group.get(i).destroy();
      score = score+1;
    }

  }
  
  for(var i = 0; i<coin2Group.length; i++){
    
    if(girl.isTouching(coin2Group.get(i))){
      coin2Group.get(i).destroy();
      score = score+1;
    }

  }

  //girl.collide(edges)

  girl.collide(wall1)
  girl.collide(wall2)
  girl.collide(wall3) 
  girl.collide(wall4) 
  girl.collide(wall5) 
  girl.collide(wall6) 
  girl.collide(wall7) 
  girl.collide(wall8) 
  girl.collide(wall9) 
  girl.collide(wall10) 
  girl.collide(wall11) 
  girl.collide(wall12) 
  girl.collide(wall13)
  girl.collide(wall14)
  girl.collide(wall15)
  girl.collide(wall16)
  girl.collide(wall18)
  girl.collide(wall19)
  girl.collide(wall20)
  girl.collide(wall21)
  girl.collide(wall22)
  girl.collide(wall23)
  girl.collide(wall24)
  girl.collide(wall25)
  girl.collide(wall26)

  girl.collide(portal1)
  girl.collide(portal2)

  guard1.bounceOff(wall16)
  guard1.bounceOff(wall10)

  monster1.bounceOff(edges)
  monster2.bounceOff(edges)
  monster3.bounceOff(edges)
  monster4.bounceOff(edges)

  monster1.bounce(monster2)
  monster1.bounce(monster3)
  monster1.bounce(monster4)
  monster2.bounce(monster3)
  monster2.bounce(monster4)
  monster3.bounce(monster4)

  if(girl.isTouching(monster1) ||
     girl.isTouching(monster2) ||
     girl.isTouching(monster3) ||
     girl.isTouching(monster4)){
         girl.x=180
         girl.y=1780
     }

  if(girl.isTouching(guard1)){
    girl.x=180
    girl.y=1780
  }
  if(girl.x<0){
    girl.x=width
  }
  // if(girl.isTouching(portal2)){
  //   girl.x=10
  // }

  // if(girl.x>3900){
  //   girl.x=0
  // }

  // if(girl.isTouching(edges) ||
  // girl.isTouching(wall1) ||
  // girl.isTouching(wall2)||
  // girl.isTouching(wall3) ||
  // girl.isTouching(wall4) ||
  // girl.isTouching(wall5) ||
  // girl.isTouching(wall6) ||
  // girl.isTouching(wall7) ||
  // girl.isTouching(wall8) ||
  // girl.isTouching(wall9) ||
  // girl.isTouching(wall10) ||
  // girl.isTouching(wall11) ||
  // girl.isTouching(wall12) ||
  // girl.isTouching(wall13)){
  //   girl.x=180
  //   girl.y=1780
  // }

  for (var x = 0; x < width; x += width / 7) {
		for (var y = 0; y < height; y += height / 5) {
			stroke(0);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}


  drawSprites();

  
  textSize(90)
  text(mouseX+","+mouseY,50,100)
  fill("red")

  text("score: "+score, width/2, 80)

}