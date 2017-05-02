var index=0;//当前位置
//上张图片
function carousel_before(){
	if(index<=0){
		index=2;
	}else{
		index--;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg";
	var div1=document.getElementById("carousel");
}
function carousel_next(){
	if(index>=2){
		index=0;
	}else{
		index++;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg";
}//使用定时器自动控制图片的轮播

function mouseclick1(){
	if(index<=0){
		index=2;
	}else{
		index--;
	}
	document.getElementById("carousel_img").src="img/banner"+(index+1)+".jpg";
}
var i=0;
function onleftlogo(){

  document.getElementById("leftintrologo").src="img/leftintrologo1.png";  
}

function onleftlogo1(){
   document.getElementById("leftintrologo").src="img/leftintrologo0.png";  
}
function onrightlogo(){
   document.getElementById("rightintrologo").src="img/rightintrologo1.png";  
}
function onrightlogo1(){
   document.getElementById("rightintrologo").src="img/rightintrologo0.png";  
}
function onclick3(){
var a=document.getElementById("x000");
a.style.top="0px";
  a.style.transition="1s";
}
function onclick4(){
var a=document.getElementById("x000");
a.style.top="-340px";
  a.style.transition="1s";
}

