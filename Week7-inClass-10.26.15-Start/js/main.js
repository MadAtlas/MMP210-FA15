//global variables


//Bubble Constructor
function Bubble(){
    //create x and y properties (variables)
    this.x = random(width);
    this.y = random(height);
    this.r = 20; //r is for radius which is 1/2 the width of the circle
    this.bubbleSize = this.r*2; //width and height are twice the radius

    //method: draw the bubble
    this.drawBubble = function(){
        fill(67,89,105);
        ellipse(this.x, this. y, this.bubbleSize, this.bubbleSize);
    }
}//end Bubble


function setup(){
    //create the canvas. put into a variable to associate with an element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    var myArray = []; //create blank array
    //add stuff to the array with a loop
    for (var i=0; i<1000; i++){
        //add bubbles to the array
        myArray[i] = new Bubble();
        myArray[i].drawBubble();
    }

    //log out the array
    console.log(myArray);

    //loop to go through every item in the array
    for(var i=0; i < myArray.length; i++) {
        //myArray[i]+=10;
        console.log(myArray[i]);
    }

   console.log(myArray);



}//end setup

