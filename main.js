canvas=document.getElementById("myCanvas"); 
ctx=canvas.getContext("2d");
var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
color="black";
width=2;
radius=20;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpositionofx=e.clientX-canvas.offsetLeft;
    currentpositionofy=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentpositionofx,currentpositionofy,radius,0,2*Math.PI);
        ctx.stroke();
    }
    last_position_of_x=currentpositionofx;
    last_position_of_y=currentpositionofy;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}