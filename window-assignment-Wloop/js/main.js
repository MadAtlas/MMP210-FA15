//global variables
var shadowColor;


function setup() {
    createCanvas (windowWidth, windowHeight);

    shadowColor = color('rgba(20,20,20,.45)');

    drawWindows();
}

function drawWindows() {
    var x = 0;
    var y = 0;
    var gridWidth = width - 110;
    for (var i = 0; i < 10; i++) {
        drawOnewindow(x,y);
        //increment of x
        x += 250; //same as x = x + 20;
        //check if w is past the grid width
        if(x > gridWidth){
            //set x back to the begining
            x = 0;
            //move y down
            y += 420;
        }//end if
    }//end for loop
}

function drawOnewindow(startX,startY) {
    //single window
    //window frame
    rect(startX,startY,200,40);
    rect(startX,startY+340,200,40);

    //bottom part of window
    rect(startX+20,startY+190,160,150)
    rect(startX+25,startY+195,150,140)


    //top part of window
    rect(startX+20,startY+40,160,150)
    rect(startX+25,startY+45,150,140)
}
