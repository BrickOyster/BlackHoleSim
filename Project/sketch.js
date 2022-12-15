const windowW = 600;
const windowH = 600;
let sliderA;

// Define constants
const normalisePhA = Math.pow(10, -9);
const c = 299792458;
const Sm = 2 * Math.pow(10, 30);
const G = 6.6743 * Math.pow(10, -11);
const h = 6.63 * Math.pow(10, -34);

const normalise = 3 * (Math.pow(10, -46));
let timeNorm = Math.pow(10, -8);

let m87;
let photons = [];
const photonNumber = 50;

function setup() {
    createCanvas(windowW, windowH);
    ellipseMode(RADIUS);

    sliderA = createSlider(0, 15, 3);

    m87 = new BlackHole(0, 0, 6.5 * Math.pow(10, 9) * Sm);

    let interval = (windowH / 2) / photonNumber;
    for (let i = 0; i < photonNumber; i++) {
        photons.push(new Photon(windowW / 2 - 10, 0 - i * interval, 377 * Math.pow(10, -9)));
    }
}

function draw() {
  // put drawing code here
    background(255);
    translate(windowW / 2, windowH / 2);
    m87.show();
    //timeNorm = Math.pow(10, sliderA.value());

    /*let ph = 6;

    if (!photons[ph].stopped) {
        m87.pull(photons[ph]);

        photons[ph].update();
        photons[ph].show();

        if (photons[ph].pos.x < -windowW / 2 || photons[ph].pos.x > windowW / 2 || photons[ph].pos.y < -windowH / 2 || photons[ph].pos.y > windowH / 2 || photons[ph].pos.dist(m87.pos) < (m87.rs * normalise)) {
            photons[ph].stopped = true;
        }
    }*/

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
}