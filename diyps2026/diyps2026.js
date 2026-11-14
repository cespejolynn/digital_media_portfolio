var img;
var initials ='ce'; // your initials
var choice = 'n'; // starting choice, so it is not empty
// var screenbg = 250; // off white background
var r = 243
var g = 235
var b = 245
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage("assets/mepfp.jpeg");
}

function setup() {
createCanvas(800, 600);  // canvas size
background(r, g, b);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == 'n' ) {  // first tool
   
    strokeWeight(15);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'o') { // second tool

    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  } else if (toolChoice == 't') { // third tool

    strokeWeight(3);
    stroke(36, 7, 61, 30);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
  } else if (toolChoice == 'c') {

    stroke(120, 70, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (key == 'h') { // this tool calls a function
    stroke(241, 194, 242);
    testbox(206, 145, 242);
    testbox(86, 77, 140);
    
 // make testbox do something!
 //   line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'a') {

    stroke(36, 7, 61);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == 'i') {

    noStroke()
    fill(174, 98, 239);
    circle(mouseX, mouseY, 20);
  } else if (toolChoice == 'r') {
    noStroke()
    fill(117, 88, 219);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == 'b') {
    noStroke()
    fill(223, 106, 224, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == 'l') {
    stroke(0, 0);
    fill(random(63), random(126), random(189), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 's' || toolChoice == 'S') { // g places the image we pre-loaded
    image(img, mouseX, mouseY, 50, 50);
    
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  triangle(x, y, x + 50, y + 60, 70, 30, 50, 90);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(r, g, b); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
