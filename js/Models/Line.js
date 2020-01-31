class Line{
    constructor(pt1x, pt1y, pt2x, pt2y) {
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt2x;
        this.pt2y = pt2y;
        this.slope = NaN;
    }

    draw() {
        line(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            createAddPt2();
            creatingObject.object.slope = calcSlope(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
            objects.push(this);
            reDraw();
            creatingObject.object.tutorialHidden();
            freeMouse();
            return;
        }
        createAddPt1();
    }

    tutorialShow(){
        let div = document.getElementById('explanation-line');
        div.classList.remove('d-none');
    }
    tutorialHidden(){
        let div = document.getElementById('explanation-line');
        div.classList.add('d-none');
    }
    onLine(){
        return validDist((this.pt2y - mouseY) - (this.slope*(this.pt2x - mouseX)));
    }
    select(){
        if(this.onLine()){
            if(selectingObject.flag){
                selectingObject.object.deSelect();
            }
            selectingObject.flag = true;
            selectingObject.object = this;
            reDraw();
            return true;
        }
        return false;
    }
    deSelect(){
        selectingObject.flag = false;
        selectingObject.object = null;
    }
    clear(){
        strokeWeight(3);
        erase();
        line(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
        noErase();
        strokeWeight(weight);
    }
    rotate(angle){
        this.goToOrigin();
        let coords = rotatePoint(this.pt2x, this.pt2y, angle);
        this.pt2x = coords.x+this.pt1x;
        this.pt2y = coords.y+this.pt1y;
        reDraw();
    }
    goToOrigin(){
        this.pt2x -= this.pt1x;
        this.pt2y -= this.pt1y;
    }
    scale(qtdX, qtdY){
        this.goToOrigin();
        let coords = scalePoint(this.pt2x, this.pt2y, qtdX, qtdY);
        this.pt2x = coords.x+this.pt1x;
        this.pt2y = coords.y+this.pt1y;
        reDraw();
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
}