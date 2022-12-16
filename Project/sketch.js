const windowW = 600;
const windowH = 600;
let sliderA;
let spawn25;
let spawn50;
let spawn100;

// Define constants
//const normalisePhA = Math.pow(10, -9);
const c = 299792458;
const Sm = 2 * Math.pow(10, 30);
const G = 6.6743 * Math.pow(10, -11);
const h = 6.63 * Math.pow(10, -34);

const normalise = 3 * (Math.pow(10, -46));
let timeNorm = Math.pow(10, -8);

let m87;
let photons = [];
const photonNumber = 40;

function setup() {
    createCanvas(windowW, windowH);
    ellipseMode(RADIUS);

    sliderA = createSlider(-0.3, 4, 1, 0.1);

    spawn25 = createButton("25");
    spawn25.mousePressed(
        function () {
            spawnPhotons(25);
        });

    spawn25 = createButton("50");
    spawn25.mousePressed(
        function () {
            spawnPhotons(50);
        });

    spawn25 = createButton("100");
    spawn25.mousePressed(
        function () {
            spawnPhotons(100);
        });

    m87 = new BlackHole(0, 0, 6.5 * Math.pow(10, 9) * Sm);

    let interval = (windowH / 2) / photonNumber;
    for (let i = 0; i < photonNumber; i++) {
        photons.push(new Photon(windowW / 2 - 10, 0 - i * interval, 377 * Math.pow(10, -9)));
    }
}

function spawnPhotons(x) {
    let interval = (windowH / 2) / x;
    for (let i = 0; i < x; i++) {
        photons.push(new Photon(windowW / 2 - 10, 0 - i * interval, 377 * Math.pow(10, -9)));
    }
}

function draw() {
  // put drawing code here
    background(255);
    translate(windowW / 2, windowH / 2);
    m87.show();
    timeNorm = sliderA.value() * Math.pow(10, -8);

    for (let p of photons) {
        if (!p.stopped) {
            m87.pull(p);

            p.update();
            p.show();

            if (p.pos.x < -windowW / 2 || p.pos.x > windowW / 2 || p.pos.y < -windowH / 2 || p.pos.y > windowH / 2 || p.pos.dist(m87.pos) < (m87.rs * normalise)) {
                p.stopped = true;
            }
        }
    }

    /*let interval = (windowH / 2) / photonNumber;
    for (let i = 0; i < photonNumber; i++) {
        photons.push(new Photon(windowW / 2 - 10, 0 - i * interval, 377 * Math.pow(10, -9)));
    }*/
}