var jungle, jungleImg;
var runner, runnerImg;
var branch, branchImg, branchGroup;
var rock, rockImg, rockGroup;
var gameState = "play";

function preload(){
    jungleImg = loadImage("jungle.jpg");
    runnerImg = loadImage("runner.png");
    branchImg = loadImage("branch.jpg");
    rockImg = loadImage("rock.png");
    
  }
  
  function setup() {
    createCanvas(600, 600);
    
    runner = createSprite(300,300,50,100);
    runner.addImage("runner",runnerImg);
    runner.scale = 0.5
  
    rockGroup = new Group()
    branchGroup = new Group()
  
  }
  
  function spawnObstacle() {
    if (frameCount%200===0) {
       rock = createSprite(300,-50);
       branch = createSprite(300,10);
       rock.addImage("rock",rockImg);
       branch.addImage("branch",branchImg);
       branch.velocityY = 1;
       rock.velocityY = 1.5;
       
       rockGroup.add(rock)
       branchGroup.add(branch)
       
       rock.lifetime = 800
       branch.lifetime = 800

       runner.velocityY = runner.velocityY+0.8
  
    }
  }
  

  function draw() {
    background(jungleImg);
    
    if(jungle.y > 400){
        jungle.y = 300
     }
     
     if (keyDown("space")){
      jungle.velocityY = -5
  
     }
  
     if (rockGroup.isTouching(runner)){
      jungle.velocityY = 0 
      gameState = "end"
     }

     
    
     spawnObstacle()
      drawSprites()
  }
  