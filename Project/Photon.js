class Photon {
    constructor(x, y, w) {
        this.pos = createVector(x, y); 
        this.vel = createVector(-c, 0);
        this.theta = createVector(-1, 0);
        this.wavelength = w;
        this.energy = h * c / this.wavelength;
        this.stopped = false;
    }

    update() {
        const velNorm = this.vel.copy();
        velNorm.mult(timeNorm);
        this.pos.add(velNorm);
    }

    show() {
        strokeWeight(2);
        stroke(155, 0, 0);
        point(this.pos.x, this.pos.y);
    }
}