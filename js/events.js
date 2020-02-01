let btnLine;
let btnZoom;
let btnClear;
let btnScale;
let divScale;
let btnRotate;
let btnSquare;
let btnCancel;
let divRotate;
let btnTriangle;
let inputScaleX;
let inputScaleY;
let inputRotate;
let submitScale;
let divTranslate;
let submitRotate;
let btnTranslation;
let spanErrorScale;
let inputTranslateX;
let inputTranslateY;
let spanErrorRotate;
let submitTranslate;
let btnCircumference;
let spanErrorTranslate;

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
    submitScale.addEventListener('click', clickSubmitScale);
    submitRotate.addEventListener('click', clickSubmitRotate);
    submitTranslate.addEventListener('click', clickSubmitTranslate);
    btnTranslation.addEventListener('click', clickBtnTranslation);
    btnCircumference.addEventListener('click', clickBtnCircumference);
}

function activeVariables(){
    btnLine             = document.getElementById('btn-line');
    btnZoom             = document.getElementById('btn-zoom');
    btnClear            = document.getElementById('btn-clear');
    btnScale            = document.getElementById('btn-scale');
    divScale            = document.getElementById('div-scale');
    btnRotate           = document.getElementById('btn-rotate');
    btnSquare           = document.getElementById('btn-square');
    btnCancel           = document.getElementById('btn-cancel');
    divRotate           = document.getElementById('div-rotate');
    btnTriangle         = document.getElementById('btn-triangle');
    inputScaleX         = document.getElementById('qtd-scale-x');
    inputScaleY         = document.getElementById('qtd-scale-y');
    inputRotate         = document.getElementById('qtd-rotate');
    submitScale         = document.getElementById('submit-scale');
    divTranslate        = document.getElementById('div-translate');
    submitRotate        = document.getElementById('submit-rotate');
    btnTranslation      = document.getElementById('btn-translation');
    spanErrorScale      = document.getElementById('error-scale');
    submitTranslate     = document.getElementById('submit-translate');
    inputTranslateX     = document.getElementById('qtd-translate-x');
    inputTranslateY     = document.getElementById('qtd-translate-y');
    spanErrorRotate     = document.getElementById('error-rotate');
    btnCircumference    = document.getElementById('btn-circumference');
    spanErrorTranslate  = document.getElementById('error-translate');
}

function clickBtnLine(){
    creatingObject.flag = true;
    creatingObject.object = new Line();
    creatingObject.object.tutorialShow();
    disabledButtons(true);
}

function clickSubmitRotate(){
    if(!selectingObject.flag){
        spanErrorRotate.classList.remove('d-none');
        return;
    }
    storePipeline();
    spanErrorRotate.classList.add('d-none');
    selectingObject.object.rotate(degreesToRadians(stringToInt(inputRotate.value)));
}
function clickSubmitScale(){
    if(!selectingObject.flag){
        spanErrorScale.classList.remove('d-none');
        return;
    }
    storePipeline();
    spanErrorScale.classList.add('d-none');
    if(stringToInt(inputScaleX.value) !== 0 && stringToInt(inputScaleY.value) !== 0){
        selectingObject.object.scale(stringToInt(inputScaleX.value), stringToInt(inputScaleY.value));
    }
}
function clickSubmitTranslate(){
    if(!selectingObject.flag){
        spanErrorTranslate.classList.remove('d-none');
        return;
    }
    storePipeline();
    spanErrorTranslate.classList.add('d-none');
    selectingObject.object.translate(stringToInt(inputTranslateX.value), stringToInt(inputTranslateY.value));
}

function clickBtnClear(){
    storePipeline();
    setup();
    clearVariables();
}

function clickBtnZoom(){

}

function clickBtnScale(){
    divScale.classList.toggle('d-none');
}

function clickBtnRotate(){
    divRotate.classList.toggle('d-none');
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
    divTranslate.classList.toggle('d-none');
}

function clickBtnCircumference(){
    creatingObject.flag = true;
    creatingObject.object = new Circle();
    creatingObject.object.tutorialShow();
    disabledButtons(true);
}

function clickBtnCancel(e){
    e.preventDefault();
    if(selectingObject.flag){
        selectingObject.object.deSelect();
        selectingObject.object = null;
        selectingObject.flag = false;
    }
    if(creatingObject.flag){
        creatingObject.object.tutorialHidden();
    }
    freeMouse();
    reDraw();
}

function disabledButtons(boolean){
    btnLine.disabled = boolean;
    btnZoom.disabled = boolean;
    btnClear.disabled = boolean;
    btnScale.disabled = boolean;
    btnRotate.disabled = boolean;
    btnSquare.disabled = boolean;
    inputRotate.disabled = boolean;
    btnTriangle.disabled = boolean;
    submitRotate.disabled = boolean;
    btnTranslation.disabled = boolean;
    btnTranslation.disabled = boolean;
    btnCircumference.disabled = boolean;
}