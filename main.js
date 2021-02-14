Canvas = document.getElementById('myCanvas');
ctx= Canvas.getContext("2d"); 

ball_width= 120;
ball_height= 100;
ball_image = "light ball.png";
ball_x= 10;
ball_y=10;

function add() {

ball_imgTag = new Image();
ball_imgTag.onload = uploadball;
ball_imgTag.src= ball_image;

}

function uploadball(){

        ctx.drawImage( ball_imgTag, ball_x, ball_y, ball_width, ball_height);
        console.log("uploading");
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)

{

keyPressed = e.keyCode;
console.log(keyPressed);
   if (keyPressed == '38')
{
   up();
   console.log("up");
}

if(keyPressed = '40')
 {
    down();
    console.log("down");
 }

if(keyPressed == '37')
{
     Left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right");
}

}


function up()
{
if(ball_y >= 0);
{
ball_y= ball_y - 10;
console.log("upressed",ball_y,ball_x);
uploadball();
}
}

function down()
{
if(ball_y <= 800);
{
ball_y= ball_y + 10;
console.log("downpressed",ball_y,ball_x);
uploadball();
}
}

function Left()
{
if(ball_x >= 0);
{
ball_x= ball_x - 10;
console.log("leftpressed",ball_y,ball_x);
uploadball();
}
}

function right()
{
if(ball_x <= 800);
{
ball_x= ball_x + 10;
console.log("rightpressed",ball_y,ball_x);
uploadball();
}
}





















