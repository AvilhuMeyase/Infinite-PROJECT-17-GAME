var mc,money,diamonds,big,bad;
var Score = 0;
var moneyG,diamondsG,bigG,badGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  
}

function setup(){
  
  createCanvas(400,500);

mc = createSprite(width/2,height-2,20,20);
mc.scale=2;
mc.shapeColor="blue";

moneyG=new Group();
diamondsG=new Group();
bigG=new Group();
badGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background('pink');
  mc.x = World.mouseX;
  
  edges= createEdgeSprites();
  mc.collide(edges);
  
    createMoney();
    createDiamonds();
    createBig();
    createBad();

    if (moneyG.isTouching(mc)) {
      moneyG.destroyEach();
      Score=Score + 50;
    }
    else if (diamondsG.isTouching(mc)) {
      diamondsG.destroyEach();
      Score=Score + 100;
    }
     else if(bigG.isTouching(mc)) {
      bigG.destroyEach();
      Score= Score + 150;
    }
     else{
      if(badGroup.isTouching(mc)) {
        gameState=END;
        
        textSize(20);
        text("Game Over",150,200);
        
        mc.x=200;
        mc.y=300;
        mc.scale=2;
        mc.shapeColor="Black";
        
        moneyG.destroyEach();
        diamondsG.destroyEach();
        bigG.destroyEach();
        badGroup.destroyEach();
        
        moneyG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        bigG.setVelocityYEach(0);
        badGroup.setVelocityYEach(0);
     
    }
  }
    
  drawSprites();
  textSize(10);
  text("Score: "+ Score,150,30);
  }

}

function createMoney() {
  if (World.frameCount % 200 == 0) {
  var money = createSprite(Math.round(random(50, 350),40, 10, 10));
  money.shapeColor="green";
  money.scale=0.3;
  money.velocityY = 3;
  money.lifetime = 200;
  moneyG.add(money);
  }
}

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.shapeColor="cyan";
  diamonds.scale=0.3;
  diamonds.velocityY = 3;
  diamonds.lifetime = 200;
  diamondsG.add(diamonds);
}
}

function createBig() {
  if (World.frameCount % 410 == 0) {
  var big = createSprite(Math.round(random(50, 350),40, 10, 10));
  big.shapeColor="orange";
  big.scale=0.3;
  big.velocityY = 3;
  big.lifetime = 200;
  bigG.add(big);
  }
}

function createBad(){
  if (World.frameCount % 530 == 0) {
  var bad = createSprite(Math.round(random(50, 350),40, 10, 10));
  bad.shapeColor="red";
  bad.scale=0.3;
  bad.velocityY = 3;
  bad.lifetime = 200;
  badGroup.add(bad);
  }
}