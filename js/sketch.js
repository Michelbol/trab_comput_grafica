let objects = {
    lines: [],
    triangles: [],
    squares: [],
    circumferences: []
};

let creatingObject = {
   flag: false,
   object: null
};

function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent('canvas');
}

function mousePressed(e) {
    if(creatingObject.flag && e.toElement.tagName === 'CANVAS'){
        creatingObject.object.setup();
    }
}

function freeMouse(){
    creatingObject.flag = false;
    creatingObject.object = null;
    disabledButtons(false);
}