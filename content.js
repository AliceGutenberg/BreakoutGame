var canvas = document.querySelector('canvas');

w = window.innerWidth;
h = window.innerHeight;
wmax = 600;
hmax = 400;
if(w <= wmax)
  canvas.width = window.innerWidth;
else
  canvas.width = wmax;
if(h <= hmax)
  canvas.height = window.innerHeight;
else
  canvas.heigth = hmax;

var ctx = canvas.getContext('2d');

player = new Player();
ball = new Ball();
bricks = new Bricks();

bricks.init();

if(document.cookie.length != 0)
{
  var cookiearray = document.cookie.split("=");
  if(cookiearray[1] == "blue")
    ball.color = "#0095DD";
  else if(cookiearray[1] == "red")
    ball.color = "#800000";
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var rightPressed = false;
var leftPressed = false;
var gameOver = false;

function draw()
{
  if(!gameOver)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    ball.draw();
    bricks.draw();
    player.update();
    ball.update(player.x, player.width);
    ball.dy *= bricks.collision(ball.x, ball.y);
    if(ball.dy == 0 && !gameOver)
    {
      alert("YOU WON! Press Space to play again");
      gameOver = 2;
    }
  }
  else if(gameOver == 2)
  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

  }
}

function keyDownHandler(e) {
  if(e.keyCode == 39) {
      rightPressed = true;
  }
  else if(e.keyCode == 37) {
      leftPressed = true;
  }
  else if(gameOver && e.keyCode == 32)
    document.location.reload();
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10);
