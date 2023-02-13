let imgSource;
let collage = [];
let collect = [];
let imgPositions = [],imgRotations = [], imgSizes = [];
let ooo = [];
let num = 25; //sum for imgsource 400
// let g =[]
let length;
//text==============================
let scriptSource;
let len = [];
let pg;
let positions = [];
let ang = 0;
let drawTexts = [];
let rdm = [];
//woman layer=======================
let particles = [];
res = 12;
let imgSource2;
let t;
//man========
let m;
let m1;

function preload() {
  imgSource = loadImage("robberTile.png");
  imgSource2 = loadImage("womanTile.png");
  imgSource3 = loadImage("manTile.png");

  scriptSource = loadStrings("robber.txt");
  scriptSource2 = loadStrings("woman.txt");
  scriptSource3 = loadStrings("man3.txt");
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  createEasyCam();
  document.oncontextmenu = () => false;

  angleMode(DEGREES);
  imageMode(CENTER);
  ambientLight(250, 225,210);
  a = createGraphics(300, 300); //image source store on other canvas
  storeImage(imgSource); //function below


  //text================================
  for (i = 0; i < scriptSource.length; i++) {
    let content = scriptSource[i];
    let vi = createVector(content.length * 10, random(24, 32));
    let px = random(imgSource.width * 0.6);
    let p = createVector(px, random(imgSource.height * 0.5), px * random(0.3));
    let randoms = createVector(random(0, 90), random(-20, 30), random(-30, 30));

    len.push(vi);
    positions.push(p);
    rdm.push(randoms);

    drawTexts.push(new DrawText(content, len[i].x, len[i].y));
  }

  //woman================================
  placeParticles();
  noStroke();
  t = new WomanText(scriptSource2);
}


function storeImage(imgSource) {
  for (let i = 0; i < imgSource.width; i += round(imgSource.width / num)) {
    for (let j = 0; j < imgSource.height; j += round(imgSource.height / num)) {
      c = imgSource.get(i, j, imgSource.width / num, imgSource.height / num);
      collage.push(c); //store img portions x400
      let p = createVector(i + random(-25, 32), j + random(-15, 25), 0);
      let s = createVector(
        random(20) + imgSource.width / num,
        random(30) + imgSource.height / num,
        random(90, 400)
      );
      let r = createVector(5, 5, 9);

      imgPositions.push(p);
      imgRotations.push(r);
      imgSizes.push(s);

      ooo.push(new BoxUp(s.z)); //width,height,length
    }
  }
}

function placeParticles() {
  for (let i = 0; i < imgSource2.width; i += res) {
    for (let j = 0; j < imgSource2.height; j += res) {
      let x = (i / imgSource2.width) * imgSource2.width;
      let y = (j / imgSource2.height) * imgSource2.height;
      let c = imgSource2.get(x, y);

      if (c[0] + c[1] + c[2] != 255 * 3) {
        particles.push(new Woman(1.5 * x, 1.5 * y, 0, c));
      }
    }
  }
}


function draw() {
  background(210);
  push();
  scale(0.2);
  //robber=====================================
  let canvasX = imgPositions[624].x * 0.25;
  let canvasY = imgPositions[624].y * 0.25;
  translate(-canvasX, -canvasY, 0);
  for (let n = 0; n < collage.length; n++) {
    //400 boxes
    //match position
    let xpos = imgPositions[n].x;
    let ypos = imgPositions[n].y;
    let tall = imgSizes[n].z;
    if (rightSide(xpos) == true) {
      let _xpos = map(xpos, imgSource.width * 0.75, imgSource.width, 0, 700);
      let _tall = map(xpos, imgSource.width * 0.75, imgSource.width, 0, 400);
      xpos += _xpos;
      tall -= _tall;
      if (tall < 0) {
        tall = 0;
      }
    } else {
      tall = tall;
      xpos = xpos;
    }
    push();
    ooo[n].display(collage[n], xpos, ypos, imgSizes[n].x, imgSizes[n].y, tall); //grph,posX,posY,,w,h,l
    pop();
  }

  //text==========================
  push();
  translate(canvasX / 3, 0);
  for (i = 0; i < scriptSource.length; i++) {
    push();
    translate(positions[i].x + canvasX / 2.5, positions[i].y, positions[i].z);
    // drawTexts[i].update()
    drawTexts[i].show(rdm[i].x, rdm[i].y, rdm[i].z);
    pop();
  }
  pop();

  //woman==========================
  push();
  scale(0.5);
  rotateY(-15);
  rotateX(-15);
  rotateZ(-6);

  translate(-500, -70, 480);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  pop();
  push();
  scale(0.5);
  translate(-10, 300, 420);
  rotateX(-8);
  rotateY(-3);
  t.show();
  pop();

  //man============================
  push();
  translate(-100, 0, 0);
  texture(imgSource3);
  plane(500, 400);
  pop();
}

function rightSide(xpos) {
  if (xpos > imgSource.width * 0.75) {
    return true;
  }
}
