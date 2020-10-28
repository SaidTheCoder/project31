class Particle {
    constructor(x, y,r){
      var options = {
          'friction':0.3,
          'density':1.0
      }
      this.r=r;
      this.body = Bodies.circle(x, y, this.r, options);
      this.color = color(random(0,255), random(0,255), random(0,255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      World.add(world, this.body)
      translate(pos.x, pos.y);
      rotate(angle);
      stroke("green")
      fill("brown");
      ellipseMode(RADIUS)
      ellipse(0, 0,this.r);
      pop();
    }
  };
  