var p;
var size;
var heading;
var pVel;
var force;
var boostColor;
var strokeColor;
var touch;
var playerColor;
var Score;
var Health;

function updatePlayer() {
    boostColor = color(0)
    strokeColor = color(0);
    //move and rotate player 

    if (keyIsDown(LEFT_ARROW)) {
        heading -= 6;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        heading += 6;
    }
    if (keyIsDown(UP_ARROW)) {
        force = p5.Vector.fromAngle(radians(heading));
        pVel.add(force.mult(0.2));
        boostColor = color(255, 204, 000);
        strokeColor = color(255, 0, 0);
    }

    //contain player
    if (p.x > 400) {
        p.x = 0
    }
    if (p.x < 0) {
        p.x = 400
    }
    if (p.y > 400) {
        p.y = 0
    }
    if (p.y < 0) {
        p.y = 400
    }



    //update player location
    pVel.mult(0.978);
    p.add(pVel);
    //draw the player
    push();
    translate(p.x, p.y);
    rotate(radians(heading));

    //fire things
    fill(boostColor)
    strokeWeight(4);
    stroke(strokeColor);
    triangle(-size + 2, size * .7, -size * 3.5, size / 7, size * -.7, -size * .7);


    fill('rgb(000 ,150, 255)');
    strokeWeight(5);
    stroke(playerColor);
    triangle(-size + 1, -size + 1, size + 1, 0, -size + 1, size + 1);
    pop();
    fill(255);
    text(Health, p.x - 10, p.y + 25)

    fill(255);
    text(Score, 60, 25);
    text("Score: ", 25, 25);

}