class BlackHole {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        // Schwarzschild radius (Event Horizon)
        this.rs = G * this.mass * c * c;
    }

    pull(photon) {
        const dist = p5.Vector.sub(this.pos, photon.pos);
        const theta = dist.heading();
        const r = dist.mag();
        const fg = (G * this.mass) / (r * r);
        let deltaTheta = -fg * (timeNorm / c) * sin(photon.theta - theta);
        deltaTheta /= abs(1.0 - 2 * G * this.mass / (r * c * c));
        photon.theta += deltaTheta;
        photon.vel = p5.Vector.fromAngle(photon.theta);
        photon.vel.setMag(c);

    }

    show() {
        fill(0);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.rs * normalise);

        noFill();
        stroke(255, 0, 0, 100);
        strokeWeight(5);
        ellipse(this.pos.x, this.pos.y, this.rs * 3 * normalise)

        noFill();
        stroke(100, 100);
        strokeWeight(5);
        ellipse(this.pos.x, this.pos.y, this.rs * 1.5 * normalise)
    }
}