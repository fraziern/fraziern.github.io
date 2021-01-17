const x = 350;
const y = 100;
const WIDTH = 700;
const HEIGHT = 410;
let slider,
  weight,
  pid,
  quad,
  inputP,
  inputI,
  inputD,
  labelS,
  labelW,
  labelP,
  labelI,
  labelD,
  button,
  bg;

const INITIALP = 60;
const INITIALI = 3;
const INITIALD = 80;

const QUADSIZE = 1.3;

function setup() {
  createCanvas(WIDTH, HEIGHT, WEBGL);
  rectMode(CENTER);
  angleMode(DEGREES);

  quad = new Quad();

  pid = new PIDController(INITIALP, INITIALI, INITIALD);

  buildUI();
}

function buildUI() {
  slider = createSlider(-10, 10, 0);
  slider.position(125, 25);
  slider.style("width", "100px");
  slider.mouseReleased(() => {
    slider.value(0);
  });
  labelS = createElement("h2", "Roll Rate");
  labelS.position(20, 0);

  weight = createSlider(1, 400, 100);
  weight.position(550, 25);
  weight.style("width", "100px");
  weight.input(updateMass);
  labelW = createElement("h2", "Mass");
  labelW.position(490, 0);

  inputP = createInput(INITIALP.toString());
  inputP.position(300, 22);
  inputP.size(20);
  labelP = createElement("h2", "P");
  labelP.position(280, 0);
  inputP.input(updatePIDs);

  inputI = createInput(INITIALI.toString());
  inputI.position(350, 22);
  inputI.size(20);
  labelI = createElement("h2", "I");
  labelI.position(340, 0);
  inputI.input(updatePIDs);

  inputD = createInput(INITIALD.toString());
  inputD.position(410, 22);
  inputD.size(20);
  labelD = createElement("h2", "D");
  labelD.position(390, 0);
  inputD.input(updatePIDs);

  textAlign(CENTER);
  textSize(50);
}

function draw() {
  background("burlywood");
  normalMaterial();
  let setpoint = getSetpoint();
  let current = quad.velocity;

  let PIDLoopOutput = pid.loop(current, setpoint);
  quad.applyForce(PIDLoopOutput);
  quad.updateRotation();
  quad.display();
}

function getSetpoint() {
  let val = slider.value();
  return val;
}

function isNum(n) {
  return typeof n == "number" && n == n;
}

function updatePIDs() {
  const p = parseFloat(inputP.value());
  const i = parseFloat(inputI.value());
  const d = parseFloat(inputD.value());
  if (isNum(p) && isNum(i) && isNum(d)) {
    pid.updatePIDs(p, i, d);
  }
  // draw();
}

function updateMass() {
  m = weight.value();
  quad.updateMass(m);
}

class Quad {
  constructor(r = 0, m = 100, imb = 0.05) {
    this.mass = m;
    this.imbalance = imb;
    this.rotation = r;
    // rotational vel and acc
    this.velocity = 0;
    this.acceleration = 0;
  }

  updateMass(m) {
    this.mass = m;
  }

  updateRotation() {
    // add imbalance to accel
    this.acceleration += this.imbalance;
    // Velocity changes according to acceleration
    this.velocity += this.acceleration;
    // rotation changes by velocity
    this.rotation += this.velocity;
  }

  display() {
    ambientLight(40, 40, 40);
    pointLight(255, 255, 255, 128, 128, 100);
    fill(255);
    // main rotation components
    rotateX(-25);
    rotateZ(this.rotation);

    push(); // QUAD GROUP

    this.drawBody();
    this.drawArms();
    this.drawProps();

    pop();
  }

  drawBody() {
    push();
    translate(0, -10 * QUADSIZE, 0);
    box(28 * QUADSIZE, 30 * QUADSIZE, 135 * QUADSIZE);
    // translate(0,10,0)
    pop();
  }

  drawArms() {
    push();
    rotateY(35);
    box(15 * QUADSIZE, 8 * QUADSIZE, 205 * QUADSIZE);
    rotateY(-70);
    box(15 * QUADSIZE, 8 * QUADSIZE, 205 * QUADSIZE);
    pop();
  }

  drawProps() {
    push();
    rotateY(35);
    translate(0, -5 * QUADSIZE, 90 * QUADSIZE);
    normalMaterial();
    cylinder(30 * QUADSIZE, 3 * QUADSIZE);
    pop();
    push();
    rotateY(-35);
    translate(0, -5 * QUADSIZE, 90 * QUADSIZE);
    normalMaterial();
    cylinder(30 * QUADSIZE, 3 * QUADSIZE);
    pop();
    push();
    rotateY(35);
    translate(0, -5 * QUADSIZE, -90 * QUADSIZE);
    normalMaterial();
    cylinder(30 * QUADSIZE, 3 * QUADSIZE);
    pop();
    push();
    rotateY(-35);
    translate(0, -5 * QUADSIZE, -90 * QUADSIZE);
    normalMaterial();
    cylinder(30 * QUADSIZE, 3 * QUADSIZE);
    pop();
  }

  applyForce(force) {
    // Newton's 2nd law: F = M * A
    // or A = F / M
    let a = force / this.mass;
    this.acceleration += a;
  }
}

class PIDController {
  constructor(kp, ki, kd) {
    this.lastError = 0;
    this.accumulatedErrors = 0;
    this.kp = kp;
    this.ki = ki;
    this.kd = kd;
  }

  updatePIDs(p, i, d) {
    this.kp = p;
    this.ki = i;
    this.kd = d;
  }

  loop(current, setpoint) {
    let error = setpoint - current;
    this.accumulatedErrors += error;

    let derivative = error - this.lastError;

    this.lastError = error;

    let weightedP = error * this.kp;
    let weightedI = this.accumulatedErrors * this.ki;
    let weightedD = derivative * this.kd;

    let output = weightedP + weightedI + weightedD;
    return output;
  }
}

// MIT License

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
