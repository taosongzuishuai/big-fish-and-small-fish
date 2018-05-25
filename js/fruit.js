var fruitObj=function(){
	this.alive=[];
    this.orange=new Image();
    this.blue=new Image();
    this.x=[];
    this.y=[];
    this.l=[];
    this.fruitType=[];
    this.spd=[];//为每个果实添加一个特定的成长速度和漂浮速度
    this.aneNO=[];
}
fruitObj.prototype.num=30;
fruitObj.prototype.init= function() {

	for(var i=0;i<this.num;i++){
		this.alive[i]=false;
		this.x[i]=0;
		this.y[i]=0;
		this.l[i]=0;
		this.spd[i]=Math.random()*0.017+0.003;
		//this.born(i);
		this.fruitType[i]="";
		this.aneNO[i]=0;

	}
	this.orange.src="src/fruit.png";
	this.blue.src="src/blue.png";
};
fruitObj.prototype.draw=function(){
	for(var i=0;i<this.num;i++){
		//draw
		//find an ane,grow,fly up
      if(this.alive[i]){
      	if(this.fruitType[i]=="blue")
      	{

      		var pic=this.blue;
      	}
      	else
      	{

      		var pic=this.orange;
      	}
      	if(this.l[i]<=15){
      		var NO=this.aneNO[i];
      		this.x[i]=ane.headx[NO];
      		this.y[i]=ane.heady[NO];
 		    this.l[i]+=this.spd[i]*deltaTime;
 		}else{
 			this.y[i]-=this.spd[i]*5*deltaTime;//果实向上飘y值在逐渐减小
 			//deltaTime用来保证游戏里面的动作流畅连贯
 			//用到随时间变化的变量是用deltaTime使其变得圆滑
 		}
		ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
        if(this.y[i]<10){
        	this.alive[i]=false;
        }
      }

 		
	}
}
fruitObj.prototype.born=function(i){

	this.aneNO[i]=Math.floor(Math.random()*ane.num);
	this.l[i]=0;
	this.alive[i]=true;
	var ran=Math.random();
	if(ran<0.2){

this.fruitType[i]="blue";

	}
	else{

		this.fruitType[i]="orange";
	}
	//orange,blue

}
// fruitObj.prototype.update=function(){
// 	var sum=0;
// 	for(var i=0;i<this.num;i++){
// 		if(this.alive[i]) sum++
// 	}
// }
fruitObj.prototype.dead=function(i){

fruit.alive[i]=false;

}

function fruitMonitor(){
	var sum=0;
	for(var i=0;i<fruit.num;i++){
		if(fruit.alive[i]) sum++;

	}
	if(sum<15){

		sendFruit();
		return;	}
}

function sendFruit(){
	for(var i=0;i<fruit.num;i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}

} 
 
