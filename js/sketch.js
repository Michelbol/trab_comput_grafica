let objects;
let x = 0;
const defaultColor = '#000000';
const dist = 10;

function validDist(value){
    return value <= dist && value >= 0 || value >= -dist && value <= 0;
}

let executionPipeline = [];

let creatingObject = {
   flag: false,
   object: null
};

let selectingObject = newSelectingObject();

function newSelectingObject(){
    return {
        flag: false,
        object: null
    };
}

function newObjects(){
    return {
        lines: [],
        triangles: [],
        squares: [],
        circumferences: []
    };
}


function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent('canvas');
    stroke(defaultColor);
    objects = newObjects();
    selectingObject = newSelectingObject();
}

function mousePressed(e) {
    if(e.toElement.tagName === 'CANVAS'){
        if(creatingObject.flag){
            creatingObject.object.setup();
            return;
        }
        let linesLength = objects.lines.length;
        for(let i = 0; i < linesLength; i++){
            objects.lines[i].select();
        }
        let squaresLength = objects.squares.length;
        for(let i = 0; i < squaresLength; i++){
            objects.squares[i].select();
        }
        let trianglesLength = objects.triangles.length;
        for(let i = 0; i < trianglesLength; i++){
            objects.triangles[i].select();
        }
        let circumferencesLength = objects.circumferences.length;
        for(let i = 0; i < circumferencesLength; i++){
            objects.circumferences[i].select();
        }
    }
}

function mouseMoved(){
    document.getElementById('coords').textContent = "X: "+mouseX+" Y: "+mouseY;
}

function freeMouse(){
    creatingObject.flag = false;
    creatingObject.object = null;
    disabledButtons(false);
}