var babyObj=function(){

this.x;
this.y;
this.angle;
this.babyEye=new Image();
this.babyBody=new Image();
this.babyTail=new Image();
this.babyTailTimer=0;//时间计数器
this.babyTailCount=0;//时间控制器控制执行到哪一帧了
this.babyEyeTimer=0;
this.babyEyeCount=0;
this.babyEyeInterval=1000;//时间间隔为1000ms
this.babyBodyTimer=0;
this.babyBodyCount=0;

}
babyObj.prototype.init=function(){


this.x=canWidth*0.5-50;
this.y=canHeight*0.5+50;
this.angle=0;

this.babyBody.src="./src/babyFade0.png";




}
babyObj.prototype.draw=function(){
	//想让小鱼动起来就要相对大鱼的位置用一个lerp
	this.x=lerpDistance(mom.x, this.x, 0.99);//让坐标值趋向于目标值前面是坐标值后面是目标值说的是后面括号里面的值
 this.y=lerpDistance(mom.y, this.y, 0.99);
//ctx1
//translate()转移原点的相对坐标

var deltaY=mom.y-this.y;
var deltaX=mom.x-this.x;
var beta=Math.atan2(deltaY,deltaX)+Math.PI;
//得到的值是一个-π到π之间的值所以在lerpAngle这个封装的函数里
//需要加一个2π或减一个2π保证值域在-π到π之间
//lerpAngle
this.angle=lerpAngle(beta, this.angle, 0.8);
//babytail count
this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50)
	{
		this.babyTailCount = (this.babyTailCount + 1) % 8;
		this.babyTailTimer %= 50;//重置计时器
	}
	//babyeye count
	this.babyEyeTimer+=deltaTime;
if(this.babyEyeTimer>this.babyEyeInterval)
{
this.babyEyeCount=(this.babyEyeCount+1)%2;
this.babyEyeTimer%=this.babyEyeInterval;
if(this.babyEyeCount==0){

this.babyEyeInterval=Math.random()*1500+2000;
}
else{
this.babyEyeInterval=200;

}

}
//baby body
this.babyBodyTimer+=deltaTime;
if(this.babyBodyTimer>300)
{

	this.babyBodyCount=this.babyBodyCount+1;
	this.babyBodyTimer%=300;
	if(this.babyBodyCount>19){

		this.babyBodyCount=19;
		//game over
		data.gameOver=true;
		
	}
}
ctx1.save();
ctx1.translate(this.x,this.y);//这个时候this.x和this.y变成了0,0点
ctx1.rotate(this.angle);

var babyTailCount=this.babyTailCount;
ctx1.drawImage(babyTail[babyTailCount],-babyTail[babyTailCount].width * 0.5 +23,-babyTail[babyTailCount].height * 0.5);

var babyBodyCount=this.babyBodyCount;
//0-this.babyEye.width*0.5高度同理（height）这样图片的中心就是当前的原点
ctx1.drawImage(babyBody[babyBodyCount],-babyBody[babyBodyCount].width*0.5,-babyBody[babyBodyCount].height*0.5);

var babyEyeCount=this.babyEyeCount;
ctx1.drawImage(babyEye[babyEyeCount],-babyEye[babyEyeCount].width*0.5,-babyEye[babyEyeCount].height*0.5);//这个时候本来this.x应该为0但是图片本身是有宽度的所以用
//因为眼睛是在最外面所以要最后画眼睛最先画尾巴
ctx1.restore();
}