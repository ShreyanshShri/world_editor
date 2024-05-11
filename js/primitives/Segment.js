class Segment {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    equals(seg) {
        return p5.Vector.equals(this.p1.pos, seg.p1.pos) && p5.Vector.equals(this.p2.pos, seg.p2.pos) || p5.Vector.equals(this.p1.pos, seg.p2.pos) && p5.Vector.equals(this.p2.pos, seg.p1.pos)
    }

    show() {
        stroke(0);
        line(this.p1.pos.x, this.p1.pos.y, this.p2.pos.x, this.p2.pos.y);
    }
}