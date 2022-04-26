var heart = [];
var heartIndex = 3;
//coin vars , positions
var coin = {
  x:100,
  y:100,
  h:50,
  w:50
}
//huge coin vars , positions
var huge = {
  x:400,
  y:400,
  w:50,
  h:50
}
//death box1 vars , positions
var box1 = {
  x:400,
  y:0,
  h:50,
  w:50,
  r:200,
  g:0,
  b:0
}
//death box2 vars , positions
var box2 = {
  x:400,
  y:0,
  h:50,
  w:50,
  r:200,
  g:0,
  b:0
}
//death box3 vars , positions
var box3 = {
  x:400,
  y:0,
  h:50,
  w:50,
  r:200,
  g:0,
  b:0
}
var ship = {
  x:500,
  y:500,
  w:50,
  h:100
}
//character vars , positions
var character = {
  x:200,
  y:200,
  w:50,
  h:50
}
//canvas fill colors
var canvasCol = {
  r:255,
  g:255,
  b:255
}
var textColor = {
  r:0,
  b:200,
  g:0
}
var oxygen = {
  x:0,
  y:90,
  h:80,
  w:40
}
var car = {
  x:-200,
  y:100,
  w:100,
  h:50
}
var carBox = {
  x:410,
  y:0,
  w:50,
  h:50,
  r:100,
  g:100,
  b:100
}
var stage = {
  1:25,
  2:50,
  3:75,
  4:100
}
var streetC = {
  x:800,
  y:800
}
var grass = {
  x:800,
  y:800,
  x1:800,
  y1:800
}
var lvlbox = {
  x:100,
  y:100,
  w:50,
  h:100
}
var lvlbox2 = {
  x:100,
  y:100,
  w:50,
  h:100
}
var lvlbox3 = {
  x:100,
  y:100,
  w:50,
  h:100,
}
var lvlCol = {
  r:100,
  g:100,
  b:100
}
var lvlCol2 = {
  r:100,
  g:100,
  b:100
}
var shipSpeed = 2;
var space = false;
var spaceLaunch = false
//score
var score = 0;
//level display
var level = 1;
//lives
var life = 3;
//seeing if you died or not , true / false
var death = false;
//the speed of the box
var boxSpeed = 2;
//determine if you collect the coin
var collect = 0;
//movement speed of the character
var moveSpeed = 10;
//determening if you collect the big coin
var hugeCollect = 0;
//the randomizer for the huge coin
var hugeCoin = 0;
//stage 3, car part
var stage3 = false;
// car speed
var carSpeed = 0;
// car box speed
var carBoxSpeed = 0;
// fixing a bug
var carActive = false;
var collected = 0;
var lifeScore = 0;
var oxygenSpeed = 0.1;
var oxygenTime = 60;
var spaceLaunchTimer = 0;
var carLaunchTimer = 0;
var stage4 = false;
var LVL = 0;
var ballance = true;
var button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11;
var shop = false;
var game = false;
var mainMenu = true;
var shield = 0;
var coins = 0;
var broke = false;
var highscore = 0;
var leaderBoard = false;
var userName;
var myUserName;
var settingsMove;
var settingsCarMove = 10;
var settingsMenu = false;
var shieldPressing = false;
var coinMultiplier = 1;
var coinCost = 200;
var database,ref1;
var wipeInfo;
var prize = (" ")
var commonCoinAdd;
var score1, name1,oldscore,score2, name2,score3, name3,score4, name4;
function setup() {
  var canvasPos = createCanvas(400, 400);
  x = (windowWidth - width) / 2;
  y = (windowHeight - height) / 2;
  canvasPos.position(x,y);
  console.log("Welcome to my game , I am well aware on how easy it is to add fake posts to the data base and use the console to increase your score but just please dont. I have made this game purely for fun and so other people can learn from the code. Hope you enjoy the game - Liam");
  userName = getItem('userName');
  coins = getItem('coins');
  shield = getItem('shield');
  highscore = getItem('highscore');
  settingsMove = getItem('settingsMove');
  settingsCarMove = getItem('settingsCarMove');
  coinMultiplier = getItem('coinMultiplier');
  coinCost = getItem('coinCost');
  oldscore1 = score1;
  wipeInfo = getItem('wipeInfo');
  if(wipeInfo == null){
    wipeInfo = 1;
    storeItem("wipeInfo",wipeInfo);
    highscore = 0;
    coins = 0;
    shield = 0;
    coinMultiplier = 1;
    coinCost = 200;
  }
  if(shield == null){
    shield = 0;
  }
  if(coins == null){
    coins = 0;
  }
  if(highscore == null){
    highscore = 0;
  }
  if(userName == ('') || userName == null){
    userName = ('Input UserName');
  }
  if(settingsMove == null){
    settingsMove = 10;
  } 
  if(settingsCarMove == null){
    settingsCarMove = 10;
  } 
  if(coinMultiplier == null){
    coinMultiplier = 1;
  }
  if(coinCost == null){
    coinCost = 200;
  }
  button1=createImg("Play.png","Play").position(x + 175,y + 150).size(50,50).mousePressed(gameStart);
  button2 = createImg("Menu_Shop.png","shop").position(x + 20,y + 300).size(30,30).mousePressed(clicked2);
  button4 = createImg("Back.png","back").position(x + 10,y + 10).size(20,20).mousePressed(back1);
  button3 = createButton("Buy").position(x + 40,y + 110).size(75,20).mousePressed(buy);
  button5 = createImg("LeaderBoard1.png","LeaderBoard").size(30,30).position(x+360,y+300).mousePressed(leaderBoardPress)
  button6 = createImg("Menu_Img.png","go back to menu").position(x+10,y+10).size(30,30).mousePressed(menuGoBack);
  button7 = createImg("Shield-2.png","shield").position(x+30,y+320).size(30,30).mousePressed(shieldActivate);
  button8 = createInput(userName).position(x+115,y+300);
  button9 = createImg("Settings.png","settings").position(x + 10,y + 10).size(30,30).mousePressed(openSettings);
  button10 = createSlider(1,30,settingsMove).position(x + 100,y + 150);
  button13 = createSlider(1,30,settingsCarMove).position(x + 100,y + 250);
  button11 = createButton("Buy").position(x + 200,y + 110).size(75,20).mousePressed(buy1);
  button12 = createButton("Submit Score").position(x + 150,y + 325).size(100,50).mousePressed(submitScore);
  button14 = createButton("Buy").position(x + 40, y + 280).size(75,20).mousePressed(buy3);
  behind1 = createImg("PurpleImg.png","left").position(0,0).size(x,windowHeight)
  behind2 = createImg("PurpleImg.png","left").position(x,0).size(width,y)
  behind3 = createImg("PurpleImg.png","left").position(x,y+height).size(width,y)
  behind4 = createImg("PurpleImg.png","left").position(x+width,0).size(x,windowHeight)
  button11.hide();
  button12.hide();
  button13.hide();
  button3.hide();
  button4.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button10.hide();
  button14.hide();
   var config = {
    apiKey: "AIzaSyCnAXY7aTxwXgVQVWjypTZDpKFnuDqMN7s",
    authDomain: "coin-gather-game.firebaseapp.com",
    databaseURL: "https://coin-gather-game-default-rtdb.firebaseio.com",
    storageBucket: "coin-gather-game.appspot.com",
    messagingSenderId: "258024691599",
  };
  firebase.initializeApp(config);
  database = firebase.database();
  ref1 = database.ref('first');
  ref2 = database.ref('second');
  ref3 = database.ref('third');
  ref4 = database.ref('fourth');
  ref5 = database.ref('fifth');
  ref6 = database.ref('sixth');
  ref7 = database.ref('seventh');
  ref8 = database.ref('eighth');
  ref9 = database.ref('ninth');
  ref10 = database.ref('tenth');
    var data1 = {
    name: userName,
    score: highscore 
  }
  ref1.on('value', gotData1, errData);
  ref2.on('value', gotData2, errData);
  ref3.on('value', gotData3, errData);
  ref4.on('value', gotData4, errData);
  ref5.on('value', gotData5, errData);
  ref6.on('value', gotData6, errData);
  ref7.on('value', gotData7, errData);
  ref8.on('value', gotData8, errData);
  ref9.on('value', gotData9, errData);
}
function gotData1(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name1 = scores[k].name;
  score1 = scores[k].score;
}
function gotData2(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name2 = scores[k].name;
  score2 = scores[k].score;
}
function gotData3(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name3 = scores[k].name;
  score3 = scores[k].score;
}
function gotData4(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name4 = scores[k].name;
  score4 = scores[k].score;
}
function gotData5(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name5 = scores[k].name;
  score5 = scores[k].score;
}
function gotData6(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name6 = scores[k].name;
  score6 = scores[k].score;
}
function gotData7(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name7 = scores[k].name;
  score7 = scores[k].score;
}
function gotData8(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name8 = scores[k].name;
  score8 = scores[k].score;
}
function gotData9(data) {
  var scores = data.val();
  var keys = Object.keys(scores);
  for(var i = 0; i < keys.length; i ++){
  var k = keys[i];
  }
  name9 = scores[k].name;
  score9 = scores[k].score;
}
function errData(err) {
  console.log("Error");
  console.log(err);
}
function preload(){
  menu = loadImage("https://coingathergame.liamrubin2.repl.co/Menu_Shop.png");
  play = loadImage("https://coingathergame.liamrubin2.repl.co/Play.png");
  settingsImg = loadImage("https://coingathergame.liamrubin2.repl.co/Settings.png");
  leaderBoardImg = loadImage("https://coingathergame.liamrubin2.repl.co/LeaderBoard1.png");
  pixel = loadFont("slkscre.ttf");
  shieldImg = loadImage("https://coingathergame.liamrubin2.repl.co/Shield-2.png");
  characterImg = loadImage("https://coingathergame.liamrubin2.repl.co/Character.png");
  coinImg = loadImage("https://coingathergame.liamrubin2.repl.co/Coin.png");
  bigCoinImg = loadImage("https://coingathergame.liamrubin2.repl.co/BigCoin.png");
  shipImg = loadImage("https://coingathergame.liamrubin2.repl.co/Spaceship.png");
  carImg = loadImage("https://coingathergame.liamrubin2.repl.co/Car.png");
  street = loadImage('https://coingathergame.liamrubin2.repl.co/Street.png');
  heart[6] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart6.png");
  heart[5] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart5.png");
  heart[4] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart4.png");
  heart[3] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart3.png");
  heart[2] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart2.png");
  heart[1] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart1.png");
  heart[0] = loadImage("https://coingathergame.liamrubin2.repl.co/Heart0.png");
  sky1 = loadImage("https://coingathergame.liamrubin2.repl.co/Sky2.png");
  coinSound = loadSound("CoinSound.wav")
  shieldSound = loadSound("ShieldUse.wav");
  buySound = loadSound("BuyingSound.wav");
  deathSound = loadSound("DeathSound.wav");
  lootBox1Img = loadImage("CommonBox.png");
}
function draw() {
  oldscore1 = score1;
  background(canvasCol.r,canvasCol.g,canvasCol.b);
  textAlign(CENTER,CENTER);
  userName = button8.value();
  settingsMove = button10.value();
  settingsCarMove = button13.value();
  storeItem("settingsMove",settingsMove);
  storeItem("settingsCarMove",settingsCarMove);
  highScoreCheck();
  storeItem("coinMultiplier",coinMultiplier);
  storeItem("userName",userName);
  storeItem("coins",coins);
  storeItem("shield",shield);
  storeItem("highscore",highscore);
  storeItem("coinCost",coinCost);
  //if(userName == 'liam'){
    //highscore = 0;
  //}
  /*if(broke == true){
    text("Too Broke",200,200);
    var Time1234 = 0;
    Time1234 ++;
    if(Time1234 >= 2){
      brokeOff();
      Time1234 = 0;
    }
  */
  if(mainMenu == true){
  image(sky1,0,0,width,height);
  fill("black")
  textFont(pixel);
  textSize(20);
  text("Coin Gather!",200,60);
  text("High Score: " + highscore, 200,130);
  canvasCol.r = 120;
  canvasCol.g = 120;
  canvasCol.b = 160;
  button8.show();
  button9.show();
  textColor.r = 0;
  textColor.g = 0;
  textColor.b = 0;
  }
  if(shop == true){
    textSize(15)
    fill("black");
    text("Shield",75,30);
    text("CommonBox",80,200);
    text("You Have:" + shield,85, 160);
    text("Coin Multiplier", 225, 30);
    text("Multiplier:x" + coinMultiplier, 250, 160)
    canvasCol.r = 30;
    canvasCol.g = 120;
    canvasCol.b = 163;
    button1.hide();
    button2.hide();
    button3.show();
    button4.show();
    button5.hide();
    button8.hide();
    button9.hide();
    button11.show();
    button14.show();
    image(shieldImg,40,40,75,75);
    image(coinImg, 200,40,70,70);
    image(lootBox1Img, 40,210,70,70);
    text("Cost:150",80,140);
    text("Cost:300",80,310);
    text("Cost:"+coinCost,240,140);
    textSize(10)
    text("Last Open: "+ prize, 90, 330);
}
  if(leaderBoard == true){
    fill('Black')
    text("1st: "+ name1 + ","+score1 + "\n2nd: " + name2 + "," + score2 + "\n3rd: " + name3 + "," + score3 + "\n4th: " + name4 + "," + score4 + "\n5th: " + name5 + "," + score5 + "\n6th: " + name6 + "," + score6 + "\n7th: " + name7 + "," + score7 + "\n8th: " + name8 + "," + score8 + "\n9th: " + name9 + "," + score9 , 200,200)
    button1.hide();
    button2.hide();
    button3.hide();
    button4.show();
    button5.hide();
    button8.hide();
    button9.hide();
    button11.hide();
    button12.show();
  }
  if(settingsMenu == true){
  fill("black");
  textSize(15)
  text("Character Move Speed", 180, 140);
  text("Car Move Speed", 170, 240);
  button1.hide();
  button3.hide();
  button2.hide();
  button4.show();
  button5.hide();
  button6.hide();
  button7.hide();
  button8.hide();
  button9.hide();
  button10.show();
  button13.show();
  canvasCol.r = 30;
  canvasCol.g = 120;
  canvasCol.b = 160;
  text(settingsMove, 175,190)
  text(settingsCarMove, 175,290)
  }
  
  if(game == true){
    start();
  }
  ammount();
}
function openSettings(){
  settingsMenu = true;
  mainMenu = false;
  button11.hide();
  
}
function clicked2(){
  shop = true;
  mainMenu = false;
}
function submitScore(){
   var data1 = {
    name: userName,
    score: highscore,
    coins: coins
  }
  if(highscore >= score1){
    ref1.push(data1);
  } else if(highscore >= score2){
    ref2.push(data1);
  } else if(highscore >= score3){
    ref3.push(data1);
  } else if(highscore >= score4){
    ref4.push(data1);
  } else if(highscore >= score5){
    ref5.push(data1);
  } else if(highscore >= score6){
    ref6.push(data1);
  } else if(highscore >= score7){
    ref7.push(data1);
  } else if(highscore >= score8){
    ref8.push(data1);
  } else if(highscore >= score9){
    ref9.push(data1);
  } 
}
function buy(){
  if(coins>= 150){
  shield += 1;
  coins -= 150;
  buySound.play();
  }
}
function buy1(){
  if(coins>=coinCost){
    coinMultiplier += 1;
    coins -= coinCost;
    coinCost += 100;
    buySound.play();
  }
}
function buy3() {
  if(coins >= 300){
    coins -= 300;
    commonBoxOpen();
    buySound.play();
  } else if(coins < 300){
    broke = true;
  }
}
function commonBoxOpen(){
  commonBoxLoot = int(random(2,1000));
  if(commonBoxLoot <= 500){
    commonCoinAdd = int(random(1,600))
    coins += commonCoinAdd;
    prize = (commonCoinAdd + " coins")
    commonBoxLoot = 1;
  }
  if(commonBoxLoot > 500 && commonBoxLoot <= 999){
    shield += 2;
    prize = ("2 Shields")
    commonBoxLoot = 1;
  }
  if(commonBoxLoot == 1000){
    coins += 9999;
    prize = ("9999 Coins")
    commonBoxLoot = 1;
  }
}
function shieldActivate(){
  if(shield >= 1 && heartIndex < 6 && life > 0){
    shield -=1;
    heartIndex +=1;
    life += 1;
    shieldSound.play();
  }
}
function menuGoBack(){
  game = false;
  mainMenu = true;
  shieldPressing = false;
  button6.hide();
  button1.show();
  button2.show();
  button5.show();
  button8.show();
  ballance = true;
  shieldPressed = false;
  textColor.r = 0;
  textColor.g = 0;
  textColor.b = 0;
}
function gameStart(){
  game = true;
  mainMenu = false;
  shieldPressed = true;
  button8.hide();
  button7.show();
  moveSpeed = settingsMove;
}
function back1(){
  button2.show();
  button1.show();
  button3.hide();
  button4.hide();
  button10.hide();
  button11.hide();
  button12.hide();
  button13.hide();
  button5.show();
  button14.hide();
  canvasCol.r = 30;
  canvasCol.g  = 120;
  canvasCol.b = 160;
  shop = false;
  leaderBoard = false;
  mainMenu = true;
  settingsMenu = false;
}
function leaderBoardPress(){
  leaderBoard = true;
  mainMenu = false;
}
function start(){
  shieldPressing = true;
  button1.hide();
  button2.hide();
  button3.hide();
  button4.hide();
  button5.hide();
  button9.hide();
  canvasCol.r = 255;
  canvasCol.g = 255;
  canvasCol.b = 255;
  mainMenu = false;
  ballance = false;
  image(street,streetC.x,streetC.y,400,400);
  textAlign(CENTER);
  image(coinImg,coin.x,coin.y,coin.w,coin.h);
  image(characterImg,character.x,character.y,character.w,character.h);
  image(bigCoinImg,huge.x,huge.y,huge.w,huge.h);
  image(shipImg,ship.x,ship.y,ship.w,ship.h);
  image(carImg,car.x,car.y,car.w,car.h);
  fill(carBox.r,carBox.g,carBox.b);
  fill(0, 200, 0);
  rect(grass.x, grass.y , 400 , 40);
  rect(grass.x1, grass.y1 , 400 , 50);
  stroke('white');
  fill(carBox.r,carBox.g,carBox.b);
  strokeWeight(4);
  rect(carBox.x,carBox.y,carBox.w,carBox.h);
  noStroke();
  textSize(20);
  fill(textColor.r,textColor.g,textColor.b);
  text("Score: " + score, 195,20);
  image(heart[heartIndex],0,0,120,40);
  spaceLaunchTimer++;
  carLaunchTimer++;
  moveCharacter();
  inside();
  defeat();
  deathBox1();
  if(score >= 25&&score < 100 || score >= 125){
    deathBox2();
    level = 2;
    boxSpeed = 3;
  }
  if(score >= 50&&score < 100 || score >= 150){
    deathBox3();
    level = 3;
    boxSpeed = 4;
  }
  if(space == true){
    level = 4;
  }
  if(score < 50){
    spaceLaunchTimer = 0;
  }
  if(score < 100){
    carLaunchTimer = 0;
  }
  if(spaceLaunchTimer == 2){
   ship.x = 200;
   ship.y = 200;
  }
  if(carLaunchTimer == 2){
    car.x = 200;
    car.y = 200;
  }
  if(score >= 100){
    level = 5;
  }
  if(score == 125){
    stage4Transition();
  }
}

function keyPressed(){
  if(keyCode == (16)&& shield >= 1){
    shieldActivate();
  }
  if(keyCode === ENTER&& life == 0&& game == true){ 
   boxSpeed = 2;
   score = 0;
   life = 3;
   coin.x = 100;
   coin.y = 100;
   character.x = 200;
   character.y = 200;
   box1.r = 200;
   box2.r = 200;
   box3.r = 200;
   box1.g = 0;
   box2.g = 0;
   box3.g = 0;
   box1.b = 0;
   box2.b = 0;
   box3.b = 0;
   canvasCol.r = 255;
   canvasCol.g = 255;
   canvasCol.b = 255; 
   level = 1;
   box1.x = 400;
   box2.x = 400;
   box3.x = 400;
   textColor.r = 0;
   textColor.g = 0;
   textColor.b = 0;
   shipSpeed = 2;
   space = false;
   carBoxSpeed = 0;
   carBox.x = 410;
   carBox.y = 10;
   car.x = -100;
   car.y = -100;
   grass.x = 600;
   grass.x1 = 600;
   streetC.x = 600;
   carSpeed = 0;
   stage3 = false;
   carActive = false;
   moveSpeed = settingsMove;
   collected = 0;
   oxygenTime = 60;
   oxygenSpeed = 0.1;
   lifeScore = 0;
   ship.x = 600;
   ship.y = 600;
   heartIndex = 3;
   button6.hide();
   button7.show();
   shieldPressesing = true;
 }
}

function moveCharacter(){
   if (keyIsDown(87)&&character.y>0||keyIsDown(UP_ARROW)&&character.y>0) {
   	character.y -= moveSpeed;
   } 
  if (keyIsDown(83)&&character.y<=height-60||keyIsDown(DOWN_ARROW)&&character.y<=height-60) {
   character.y += moveSpeed;
	 } 
  if (keyIsDown(65)&&character.x>=1||keyIsDown(LEFT_ARROW)&&character.x>=1) {
    character.x -= moveSpeed;
   } 
  if (keyIsDown(68)&&character.x<=width-60||keyIsDown(RIGHT_ARROW)&&character.x<=width-60) {
   	character.x += moveSpeed;
   }
  if (keyIsDown(87)&&car.y>60||keyIsDown(UP_ARROW)&&car.y>60) {
   	car.y -= carSpeed;
   } 
  if (keyIsDown(83)&&car.y<=300||keyIsDown(DOWN_ARROW)&&car.y<=300) {
   car.y += carSpeed;
	 } 
  if (keyIsDown(65)&&car.x>=1||keyIsDown(LEFT_ARROW)&&car.x>=1) {
    car.x -= carSpeed;
   } 
  if (keyIsDown(68)&&car.x<=300||keyIsDown(RIGHT_ARROW)&&car.x<=300) {
   	car.x += carSpeed;
   }
  if(keyIsDown(187)&&userName == "Liam"){
    //coins = 1000;
    //shield = 10;
    //coinCost = 600;
    //coinMultiplier = 5;
    coins ++;
  }
  //if(keyIsDown(187)&&userName == "Kool"){
    //coins += 1
  //}
}

function inside(){
if(character.x < coin.x + coin.w &&
    character.x + coin.w > coin.x &&
    character.y < coin.y + coin.h &&
    character.y + coin.h > coin.y)
{
     collect = 1;
     coins += 1 * coinMultiplier;
     coinSound.play();
}
if(character.x < huge.x + huge.w &&
    character.x + huge.w > huge.x &&
    character.y < huge.y + huge.h &&
    character.y + huge.h > huge.y)
{
     hugeCollect = 1;
     coins += 10 * coinMultiplier;
     coinSound.play();
}
if(character.x < box1.x + box1.w &&
    character.x + box1.w > box1.x &&
    character.y < box1.y + box1.h &&
    character.y + box1.h > box1.y)
{
    death = true;
}
if(character.x < box2.x + box2.w &&
    character.x + box2.w > box2.x &&
    character.y < box2.y + box2.h &&
    character.y + box2.h > box2.y)
{
    death = true;
}
if(character.x < box3.x + box3.w &&
    character.x + box3.w > box3.x &&
    character.y < box3.y + box3.h &&
    character.y + box3.h > box3.y)
{
    death = true;
}
if(character.x < ship.x + ship.w &&
    character.x + ship.w > ship.x &&
    character.y < ship.y + ship.h &&
    character.y + ship.h > ship.y)
{
    spaceLaunch = true;
}
if(car.x < carBox.x + carBox.w &&
    car.x + carBox.w > carBox.x &&
    car.y < carBox.y + carBox.h &&
    car.y + carBox.h > carBox.y)
{
    death = true;
}
if(character.x < car.x + car.w &&
    character.x + car.w > car.x &&
    character.y < car.y + car.h &&
    character.y + car.h > car.y)
{
    stage3 = true;
}
if(character.x < oxygen.x + oxygen.w &&
    character.x + oxygen.w > oxygen.x &&
    character.y < oxygen.y + oxygen.h &&
    character.y + oxygen.h > oxygen.y)
{
    oxygenTime ++;
    if(oxygenTime >= 60){
      oxygenTime = 60;
    }
}
  
if(collect == 1){
  score +=1;
  coin.x = random(0,width-100);
  coin.y = random(0,height-50);
  hugeCoin = int(random(0,100));
  collect = 0;
}
if(spaceLaunch == true){
  character.x = 600;
  character.y = 600;
  moveSpeed = 0;
  ship.y -= shipSpeed;
}
if(ship.y <= -100){
  character.x = 200;
  character.y = 200;
  moveSpeed = 10;
  box1.x = 700;
  box2.x = 700;
  box3.x = 700;
  space = true;
  spaceLaunch = false;
}
if(space == true){
  moveSpeed = settingsMove;
  ship.y = 600;
  shipSpeed = 2;
  canvasCol.r = 0;
  canvasCol.b =100;
  canvasCol.g = 0;
  textColor.r = 255;
  textColor.g = 255;
  textColor.b = 255;
  box1.r = 220;
  box1.g = 220;
  box1.b = 220;
  box2.r = 220;
  box2.g = 220;
  box2.b = 220;
  box3.r = 220;
  box3.g = 220;
  box3.b = 220;  
  oxygenStation();
}
if(stage3 == true){
  car.x += 3;
  character.x = -100;
  character.y = -100;
  moveSpeed = 0;
  space = false;
}
if(car.x >= 400){
  carStage();
}
carBox.x -= carBoxSpeed;

if (carBox.x <=0){ 
    // start again from other side
    carBox.x = width; 
    // make y coordinates random
    carBox.y = random(60, 300)
    //increase speed
    carBoxSpeed += 0.5; 
    //add score each time you pass
    score += 1
    //change box color
    carBox.r = random(0, 250);
    carBox.g = random(0, 250);
    carBox.b = random(0,250);
    carBox.w = random(50, 150);
  }
  if (carBoxSpeed >= 15){
   // cap the speed
   carBoxSpeed = 15
}

if(hugeCoin == 2){
  huge.x = random(0,width-100);
  huge.y = random(0,height-50);
  hugeCoin = 0;
}
if(hugeCollect == 1){
  score+=20;
  huge.x = 500;
  huge.y = 500;
  hugeCollect = 0;
}
}

function deathBox1(){
  fill(box1.r,box1.g,box1.b);
  rect(box1.x,box1.y,box1.w,box1.h);
  box1.x = box1.x - boxSpeed;
  if(box1.x <= 0-box1.w){
  box1.x = 400
  box1.y = random(0,300);
}
}
function deathBox2(){
  fill(box2.r,box2.g,box2.b);
  rect(box2.x,box2.y,box2.w,box2.h);
  box2.x = box2.x - boxSpeed;
  if(box2.x <= 0-box2.w){
  box2.x = 400
  box2.y = random(0,300);
}
}
function deathBox3(){
  fill(box3.r,box3.g,box3.b);
  rect(box3.x,box3.y,box3.w,box3.h);
  box3.x = box3.x - boxSpeed;
  if(box3.x <= -50){
  box3.x = 400
  box3.y = random(0,300);
}
}

function defeat(){
if(death == true){
  life = life - 1;
  heartIndex -= 1;
  box1.x = 400;
  box2.x = 400;
  box3.x = 400;
  carBox.x = 400;
  death = false;
  if(carActive == true){
    car.x = 200;
    car.y = 200;
  }
  if(carActive == false){
    character.x = 200;
    character.y = 200;
  }
  deathSound.play();
  }
  if(life == 0){
    shieldPressing = false;
    button7.hide();
    button6.show();
    fill('teal')
    rect(0,0,width,height);
    fill('Black')
    text("GAME OVER\nPress ENTER To Restart\nScore: "+ score +"\n\nLeaderboard " + "\n1st: "+ name1 + ","+score1 + "\n2nd: " + name2 + "," + score2 + "\n3rd: " + name3 + "," + score3 + "\n4th: " + name4 + "," + score4 + "\n5th: " + name5 + "," + score5 + "\n6th: " + name6 + "," + score6 + "\n7th: " + name7 + "," + score7 + "\n8th: " + name8 + "," + score8 + "\n9th: " + name9 + "," + score9 , 200,200);
    boxSpeed = 0;
    car.x = -100;
    car.y = -100; 
    coin.x = 500;
    coin.y = 500;
    box1.x = 500;
    box1.y = 500;
    box2.x = 500;
    box2.y = 500;
    box3.x = 500;
    box3.y = 500;
    textColor.r = 0;
    textColor.g = 0;
    textColor.b = 0;
    carBoxSpeed = 0;
    oxygenSpeed = 0;
 }
}
function carStage(){
  carBoxSpeed = 3;
  carActive = true;
  car.x = 200;
  car.y = 200;
  carSpeed = settingsCarMove;
  stage3 = false;
  coin.x = -100;
  coin.y = 100;
  streetC.x = 0;
  streetC.y = 0;
  boxSpeed = 0;
  box1.x = 600;
  box1.y = 600;
  box2.x = 600;
  box2.y = 600;
  box3.x = 600;
  box3.y = 600;
  grass.x = 0;
  grass.y = 0;                                          
  grass.x1 = 0;
  grass.y1 = 375;
  level = 6;
}
function oxygenStation(){
  fill('black');
  rect(oxygen.x,oxygen.y,oxygen.w,oxygen.h)
  fill('white')
  rect(10,100,20,oxygenTime)
  oxygenTime -= oxygenSpeed;
  if(oxygenTime <= 0){
    life -= 1;
    oxygenTime = 60;
    oxygenSpeed+=0.01;
  }
}
function stage4Transition(){
  carBoxSpeed = 0;
  carBox.x = 600;
  car.x += carSpeed;
  if(car.x >= 380){
    stage4 = true;
    carSpeed = 0;
  }
  if(stage4 == true){
  character.w = 50;
  character.h = 50;
  character.x = 100;
  character.y = 100;
  carActive = false;
  grass.x = 600;
  carSpeed = 0;
  grass.x1 = 600;
  streetC.x = 600;
  moveSpeed = settingsMove;
  car.x = -200;
  canvasCol.r = 255;
  canvasCol.g = 255;
  canvasCol.b = 255;
  coin.x = 50;
  coin.y = 50;
  box1.x = 410
  box2.x = 410
  textColor.r = 0;
  textColor.g = 0;
  textColor.b = 200;
  box1.r = 200;
  box2.r = 200;
  box3.r = 200;
  box1.g = 0;
  box2.g = 0;
  box3.g = 0;
  box1.b = 0;
  box2.b = 0;
  box3.b = 0;
  stage4 = false;
}
}
function ammount(){
  image(coinImg,310,11,30,30);
  fill("black");
  textSize(20);
  fill(textColor.r,textColor.g,textColor.b);
  text(coins,370,23);
  if(shieldPressing == true){
    fill(textColor.r,textColor.g,textColor.b);
    text(shield,45,300);
  } 
}
function highScoreCheck(){
  if(score >= highscore && score >= 1){
    highscore += 1 
  } 
  if(highscore-1 == score){
    highscore -= 1;
  }
}
