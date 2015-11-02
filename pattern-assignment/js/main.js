//golbal vars
var circleColor;
var strokeColor;

function setup() {
    createCanvas (windowWidth, windowHeight);
    circleColor = color(243,156,78);
    strokeColor = color(45,78,90);

    drawCircles();
}

function drawCircles() {
    //draws all the circles
    //for()
    drawBullseye(random(width),random(height));
}

function drawBullseye(startX,startY) {
    //singles bulleye
    fill(circleColor);
    stroke(strokeColor);
    strokeWeight(3);
    ellipse(startX,startY,100,100);
    ellipse(startX,startY,75,75);
    ellipse(startX,startY,50,50);

    noStroke();
    fill(strokeColor);
    ellipse(startX,startY,25,25);
}

function mouseClicked() {

}
