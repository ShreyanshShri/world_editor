let graph;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    graph = new Graph();
    graph.addPoint(new Point(createVector(100,50)))
    graph.addPoint(new Point(createVector(150,50)))
    graph.addPoint(new Point(createVector(100,250)))
    graph.addSegment(new Segment(graph.points[0], graph.points[1]))
    graph.addSegment(new Segment(graph.points[0], graph.points[2]))
}

function draw() {
    background(42, 194, 25)
    graph.show();
}