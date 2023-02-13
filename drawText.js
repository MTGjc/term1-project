class DrawText {
  constructor(txt, width, height) {
    //content = scriptSource[i],len[i].x,len[i].y
    this.sizeX = width;
    this.sizeY = height;
    this.txt = txt;
  }

  show(angX, angY, angZ) {
    this.angX = angX;
    this.angY = angY;
    this.angZ = angZ;
    pg = createGraphics(this.sizeX, this.sizeY);
    pg.textAlign(CENTER, CENTER);
    pg.textSize(18);
    pg.fill(255, 0, 0);
    push();
    pg.text(this.txt, this.sizeX / 2, this.sizeY / 2);
    noStroke();
    rotateX(-angX);
    rotateY(angY);
    rotateZ(angZ);
    texture(pg);
    plane(this.sizeX, this.sizeY); //w,h
    pop();
  }
}
