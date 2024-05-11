class Graph {

    constructor(points, segments) {
        this.points = points || [];
        this.segments = segments || [];
    }

    addPoint(point) {
        for(let p of this.points) {
            if(p.equals(point)) {
                return false;
            }
        }
        this.points.push(point);
    }

    addSegment(segment) {
        if(p5.Vector.equals(segment.p1.pos, segment.p2.pos)) {
            return false;
        }
        for(let seg of this.segments) {
            if(seg.equals(segment)) { return false; }
        }
        this.segments.push(segment)
    }

    show() {
        for(let seg of this.segments) {
            seg.show();
        }
        for(let point of this.points) {
            point.show();
        }
    }

}