var aneObj=function(){//ane是海葵
//start point， control point， end point(sin)最后这个点是要动的用sin函数	
this.rootx=[];//start point的x值
this.headx=[];//end point的x值
this.heady=[];
this.amp=[];//振幅就是海葵摆动的振幅
this.alpha=0;

}
aneObj.prototype.num=50;
aneObj.prototype.init=function(){

for(var i=0;i<this.num;i++){
	this.rootx[i] = i*16+Math.random()*20;
	this.headx[i]=this.rootx[i];
	this.heady[i]=canHeight-250+Math.random()*50;
    this.amp[i]=Math.random()*50+50;

}

}
aneObj.prototype.draw=function(){ 
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);//[-1,1]sin范围
	ctx2.save();
	ctx2.globalAlpha=0.6;
	ctx2.lineCap="round";
ctx2.strokeStyle="#3b154e";
for(var i=0;i<this.num;i++)
{
//beginPath   movTo  lineTo strokeStyle stroke lineWidth lineCap  globalAlphy
ctx2.beginPath();
ctx2.moveTo(this.rootx[i],canHeight)
this.headx[i]=this.rootx[i]+l*this.amp[i];
ctx2.quadraticCurveTo(this.rootx[i],canHeight-100,this.headx[i],this.heady[i]);
ctx2.lineWidth=20; 

ctx2.stroke();

}
ctx2.restore();
}