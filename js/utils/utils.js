function getClosestPoint({mouseX, mouseY}, points, threshold = 10) {
    let closestDist = Infinity;
    let closestPt, closestPtIndex = null;

    for(let i=0; i<=points.length-1; i++) {
        pt = points[i];
        const distance = Math.hypot(mouseX - pt.pos.x, mouseY - pt.pos.y);
        if(distance <= closestDist && distance <= threshold) {
            closestPt = pt;
            closestPtIndex = i;
            closestDist = distance;
        }
    }
    return {
        closestPt,
        closestPtIndex
    };
}