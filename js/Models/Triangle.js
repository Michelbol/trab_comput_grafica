class Triangle{

    constructor(pt1x, pt1y, pt2x, pt2y, pt3x, pt3y) {
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt2x;
        this.pt2y = pt2y;
        this.pt3x = pt3x;
        this.pt3y = pt3y;
        this.slope1_3 = NaN;
        this.slope2_1 = NaN;
        this.slope2_3 = NaN;
    }

    draw() {
        triangle(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            if(isNumberFill(creatingObject.object.pt2x)){
                createAddPt3();
                creatingObject.object.slope1_3 = calcSlope(this.pt1x, this.pt1y, this.pt3x, this.pt3y);
                creatingObject.object.slope2_3 = calcSlope(this.pt3x, this.pt3y, this.pt2x, this.pt2y);
                objects.push(this);
                reDraw();
                creatingObject.object.tutorialHidden();
                freeMouse();
                return;
            }
            createAddPt2();
            creatingObject.object.slope2_1 = calcSlope(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
            return;
        }
        createAddPt1();
    }

    tutorialShow(){
        let div = document.getElementById('explanation-triangle');
        div.classList.remove('d-none');
    }

    tutorialHidden(){
        let div = document.getElementById('explanation-triangle');
        div.classList.add('d-none');
    }
    select(){
        /*
        //        +
        // cat 1  | \    hip
        //        |  \
        //        +---+
        //          cat 2
        */
        let diff1;
        let diff2;
        if(this.pt1x === this.pt2x){
            diff1 = (validDist(mouseX - this.pt1x)) && (mouseY < this.pt1y || mouseY > (this.pt2y));
        }else if(this.pt1y === this.pt2y){
            diff1 = (validDist(mouseY - this.pt1y)) && (mouseX < this.pt1x || mouseY > (this.pt2x));
        }else{
            diff1 = validDist((this.pt1y - mouseY) - (this.slope2_1*(this.pt1x - mouseX)));
        }

        if(this.pt2y === this.pt3y){
            diff2 = (validDist(mouseY - this.pt2y)) && (mouseX < this.pt3x || mouseX > this.pt2x);
        }else if(this.pt2x === this.pt3x){
            diff2 = (validDist(mouseX - this.pt2x)) && (mouseX < this.pt3y || mouseX > this.pt2y);
        }else{
            diff2 = validDist((this.pt3y - mouseY) - (this.slope2_3*(this.pt3x - mouseX)));
        }

        let diff3 = validDist((this.pt3y - mouseY) - (this.slope1_3*(this.pt3x - mouseX)));

        if(diff1 || diff2 || diff3){
            if(selectingObject.flag){
                selectingObject.object.deSelect();
            }
            selectingObject.flag = true;
            selectingObject.object = this;
            this.clear();
            stroke('red');
            triangle(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y);
            stroke(defaultColor);
        }
        return false;
    }
    deSelect(){
        this.clear();
        stroke(defaultColor);
        triangle(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y);
    }
    clear(){
        strokeWeight(3);
        erase();
        triangle(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y);
        noErase();
        strokeWeight(weight);
    }
    rotate(angle){
        this.clear();
        stroke('red');
        this.goToOrigin();
        let coords2 = rotatePoint(this.pt2x, this.pt2y, angle);
        this.pt2x = coords2.x+this.pt1x;
        this.pt2y = coords2.y+this.pt1y;
        let coords3 = rotatePoint(this.pt3x, this.pt3y, angle);
        this.pt3x = coords3.x+this.pt1x;
        this.pt3y = coords3.y+this.pt1y;
        reDraw();
        stroke(defaultColor);
    }
    goToOrigin(){
        this.pt2x -= this.pt1x;
        this.pt2y -= this.pt1y;
        this.pt3x -= this.pt1x;
        this.pt3y -= this.pt1y;
    }
    scale(qtdX, qtdY){
        this.clear();
        stroke('red');
        this.goToOrigin();
        let coords2 = scalePoint(this.pt2x, this.pt2y, qtdX, qtdY);
        this.pt2x = coords2.x+this.pt1x;
        this.pt2y = coords2.y+this.pt1y;
        let coords3 = scalePoint(this.pt3x, this.pt3y, qtdX, qtdY);
        this.pt3x = coords3.x+this.pt1x;
        this.pt3y = coords3.y+this.pt1y;
        reDraw();
        stroke(defaultColor);
    }
    translate(qtdX, qtdY){
        let coords1 = translatePoint(this.pt1x, this.pt1y, qtdX, qtdY);
        this.pt1x = coords1.x;
        this.pt1y = coords1.y;
        let coords2 = translatePoint(this.pt2x, this.pt2y, qtdX, qtdY);
        this.pt2x = coords2.x;
        this.pt2y = coords2.y;
        let coords3 = translatePoint(this.pt3x, this.pt3y, qtdX, qtdY);
        this.pt3x = coords3.x;
        this.pt3y = coords3.y;
        reDraw();
    }
}