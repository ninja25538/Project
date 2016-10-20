window.onload = function() {
  //makes the sky blue
     document.body.style.backgroundColor = "black";

  //TODO Draw Map1 TODO
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
  ctx.canvas.width = 1000;
  ctx.canvas.height = 1000;
  
//A random number
var nonsense =  Math.floor((Math.random() * 25) + 1);  
  
//player's location
var playerX = 250;
var playerY = 230;

//bandit's location
var banditX = 200;
var banditY = 200;

//shape shifter's location
var shapeShifterrX = 200;
var shapeShifterY = 200;


//player's speed
var playerSpeed = 5;
//is player in fight?
var inFight = false;
//Whether the Protagonist can move or not
var movement = true;

//If scene (map drawn) = 1, it'll draw map 1. if scene is = 2, it'll draw map 2, etc.
var scene = 1;


  //Draws the main character
  function drawProtagonistFacingRight(){
//Draws his hood
  ctx.fillStyle = "red";
ctx.fillRect(playerX, playerY, 23, 5);
ctx.fillRect(playerX, playerY, 13, 20);
ctx.fillRect(playerX, playerY + 20, 23, 5);
//Draws the protagonist's cloak
ctx.fillStyle = "red";
ctx.fillRect(playerX, playerY + 15, 18, 30);
//Draws the shadow that hides the protagonist's face 
ctx.fillStyle = "black";
ctx.fillRect(playerX + 13, playerY + 3, 10, 20);
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
  
  
  //Draws The Bandit
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
    
    //100 LINES!!!!
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
    //his left pant leg
    ctx.fillRect(banditX + 5, banditY + 49, 8, 20);
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 11, banditY + 53, 3, 15);
    //his shoes
    //200 LINES!!!!!!
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 68, 15, 5);
  }
  
  //Draws The Shape Shifter
  function drawShapeShifterFacingRight(){
    ctx.fillStyle = "#125C00";
    //his fleshy face
    ctx.fillRect(shapeShifterX + 1, shapeShifterY, 20, 25);
    
    //his blood red eyes
    ctx.fillStyle = "#ff0000";
    //his I (EYE)
    ctx.fillRect(shapeShifterX + 15, shapeShifterY + 5, 5, 10);
    
    //his blood soaked mouth
    ctx.fillStyle = "#d30000";
    ctx.fillRect(shapeShifterX + 13, shapeShifterY + 18, 8, 3);
    
    //his EEEEVIL SHIRT!!!
    ctx.fillStyle = "#012b49";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 24, 10, 25);
    
    //his jeans
    //his PANT LEG
    ctx.fillStyle = "#840000";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 47, 10, 26);
    //his murderous arms
    ctx.fillStyle = "#125C00";
    //his AAAAARRRMM
    ctx.fillRect(shapeShifterX + 5, shapeShifterY + 24, 7, 27);
    
    //his eeeeeeevil shooooooeeessss
    ctx.fillStyle = "#000000";
    //Da shoe 
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 71, 15, 5);
    
  }
  
  function drawShapeShifterFacingLeft(){
    ctx.fillStyle = "#125C00";
    //his fleshy face
    ctx.fillRect(shapeShifterX - 3, shapeShifterY, 20, 25);
    
    //his blood red eyes
    ctx.fillStyle = "#ff0000";
    //his I (EYE)
    ctx.fillRect(shapeShifterX + 1, shapeShifterY + 5, 5, 10);
    
    //his blood soaked mouth
    ctx.fillStyle = "#d30000";
    ctx.fillRect(shapeShifterX - 1, shapeShifterY + 18, 8, 3);
    
    //his EEEEVIL SHIRT!!!
    ctx.fillStyle = "#012b49";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 24, 10, 25);
    
    //his jeans
    //his PANT LEG
    ctx.fillStyle = "#840000";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 47, 10, 26);
    //his murderous arms
    ctx.fillStyle = "#125C00";
    //his AAAAARRRMM
    ctx.fillRect(shapeShifterX + 5, shapeShifterY + 24, 7, 27);
    
    //his eeeeeeevil shooooooeeessss
    ctx.fillStyle = "#000000";
    //Da shoe (OF EEEEEEVIIL
    ctx.fillRect(shapeShifterX - 1, shapeShifterY + 71, 15, 5);
    
  }
  
  function drawShapeShifterFacingUp(){
    ctx.fillStyle = "#125C00";
    //his fleshy face
    ctx.fillRect(shapeShifterX, shapeShifterY, 25, 25);
    
    //his blood red eyes
    ctx.fillStyle = "#ff0000";
    //his leeeeeftttt eeyeeeeee (your left bro)
    ctx.fillRect(shapeShifterX + 5, shapeShifterY + 5, 5, 10);
    //his riiiiiiiggghhhttttt eeeeyyyeeee (YOUR RIGHT MAN!!!!)
    ctx.fillRect(shapeShifterX + 15, shapeShifterY + 5, 5, 10);
    
    //his blood soaked mouth
    ctx.fillStyle = "#d30000";
    ctx.fillRect(shapeShifterX + 6, shapeShifterY + 17, 12, 3);
    
    //his EEEEVIL SHIRT!!!
    ctx.fillStyle = "#012b49";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 24, 17, 25);
    
    //the heart on his shirt
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(shapeShifterX + 8.5, shapeShifterY + 30, 8, 9);
    ctx.fillStyle = "#012b49";
    ctx.fillRect(shapeShifterX + 11.5, shapeShifterY + 27, 2, 5);
    ctx.fillRect(shapeShifterX + 8, shapeShifterY + 37, 3, 3);
    ctx.fillRect(shapeShifterX + 14.5, shapeShifterY + 37, 3, 3);
    
    //his jeans
    //his left pant leg (YOUR LEEEEFFFTTTTTTT)
    ctx.fillStyle = "#840000";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 47, 10, 26);
    //his riiiiiight pant leg (Yoooouuuurrrr riiiiggghhtt)
    ctx.fillRect(shapeShifterX + 11, shapeShifterY + 47, 10, 26);
    ctx.fillStyle = "black";
    ctx.fillRect(shapeShifterX + 11.5, shapeShifterY + 52, 2, 18);
    
    //his murderous arms
    ctx.fillStyle = "#125C00";
    //his lefty army (YOur left man, your left, don't forget again!)
    ctx.fillRect(shapeShifterX - 3, shapeShifterY + 24, 7, 27);
    //his righty tighty arm (your right, never forget)
    ctx.fillRect(shapeShifterX + 21, shapeShifterY + 24, 7, 27);
    
    //his eeeeeeevil shooooooeeessss
    ctx.fillStyle = "#000000";
    //Da shoe on YOUR left side
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 71, 8, 5);
    //DAAA ShOOEEEE ONNN YOOOUURR RIIIIGGGHTTT SIIIDDEEE
    ctx.fillRect(shapeShifterX + 13, shapeShifterY + 71, 8, 5);
    
  }
  
  function drawShapeShifterFacingDown(){
    ctx.fillStyle = "#125C00";
    //his fleshy face
    ctx.fillRect(shapeShifterX, shapeShifterY, 25, 25);
    
    //his EEEEVIL SHIRT!!!
    ctx.fillStyle = "#012b49";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 24, 17, 25);
    
    //his jeans
    //his left pant leg (YOUR LEEEEFFFTTTTTTT)
    ctx.fillStyle = "#840000";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 47, 10, 26);
    //his riiiiiight pant leg (Yoooouuuurrrr riiiiggghhtt)
    ctx.fillRect(shapeShifterX + 11, shapeShifterY + 47, 10, 26);
    ctx.fillStyle = "black";
    ctx.fillRect(shapeShifterX + 11.5, shapeShifterY + 52, 2, 18);
    
    //his murderous arms
    ctx.fillStyle = "#125C00";
    //his lefty army (YOur left man, your left, don't forget again!)
    ctx.fillRect(shapeShifterX - 3, shapeShifterY + 24, 7, 27);
    //his righty tighty arm (your right, never forget)
    ctx.fillRect(shapeShifterX + 21, shapeShifterY + 24, 7, 27);
    
    //his eeeeeeevil shooooooeeessss
    ctx.fillStyle = "#000000";
    //Da shoe on YOUR left side
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 71, 8, 5);
    //DAAA ShOOEEEE ONNN YOOOUURR RIIIIGGGHTTT SIIIDDEEE
    ctx.fillRect(shapeShifterX + 13, shapeShifterY + 71, 8, 5);
    
  }
  
  
  //All in-game objects
  
  //makes a function called tree that places a tree wherever I want
  function tree(treeX, treeY){
    //The color of grass (And leaves in my opinion)
    ctx.fillStyle = "#00a51b";
    //Draws the leaves on the trees
    ctx.fillRect(treeX, treeY, 30, 5);
    ctx.fillRect(treeX, treeY, 30, 5);
    ctx.fillRect(treeX - 5, treeY + 5, 40, 5);
     ctx.fillRect(treeX - 10, treeY + 10, 50, 20);
     ctx.fillRect(treeX - 5, treeY + 15, 40, 20);
     //Draws the tree's trunk
     ctx.fillStyle = "#916118";
     ctx.fillRect(treeX + 6, treeY + 35, 15, 20);
  }
  
  function moon(moonX, moonY){
    ctx.fillStyle = "#e5e5e5";
    ctx.fillRect(moonX, moonY, 75, 75);
    ctx.fillStyle = "#8e8e8e";
    ctx.fillRect(moonX, moonY, 5, 5);
    
    
  }
  
  //All in-game tiles WARNING: Put tiles before sand
  
  //ceates a function called sand that places a tile of sand
  function grass(grassX, grassY){
    ctx.fillStyle = "#00a51b";
    ctx.fillRect(grassX, grassY, 25, 25);
  }
  
  //Draws map scene 1
  function drawMap1(){
   document.body.style.backgroundColor = "black"; 
   moon(200, 200);
  }
  //If the scene number is equal to a specific number, draw a specific map.
  if(scene == 1){
    drawMap1();
  }
 
 //Checks to see if device is mobile
 var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


 //Adds buttons to game IF the device is mobile
 if (!isMobile.any()) { 
 document.addEventListener('mousedown',function(e){
	var result_x = document.getElementById('x_result');
	var result_y = document.getElementById('y_result');
	result_x.innerHTML = e.clientX;
	result_y.innerHTML = e.clientY;
});
}

var sampleCookiez = document.cookie = "cookie; expires=Thu, 18 Dec 2018 12:00:00 UTC";

//Adds movement to game if w a s or d  is pressed whether the device is mobile or not
document.addEventListener('keydown', function(e){
   if(e.key === 'w' && playerY >= 5 && movement === true){
   playerY-= playerSpeed;
   ctx.clearRect(0, 0, outerWidth, outerHeight);
  drawProtagonistFacingUp();
   }
  if(e.key == 'd' && playerX < outerWidth - 50 && movement === true){
    playerX+= playerSpeed;
   ctx.clearRect(0, 0,outerWidth, outerHeight);
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
