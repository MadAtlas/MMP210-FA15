var ctracker;
var backColor;
var stopTrack;
var redoTrack;
var starFill;
var mainFill;

function setup() {
// setup camera capture
var capture = createCapture(VIDEO);
capture.size(600, 450);
capture.position(350, 50);
// setup canvas
var cnv = createCanvas(600, 450);
cnv.position(350, 50);
// setup tracker
ctracker = new clm.tracker();
ctracker.init(pModel);
ctracker.start(capture.elt);
noStroke();
alert("Press the 'SPACE' key to freeze the position of the stars. Press 'C' to resume the tracking.")
}

function colorChange () {
    backColor = document.getElementById("background").style.backgroundColor = color(random(250), random(250), random(250));
}

function stopChange () {
    backColor = document.getElementById("background").style.backgroundColor = color(250, 250, 250);
}

function dontTrack () {
    stopTrack =  ctracker.stop();
}

function restartTrack () {
    redoTrack =  ctracker.start();
}

function draw() {
clear();
// get array of face marker positions [x, y] format
var positions = ctracker.getCurrentPosition();
var starFill = color(random(255), random(255), random(255));

for (var i=0; i<positions.length; i++) {
fill(starFill);
star(positions[27][0],positions[27][1], 18, 38, 5);
star(positions[32][0],positions[32][1], 18, 38, 5);
}
}

//function changeBack() {
////    if star(fill) < fill(255){
//var mainFill = color(155, 155, 155);
//        if(starFill < mainFill){
//        colorChange();
//    }
//}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyPressed() {

if("P" == key){
    stopChange();
} else if(" " == key){
    dontTrack();
} else if("C" == key){
    restartTrack();
}
}
