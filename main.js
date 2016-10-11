window.onload = function() {
  //makes the sky blue
     document.body.style.backgroundColor = "skyblue";

  //TODO Draw Bandit
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
  ctx.fillStyle = "#0B0B0B";
  ctx.canvas.width = window.outerWidth;
  ctx.canvas.height = window.outerHeight;
  
//player's location
var playerX = outerWidth / 2;
var playerY = outerHeight / 2;
//player's speed
var playerSpeed = 5;
//is player in fight?
var inFight = false;
//Whether the Protagonist can move or not
var movement = true;


//bandit's location
var banditX = outerWidth / 2;
var banditY = outerHeight / 2;


  //Draws the main character
  function drawProtagonistFacingRight(){
//Draws his hood
ctx.fillRect(playerX, playerY, 20, 5);
ctx.fillRect(playerX, playerY, 13, 20);
  //Draws the shadow that hides the protagonist's face 
ctx.fillStyle = "black";
ctx.fillRect(playerX + 13, playerY + 5, 7, 15);
//Draws the protagonist's cloak
ctx.fillStyle = "#0B0B0B";
ctx.fillRect(playerX, playerY + 15, 15, 25);
}

  function drawProtagonistFacingLeft(){
    //Draws his hood
ctx.fillRect(playerX, playerY, 20, 5);
ctx.fillRect(playerX + 7, playerY, 13, 20);
//Draws the shadow that hides the protagonist's face 
ctx.fillStyle = "black";
ctx.fillRect(playerX, playerY + 5, 7, 15);
//Draws the protagonist's cloak
ctx.fillStyle = "#0B0B0B";
ctx.fillRect(playerX + 5, playerY + 15, 15, 25);
  }
  
  function drawProtagonistFacingUp(){
    //Draws his hood
    ctx.fillStyle = "#0B0B0B";
ctx.fillRect(playerX + 2.5, playerY, 20, 20);
//Draws the protagonist's cloak
ctx.fillStyle = "#0B0B0B";
ctx.fillRect(playerX + 5, playerY + 15, 15, 25);
  }
  
  function drawProtagonistFacingDown(){
    //Draws his hood
    ctx.fillStyle = "#0B0B0B";
ctx.fillRect(playerX - 2.5 , playerY, 20, 20);
  //Draws the shadow that hides the protagonist's face 
ctx.fillStyle = "black";
ctx.fillRect(playerX + 7, playerY + 5, 8, 15);
//Draws the protagonist's cloak
ctx.fillStyle = "#0B0B0B";
ctx.fillRect(playerX, playerY + 15, 15, 25);
  }
  
  
  //Draws the Bandit
  function drawBanditFacingRight(){
     //His face
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX + 2, banditY, 20, 25);
    
    //His shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 25, 8, 25);
    
    ctx.fillStyle = "#FFDE7A";
    //His arm
    ctx.fillRect(banditX + 5, banditY + 24, 8, 28);
    
    //His eye
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 14, banditY + 5, 5, 8);
    //His bandit thing on his mouth? I don't know what it's called
    ctx.fillStyle = "red";
    ctx.fillRect(banditX + 4, banditY + 15, 18, 10);
    
    //His pant leg
    ctx.fillStyle = "#11226B";
    ctx.fillRect(banditX + 5, banditY + 49, 8, 20);

    //his shoe
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 68, 7.5, 5);
  }
  
  function drawBanditFacingLeft(){
    //His face
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX - 6, banditY, 20, 25);
    
    //His shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 2, banditY + 25, 8, 25);
    
    ctx.fillStyle = "#FFDE7A";
    //His arm
    ctx.fillRect(banditX + 2, banditY + 24, 8, 28);
    
    //His eye
    ctx.fillStyle = "black";
    ctx.fillRect(banditX - 4, banditY + 5, 5, 8);
    //His bandit thing on his mouth? I don't know what it's called
    ctx.fillStyle = "red";
    ctx.fillRect(banditX - 7, banditY + 15, 18, 10);
    
    //His pant leg
    ctx.fillStyle = "#11226B";
    ctx.fillRect(banditX + 2, banditY + 49, 8, 20);

    //His shoe
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 2, banditY + 68, 7.5, 5);
  }
  
  function drawBanditFacingUp(){
     //His face
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX, banditY, 25, 25);
    
    //His shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 25, 16, 25);
    
    //His arms
    //His right arm (YOUR RIGHT!!!!)
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX + 21, banditY + 25, 8, 20);
    //His left arm (On your left side)
    ctx.fillRect(banditX - 3, banditY + 25, 8, 20);
    
    //His pants
    //His right pant leg (ur right)
    ctx.fillStyle = "#11226B";
    ctx.fillRect(banditX + 12, banditY + 49, 8, 20);
    ctx.fillRect(banditX + 5, banditY + 49, 8, 20);
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 11, banditY + 53, 3, 15);

    //his shoes
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 68, 15, 5);
  }
  
  function drawBanditFacingDown(){
        //His face
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX, banditY, 25, 25);
    //His left eye (your left not his)
        ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 5, 5, 8);
    //His right eye (again your right)
    ctx.fillRect(banditX + 15, banditY + 5, 5, 8);
    //His bandit thing on his mouth? I don't know what it's called
    ctx.fillStyle = "red";
    ctx.fillRect(banditX, banditY + 15, 25, 10);
    
    //His shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 25, 16, 25);
    
    //His arms
    //His right arm (YOUR RIGHT!!!!)
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX + 21, banditY + 25, 8, 20);
    //His left arm (On your left side)
    ctx.fillRect(banditX - 3, banditY + 25, 8, 20);
    
    //His pants
    //His right pant leg (ur right)
    ctx.fillStyle = "#11226B";
    ctx.fillRect(banditX + 12, banditY + 49, 8, 20);
    ctx.fillRect(banditX + 5, banditY + 49, 8, 20);
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 11, banditY + 53, 3, 15);

    //his shoes
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 68, 15, 5);
  }
  
  //Draws all map scenes
  
  
drawBanditFacingLeft();
 movement = false;
 
//Adds movement to game.
document.addEventListener('keydown', function(e){
   if(e.key === 'w' && playerY >= 5 && movement === true){
   playerY-= playerSpeed;
   ctx.clearRect(0, 0, outerWidth, outerHeight);
  drawProtagonistFacingUp();
   }
  if(e.key == 'd' && playerX < outerWidth - 50 && movement === true){
    playerX+= playerSpeed;
   ctx.clearRect(0,0,outerWidth, outerHeight);
  drawProtagonistFacingRight();
  }
  
  if(e.key == 's' && playerY < outerHeight - 100 && movement === true){
    playerY+= playerSpeed;
   ctx.clearRect(0,0,outerWidth, outerHeight);
  drawProtagonistFacingDown();
  }
  
  if(e.key == 'a' && playerX > 5 && movement === true){
    playerX-= playerSpeed;
   ctx.clearRect(0, 0,outerWidth, outerHeight);
  drawProtagonistFacingLeft();
  }
});





};
