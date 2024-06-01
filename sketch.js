let x1 = 60; // Initial x position of the first rectangle
let y1 = 900; // Fixed y position of the first rectangle
let speed1 = 2; // Speed of the first rectangle

let x2; // Initial x position of the second rectangle (set in setup)
let y2 = 1000; // Fixed y position of the second rectangle
let speed2 = -2; // Speed of the second rectangle (opposite direction)

let rectWidth = 250; // Width of the rectangles
let rectHeight = 50; // Height of the rectangles
let canvasWidth = 800;

let moving = false;

let myPeriwinkle;
let myGrey;
let myGreen;
let myCeladon;
let myTangerine;
let myPoppy;
let myTeaGreen;
let myBrown;

function preload() {
  fontBold = loadFont("Ubuntu-Bold.ttf");
  fontBoldItalic = loadFont("Ubuntu-BoldItalic.ttf");
}

function setup() {
  colorMode(HSB);
  myTangerine = color(20, 56, 90);
  myGrey = color(222, 11, 34);
  myGreen = color(148, 29, 43);
  myPeriwinkle = color(234, 23, 85);
  myCeladon = color(140, 19, 87);
  myPoppy = color(355, 80, 86);
  myTeaGreen = color(138, 23, 97);
  myBrown = color(12, 75, 80);
  createCanvas(800, 1300);
  x2 = width - 60 - rectWidth;
}

function draw() {
  // background(myTeaGreen);

  header();
  // Draw and animate the rotating arrow
  stroke(myGrey);
  drawRotatingArrow();
  circularEconomy();
  barter();

  // Draw and animate the rotating arrow
  stroke(myGrey);
  drawRotatingArrow();

  //last rect
  footer();

  // // Display mouse coordinates
  // text(mouseX + "," + mouseY, 20, 20);
}

function header() {
  fill(myCeladon);
  stroke(myCeladon);
  rect(0, 0, 800, 100);

  fill(myGreen);
  textFont(fontBold);
  textSize(40);
  text("Leading a Sustainable Society", 120, 60);
}

function circularEconomy() {
  //   // static arrow for refuse
  //   line(160, 190, 277, 214);
  //   line(271,206, 277, 214);
  //   line(271, 220, 277, 214);

  //   //static arrow for end of cycle
  //   line(204, 469, 133, 450);
  //   line(133, 450, 142, 443);
  //   line(133, 450, 137, 460);
  noStroke();
  fill(myGreen);
  circle(400, 400, 200);
  fill(myCeladon);
  textSize(30);
  text("Create a\nCircular\nEconomy", 340, 370);
  fill(myTangerine);
  textSize(18);
  text("REFUSE", 376, 275);

  rect(300, 140, 200, 100);
  // text('Step 1')

  text("REFORM", 490, 340);
  rect(560, 220, 200, 100);

  text("REDUCE", 490, 460);
  rect(580, 390, 200, 100);

  text("REUSE", 380, 550);
  rect(440, 570, 200, 100);

  fill(myPoppy);
  text("FINAL\nDESTI-\nNATION", 240, 300);
  rect(30, 230, 200, 100);

  text("OR", 230, 420);

  text("RECYLE", 260, 500);
  rect(50, 480, 200, 100);

  //text for inside the rectangles

  fill(0, 0, 100);
  textFont(fontBoldItalic);

  text(
    "Refuse to purchase \nproducts made of \nunsustainable \nmaterials",
    310,
    160
  );
  text(
    "Reform old systems \nto opperate more \nsustainably. This \nalso includes policy.",
    570,
    240
  );
  text(
    "Reduce the amount \nof products used.\nBuy less and barter \nfor materials.",
    590,
    410
  );
  text(
    "Reuse old products. \nPurchase products \nthat are reusable to \nextend product life.",
    450,
    590
  );
  text(
    "Recycle products that \nare no longer usable. \nPurchase products \nthat are recyclable.",
    60,
    500
  );
  text(
    "Follow a sustainable \nplan for disposal.\nOpt for biodegradable \nproducts.",
    40,
    250
  );
}

function barter() {
  fill(myPeriwinkle);
  rect(0, 710, 800, 500);
  fill(myGrey);
  textFont(fontBold);

  textSize(20);
  text("Exchange services or goods for goods or services", 160, 820);

  text("Or simply apples for oranges", 260, 1020);
  fill(0, 0, 100);
  text("- Click screen - ", 330, 790);

  fill(0, 0, 100);
  textSize(30);
  text("Choose to Barter, Limit your Waste", 150, 760);

  textFont(fontBoldItalic);
  textSize(20);
  text(
    "Bartering helps repurpose materials already owned and offers an\nopporutnity to not participate in the existing economy if it does not \nadhear to adequeate levels of sustainability.",
    90,
    1110
  );

  fill(myBrown);
  rect(x1, y1, rectWidth, rectHeight);

  // Draw the second rectangle
  rect(x2, y2, rectWidth, rectHeight);

  fill(myPoppy);
  // Draw a circle on top of the first rectangle
  ellipse(x1 + rectWidth / 2, y1 - 25, 50, 50);

  fill(myTangerine);
  // Draw a circle on top of the second rectangle
  ellipse(x2 + rectWidth / 2, y2 - 25, 50, 50);

  // Update positions if moving is true
  if (moving) {
    // Update the x position of the first rectangle
    x1 += speed1;
    // Reverse direction if the first rectangle reaches the edge of the canvas
    if (x1 > width - rectWidth || x1 < 0) {
      speed1 = -speed1;
    }

    // Update the x position of the second rectangle
    x2 += speed2;
    // Reverse direction if the second rectangle reaches the edge of the canvas
    if (x2 > width - rectWidth || x2 < 0) {
      speed2 = -speed2;
    }
  }
}

function mousePressed() {
  // Toggle the moving variable when the mouse is pressed
  moving = !moving;
}

// Function to draw and animate the rotating arrow
function drawRotatingArrow() {
  // Circle properties
  const centerX = 400;
  const centerY = 400;
  const radius = 200;
  let angle = frameCount * 0.02; // Adjust speed

  // Calculate the tail position of the arrow
  const fromx = centerX + radius * cos(angle);
  const fromy = centerY + radius * sin(angle);

  // Calculate the head position of the arrow
  const tox = centerX + radius * cos(angle + PI / 4); // Adjust arrow angle
  const toy = centerY + radius * sin(angle + PI / 4); // Adjust arrow angle

  // Draw the arrow
  drawArrow(fromx, fromy, tox, toy);
}

// Function to draw an arrow
function drawArrow(fromx, fromy, tox, toy) {
  const headlen = 10; // Length of head in pixels
  const angle = atan2(toy - fromy, tox - fromx);

  // Draw arrow shaft
  line(fromx, fromy, tox, toy);

  // Draw arrowhead
  line(
    tox,
    toy,
    tox - headlen * cos(angle - PI / 6),
    toy - headlen * sin(angle - PI / 6)
  );
  line(
    tox,
    toy,
    tox - headlen * cos(angle + PI / 6),
    toy - headlen * sin(angle + PI / 6)
  );
}

function footer() {
  noStroke();
  fill(myCeladon);
  rect(0, 1200, 800, 100);

  fill(myGrey);
  textSize(14);
  text("Reference: ", 360, 1215);
  text(
    "Bocken, N. M. P., de Pauw, I., Bakker, C., & van der Grinten, B. (2016). Product design \nand business model strategies for a circular economy. Journal of Industrial and \nProduction Engineering, 33(5), 308–320. https://doi.org/10.1080/21681015.2016.1172124.",
    120,
    1240
  );
}

