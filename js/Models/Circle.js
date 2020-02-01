class Circle{

    constructor(pt1x, pt1y, pt2x, pt2y) {
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt2x;
        this.pt2y = pt2y;
        this.r = NaN;
    }

    draw() {
        circle(this.pt1x, this.pt1y, this.r*2);
    }
    calcRadio(){
        let catA = this.pt2x - this.pt1x;
        let catB = this.pt2y - this.pt1y;
        let hypt = Math.pow(catA, 2) + Math.pow(catB, 2);
        this.r = Math.sqrt(hypt);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            creatingObject.object.pt2x = mouseX;
            creatingObject.object.pt2y = mouseY;
            this.calcRadio();
            storePipeline();
            objects.push(this);
            reDraw();
            creatingObject.object.tutorialHidden();
            freeMouse();
            return;
        }
        creatingObject.object.pt1x = mouseX;
        creatingObject.object.pt1y = mouseY;
    }
    tutorialShow(){
        let div = document.getElementById('explanation-circle');
        div.classList.remove('d-none');
    }
    tutorialHidden(){
        let div = document.getElementById('explanation-circle');
        div.classList.add('d-none');
    }
    select(){
        if(validDist(Math.sqrt(pow2((mouseX - this.pt1x)) + pow2((mouseY - this.pt1y)) - pow2(this.r)), true)){
            if(selectingObject.flag){
                selectingObject.object.deSelect();
            }
            selectingObject.flag = true;
            selectingObject.object = this;
            reDraw();
        }
    }
    deSelect(){
        selectingObject.flag = false;
        selectingObject.object = null;
    }
    clear(){
        erase();
        circle(this.pt1x, this.pt1y, this.r*2);
        noErase();
    }
    rotate(angle){
        reDraw();
    }
    goToOrigin(){
        this.pt2x -= this.pt1x;
        this.pt2y -= this.pt1y;
    }
    translate(qtdX, qtdY){
        let coords1 = translatePoint(this.pt1x, this.pt1y, qtdX, qtdY);
        this.pt1x = coords1.x;
        this.pt1y = coords1.y;
        let coords2 = translatePoint(this.pt2x, this.pt2y, qtdX, qtdY);
        this.pt2x = coords2.x;
        this.pt2y = coords2.y;
        reDraw();
    }
    scale(qtdX, qtdY){
        this.goToOrigin();
        let coords = scalePoint(this.pt2x, this.pt2y, qtdX, qtdY);
        this.pt2x = coords.x+this.pt1x;
        this.pt2y = coords.y+this.pt1y;
        this.calcRadio();
        reDraw();
    }
}