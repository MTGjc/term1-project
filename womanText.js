class WomanText{
  constructor(txt,posX,posY){
    this.txt = txt;
    this.posX = posX;
    this.posY = posY
  }

  show(){
    scale(0.8)
    this.grf = createGraphics(900, 700);
    this.grf.background(255, 25);
    this.grf.fill(255);

    this.grf.textAlign(CENTER);
    this.sizeH = this.grf.height/this.txt.length
    for(i=0; i<this.txt.length; i++){
      this.posX = this.grf.width*0.4
      this.posY = this.sizeH*i
      this.grf.textSize(this.txt[i].length);
      this.grf.text(this.txt[i], this.posX, this.posY);
    }
    texture(this.grf)
    plane(1800,1200)
    
  }
}