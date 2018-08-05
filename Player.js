function Player()
{
  this.width = 50;
  this.height = 10;
  this.speed = 3;
  this.x = canvas.width / 2 - this.width / 2;
  this.y = canvas.height - this.height - 10;
  this.draw = function()
  {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
  this.update = function()
  {
    if(leftPressed && this.x > 0)
      this.x -= this.speed;
    else if(rightPressed && (this.x + this.width < canvas.width))
      this.x += this.speed;
  }
}
