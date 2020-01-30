function isNumberFill(value){
    return typeof value === 'number' && value >= 0;
}

function pow2(value){
    return Math.pow(value, 2);
}

function radiansToDegrees(radians)
{
    var pi = Math.PI;
    return radians * (180/pi);
}
function degreesToRadians(degrees)
{
    var pi = Math.PI;
    return degrees * (pi / 180);
}

function rotatePoint(x, y, angle){
    return {x:(x*Math.cos(angle)) - (y*Math.sin(angle)), y:(x*Math.sin(angle)) + (y*Math.cos(angle))}
}