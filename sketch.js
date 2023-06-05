let walls = [];
let ray;
let particle;

function mousePressed(){
  sqx=mouseX
  sqy=mouseY
  sqe=random(10,100)
  sqa=random(360)
  walls.push(new Boundary(sqx,sqy,sqx,sqy+sqe));
  walls.push(new Boundary(sqx,sqy,sqx+sqe,sqy));
  walls.push(new Boundary(sqx+sqe,sqy,sqx+sqe,sqy+sqe));
  walls.push(new Boundary(sqx,sqy+sqe,sqx+sqe,sqy+sqe));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));
}

let x=200
let y=200
  
function draw() {
  particle = new Particle();
  
  background(0);
  fullscreen();
  for (let wall of walls) {
    wall.show();
  }
  particle.update(x,y);
  update()
  particle.show();
  particle.look(walls);
}

let val = 5
let range = 10

function update(){
  if(keyIsDown(87)){
    y-=val
  }
  if(keyIsDown(65)){
    x-=val
  }
  if(keyIsDown(83)){
    y+=val
  }
  if(keyIsDown(68)){
    x+=val
  }
  if(keyIsDown(UP_ARROW)){
    if(val<=10)
      val+=0.1
  }
  if(keyIsDown(DOWN_ARROW)){
    if(val>=1)
      val-=0.1
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(range<=45)
      range+=1
  }
  if(keyIsDown(LEFT_ARROW)){
    if(range>=10)
      range-=1
  }
}