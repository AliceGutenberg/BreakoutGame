function Bricks()
{
  this.width = 50;
  this.height = 20;
  this.p = 10;
  this.nr = 3;
  this.marginup = 30;
  this.score = 0;
  var x = (canvas.width + this.p) / (this.width + this.p);
  var x1 = canvas.width - Math.floor(x) * (this.width + this.p) + this.p;
  //if(x1 >= 2 * this.p)
  //{
    this.n = Math.floor(x);
    this.marginleft = Math.floor(x1 / 2);
 //  }
 //  else
 //  {
 //    this.n = Math.floor(x) - 1;
 //    this.marginleft = x1 / 2 + (this.width + this.p) / 2;
 // }
  this.init = function()
  {
    this.br = [];
    for(var c=0; c<this.nr; c++) {
        this.br[c] = [];
        for(var r=0; r<this.n; r++) {
          this.br[c][r] = { x: 0, y: 0, status: 1 };
        }
      }
    for(var i = 0; i < this.nr; i++)
    {
      for(var j = 0; j < this.n; j++)
      {
        var x0 = Math.floor(this.marginleft + (this.width + this.p) * j);
        var y0 = Math.floor(this.marginup + (this.height + this.p) * i);
        this.br[i][j] = {
          x: x0,
          y: y0,
          status: 1
        }
      }
    }
  }
  this.draw = function()
  {
    for(var i = 0; i < this.nr; i++)
      for(var j = 0; j < this.n; j++)
      {
        if(this.br[i][j].status)
        {
          ctx.beginPath();
          ctx.rect(this.br[i][j].x, this.br[i][j].y, this.width, this.height);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + this.score, 8, 20);
  }
  this.collision = function(bx, by)
  {
    for(var i = 0; i < this.nr; i++)
      for(var j = 0; j < this.n; j++)
      {
        if(this.br[i][j].status)
        {
          let b = this.br[i][j];
          if(bx >= b.x && (bx <= b.x + this.width) && (by >= b.y) && (by <= b.y + this.height))
          {
            this.score++;
            b.status = 0;
            if(this.score == this.n * this.nr)
              return 0;
            return -1;
          }
        }
      }
    return 1;
  }
}
