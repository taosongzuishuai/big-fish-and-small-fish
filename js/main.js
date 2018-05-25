var can1;
var can2;
var ctx1;
var ctx2;
var lastTime;//上一帧执行的时间
var deltaTime;//两帧间隔的时间差
var bgPic=new Image();
var canHeight;
var canWidth;
var ane;
var fruit;
var mom;
var baby;
var mx;//鼠标x
var my;//鼠标y
var babyTail=[];//尾巴数组
var babyEye=[];//眼睛数组
var babyBody=[];//身体数组（身体变白）
var momTail=[];//大鱼尾巴
var momEye=[];//大鱼眼睛
var momBodyOra=[];//大鱼身体为橙色
var momBodyBlue=[];//大鱼身体为蓝色
var data;
var wave;
var halo;
var dust;
var dustPic=[];
document.body.onload=game;
function game(){

	init();
	lastTime=Date.now();
	gameloop();
}
function init(){

can1=document.getElementById("xia");//fishs,dust,UI,circle
ctx1=can1.getContext('2d');
can2=document.getElementById("yu");//background,ane,fruits
ctx2=can2.getContext('2d');
can1.addEventListener('mousemove',onMouseMove,false);
bgPic.src="./src/background.jpg";
canWidth=can1.width;
canHeight=can1.height;
ane =new aneObj();
ane.init();
fruit =new fruitObj();
fruit.init();
mom=new momObj();
mom.init();
baby=new babyObj();
baby.init();




mx=canWidth*0.5;//初始化在canvas中间
my=canHeight*0.5;
//小鱼尾巴
for(var i=0; i < 8; i++)
{
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}
	//小鱼眼睛
for(var i=0;i<2;i++)
{

	babyEye[i]=new Image();
	babyEye[i].src="./src/babyEye"+i+".png";
}
//小鱼身体
for(var i=0;i<20;i++)
{

babyBody[i]=new Image();
babyBody[i].src="./src/babyFade"+i+".png";
}
//大鱼尾巴
for(var i=0;i<8;i++){

momTail[i]=new Image();
momTail[i].src="./src/bigTail"+i+".png";

}
//大鱼眼睛
for(var i=0;i<2;i++){

	momEye[i]=new Image();
	momEye[i].src="./src/bigEye"+i+".png";
}
data=new dataObj();
//大鱼身体分两种颜色
for(var i=0;i<8;i++){

	momBodyOra[i]=new Image();
	momBodyBlue[i]=new Image();
	momBodyOra[i].src="./src/BigSwim"+i+".png";
	momBodyBlue[i].src="./src/BigSwimBlue"+i+".png";
}
wave=new waveObj();
wave.init();
halo=new haloObj();
halo.init();
for(var i=0;i<7;i++){

  dustPic[i]=new Image();
  dustPic[i].src="./src/dust"+i+".png";

}
dust=new dustObj();
dust.init();
}
function gameloop(){

window.requestAnimationFrame(gameloop);//requestAnimationFrame当前绘制完成后根据机器的性能来确定间隔多长时间来绘制下一帧相比setTimeout和setInterval更科学
var now=Date.now();
deltaTime=now-lastTime;
lastTime=now;
if(deltaTime>40) deltaTime=40;
drawBackground();
ane.draw();
fruitMonitor();
fruit.draw();
ctx1.clearRect(0,0,canWidth,canHeight);
mom.draw();
baby.draw();
data.draw();
momFruitsCollision();
momBabyCollision();
wave.draw();
halo.draw();
dust.draw();






}
function onMouseMove(e){
	if(!data.gameOver){

		if(e.offSetX || e.layerX){
mx=e.offSetX == undefined ? e.layerX : e.offSetX;
my=e.offSetY == undefined ? e.layerY : e.offSetY;

}
	}



}