function isNumberFill(value){
    return typeof value === 'number' && value >= 0;
}

function pow2(value){
    return Math.pow(value, 2);
}

function radiansToDegrees(radians) {
    let pi = Math.PI;
    return radians * (180/pi);
}

function degreesToRadians(degrees) {
    let pi = Math.PI;
    return degrees * (pi / 180);
}

function rotatePoint(x, y, angle){
    return {x:(x*Math.cos(angle)) - (y*Math.sin(angle)), y:(x*Math.sin(angle)) + (y*Math.cos(angle))}
}

function scalePoint(x, y, qtdX, qtdY){
    return {x: x*qtdX, y: y*qtdY}
}

function translatePoint(x, y, qtdX, qtdY){
    return {x: x+qtdX, y: y+qtdY}
}

function calcSlope(pt1x, pt1y, pt2x, pt2y){
    return parseFloat(((pt2y-pt1y)/(pt2x-pt1x)).toFixed(2));
}

function createAddPt1(){
    creatingObject.object.pt1x = mouseX;
    creatingObject.object.pt1y = mouseY;
}
function createAddPt2(){
    creatingObject.object.pt2x = mouseX;
    creatingObject.object.pt2y = mouseY;
}
function createAddPt3(){
    creatingObject.object.pt3x = mouseX;
    creatingObject.object.pt3y = mouseY;
}