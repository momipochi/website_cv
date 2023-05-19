const CANVAS_WIDTH = 250
const CANVAS_HEIGHT = 250
const MASS = 1.0
const DT = 0.05

let particle;
let particles = []

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

class Particle{
  constructor(){
    this.count = 100
    this.c = color(255, 0, 0);
    this.initX = CANVAS_WIDTH/2
    this.initY = CANVAS_HEIGHT/2
    this.vx = 0
    this.vy = 0
    this.x = this.initX
    this.y = this.initY
    this.width = 10
    this.height = 10
    this.destX = rand(0,CANVAS_WIDTH)
    this.destY = rand(0,CANVAS_HEIGHT)
    let tmpD = Math.pow((this.destX - this.x),2) + Math.pow((this.destY - this.y),2)
    let dist = Math.sqrt(tmpD)
    this.distance = dist
    this.aX = 10
    this.aY = 10
    this.speed = 10
    this.dt = DT
    this.lerpFactor = 0.3
  }
  
  update() {
    if(this.x > CANVAS_WIDTH || this.x < 0 || this.y > CANVAS_HEIGHT || this.y < 0){
       return
    }
    if(this.x !== this.destX && this.y !== this.destY){
      let tmpD = Math.pow((this.destX - this.x),2) + Math.pow((this.destY - this.y),2)
       let dist = Math.sqrt(tmpD)
       let dx = this.destX - this.x
       let dy = this.destY - this.y
       
       let magnitude = Math.sqrt((dx*dx)+(dy*dy))
       
       let angle = Math.atan(dy/dx)
       
       let lerpValue = dist/this.distance
       let lerpedSpeed = this.speed * (1 - this.lerpFactor + this.lerpFactor * lerpValue)
       
       let normX = dx/magnitude
       let normY = dy/magnitude
       
      this.x += normX*magnitude*(lerpedSpeed/this.distance)
      this.y += normY*magnitude*(lerpedSpeed/this.distance)
      
      
      
      
    }
  }
  
  draw() {
    fill(this.c);
    circle(this.x, this.y, this.width/2);
  }
}

function setup() {
  frameRate(60);
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  populate()
}

  
const populate = ()=>{

  if(particles.length > 200){
	particles = []
}
for(let i = 0;i<50;i++){
    particles.push(new Particle())
  }
  setTimeout(populate,4000)
}
  
function draw() {
  background(220);
  
  for(let i = 0;i<particles.length;i++){
    particles[i].draw()
    particles[i].update()
  }
}