let graph, graphEditor, canvas;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    canvas = document.getElementsByTagName("canvas")[0];
    graph = new Graph();
    graphEditor = new GraphEditor(graph, canvas);
    graph.graphEditor = graphEditor;
    graph.addPoint(new Point(createVector(100,50)))
    graph.addPoint(new Point(createVector(150,50)))
    graph.addPoint(new Point(createVector(100,250)))
    graph.addSegment(new Segment(graph.points[0], graph.points[1]))
    graph.addSegment(new Segment(graph.points[0], graph.points[2]))
    graph.addSegment(new Segment(graph.points[1], graph.points[2]))
    // graph.removeSegment(graph.segments[0])
    // graph.removePoint(graph.points[1])
}

function draw() {
    background(42, 194, 25)
    graphEditor.show();
}