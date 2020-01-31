class Square{

    constructor(pt1x, pt1y, pt3x, pt3y) {
        /*            Side 4
        //        1---------4
        // Side 1 |         | Side 3
        //        |         |
        //        2---------3
        //            Side 2
        */
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt1x;
        this.pt2y = pt3y;
        this.pt3x = pt3x;
        this.pt3y = pt3y;
        this.pt4x = pt3x;
        this.pt4y = pt1y;
        this.width = this.pt2x - this.pt1x;
        this.height = this.pt2y - this.pt1y;
    }

    draw() {
        quad(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y, this.pt4x, this.pt4y);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            creatingObject.object.pt3x = mouseX;
            creatingObject.object.pt3y = mouseY;
            creatingObject.object.pt2x = this.pt1x;
            creatingObject.object.pt2y = this.pt3y;
            creatingObject.object.pt4x = this.pt3x;
            creatingObject.object.pt4y = this.pt1y;
            creatingObject.object.width = this.pt3x - this.pt1x;
            creatingObject.object.height = this.pt3y - this.pt1y;
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
        let div = document.getElementById('explanation-square');
        div.classList.remove('d-none');
    }

    tutorialHidden(){
        let div = document.getElementById('explanation-square');
        div.classList.add('d-none');
    }
    select(){
        let diff1 = (validDist(mouseX - this.pt1x)) && (mouseY < this.pt1y || mouseY > (this.pt1y - this.height));
        let diff2 = (validDist(mouseY - this.pt3y)) && (mouseX < this.pt3x || mouseX > this.pt3x - this.width);
        let diff3 = (validDist(mouseX - this.pt3x)) && (mouseY > this.pt3y || mouseY < this.pt3y + this.height);
        let diff4 = (validDist(mouseY - this.pt1y)) && (mouseX < this.pt1x || mouseX > this.pt1x - this.width);

        if(diff1 || diff2 || diff3 || diff4){
            if(selectingObject.flag){
                selectingObject.object.deSelect();
            }
            selectingObject.flag = true;
            selectingObject.object = this;
            this.clear();
            stroke('red');
            quad(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y, this.pt4x, this.pt4y);
            stroke(defaultColor);
            return true;
        }
        return false;
    }
    deSelect(){
        this.clear();
        stroke(defaultColor);
        quad(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y, this.pt4x, this.pt4y);
    }
    clear(){
        strokeWeight(3);
        erase();
        quad(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y, this.pt4x, this.pt4y);
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
        let coords4 = rotatePoint(this.pt4x, this.pt4y, angle);
        this.pt4x = coords4.x+this.pt1x;
        this.pt4y = coords4.y+this.pt1y;
        reDraw();
        stroke(defaultColor);
    }
    goToOrigin(){
        this.pt2x -= this.pt1x;
        this.pt2y -= this.pt1y;
        this.pt3x -= this.pt1x;
        this.pt3y -= this.pt1y;
        this.pt4x -= this.pt1x;
        this.pt4y -= this.pt1y;
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
        let coords4 = scalePoint(this.pt4x, this.pt4y, qtdX, qtdY);
        this.pt4x = coords4.x+this.pt1x;
        this.pt4y = coords4.y+this.pt1y;
        reDraw();
        stroke(defaultColor);
    }
}