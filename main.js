/* 
Hey! I'm really glad you got the game and I hope you like it!
*/

window.onload = function() {
  var mouseX = event.clientX;   
  var mouseY = event.clientY;     

  //TODO Draw Map1 TODO
var c=document.getElementById("canvas");
var ctx=c.getContext("2d");
  ctx.canvas.width =  750;
  ctx.canvas.height = 600;
  ctx.fillStyle = "yellow";

var mysteriousSound = document.getElementById("MysteriousSound");
var mysteriousNoise = document.getElementById("MysteriousNoise");

var onGame = false;
  
  //Which map to draw
var scene = 2;
//Start the game  
function game(){
  onGame = true;
  document.body.style.backgroundColor = "black";
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//The borders that the player can walk
var borderW = 300;
var borderA = 10;
var borderS = ctx.canvas.height - 50;
var borderD = ctx.canvas.width - 30;
  
//player's location
var playerX = 250;
var playerY = 340;

//bandit's location
var banditX = 600;
var banditY = 320;

//shape shifter's location
var shapeShifterX = 200;
var shapeShifterY = 400;

//Player stats

//player health
var playerHealth = 50;
//player's speed
var playerSpeed = 15;
//is player in fight?
var inFight = false;
//Whether the Protagonist can move or not
var movement = true;


  //Draws the main character
  function drawProtagonistFacingRight(){
//Draws the protagonist's hood
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
    //Draws the protagonist's hood
    ctx.fillStyle = "red";
ctx.fillRect(playerX, playerY, 23, 5);
ctx.fillRect(playerX + 10, playerY, 13, 20);
ctx.fillRect(playerX, playerY + 20, 23, 5);
//Draws the protagonist's cloak
ctx.fillStyle = "red";
ctx.fillRect(playerX + 5, playerY + 15, 18, 30);
//Draws the shadow that hides the protagonist's face 
ctx.fillStyle = "black";
ctx.fillRect(playerX, playerY + 3, 10, 20);
  }
  
  function drawProtagonistFacingUp(){
    //Draws the protagonist's hood
    ctx.fillStyle = "red";
ctx.fillRect(playerX + 2.5, playerY + 2.5, 20, 20);
//Draws the protagonist's cloak
ctx.fillStyle = "red";
ctx.fillRect(playerX + 5, playerY + 17.5, 15, 25);
  }
  
  function drawProtagonistFacingDown(){
    //Draws the protagonist's hood
    ctx.fillStyle = "red";
ctx.fillRect(playerX + 2, playerY, 20, 20);

//Draws the protagonist's cloak
ctx.fillStyle = "red";
ctx.fillRect(playerX + 4.5, playerY + 15, 15, 25);

//Draws the shadow that hides the protagonist's face
ctx.fillStyle = "black";
ctx.fillRect(playerX + 7.5, playerY + 5, 10, 12.5);

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
    ctx.fillRect(banditX + 5, banditY + 24, 7, 25);
	  
	  //The shoulder of his shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 5, banditY + 24, 7, 10);
    
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
    
    ctx.fillRect(banditX + 6, banditY + 24, 7, 25);
    
    //The shoulder of his shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 6, banditY + 24, 7, 10);
    
    //His eye
    ctx.fillStyle = "black";
    ctx.fillRect(banditX - 4, banditY + 5, 5, 8);
    //His bandit thing on his mouth? I don't know what it's called
    ctx.fillStyle = "red";
    ctx.fillRect(banditX - 6, banditY + 15, 15, 10);
    
    //His pant leg
    ctx.fillStyle = "#11226B";
    ctx.fillRect(banditX + 2, banditY + 49, 8, 25);

    //His shoe
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 2 , banditY + 68, 8, 7);
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
  
    function drawBanditFacingLeftWithArmRaised(){
     //His face
    ctx.fillStyle = "#FFDE7A";
    ctx.fillRect(banditX - 6, banditY, 20, 25);
    
    //His shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 2, banditY + 25, 8, 25);
	  
	  
	  ctx.fillStyle = "#FFDE7A";
	  //His arm
    ctx.fillRect(banditX - 15, banditY + 27, 25, 7);
    
        //The shoulder of his shirt
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 6, banditY + 24, 7, 10);
    
    
    //His eye
    ctx.fillStyle = "black";
    ctx.fillRect(banditX - 4, banditY + 5, 5, 8);
    //His bandit thing on his mouth? I don't know what it's called
    ctx.fillStyle = "red";
    ctx.fillRect(banditX - 6, banditY + 15, 15, 10);
    
    //His pant leg
    ctx.fillStyle = "#11226B";
    ctx.fillRect(banditX + 2, banditY + 49, 8, 25);

    //His shoe
    ctx.fillStyle = "black";
    ctx.fillRect(banditX + 2 , banditY + 68, 8, 7);
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
    //his RIGHT EYE (YOUR RIGHT MAN!!!!)
    ctx.fillRect(shapeShifterX + 15, shapeShifterY + 5, 5, 10);
    
    //his blood soaked mouth
    ctx.fillStyle = "#d30000";
    ctx.fillRect(shapeShifterX + 6, shapeShifterY + 17, 12, 3);
    
    //his EEEEVIL SHIRT!!!
    ctx.fillStyle = "#012b49";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 24, 17, 25);
    
    //the skull on his shirt
    ctx.fillStyle = "white";
    ctx.fillRect(shapeShifterX + 8.5, shapeShifterY + 30, 8, 9);
    ctx.fillStyle = "white";
    ctx.fillRect(shapeShifterX + 11.5, shapeShifterY + 27, 2, 5);
    ctx.fillRect(shapeShifterX + 8, shapeShifterY + 37, 3, 3);
    ctx.fillRect(shapeShifterX + 14.5, shapeShifterY + 37, 3, 3);
    
    //his jeans
    //his left pant leg (YOUR LEFT)
    ctx.fillStyle = "#840000";
    ctx.fillRect(shapeShifterX + 4, shapeShifterY + 47, 10, 26);
    //his riiiiiight pant leg (Ur right)
    ctx.fillRect(shapeShifterX + 11, shapeShifterY + 47, 10, 26);
    ctx.fillStyle = "black";
    ctx.fillRect(shapeShifterX + 11.5, shapeShifterY + 54, 2, 18);
    
    //his murderous arms
    ctx.fillStyle = "#125C00";
    //his lefty army (YOur left man, your left, don't get again!)
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
    //his lefty army (YOur left man, your left, don't forget again!)f
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
  
  function star(starX, starY){
    ctx.fillStyle = "white";
    ctx.fillRect(starX, starY, 5, 5);
  }
  
  function Campfire(campfireX, campfireY){
var campfire = new Image();
campfire.onload = function () {
    ctx.drawImage(campfire, campfireX, campfireY);
};
campfire.src = "Sprites/Campfire.png";
}

  //Draws a text box
  function Dialogue(text, timeUntilStart, timeUntilEnd) {
  var newText = document.createTextNode(text),
      dialogue = document.getElementById("p1");
      dialogue.style.color = "white";
      dialogue.style.backgroundColor = "black";
      
      
      
      setTimeout(function(){
          dialogue.appendChild(newText);
      }, timeUntilStart);
  
  
  setTimeout(function(){
      dialogue.removeChild(newText);
  }, timeUntilEnd);

}
 


  //All in-game tiles WARNING: Put tiles before objects
  
  //creates a function called sand that places a tile of sand
  function grass(grassX, grassY){
    ctx.fillStyle = "#00a51b";
    ctx.fillRect(grassX, grassY, 25, 25);
  }
  
  //Draws map scene
  function drawMap1(){
    playerX = 200;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   document.body.style.backgroundColor =  "#000714"; 
   moon(20, 20);
   } 
  
  function drawMap2(){
    playerX = 200;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    document.body.style.backgroundColor =  "#000714";
    for(var x = 0; x < borderD; x+= Math.round(Math.random() * 45)){
      for(var y = 0; y < borderW; y+= Math.round(Math.random() *45)){
      star(x, y);
      }
    }
  }
  
  function drawMap3(){
    playerX = 200;
    playerY = 340;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    document.body.style.backgroundColor =  "#000710";
    Campfire(500, 300);
    
    drawBanditFacingRight();
    movement = false;
    Dialogue("Dear Audio Diary,", 500, 3000);
	  
	  	          		    setTimeout(function(){
	    var banditSpeed = 1;
	    for(banditX < ctx.canvas.width; banditX === 620; banditX++){
	
		banditX+=banditSpeed; 
		    ctx.clearRect(banditX, banditY, 100, 3000.0001);
		    drawBanditFacingRight();
	    }
	    }, 10000.0001);
	  
    Dialogue("It's been a long time since I've seen anyone", 3000.0001, 6500);
    Dialogue("Maybe they really did die...", 6500.0001, 10000);
    Dialogue("...", 10000.0001, 13500);
    Dialogue("THAT'S AWESOME!!!", 13500.0001, 17000.0001);
    Dialogue("I'll be on the front page of The Death Valley Times", 17000.0001, 20500);
    Dialogue("THE BANDIT SURVIVES ZOMBIE APOCALYPSE", 20500.0001, 24000);
    Dialogue("EVEN THE NECROMANCER CAN'T STOP HIM", 24000.0001, 27500);
    Dialogue("HE'S BEEN CROWNED KING OF UNIVERSE", 27500.0001, 30000);
    Dialogue("That would be cool", 30000.0001, 33500);
    Dialogue("Whatever, I better go check if anyone else survived", 33500.0001, 37000);
    
    setTimeout(function(){
    ctx.clearRect(banditX, banditY, 100, 100);
    drawBanditFacingLeft();
    Dialogue("...", 2500, 4000);
    Dialogue("AHHH!!!", 4000.0001, 7500);
    
	    
    Dialogue("A Z-Z-ZOMBIE!!!", 7500.0001, 10000);
    Dialogue("NONONONONONONONONONO", 10000.0001, 13500);
    Dialogue("I DON'T WANNA DIE!!!", 13500.0001, 17000);
	  
	    
    }, 37500);
    
    

    
  }
  
  function drawMap4(){
    
  }
  
  //If the scene number is equal to a specific number, draw a specific map. 
  function checkMap(){
  if(scene == 1){
    drawMap1();
  } else if(scene == 2){
    drawMap2();
  } else if(scene == 3){
    drawMap3();
  } else if(scene == 4){
    drawMap4();
  }
  
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

/*
 //Adds buttons to game IF the device is mobile
 if (!isMobile.any()) { 
 document.addEventListener('mousedown',function(e){
	var result_x = document.getElementById('x_result');
	var result_y = document.getElementById('y_result');
	result_x.innerHTML = e.clientX;
	result_y.innerHTML = e.clientY;
});
}
**/

var sampleCookiez = document.cookie = "cookie; expires=Thu, 22 Nov 3016 12:00:00 UTC";

//Adds movement to game if w a s or d  is pressed whether the device is mobile or not
document.addEventListener('keydown', function(e){
   if(e.key === 'w' && playerY >=borderW && movement === true){
   playerY-= playerSpeed;
    ctx.clearRect(playerX, playerY - 15, 75, 75);
  drawProtagonistFacingUp();
   }
  if(e.key == 'd' && playerX < borderD && movement === true){
    if(playerX > borderD - 20){
      scene++;
      checkMap();
    }
    if(scene < 0){
        scene++;
      }
    playerX+= playerSpeed;
   ctx.clearRect(playerX, playerY - 1, -75, 75);
  drawProtagonistFacingRight();
  }
  
  if(e.key == 's' && playerY < borderS && movement === true){
    playerY+= playerSpeed;
  ctx.clearRect(playerX, playerY - 15, 75, 75);
  drawProtagonistFacingDown();
  }

  if(e.key == 'a' && playerX > borderA && movement === true){
    if(playerX < borderA + 20 && scene !== 1){
      scene--;
      checkMap();
    }
    if(scene < 0){
        scene--;
      }
    playerX-= playerSpeed;
  ctx.clearRect(playerX, playerY - 1, 75, 75);
  drawProtagonistFacingLeft();
  }
}); 

}

//Start the startscreen
function startScreen(){
  onGame = false;
  function startGame(event){
  var mouseX = event.clientX;   
  var mouseY = event.clientY;     
  if(mouseX > 0 && onGame === false){
    onGame = false;
    game();
  }
  
}

setTimeout(function(){
document.addEventListener("mousedown", startGame);
}, 3000);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  document.body.style.backgroundColor = "white"; 
  
var theNecromancer = new Image();
  theNecromancer.onload = function () {
     ctx.drawImage(theNecromancer, -100, 0);
     
};
theNecromancer.src = "Logos/TheNecromancerLogo.png";


var startButton = new Image();
startButton.onload = function(){
  ctx.drawImage(startButton, 40, 300);
  var mouseX = event.clientX;   
  var mouseY = event.clientY;     
  if(mouseX > 0 && onGame === false){
    onGame = false;
    game();
  }
  
};
startButton.src = "Buttons/StartButton.png";
 
}

startScreen();



};
