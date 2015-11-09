//golbal vars
var circleColor;
var strokeColor;

function setup() {
    createCanvas (windowWidth, windowHeight);

    circleColor = color(random(120), random(120), random(120));
    strokeColor = color(random(250), random(250), random(250));

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
    fill(circleColor);
    stroke(strokeColor);
    strokeWeight(3);
    ellipse(startX,startY,100,100);

    fill(circleColor);
    stroke(strokeColor);
    rect(startX,startY,130,130);

    ellipse(startX,startY,75,75);
    ellipse(startX,startY,50,50);

    noStroke();
    fill(strokeColor);
    ellipse(startX,startY,25,25);
}

function mouseClicked() {
}
