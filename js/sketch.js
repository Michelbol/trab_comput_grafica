let x = 0;
const defaultColor = '#000000';
const dist = 10;
const weight = 1;
let executionPipeline = [];
let creatingObject = {
   flag: false,
   object: null
};
let rotateObject = {
    flag: false,
    object: null
};
let selectingObject = newSelectingObject();
let axisObject = newAxisObject();
let objects = newObjects();

document.onkeypress = KeyPress;

function KeyPress(e) {
    var evtobj = window.event? event : e

    if (evtobj.keyCode === 26 && evtobj.ctrlKey){
        rollbackPipeline();
    }
}

function rollbackPipeline(){
    if(executionPipeline.length > 0){
        objects = executionPipeline.pop();
        reDraw();
    }
}

function storePipeline(){
    let newObjects = [];
    for(let i = 0; i < objects.length; i++){
        newObjects.push(Object.assign( Object.create( Object.getPrototypeOf(objects[i])), objects[i]));
    }
    if(executionPipeline.length < 100){
        executionPipeline.push(newObjects);
        return;
    }
    executionPipeline.push(newObjects);
    executionPipeline.shift();
}

function validDist(value, isCircle){
    if(isCircle){
        if(isNaN(value)){
            return true;
        }
        return value <= dist+5 && value >= 0 || value >= -dist-5 && value <= 0;
    }
    return value <= dist && value >= 0 || value >= -dist && value <= 0;
}

function newAxisObject(){
    return {
        lineX: new Line(),
        lineY: new Line(),
        arrows: [],
        names: []
    }
}

function newSelectingObject(){
    return {
        flag: false,
        object: null
    };
}

function newObjects(){
    return [];
}


function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent('canvas');
    stroke(defaultColor);
    strokeWeight(weight);
    axis(0,0);
}

function clearVariables(){
    objects = newObjects();
    selectingObject = newSelectingObject();
}

/**
 * @var e Event
 * @param e
 */
function mousePressed(e) {
    if(e.toElement.tagName === 'CANVAS'){
        if(creatingObject.flag){
            creatingObject.object.setup();
            return;
        }
        let objectsLength = objects.length;
        for(let i = 0; i < objectsLength; i++){
            objects[i].select();
        }
    }
}

function mouseMoved(){
    document.getElementById('coords').textContent = "X: "+mouseX+" Y: "+mouseY;
}

function freeMouse(){
    creatingObject.flag = false;
    creatingObject.object = null;

    rotateObject.flag = false;
    rotateObject.object = null;

    disabledButtons(false);
}

function axis(originX, originY){
    let printGraphX = originX+15;
    let printGraphY = originY+15;
    resetMatrix();

    removeArrows(axisObject.arrows);

    removeNames(axisObject.names);

    removeAxis();

    axisObject.lineX.pt1x = printGraphX;
    axisObject.lineX.pt1y = printGraphY;

    axisObject.lineX.pt2x = printGraphX;
    axisObject.lineX.pt2y = printGraphY+50;

    axisObject.lineY.pt1x = printGraphX;
    axisObject.lineY.pt1y = printGraphY;

    axisObject.lineY.pt2x = printGraphX+50;
    axisObject.lineY.pt2y = printGraphY;

    axisObject.arrows = createArrows(printGraphX, printGraphY);

    axisObject.names = createNames(printGraphX, printGraphY);

    axisObject.lineX.draw();
    axisObject.lineY.draw();
    translate(originX, originY);
}

function createArrows(originX, originY){
    let arrow1x = new Line(originX+50, originY, originX+45, originY-5);
    arrow1x.draw();

    let arrow2x = new Line(originX+50, originY, originX+45, originY+5);
    arrow2x.draw();

    let arrow1y = new Line(originX, originY+50, originX-5, originY+45);
    arrow1y.draw();

    let arrow2y = new Line(originX, originY+50, originX+5, originY+45);
    arrow2y.draw();

    return [arrow1x,arrow1y,arrow2x, arrow2y]
}

function createNames(originX, originY){
    let arrowNameX1 = new Line(originX+10, originY-10, originX+5, originY-5);
    arrowNameX1.draw();

    let arrowNameX2 = new Line(originX+10, originY-5, originX+5, originY-10);
    arrowNameX2.draw();

    let arrowNameY1 = new Line(originX-10, originY+10, originX-10, originY+12);
    arrowNameY1.draw();

    let arrowNameY2 = new Line(arrowNameY1.pt1x, arrowNameY1.pt1y, originX-12, originY+5);
    arrowNameY2.draw();

    let arrowNameY3 = new Line(arrowNameY1.pt1x, arrowNameY1.pt1y, originX-8, originY+5);
    arrowNameY3.draw();

    return [arrowNameX1,arrowNameX2,arrowNameY1, arrowNameY2, arrowNameY3]
}

function removeArrows(arrows){
    for (let i = 0; i < arrows.length; i++){
        arrows[i].clear();
    }
    axisObject.arrows = [];
}
function removeNames(names){
    for (let i = 0; i < names.length; i++){
        names[i].clear();
    }
    axisObject.names = [];
}

function removeAxis(){
    axisObject.lineX.clear();
    axisObject.lineY.clear();
}

function reDraw(){
    setup();
    drawObjects(objects);
}

function drawObjects(objects){
    for (let i  = 0; i < objects.length; i++){
        if(selectingObject.flag && selectingObject.object === objects[i]){
            stroke('red');
            objects[i].draw();
            stroke(defaultColor);
            continue;
        }
        objects[i].draw();
    }
}