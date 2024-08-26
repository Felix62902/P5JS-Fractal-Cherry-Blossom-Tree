//starting height/length of branch:
var branchLength;
var branchWidth;
//tracks the current location of pen
let tracker;
let angle;
let counter = 0;

function setup() {
  createCanvas(680, 680);
  branchLength = 220;
  branchWidth = 12;
  
  angle = QUARTER_PI;
  //slider to control the Tree
  slider = createSlider(0,TWO_PI, QUARTER_PI, 0.01);

}

function draw() {
  background(2,25,39);
  angle = slider.value();
  translate(width/2, height);
  //one third of the height
  branch(branchLength, branchWidth);
}

function branch(len, w){
  noStroke();
  if(len <= branchLength*0.33){
    fill(255,183,197)
  } else {
    fill(119,91,71);
  }
  rect(0,0,w,-len);
  translate(0,-len);

  if(len > 4 ){
    // saves this location of the point
    push();
    rotate(angle);
    branch(len * 0.67, w*0.8);
    // returns to push location
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67,w*0.8);
    pop();
    counter++;
  }
  
}
