class Point {
    constructor(pos) {
        this.pos = pos;
        this.isHovering = true;
        this.isSelected = false;
    }

    equals(point) {
        return p5.Vector.equals(this.pos, point.pos); 
    }

    update(isHovering, isSelected) {
        this.isHovering = isHovering;
        this.isSelected = isSelected;
    }

    show() {
        if(this.isSelected) {
            fill(255, 0, 0);
        } else {
            fill(252, 186, 3);
        }
        circle(this.pos.x, this.pos.y, 10);
        if(this.isHovering) {
            fill(0);
            circle(this.pos.x, this.pos.y, 3);
        }
    }

}