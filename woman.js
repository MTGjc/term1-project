//reference: https://www.youtube.com/watch?v=wx1sjFkpPyA&t=404s
class Woman {
  constructor(x, y, z,c) {
    this.x = x;
    this.y = y;
    this.z = z
    this.c = c;
    
    this.homeX = x;
    this.homeY = y;
    this.homeZ = z
  }
  
  update() {
    
    // mouse
    let mouseD = dist(this.x, this.y, mouseX, mouseY);
    let mouseA = atan2(this.y - mouseY, this.x - mouseX);
    
    // home
    let homeD = dist(this.x, this.y, this.homeX, this.homeY);
    let homeA = atan2(this.homeY - this.y, this.homeX - this.x);
    
    // forces
    let mouseF = constrain(map(mouseD, 0, 300, 100, 0), 0, 100);
    let homeF = map(homeD, 0, 300, 0, 100);
    
    let vx =cos(mouseA) * mouseF;
    vx += cos(homeA) * homeF;
    
    let vy = sin(mouseA) * mouseF;
    vy += sin(homeA) * homeF;
    
    let mouseZ = constrain(map(mouseD, 0,300, 100,0), 0,100);
    let homeZ = map(homeD, 0, 300, 0, 100)
    
    let vz =  sin(mouseA) * mouseZ;
    vz += sin(homeA) * homeZ;
        
    this.x += vx;
    this.y += vy;
    this.z += vz;
  }

  draw() {
    push()
    fill(this.c);
    noStroke()
    translate(this.x,this.y,this.z)
    sphere(res, res);
    pop()
  }
}
