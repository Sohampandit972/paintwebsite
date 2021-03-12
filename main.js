var mouseEvent = "empty";
var last_postion_of_x, last_postion_of_y;
canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color="black";
width_line=1;

canvas.addEventlistener("mousedown", my_mousedown); 

function my_mousedown(e)
{
color = document.getElementById("color").value;
width_line = document.getElementById("width_of_the_line").value;


mouseEvent = "mouseDown";

}
canvas.addEventlistener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent = "mouseUp"
}
canvas.addEventlistener("mousemove",my_mousemove );
function my_mousemove(e)
{

    
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y  = e.clientY - canvas.offsetTop;  

if (mouseEvent=="mouseDown")
{
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_line;


ctx.moveTo(last_postion_of_x,last_postion_of_y);
ctx.lineTo(current_postion_of_x,current_postion_of_y);
ctx.stroke();
}
last_postion_of_x=current_position_of_x;
last_postion_of_y=current_position_of_y;

}
canvas.addEventlistener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave"

}