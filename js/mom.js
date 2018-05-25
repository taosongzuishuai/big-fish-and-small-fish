var momObj=function(){

 this.x;
 this.y;
 this.angle;//大鱼的旋转角度
 
 this.momTailTimer=0;
 this.momTailCount=0;
 this.momoEyeTimer=0;
 this.momoEyeCount=0;
 this.momoEyeInterval=1000;
 this.momBodyCount=0;

}
momObj.prototype.init=function(){


this.x=canWidth*0.5;
this.y=canHeight*0.5;
this.angle=0;


}
momObj.prototype.draw=function(){
	//lerp x y lerp是一个封装好的函数lerp会让运动变得圆滑不会是匀速运动
 this.x=lerpDistance(mx, this.x, 0.99);
 this.y=lerpDistance(my, this.y, 0.99);
 //delta angle每一帧的角度
 //Math.atan2(y,x)

var deltaY=my-this.y;
var deltaX=mx-this.x;
var beta=Math.atan2(deltaY,deltaX)+Math.PI;
//得到的值是一个-π到π之间的值所以在lerpAngle这个封装的函数里
//需要加一个2π或减一个2π保证值域在-π到π之间
this.angle=lerpAngle(beta, this.angle, 0.6);
//mom tail
this.momTailTimer+=deltaTime;
if(this.momTailTimer>50)
{

	this.momTailCount=(this.momTailCount+1)%8;
	this.momTailTimer%=50;
}
//mom eye
this.momoEyeTimer+=deltaTime;
if(this.momoEyeTimer>this.momoEyeInterval)
{

	this.momoEyeCount=(this.momoEyeCount+1)%2;
	this.momoEyeTimer%=this.momoEyeInterval;
	if(this.momoEyeCount==0)
	{

		this.momoEyeInterval=Math.random()*1500+2000;
	}
	else{

		this.momoEyeInterval=1000;
	}
}
ctx1.save();
ctx1.translate(this.x,this.y);
ctx1.rotate(this.angle);
var momTailCount=this.momTailCount;
ctx1.drawImage(momTail[momTailCount],-momTail[momTailCount].width*0.5+30,-momTail[momTailCount].height*0.5);

var momBodyCount=this.momBodyCount;
if(data.double==1){

	ctx1.drawImage(momBodyOra[momBodyCount],-momBodyOra[momBodyCount].width*0.5,-momBodyOra[momBodyCount].height*0.5);
}
else{

	ctx1.drawImage(momBodyBlue[momBodyCount],-momBodyBlue[momBodyCount].width*0.5,-momBodyBlue[momBodyCount].height*0.5);

}

var momoEyeCount=this.momoEyeCount;
ctx1.drawImage(momEye[momoEyeCount],-momEye[momoEyeCount].width*0.5,-momEye[momoEyeCount].height*0.5);
ctx1.restore();//在save和restore之间证明只适合这个大鱼不适合其他情况
}