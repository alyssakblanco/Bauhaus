let x = (1024/2)-100;

function setup() {
  // put setup code here
  createCanvas(1024, 768);
}

function draw() {
  // put drawing code here

  //color vars
  var offwhite = color(255,252,230);
  var grey = color(158,175,176);
  var blue = color(74,243,255);
  var pink = color(255,54,176);
  var yellow = color(255,255,33);

  background(offwhite);

  var base = {
    x: (width/2)-100,
    y: (height/2)-100,
    l: 200,
    sqr: 40
  }
 
  
  rectMode(CORNER);
  
  // for(let i=0; i<5; i++){
  //   for(let j=0; j<5; j++){
  //     fill(offwhite);
  //     rect(((x)+(i * (base.sqr))), ((base.y)+(j*(base.sqr))), base.sqr, base.sqr);
  //   }
  // }
  // noLoop();

  fill(grey);
  rect(x, base.y, base.sqr*2, base.sqr*2);

  rect(x-50, base.y-50, base.sqr*3, base.sqr*3);
  // for(let i=0; i<5; i++){
  //   for(let j=0; j<5; j++){
  //     fill(offwhite);
  //     quad()    }
  // }
  // noLoop();


  // for(let i=0; i<5; i++){
  //   for(let j=0; j<5; j++){
  //     if(j%2 == 0){
  //       if(i%2 == 0){
  //         fill(grey);
  //       }else{
  //         fill(offwhite);
  //       }
  //     }
  //     else{
  //       if(i%2 == 0){
  //         fill(offwhite);
  //       }else{
  //         fill(grey);
  //       }
  //     }
  //     rect(((x)+(i * (base.sqr))), ((base.y)+(j*(base.sqr))), base.sqr, base.sqr);
  //   }
  // }
  // noLoop();

}

function mouseDragged() {
  x+=1;
  console.log('hi');
}