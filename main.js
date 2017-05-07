 //Hey! I'm really glad you got the game and I hope you like it!
 /*
  Have first show of battle screen
  -March 24, 2017
  */
 //Shape shifter's name is Naberius
 //Eligor
 //Cow head
 //Revenant
 //Places
 //Panamint City
 window.onload = function() {
     var mouseX = event.clientX;
     var mouseY = event.clientY;
     //TODO Draw Map1 TODO
     var c = document.getElementById("canvas");
     var ctx = c.getContext("2d");
     ctx.canvas.width = window.innerWidth - 55;
     ctx.canvas.height = window.innerHeight - 150;
     ctx.fillStyle = "yellow";
     var onGame = false;
     //Which map to draw
     var scene = 3;
     //Start the game  
     function game() {
         drawProtagonistFacingRight();
         onGame = true;
         document.body.style.backgroundColor = "black";
         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
         var cRight = document.getElementById("Copyright");
         cRight.innerHTML = "";
         //The borders that the player can walk
         var borderW = 300;
         var borderA = 10;
         var borderS = ctx.canvas.height - 50;
         var borderD = ctx.canvas.width - 30;
         //player's location
         var playerX = 250;
         var playerY = 340;
         //The bullet's position
         var bulletX = 500;
         var bulletY = 375;
         //bandit's location
         var banditX = 620;
         var banditY = 320;
         //shape shifter's location
         var shapeShifterX = 200;
         var shapeShifterY = 400;
         //Player stats
         //player health
         var playerHealth = 20;
         //player's speed
         var playerSpeed = 15;
         //player's damage
         var playerDamage = 5;

         //Colum and row for fights
         var column = 0;
         var row = 0;
         //which attack is currently taking place
         var attackNumber = 0;
         //who is the player fighting
         var fighting = "";
         //Whether the Protagonist can move or not
         var movement = true;
         //Bandit's stats
         //bandit's health
         var banditHealth = 45;
         //bandit's attack chance
         var banditAttackChance = Math.floor((Math.random() * 2) + 1);
         //how much damage bandit's attacks do
         var banditAttackDamage = Math.floor((Math.random() * 3));


         //Draws the main character
         function drawProtagonistFacingRight() {
           if(playerHealth > 0){
             //Draws the protagonist's hood
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX, playerY, 23, 5);
             ctx.fillRect(playerX - 3, playerY, 15, 25);
             ctx.fillRect(playerX, playerY + 20, 23, 5);
             ctx.fillRect(playerX + 22, playerY, 2, 25);
             //Draws the protagonist's cloak
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX, playerY + 15, 18, 35);
             //Draws the shadow that hides the protagonist's face 
             ctx.fillStyle = "#0a0a0a";
             ctx.fillRect(playerX + 11, playerY + 3, 12, 20);
           } else if(playerHealth <= 0){
             ctx.fillStyle = "black";
             ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             ctx.fillStyle = "black";
             Dialogue("You're one of us now", 0, 2050);
             Dialogue('If you want, you can just exit the "game"', 2051, 7050);
             Dialogue("You'll be happy as one of my most powerful zombies", 7051, 11000);
             Dialogue("Or, you can try again to stop me", 11001, 14000);
             Dialogue("And again, and again, and again", 14001, 19000);
             Dialogue("But please remember that the hero of one story is the villan of another", 19001, 25000);
             setTimeout(function(){
             playerHealth = 20;
             scene = "BATTLE!";
             checkMap();
             }, 25001);
             
             
           }
         }

         function drawProtagonistFacingLeft() {
             //Draws the protagonist's hood
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX, playerY, 23, 5);
             ctx.fillRect(playerX + 10, playerY, 15, 25);
             ctx.fillRect(playerX, playerY + 20, 23, 5);
             ctx.fillRect(playerX - 2, playerY, 2, 25);
             //Draws the protagonist's cloak
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX + 5, playerY + 15, 18, 35);
             //Draws the shadow that hides the protagonist's face 
             ctx.fillStyle = "#0a0a0a";
             ctx.fillRect(playerX, playerY + 3, 12, 20);
         }

         function drawProtagonistFacingUp() {
             //Draws the protagonist's hood
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX, playerY + 2.5, 25, 25);
             //Draws the protagonist's cloak
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX + 5, playerY + 17.5, 15, 35);
         }

         function drawProtagonistFacingDown() {
             //Draws the protagonist's hood
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX - 1, playerY - 2, 25, 25);
             //Draws the protagonist's cloak
             ctx.fillStyle = "#270042";
             ctx.fillRect(playerX + 4.5, playerY + 15, 15, 35);
             //Draws the shadow that hides the protagonist's face
             ctx.fillStyle = "#0a0a0a";
             ctx.fillRect(playerX + 6, playerY + 3, 12, 18);
         }


         //Draws The Bandit
         function drawBanditFacingRight() {
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

         function drawBanditFacingLeft() {
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
             ctx.fillRect(banditX + 2, banditY + 68, 8, 7);
         }

         function drawBanditFacingUp() {
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

         function drawBanditFacingDown() {
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

         function drawBanditFacingLeftWithArmRaised() {
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
             ctx.fillRect(banditX + 2, banditY + 68, 8, 7);
             //The Gun
             ctx.fillStyle = "#606060";
             ctx.fillRect(banditX - 30, banditY + 25, 10, 5);
             ctx.fillRect(banditX - 20, banditY + 25, 5, 10);
         }


         //Draws The Shape Shifter
         function drawShapeShifterFacingRight() {
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

         function drawShapeShifterFacingLeft() {
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

         function drawShapeShifterFacingUp() {
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

         function drawShapeShifterFacingDown() {
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
         function tree(treeX, treeY) {
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

         function moon(moonX, moonY) {
             ctx.fillStyle = "#e5e5e5";
             ctx.fillRect(moonX, moonY, 75, 75);
             ctx.fillStyle = "#8e8e8e";
             ctx.fillRect(moonX, moonY, 5, 5);
         }

         function star(starX, starY) {
             ctx.fillStyle = "white";
             ctx.fillRect(starX, starY, 5, 5);
         }

         function Campfire(campfireX, campfireY) {
             var campfire = new Image();
             campfire.onload = function() {
                 ctx.drawImage(campfire, campfireX, campfireY);
             };
             campfire.src = "Sprites/Campfire.png";
         }

         function FlowerBush(flowerBushX, flowerBushY) {
             var flowerBush = new Image();
             flowerBush.onload = function() {
                 ctx.drawImage(flowerBush, flowerBushX, flowerBushY);
             };
             flowerBush.src = "Sprites/FlowerBush.png";
         }
         
         function drawBullet(){
           var bullet = new Image();
           bullet.onload = function() {
             ctx.drawImage(bullet, bulletX, bulletY);
           };
           bullet.src = "Sprites/Bullet.png";
         }
         
         
         //Draws a text box
         function Dialogue(text, timeUntilStart, timeUntilEnd) {
           selected = 0;
             var newText = document.createTextNode(text),
                 dialogue = document.getElementById("p1");
             dialogue.style.color = "white";
             dialogue.style.backgroundColor = "black";
             setTimeout(function() {
                 dialogue.appendChild(newText);
             }, timeUntilStart);
             setTimeout(function() {
                 dialogue.removeChild(newText);
                 selected = 1;
             }, timeUntilEnd);
         }

         function battleDialogue(text, timeUntilStart, timeUntilEnd) {
             var newText = document.createTextNode(text),
                 dialogue = document.getElementById("p1");
             dialogue.style.color = "white";
             dialogue.style.backgroundColor = "black";
             setTimeout(function() {
                 dialogue.appendChild(newText);
             }, timeUntilStart);
             setTimeout(function() {
                 dialogue.removeChild(newText);
                 drawBattleMap();
                 scene = "BATTLE!";
                 selected = 1;
                 checkMap();
             }, timeUntilEnd);
         }
         //backgrounds
         function drawBanditBattleBackground() {
             var bbb = new Image();
             bbb.onload = function() {
                 ctx.drawImage(bbb, 100, 100, window.outerWidth - 250, window.outerHeight - 200);
             };
             bbb.src = "Backgrounds/BanditBattleBackground.png";
         }
         //All in-game tiles WARNING: Put tiles before objects
         function grass(grassX, grassY) {
             ctx.fillStyle = "#00a51b";
             ctx.fillRect(grassX, grassY, 25, 25);
         }
         //Draws scene
         function drawMap1() {
             playerX = 300;
             ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             document.body.style.backgroundColor = "#000714";
             moon(20, 20);
         }

         function drawMap2() {
             playerX = 300;
             ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             document.body.style.backgroundColor = "#000714";
             for (var x = 0; x < borderD; x += Math.round(Math.random() * 45)) {
                 for (var y = 0; y < borderW; y += Math.round(Math.random() * 45)) {
                     star(x, y);
                 }
             }
         }

         function drawMap3() {
             playerX = 300;
             playerY = 340;
             ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             document.body.style.backgroundColor = "#000710";
             Campfire(500, 300);
             drawBanditFacingRight();
             movement = false;
             Dialogue("Bandit: Dear Audio Diary,", 500, 3000);
             Dialogue("It's been a long time since I've seen any...living people...", 3000.0001, 6500);
             Dialogue("Maybe the rest were eaten...", 6500.0001, 10000);
             Dialogue("...", 10000.0001, 13500);
             Dialogue("AWESOME!!!", 13500.0001, 17000.0001);
             Dialogue("I'll be on the front page of The Death Valley Times", 17000.0001, 20500);
             Dialogue("THE BANDIT SURVIVES ZOMBIE APOCALYPSE", 20500.0001, 24000);
             Dialogue("EVEN THE NECROMANCER CAN'T STOP HIM", 24000.0001, 27500);
             Dialogue("HE'S BEEN CROWNED KING OF UNIVERSE", 27500.0001, 30000);
             Dialogue("That'd be cool", 30000.0001, 33500);
             Dialogue("Whatever, I better get back on guard duty", 33500.0001, 37000);
             setTimeout(function() {
                 ctx.clearRect(banditX, banditY, 100, 100);
                 drawBanditFacingLeft();
                 Dialogue("...", 2500, 4000);
                 Dialogue("AHHH!!!", 4000.0001, 7500);
                 setTimeout(function() {
                     setInterval(function() {
                         if (banditX < borderD && scene === 3) {
                             banditX++;
                             ctx.clearRect(banditX - 10, banditY, 510, 500);
                             drawBanditFacingRight();
                         } else if (banditX >= borderD) {
                             ctx.clearRect(banditX, banditY, 200, 200);
                         }
                     }, 3000 / 60);
                 }, 7500.0001);
                 Dialogue("A Z-Z-ZOMBIE!!!", 7500.0001, 10000);
                 Dialogue("NONONONONONONONONONONONONONO", 10000.0001, 13500);
                 Dialogue("I DON'T WANNA DIE!!!", 13500.0001, 17000);
                 setTimeout(function() {
                     movement = true;
                     ctx.clearRect(banditX, banditY, 500, 500);
                     banditX = banditX + 50;
                     ctx.clearRect(banditX, banditY, 500, 500);
                 }, 17000.0001);
             }, 37500);
         }

         function drawMap4() {
             ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             document.body.style.backgroundColor = "#001a3d";
             playerX = 200;
             playerY = 340;
             banditX = 600;
             banditY = 300;
             drawBanditFacingLeftWithArmRaised();
             FlowerBush(349, 100);
         }

         function option() {
             ctx.fillStyle = "white";
             ctx.font = "20px Arial";
             ctx.fillText("Attack", 1, 175);
             ctx.fillText("Eat", 1, 275);
             ctx.fillText("Threaten", 1, 375);

             ctx.fillText("Run Away", 1200, 175);
             ctx.fillText("Talk", 1200, 275);
             ctx.fillText("Memories", 1200, 375);

         }
         //Draws the map for fighting enemies
         function drawBattleMap() {
             function showBattleScreen(text, x, y, color, font) {
                 ctx.fillStyle = color;
                 ctx.font = font;
                 ctx.fillText(text, x, y);
             }
             if (fighting == "Bandit") {
                 ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                 document.body.style.backgroundColor = "black";
                 drawBanditBattleBackground();
                 var potato = document.getElementById("p1").innerHTML;
                 potato = "loading";
                 setTimeout(function() {
                     column = 1;
                     row = 1;
                     showBattleScreen("", 100, 600, "black", "40px Arial");
                     playerX = 200;
                     playerY = 370;
                     banditX = 600;
                     banditY = 350;
                     drawProtagonistFacingRight();
                     drawBanditFacingLeftWithArmRaised();
                     potato = "";

                     ctx.strokeStyle = "white";
                     ctx.fillStyle = "black";
                     ctx.strokeRect(1, 100, 100, 517);
                     ctx.fillRect(1, 100, 100, 517);

                     ctx.strokeRect(1200, 100, 100, 517);
                     ctx.fillRect(1200, 100, 100, 517);
                     
                     ctx.strokeRect(0, 0, 1300, 100);
                      ctx.fillStyle = "white";
                      ctx.font = "50px Arial";
                     ctx.fillText("Player Health: " + playerHealth + "                  Bandit's Health: " + banditHealth, 100, 50);

                     option();
                 }, 550);
             }
         }
         //If the scene number is equal to a specific number, draw a specific map.
         function checkMap() {
             if (scene == 1) {
                 drawMap1();
             } else if (scene == 2) {
                 drawMap2();
             } else if (scene == 3) {
                 drawMap3();
             } else if (scene == 4) {
                 drawMap4();
             } else if (scene === "BATTLE!") {
                 drawBattleMap();
             }
         }
         
          //Attacks of all enemies                  
         function Attack(){
           selected = 0;
           banditHealth -= playerDamage;
           ctx.clearRect(1, 1, 1250, 75);
           ctx.font = "50px Arial";
           ctx.fillText("Player Health: " +  playerHealth + "                 Bandit's Health: " + banditHealth, 100, 50); 
           
           if(fighting === "Bandit"){
            if(attackNumber === 1){
              ctx.font = "20px Arial";
              Dialogue("Prepare to die, evil zombie", 0, 4000);
              setTimeout(function(){
                
              setInterval(function() {
                         bulletX--;
                         ctx.clearRect(bulletX + 8 , bulletY, 40, 16);
                           drawProtagonistFacingRight();
                         drawBullet();
                     }, 100 / 65);
                     Dialogue("Danget, I missed the zombie!", 5000, 8000);
                     Dialogue("And I broke the fight screen!", 8001, 11000);
                    
                    Dialogue("Thank God the zombie isn't threatening me", 11001, 14750);
                    Dialogue("That would be terrifying!", 14751, 16750);
                    
              }, 4001);
            } else if(attackNumber === 2){
              ctx.font = "20px Arial";
              bulletX--;
             ctx.clearRect(bulletX + 8 , bulletY, 40, 16);
               drawBullet();
              Dialogue("Go back to your master and tell him that Bandit's never going to help him", 0, 5000);
              setTimeout(function(){
              playerHealth = 0;
              drawProtagonistFacingRight();
              }, 5001);
            }
           }
           
         }
         
         //Threats of all the enemies
         function Threaten(){
           
         }

         //Creates the rectangle on the selected option
         function drawOptionRectangle() {
             ctx.strokeStyle = "white";
             if (column === 1) {
                 if (row === 1) {
                     ctx.clearRect(1, 150, 100, 315);
                     ctx.clearRect(1200, 150, 100, 315);
                     ctx.strokeRect(1, 155, 100, 35);
                 } else if (row === 2) {
                     ctx.clearRect(1, 150, 100, 315);
                     ctx.clearRect(1200, 150, 100, 315);
                     ctx.strokeRect(1, 255, 100, 35);
                 } else if (row === 3) {
                     ctx.clearRect(1, 150, 100, 315);
                     ctx.clearRect(1200, 150, 100, 315);
                     ctx.strokeRect(1, 355, 100, 35);
                 }

             } else if (column === 2) {
                 if (row === 1) {
                     ctx.clearRect(1, 150, 100, 315);
                     ctx.clearRect(1200, 150, 100, 315);
                     ctx.strokeRect(1200, 155, 100, 35);
                 } else if (row === 2) {
                     ctx.clearRect(1, 150, 100, 315);
                     ctx.clearRect(1200, 150, 100, 315);
                     ctx.strokeRect(1200, 255, 100, 35);
                 } else if (row === 3) {
                     ctx.clearRect(1, 150, 100, 315);
                     ctx.clearRect(1200, 150, 100, 315);
                     ctx.strokeRect(1200, 355, 100, 35);
                 }
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
         //Adds movement to game if movement buttons are pressed whether the device is mobile or not
         document.addEventListener('keydown', function(e) {
             if (e.key === 'w' && playerY >= borderW && movement === true && scene !== 4 || e.keyCode === 38 && playerY >= borderW && movement === true && scene !== 4) {
                 playerY -= playerSpeed;
                 ctx.clearRect(playerX - 5, playerY - 15, 95, 95);
                 if (scene == 3) {
                     Campfire(500, 300);
                 } else if (scene == 4) {
                     FlowerBush(350, 100);
                 }
                 drawProtagonistFacingUp();
             }
             if (e.key == 'd' && playerX < borderD && movement === true || e.keyCode === 39 && playerX < borderD && movement === true) {
                 if (playerX > borderD - 20) {
                     scene++;
                     checkMap();
                 }
                 if (scene < 0) {
                     scene++;
                 }
                 if (scene == 3) {
                     Campfire(500, 300);
                 } else if (scene == 4) {
                     FlowerBush(350, 100);
                     if (playerX > banditX - 135) {
                         movement = false;
                         if (playerX > banditX - 135) {
                             Dialogue("Bandit: Oh no it's YOU!!!", 0, 2000);
                             Dialogue("I WON'T LET YOU END THE WORLD", 2000.0001, 4670);
                             Dialogue("YOU EVIL DEAD SCUM!!!", 4670.0001, 6670);
                             battleDialogue("FIGHT MEEEEEEE!!", 6670.0001, 10370);
                             fighting = "Bandit";
                         }
                     }
                 }
                 playerX += playerSpeed;
                 ctx.clearRect(playerX - 30, playerY - 15, 100, 100);
                 drawProtagonistFacingRight();
             }
             if (e.key == 's' && playerY < borderS && movement === true && scene !== 4 || e.keyCode === 40 && playerY < borderS && movement === true && scene !== 4) {
                 playerY += playerSpeed;
                 ctx.clearRect(playerX - 10, playerY - 30, 100, 100);
                 if (scene == 3) {
                     Campfire(500, 300);
                 } else if (scene == 4) {
                     FlowerBush(350, 100);
                 }
                 drawProtagonistFacingDown();
             }
             if (e.key == 'a' && playerX > borderA && movement === true || e.keyCode === 37 && playerX > borderA && movement === true) {
                 if (playerX < borderA + 20 && scene !== 1 && scene !== 4) {
                     scene--;
                     checkMap();
                 }
                 if (scene == 3) {
                     Campfire(500, 300);
                 } else if (scene == 4) {
                     FlowerBush(350, 100);
                 }
                 if (scene < 0) {
                     scene++;
                 }
                 playerX -= playerSpeed;
                 ctx.clearRect(playerX - 10, playerY - 5, 100, 100);
                 drawProtagonistFacingLeft();
             }

             //A ton of code for selecting options, and there's more of it above.
             if (e.keyCode == 38 && scene === "BATTLE!") {
                 row--;
                 if (row <= 0) {
                     row = 3;
                 }
                 drawOptionRectangle();
                 option();
             } else if (e.keyCode == 40 && scene === "BATTLE!") {
                 row++;
                 if (row >= 4) {
                     row = 1;
                 }
                 drawOptionRectangle();
                 option();

             } else if (e.keyCode == 39 && scene === "BATTLE!") {
                 column++;
                 if (column >= 3) {
                     column = 1;
                 }
                 drawOptionRectangle();
                 option();
             } else if (e.keyCode == 37 && scene === "BATTLE!") {
                 column--;
                 if (column <= 0) {
                     column = 2;
                 }
                 drawOptionRectangle();
                 option();
             }
             
             //If space is pressed, an option is selected if fighting
             if(e.keyCode == 32 && scene === "BATTLE!"){
              if(column === 1){
                if(row === 1){
                  attackNumber++;
                  Attack();
                }
              } else if(column === 2){
                
              } 
              
             }


         });
     }
     //Start the startscreen
     function startScreen() {
         onGame = false;
         //function to literally start the game.
         function startGame(event) {
             var mouseX = event.clientX;
             var mouseY = event.clientY;
             if (mouseX > 50 && onGame === false) {
                 onGame = false;
                 game();
             }
             window.addEventListener('touchstart', function() {
                 game();
             });
         }
         //If you click then the game starts
         setTimeout(function() {
             document.addEventListener("mousedown", startGame);
         }, 3000);

         //Clears out thne screen on the start screen
         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
         document.body.style.backgroundColor = "white";
         var theNecromancer = new Image();
         theNecromancer.onload = function() {
             ctx.drawImage(theNecromancer, -100, 0);
         };
         theNecromancer.src = "Sprites/TheNecromancerLogo.png";
         var startButton = new Image();
         startButton.onload = function() {
             ctx.drawImage(startButton, 40, 300);
             var mouseX = event.clientX;
             var mouseY = event.clientY;
             if (mouseX > 0 && onGame === false) {
                 onGame = false;
                 game();
             }
         };
         startButton.src = "Sprites/StartButton.png";
         var loading = document.getElementById("loading");
         loading.innerHTML = "loading";
         setTimeout(function() {
             loading.innerHTML = "";
         }, 3000);
     }
     startScreen();
 };
