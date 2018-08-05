function Ball()
{
  this.r = 6;
  this.x = canvas.width / 2;
  this.y = canvas.height - 40;
  speed = 2;
  this.dx = speed;
  this.dy = speed;
  this.color = "#0095DD";
  this.draw = function()
  {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
  this.update = function(paddleX, paddleWidth)
  {
    if(this.y + this.r >= player.y && this.y + this.r <= player.y + this.dy && this.x >= player.x && this.x  <= player.x + player.width)
      this.dy *= - 1;
    else if(this.y + this.r + this.dy > canvas.height)
    {
      this.dx = 0;
      this.dy = 0;
      gameOver = true;
      this.y = canvas.height - this.r - 1;
      alert("YOU LOST! Press Space to try again");
    }
    else if(this.y - this.r + this.dy < 0)
      this.dy *= -1;
    else if((this.x + this.r + this.dx > canvas.width) ||(this.x - this.r + this.dx < 0))
      this.dx *= -1;
    this.x += this.dx;
    this.y += this.dy;

    const maxAngle = 180;
    let hitPosition = (this.x - paddleX);
    let ballAngle = 0;
    const scaleToAngle = maxAngle / (paddleWidth);

    ballAngle = hitPosition * scaleToAngle;
    angleRadians = ballAngle * (Math.PI / maxAngle);

    dy = Math.sin(angleRadians) * speed;
    dx = Math.cos(angleRadians) * speed;
    console.log(dy, dx);
   }
}
