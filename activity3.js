let squareX, squareY;
let squareVelX, squareVelY;
let circleX, circleY;
let circleVelX, circleVelY;
let cir;

class Shape{
  constructor(x ,y, velX, velY,){
      this.x = x
      this.y = y
      this.velX = velX
      this.velY = velY
  }

  move(){
      this.x += this.velX;
      this.y += this.velY;
      if(this.x < 0 || this.x > width)
        this.velX = -this.velX;

      if(this.y < 0 || this.y > height)
        this.velY = -this.velY;
  }
}

class Circle extends Shape{
  constructor(x, y, velX, velY){
    super(x, y, velX, velY)
  }

  display(){
    circle(this.x, this.y, 10);
  }  

  move(){
    super.move()
  }
}

class Square extends Shape{
  constructor(x, y, velX, velY){
    super(x, y, velX, velY)
  }

  display(){
    square(this.x, this.y, 10); 
  } 

  move(){
    super.move()
  }
}

function setup() {
  createCanvas(400, 400);
  cir = new Circle(width/2, height/2, -1, -1) 
  sqr = new Square(width/2, height/2, 1, 1)
}

function draw() {
  background(220);             
  cir.display()
  cir.move()
  sqr.display()
  sqr.move()
}
