//判断大鱼和每一个果实的距离如果距离足够小就视为吃掉果实
function momFruitsCollision(){
	if(!data.gameOver){

		for(var i=0;i<fruit.num;i++)
{

	if(fruit.alive[i]){
  //calculate length计算距离
  
  var l=calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);

    if(l<900)//因为l是一个平方值
    {

    	fruit.dead(i);//fruit eaten果实被吃掉
    	data.fruitNum++;
    	mom.momBodyCount++;
    	if(mom.momBodyCount>7){

    		mom.momBodyCount=7;
    	}
    	if(fruit.fruitType[i]=="blue"){

    		data.double=2;
    	}
    	wave.born(fruit.x[i], fruit.y[i]);
    }
	}
}


}
	}

function momBabyCollision(){
if(data.fruitNum>0&&!data.gameOver)
{

var l;
l=calLength2(mom.x,mom.y,baby.x,baby.y);
if(l<900){
    //baby recover小鱼恢复原状态
	baby.babyBodyCount=0;
	//data→0

	mom.momBodyCount=0;
	data.addScore();
	halo.born(baby.x,baby.y);

}

}

}