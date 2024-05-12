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
        this.graphEditor.selectedPtIndex = this.points.length-1;
        this.graphEditor.closestPtIndex = this.points.length-1;
    }

    removePoint(point) {
        for(let i=0; i<=this.points.length-1; i++) {
            if(this.points[i].equals(point)) {
                this.points.splice(i, 1);
            }
        }
        let temp = [];
        for(let i=0; i<=this.segments.length-1; i++) {
            if(!(this.segments[i].p1.equals(point) || this.segments[i].p2.equals(point))) {
                temp.push(this.segments[i]);
            }
        }
        this.segments = temp;
        this.graphEditor.selectedPtIndex = -1;
    }

    addSegment(segment) {
        if(p5.Vector.equals(segment.p1.pos, segment.p2.pos)) {
            return false;
        }
        for(let seg of this.segments) {
            if(seg.equals(segment)) { return false; }
        }
        this.segments.push(segment);
    }

    removeSegment(segment) {
        for(let i=0; i<=this.segments.length-1; i++) {
            if(this.segments[i].equals(segment)) {
                this.segments.splice(i, 1);
            }
        }
    }

    show({closestPtIndex, selectedPtIndex}) {
        for(let seg of this.segments) {
            seg.show();
        }
        for(let [index, point] of this.points.entries()) {
            point.update(closestPtIndex == index, selectedPtIndex == index);
            point.show();
        }
    }

}