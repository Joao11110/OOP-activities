let cir;
let sqr;

class Shape{
    constructor(x, y, velX, velY, collision){
        this.x = x
        this.y = y
        this.velX = velX
        this.velY = velY
        this.colission = collision
    }

    handleCollision(){
    }

    move(){
        this.x += this.velX;
        this.y += this.velY;
        if(this.x < 0 || this.x > width) {
            this.velX = -this.velX;
            this.collision = true;
        }

        if(this.y < 0 || this.y > height) {
            this.velY = -this.velY;
            this.collision = true;
        }

        if(this.collision) {
            this.handleCollision()
            this.collision = false;
        }
    }
}

class Circle extends Shape{
    constructor(x, y, velX, velY, collision){
        super(x, y, velX, velY, collision)
        this.color = color(255, 255, 255)
    }

    display(){
        push()
        fill(this.color);
        circle(this.x, this.y, 10);
      pop()
    }

    handleCollision(){
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
    }

    move(){
        if(this.collision == true){
          this.handleCollision()
        }
        super.move()
    }
}

class Square extends Shape{
    constructor(x, y, velX, velY, collision){
        super(x, y, velX, velY, collision)
        this.size = 10
    }

    display(){
        square(this.x, this.y, this.size);
    }

    handleCollision(){
        this.size += 5;
    }

    move(){
        if(this.collision == true){
          this.handleCollision()
        }
        super.move()
    }
}

function setup() {
    createCanvas(400, 400);
    cir = new Circle(width/2, height/2, 1, 1, false);
    sqr = new Square(width/2, height/2, -1, -1, false);
}

function draw() {
    background(220);
    cir.display()
    cir.move()
    sqr.display()
    sqr.move()
}