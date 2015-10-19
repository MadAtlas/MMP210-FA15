function setup() {

    createCanvas(windowWidth, windowHeight);

    var x = 0;
    var y = 0;
    var gridWidth = width - 100;
    for (var i = 0; i < 100; i++) {
        console.log(i);
        drawWindow(x,y);
        //increment our x
        x += 120; //same as x = x + 120;
        //check if w is pas the grid width
        if(x > gridWidth){
            //set x back to the begining
            x=0;
            //move y down
            y += 270;
        }//end if
    }//end for loop
}//end setup


function drawWindow(startX,startY) {
    fill('peru');
    rect(startX,startY,100,250);
}
