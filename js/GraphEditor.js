class GraphEditor {
    constructor(graph, canvas) {
        this.graph = graph;
        this.canvas = canvas;

        this.selected = null;
        this.hovered = null;
        this.dragging = false;
        this.mouse = null;

        this.closestPtIndex = null;
        this.selectedPtIndex = null;

        this.#addEventListeners();
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this));
        this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this));
        this.canvas.addEventListener("contextmenu", (evt) => evt.preventDefault());
        this.canvas.addEventListener("mouseup", () => this.dragging = false);
        document.addEventListener("keydown", this.#handleKeyDown.bind(this));
    }

    #handleKeyDown(evt) {
        if(evt.code == "KeyD" && this.selectedPtIndex) {
            this.graph.removePoint(this.graph.points[this.selectedPtIndex]);
            this.selectedPtIndex = null;
            this.updateClosestPt();
        }
    }

    #handleMouseDown(evt) {          
        // left click
        // left click and no closest pt (create new pt and attach)
        if(evt.button == 0 && this.closestPtIndex == null) {
            const newPoint = new Point(createVector(mouseX, mouseY));
            if (this.selectedPtIndex != null) {
                this.graph.addSegment(new Segment(newPoint, this.graph.points[this.selectedPtIndex]));
            }
            this.graph.addPoint(newPoint);
        // left click and a closest pt (attach to existing pt)
        } else if(evt.button == 0 && this.closestPtIndex != null && this.selectedPtIndex != null) {
            this.graph.addSegment(new Segment(this.graph.points[this.selectedPtIndex], this.graph.points[this.closestPtIndex]));
            this.selectedPtIndex = this.closestPtIndex;
            this.graph.points[this.selectedPtIndex].isSelected = true;
        }


        // right click
        // select deselect by clicking pt
        if(evt.button == 2 && this.closestPtIndex != null) {
            this.selectedPtIndex = null;
            this.graph.points[this.closestPtIndex].isSelected = !this.graph.points[this.closestPtIndex].isSelected;
            if(this.graph.points[this.closestPtIndex].isSelected) {
                this.selectedPtIndex = this.closestPtIndex;
                this.graph.points[this.selectedPtIndex].isSelected = true;
            }
        // deselect by clicking anywhere
        } else if(evt.button == 2 && this.closestPtIndex == null) {
            this.graph.points[this.selectedPtIndex].isSelected = false;
            this.selectedPtIndex = null;
        }

        this.dragging = true;
    }

    #handleMouseMove(evt) {
        this.updateClosestPt();
        if(this.dragging && this.selectedPtIndex != null) {
            this.graph.points[this.selectedPtIndex].pos = createVector(mouseX, mouseY);
        }
    }

    updateClosestPt() {
        const {closestPtIndex} = getClosestPoint({mouseX, mouseY}, this.graph.points);
        this.closestPtIndex = closestPtIndex;
    }

    show() {

        if(this.selectedPtIndex < 0) this.selectedPtIndex = null
        if(this.closestPtIndex < 0) this.closestPtIndex = null

        const selectedPt = this.graph.points[this.selectedPtIndex];
        selectedPt && line(selectedPt.pos.x, selectedPt.pos.y, mouseX, mouseY);

        this.graph.show({closestPtIndex: this.closestPtIndex, selectedPtIndex: this.selectedPtIndex});
    }

}