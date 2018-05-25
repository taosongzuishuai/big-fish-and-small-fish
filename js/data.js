var dataObj=function(){

 this.fruitNum=0;//果实数量
 this.double=1;//是否吃到了蓝色果实
 this.score=0;//得分
 this.gameOver=false;//当小鱼变为白色是gameOver变为true
ctx1.font="20px Verdana"//可以将这两项拿到初始化中
ctx1.textAlign="center";

this.alpha=0;

}

dataObj.prototype.draw=function(){

var w=can1.width;
var h=can1.height;

ctx1.save();
ctx1.shadowBlur=10;
ctx1.shadowColor="white";
ctx1.fillStyle="white";
ctx1.fillText("SCORE"+":"+this.score,w*0.5,h-20);

if(this.gameOver){
this.alpha+=deltaTime*0.0005;
if(this.alpha>1)

this.alpha=1;

ctx1.fillStyle="rgba(255,255,255,"+this.alpha+")"

ctx1.fillText("GAME OVER",w*0.5,h*0.5);

}
ctx1.restore();
}
dataObj.prototype.addScore=function(){

this.score+=this.fruitNum*100*this.double;
this.fruitNum=0;
this.double=1;

}