class BoxUp {
  constructor(length) {
    this.l = length;
  }

  display(graphic, posX, posY, width, height, length) {
    this.w = width;
    this.h = height;
    this.posX = posX;
    this.posY = posY;
    this.l = length;
    scale(0.5);
    push();
    // rotate(imgSizes[9])
    //wallpaper
    push();
    translate(this.posX, this.posY, this.l + 0.1);
    texture(graphic);
    noStroke();
    plane(this.w, this.h);
    rotateX(-90);
    pop();
    //otherface
    translate(this.posX, this.posY, this.l / 2);
    noStroke();
    fill(0);
    box(this.w, this.h, this.l);
    pop();
  }
}
