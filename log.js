class Log {
    constructor(x, y, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':3,
          'density':3
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
        stroke("brown");
        fill(245,245,220);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  