var canvas;

//resize canvas if window is resized
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
function preload() {
  img = loadImage("assets/images/hero/RISDM-34-1107.jpg");
 bg = loadImage('assets/images/hero/RISDM-34-1113.jpg');
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
	canvas.style('z-index','-1');

  topLayer = createGraphics(width, height);
  topLayer.image(bg, 0, 0);
bg.resize(width, 0);
    
    topLayer.background(200);
  topLayer.image(bg, 0, 0);
  
  topLayer.imageMode(CENTER);
  topLayer.strokeWeight(40);
  topLayer.blendMode(REMOVE);  
}

function draw() {
  image(img, 0, 0, width, height);
  
  if(mouseIsPressed) {
    topLayer.line(pmouseX, pmouseY, mouseX, mouseY);
  }
  
  image(topLayer, 0, 0);
}