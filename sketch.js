// ============================================================
// Week 1 Side Quest
// ============================================================

let jengaImg;

function preload() {
  jengaImg = loadImage("assets/images/jenga.jpg");
}

function setup() {
  createCanvas(400, 400);
  background(255); // white background

  // --- Draw Image FIRST (so it's in the background) ---
  imageMode(CENTER);
  image(jengaImg, width / 2, height / 2, 360, 360);

  // --- Title Box (on top of image) ---
  fill(0); // black
  noStroke();
  rect(50, 20, 300, 50, 10);

  // --- Title Text (on top of rectangle) ---
  fill(255); // white
  textAlign(CENTER, CENTER);
  textSize(28);
  text("JENGA", width / 2, 45);
}

function draw() {
  // nothing animated
}
``