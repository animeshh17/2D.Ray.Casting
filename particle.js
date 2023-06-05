class Particle {
  constructor() {
  this.pos = createVector(width / 2, height / 2);
  this.rays = [];
  angleMode(DEGREES)
  let v0 = createVector(x,y);
  let v1 = createVector(x, 0);
  let v2 = createVector(mouseX-x, mouseY-y);
  let angleBetween = v1.angleBetween(v2);
    for (let a = angleBetween-range; a < angleBetween+range; a += 0.2) {
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y) {
    this.pos.set(x, y);
  }

  look(walls) {
    for (let i = 0; i < this.rays.length; i++) {
      const ray = this.rays[i];
      let closest = null;
      let record = Infinity;
      for (let wall of walls) {
        const pt = ray.cast(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(255);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }

  show() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 1);
    for (let ray of this.rays) {
      ray.show();
    }
  }
}