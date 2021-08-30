
var last_position_of_x,last_position_of_y;


canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if (width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
}


canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e){

color=document.getElementById("color").value;
width_line=document.getElementById("width").value;
console.log(color);
console.log(width_line);

last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
last_position_of_y=e.touches[0].clientY-canvas.offsetTop; 



}
canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){

current_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_y=e.touches[0].clientY-canvas.offsetTop;


ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_line;
console.log("last_position_of_x_and_y_coordinates= ");
console.log("x="+last_position_of_x+"y="+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);


console.log("currrent_position_of_x_and_y_coordinates= ");
console.log("x="+current_position_of_x+"y="+current_position_of_y);
ctx.lineTo(current_position_of_x,current_position_of_y);

ctx.stroke();

last_position_of_x=current_position_of_x;
last_position_of_y=current_position_of_y;
}


function clear(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
