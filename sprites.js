let spriteSheet;
let spriteSheet2;
let moving = 0;
let spelunky;
let green;
let spawns;
let purple;


function preload() {
    spriteSheet = loadImage("imgs/SpelunkyGuy.png");
    spriteSheet2 = loadImage("imgs/Green.png");
    spriteSheet3 = loadImage("imgs/purple.png");
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);

    spelunky = new walkingAnimation(spriteSheet,80,80,200,200,9);
    green = new walkingAnimation(spriteSheet2,80,80,200,300,9);
    purple = new walkingAnimation(spriteSheet3,80,80,200,100,9);
}

function draw() {
    background(220);
    spelunky.draw();
    green.draw();
    purple.draw();
}

function keyPressed() {
    spelunky.keyPressed(RIGHT_ARROW, LEFT_ARROW);
    green.keyPressed(LEFT_ARROW, RIGHT_ARROW);
    purple.keyPressed(LEFT_ARROW, RIGHT_ARROW);
}

function keyReleased() {
    spelunky.keyReleased(RIGHT_ARROW, LEFT_ARROW);
    green.keyReleased(LEFT_ARROW, RIGHT_ARROW);
    purple.keyReleased(LEFT_ARROW, RIGHT_ARROW);
}

class walkingAnimation {
    constructor(spriteSheet, sw, sh, dx, dy, animationLength) {
        this.spriteSheet = spriteSheet;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.u = 0;
        this.v = 0;
        this.animationLength = animationLength;
        this.currentFrame = 0;
        this.moving = 0;
        this.xDirection = 1;
    }

    draw() {
        this.u = (this.moving != 0) ? this.currentFrame % this.animationLength : 0;
        push(); 
        translate(this.dx, this.dy);
        scale(this.xDirection,1);
       

        image(this.spriteSheet,0,0,this.sw,this.sh,this.u*this.sw,this.v*this.sh,this.sw,this.sh);
        pop();
        if (frameCount % 6 == 0) {
            this.currentFrame++;
        }

        this.dx += this.moving;
    }

    keyPressed(right, left) {
        if (keyCode == right) {
            this.moving = 1;
            this.xDirection = 1;
            this.currentFrame = 1;
        }else if (keyCode == left) {
            this.moving = -1;
            this.xDirection = -1;
            this.currentFrame = 1;
        }
    }

    keyReleased(right, left) {
        if (keyCode === right|| keyCode === left) {
            this.moving = 0;
        }
    }
}