class BlackHole {
    constructor(x, y, m) {
        this.pos = createVector(x, y);
        this.mass = m;
        // Schwarzschild radius (Event Horizon)
        this.rs = G * this.mass * c * c;
        this.mass /= 4 * Math.pow(10, 19);
    }

    pull(photon) {
        const f = p5.Vector.sub(this.pos, photon.pos);
        const r = f.mag();
        const fg = G * this.mass / (r * r);
        f.setMag(fg);
        photon.vel.add(f);
        photon.vel.limit(c);
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