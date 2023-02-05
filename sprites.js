let spriteSheet;
let spriteSheet2;
let moving = 0;
let spelunky;
let green;


function preload() {
    spriteSheet = loadImage("imgs/SpelunkyGuy.png");
    spriteSheet2 = loadImage("imgs/Green.png");
}

function setup() {
    createCanvas(400, 400);
    imageMode(CENTER);

    spelunky = new walkingAnimation(spriteSheet,50,50,200,200);
}

function draw() {
    background(220);
    spelunky.draw();
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        moving = 0;
    }
}

function keyReleased() {
    if (keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
        moving = 1;
    }
}

class walkingAnimation {
    constructor(spriteSheet, sw, sh, dx, dy) {
        this.spriteSheet = spriteSheet;
        this.sw = sw;
        this.sh = sh;
        this.dx = dx;
        this.dy = dy;
        this.u = 0;
        this.v = 0;
        this.currentFrame = 0;
        this.moving = 0;
        this.xDirection = 1;
    }

    draw() {
        this.u = (this.moving != 0) ? this.currentFrame % this.animationLength: 0;
        translate(this.dx, this.dy);
        scale(this.xDirection,1);

        image(this.spriteSheet,80,80,this.sw,this.sh,this.u*this.sw,this.v*this.sh);

        if (this.frameCount % 6 == 0) {
            this.currentFrame++;
        }

        this.dx = this.moving;
    }
}