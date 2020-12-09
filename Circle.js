class Circle {
  constructor(x,y,r) {
    var options = {
        'frictionAir':0.005,
        'density':1,
        
    }
    this.body = Bodies.circle(x,y,r,options);
    this.r=r;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("yellow");
    fill("mistyrose");
    ellipse(0,0, this.r, this.r);
    pop();
  }
};
