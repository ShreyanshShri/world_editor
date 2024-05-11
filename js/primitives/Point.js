class Point {
    constructor(pos) {
        this.pos = pos;
    }

    equals(point) {
        return p5.Vector.equals(this.pos, point.pos); 
    }

    show() {
        fill(252, 186, 3);
        circle(this.pos.x, this.pos.y, 10);
    }

}