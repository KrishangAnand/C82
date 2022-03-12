canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e);
{

    color = document.getElementById("color").value;
    width_of_line =  document.getElementById("width_of_line").value;
    mouseEvent = "mosuseDown";

}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleaves";
}
Canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent + "mouseUP"
}Canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    current_postion_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_postion_of_mouse_y = e.clientY - canvas.offsetTOP;

    if (mouseEvent == "mouseDown") {

        ctx.beginPath();
        ctx.strokestyle = color;
        ctx.lineWidth = width_of_line;

        console.log ("Last positiion of x and y cordinate = ")
        console.log ("x = " + last_postion_of_mouse_x + "y = " + last_postion_of_mouse_y );
        ctx.moveTo(last_postion_of_mouse_x, last_postion_of_mouse_y);

        console.log ("Last positiion of x and y cordinate = ")
        console.log ("x = " + current_postion_of_mouse_x + "y = " + last_postion_of_mouse_y );
        ctx.lineTo(current_postion_of_mouse_x, current_postion_of_mouse_y);
        ctx.stroke();
    }
    last_postion_of_x = last_postion_of_mouse_x;
    last_postion_of_y = last_postion_of_mouse_y;

}