//golbal vars

var circleColor;//fill color for all the shapes
var strokeColor;//stroke color for all the shapes
var inoutColor;//stroke color for the innermost and outermost circles
var clickCount;


function setup() {
    createCanvas (windowWidth, windowHeight);

    clickCount = 0;

    colorChange();

    drawPattern();

    alert("Press any key to change the colors within the pattern. Please restrain from holding down keys for too long.")
}

function colorChange () {
    circleColor = color(random(120), random(120), random(120));
    strokeColor = color(random(250), random(250), random(250));
    inoutColor = color(random(250), random(250), random(250));
}

function drawPattern() {
    var x = 0;
    var y = 0;
    var gridWidth = width - 110;
    for (var i = 0; i < 100; i++) {
        drawBullseye(x,y);
        //increment of x
        x += 125; //same as x = x + 125;
        //check if w is past the grid width
        if(x > gridWidth){
            //set x back to the begining
            x = 0;
            //move y down
            y += 125;
        }//end if
    }//end for loop
}

function drawBullseye(startX,startY) {
    //single bulleye
    strokeWeight(3);
    fill(circleColor);
    stroke(inoutColor);
    ellipse(startX,startY,100,100);

    fill(circleColor);
    stroke(strokeColor);
    rect(startX,startY,130,130);

    ellipse(startX,startY,75,75);
    ellipse(startX,startY,50,50);

    noStroke();
    fill(inoutColor);
    ellipse(startX,startY,25,25);
}

function keyPressed() {
    clickCount++;

    if (clickCount == 1){
        colorChange();
    } else if(clickCount ==  2){
        colorChange();
    } else if (clickCount == 3){
        circleColor = color(62, 19, 123);
        strokeColor = color(90, 249, 0);
        inoutColor = color(255, 161, 0);
    } else if (clickCount == 4){
        colorChange();
    } else if (clickCount == 5){
        circleColor = color(107, 92, 53);
        strokeColor = color(56, 214, 247);
        inoutColor = color(255, 6, 174);
    } else if (clickCount == 6){
        colorChange();
    } else if (clickCount == 7){
        colorChange();

        clickCount = 0;
    }

    drawPattern();
}

function mousePressed() {
    alert("Press any key to change the colors within the pattern. Please restrain from holding down keys for too long.")
}
