let x1 = 524;
  let y1 = 384;

function setup() {
  // put setup code here
  createCanvas(1024, 768);
  background(color(255,252,230));
}
//two squares, same speed, different distance
function draw() {
  
  let offwhite = color(255,252,230);
  let grey = color(158,175,176);
  let blue = color(74,243,255);
  let pink = color(255,54,176);
  let yellow = color(255,255,33);
  
  

  let x2 = width/2;
  let y2 = height/2;

  let lbound = x1 + 256;
  let rbound = x1 - 256;
  
  fill(color(158,175,176));
  square(x1, y1, 55);

  fill(color(74,243,255));
  square(x2, y2, 55);

}

function mouseDragged() {
  x1+=1;
  console.log('hi');
}
