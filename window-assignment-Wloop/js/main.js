function setup() {
    createCanvas (windowWidth, windowHeight);

    drawWindows();
}

function drawWindows() {
    //vars
    partHeight = 140
    partWidth = 150;

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
    strokeWeight(1);
    fill(48,167,98);
    rect(startX,startY,200,40);
    rect(startX,startY+340,200,40);

    //bottom part of window
    strokeWeight(1);
    fill(98,147,228);
    rect(startX+20,startY+190,160,150);
    fill(48,17,98);
    rect(startX+25,startY+195,150,140);

    strokeWeight(3);
line(startX+25,startY+265,startX+175,startY+265); line(startX+100,startY+195,startX+100,startY+335);

    //top part of window
    strokeWeight(1);
    fill(98,147,228);
    rect(startX+20,startY+40,160,150);
    fill(48,17,98);
    rect(startX+25,startY+45,150,140);

    strokeWeight(3);
line(startX+25,startY+115,startX+175,startY+115);
line(startX+100,startY+45,startX+100,startY+185);
}
