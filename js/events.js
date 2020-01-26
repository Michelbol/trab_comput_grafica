let btnLine;
let btnZoom;
let btnClear;
let btnScale;
let btnRotate;
let btnSquare;
let btnCancel;
let btnTriangle;
let btnTranslation;
let btnCircumference;

window.onload = onLoad;

function onLoad(){
    activeVariables();
    loadEvents();
}

function loadEvents(){
    btnLine.addEventListener('click', clickBtnLine);
    btnZoom.addEventListener('click', clickBtnZoom);
    btnClear.addEventListener('click', clickBtnClear);
    btnScale.addEventListener('click', clickBtnScale);
    btnRotate.addEventListener('click', clickBtnRotate);
    btnCancel.addEventListener('click', clickBtnCancel);
    btnSquare.addEventListener('click', clickBtnSquare);
    btnTriangle.addEventListener('click', clickBtnTriangle);
    btnTranslation.addEventListener('click', clickBtnTranslation);
    btnCircumference.addEventListener('click', clickBtnCircumference);
}

function activeVariables(){
    btnLine             = document.getElementById('btn-line');
    btnZoom             = document.getElementById('btn-zoom');
    btnClear            = document.getElementById('btn-clear');
    btnScale            = document.getElementById('btn-scale');
    btnRotate           = document.getElementById('btn-rotate');
    btnSquare           = document.getElementById('btn-square');
    btnCancel           = document.getElementById('btn-cancel');
    btnTriangle         = document.getElementById('btn-triangle');
    btnTranslation      = document.getElementById('btn-translation');
    btnCircumference    = document.getElementById('btn-circumference');
}

function clickBtnLine(){
    creatingObject.flag = true;
    creatingObject.object = new Line();
    creatingObject.object.tutorialShow();
    disabledButtons(true);
}

function clickBtnClear(){
    setup();
}

function clickBtnZoom(){

}

function clickBtnScale(){

}

function clickBtnRotate(){

}

function clickBtnSquare(){
    creatingObject.flag = true;
    creatingObject.object = new Square();
    creatingObject.object.tutorialShow();
    disabledButtons(true);
}

function clickBtnTriangle(){
    creatingObject.flag = true;
    creatingObject.object = new Triangle();
    creatingObject.object.tutorialShow();
    disabledButtons(true);
}

function clickBtnTranslation(){

}

function clickBtnCircumference(){
    creatingObject.flag = true;
    creatingObject.object = new Circle();
    creatingObject.object.tutorialShow();
    disabledButtons(true);
}

function clickBtnCancel(e){
    e.preventDefault();
    creatingObject.object.tutorialHidden();
    freeMouse();
}

function disabledButtons(boolean){
    btnLine.disabled = boolean;
    btnZoom.disabled = boolean;
    btnClear.disabled = boolean;
    btnScale.disabled = boolean;
    btnRotate.disabled = boolean;
    btnSquare.disabled = boolean;
    btnTriangle.disabled = boolean;
    btnTranslation.disabled = boolean;
    btnCircumference.disabled = boolean;
}