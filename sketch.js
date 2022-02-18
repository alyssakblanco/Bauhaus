//global declaration of variables
let r, g, b;
let cx, cy, cd;

function setup() {
  createCanvas(1024, 768);
  background("#E5DCCB");
  
  //initialize vars
  //colors
  r = random(255);
  g = random(255);
  b = random(255);
  rgb = color(r+1, g+134, b-10); //setting bg color to be different by same amount as reference pic
  rgb2 = color(r, g, b);
  //circle 
  cx = 512;
  cy = 150;
  cd = 175;
}

function draw() {
  //main color background 
  fill(rgb2);
  noStroke();
  rect(50,50,width-100,height-150);

  //start coordinates for grayscale rects
  let x = 360;
  let y = 150;
  let w = 300;
  let h = 34;
  let shade = 255;
  
  //make 12 rows with descending grayscale fill
  for(let i = 0; i < 12; i++){
    fill(shade);
    shade -= 21.25; //divided 255 by 12 for this value
    rect(x, y, w, h); //initial rect
    y += h; //start next rect after the height of prev
  }

  //cut-out shape
  fill("#E5DCCB");
  noStroke();
  beginShape();
  vertex(360, 400); //1
  vertex(260, 400); //2
  vertex(260, 600); //3
  vertex(764, 600); //4
  vertex(764, 400); //5
  vertex(660, 400); //6
  vertex(660, 559); //7 
  vertex(360, 559); //8
  endShape(CLOSE);

  //circle
  fill(rgb);
  rgb.setAlpha(150);
  circle(cx,cy,cd);

  //cover up top & bottom margins 
  //(can't find better solution to boundary issue, using band-aid fix)
  fill("#E5DCCB")
  rect(0,0,width,50);
  rect(0,height-100,width,100);

  //red lines 
  stroke("#B8705A");
  strokeWeight(1);
  line(700, 675, width-50, 675);
  line(700, 680, width-56, 680);
  line(700, 685, width-53, 685);
  line(700, 690, width-250, 690);
  line(715, 695, width-54, 695);
  line(740, 700, width-150, 700);

  stroke("#A03623");
  strokeWeight(6);
  line(50, 730, 130, 730);
  line(50, 740, 130, 740);

}

function mousePressed(){
  //changing main color every click
  r = random(255);
  g = random(255);
  b = random(255);
  rgb = color(r+1, g+134, b-10);
  rgb2 = color(r, g, b);
}

function mouseDragged(){
  //can't figure out how to set boundaries 
  //moving circle vertically only
  cy = mouseY;
}
  

