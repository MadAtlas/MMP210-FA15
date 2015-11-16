//global variables
var shadowColor;


function setup() {
    createCanvas (windowWidth, windowHeight);

    shadowColor = color('rgba(20,20,20,.45)');
}

function draw() {
    //window frame
    noStroke();
    fill(46, 38, 57);
    rect(0,0,275,40);
    rect(0,477,275,40);

    //bottom window panel
    strokeWeight(6);
    fill(255, 248, 182);
    stroke(192, 186, 167);
    rect(35,254,210,220);
    rect(95,259,1,210);
    rect(175,259,1,210);
    rect(40,364,200,1);

    //top window panel
    strokeWeight(6);
    rect(35,43,210,215);
    rect(95,49,1,205);
    rect(175,49,1,205);
    rect(40,149,200,1);

    //shadow btwn two panels
    noStroke();
    fill(shadowColor);
    rect(32,261,216,4);
}
