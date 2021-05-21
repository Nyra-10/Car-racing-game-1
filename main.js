var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var car1_width=100;
var car1_height=90;
car1x=10;
car1y=10;
var bg_image="Bg.jpg";
var car1_image="car1.png";
var car2_width=120;
var car2_height=70
car2x=10;
car2y=100;
var car2_image="car2.jpg";
function addfunction(){
Bg_image_tag=new Image();
Bg_image_tag.onload=uploadbg;
Bg_image_tag.src=bg_image;
car1_imagetag=new Image();
car1_imagetag.onload=uploadcar1;
car1_imagetag.src=car1_image;
car2_imagetag=new Image();
car2_imagetag.onload=uploadcar2;
car2_imagetag.src=car2_image;
}
function uploadbg(){
    ctx.drawImage(Bg_image_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_imagetag,car1x,car1y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_imagetag,car2x,car2y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypress=e.keyCode;
if(keypress=='38'){
    upcar1();
    console.log("upcar1");
}
if(keypress=='40'){
    downcar1();
    console.log("downcar1");
}
if(keypress=='37'){
    leftcar1();
    console.log("leftcar1");
}
if(keypress=='39'){
    rightcar1();
    console.log("rightcar1");
}
}