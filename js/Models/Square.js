class Square{

    constructor(pt1x, pt1y, pt2x, pt2y) {
        /*            Side 4
        //        1---------4
        // Side 1 |         | Side 3
        //        |         |
        //        3---------2
        //            Side 2
        */
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt2x;
        this.pt2y = pt2y;
        this.width = this.pt2x - this.pt1x;
        this.height = this.pt2y - this.pt1y;
        this.pt3x = pt1x;
        this.pt3y = pt1y - this.height;
        this.pt4x = pt1x + this.width;
        this.pt4y = pt1y;
    }

    draw() {
        this.width = this.pt2x - this.pt1x;
        this.height = this.pt2y - this.pt1y;
        rect(this.pt1x, this.pt1y, this.width, this.height);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            creatingObject.object.pt2x = mouseX;
            creatingObject.object.pt2y = mouseY;
            objects.squares.push(this);
            creatingObject.object.draw();
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
        let diff2 = (validDist(mouseY - this.pt2y)) && (mouseX < this.pt2x || mouseX > this.pt2x - this.width);
        let diff3 = (validDist(mouseX - this.pt2x)) && (mouseY > this.pt2y || mouseY < this.pt2y + this.height);
        let diff4 = (validDist(mouseY - this.pt1y)) && (mouseX < this.pt1x || mouseX > this.pt1x - this.width);

        if(diff1 || diff2 || diff3 || diff4){
            if(selectingObject.flag){
                selectingObject.object.deSelect();
            }
            selectingObject.flag = true;
            selectingObject.object = this;
            this.clear();
            stroke('red');
            rect(this.pt1x, this.pt1y, this.width, this.height);
            stroke(defaultColor);
            return true;
        }
        return false;
    }
    deSelect(){
        this.clear();
        stroke(defaultColor);
        rect(this.pt1x, this.pt1y, this.width, this.height);
    }
    clear(){
        strokeWeight(3);
        erase();
        rect(this.pt1x, this.pt1y, this.width, this.height);
        noErase();
        strokeWeight(weight);
    }
    // rotate(angle){
    //     this.clear();
    //     stroke('red');
    //     this.goToOrigin();
    //     this.draw();
    //     let rotateX = (this.pt2x*Math.cos(angle)) - (this.pt2y*Math.sin(angle));
    //     let rotateY = (this.pt2x*Math.sin(angle)) + (this.pt2y*Math.cos(angle));
    //     this.pt2x = rotate2X+this.pt1x;
    //     this.pt2y = rotate2Y+this.pt1y;
    //     // line(this.pt1x, this.pt1y, (this.pt2x), (this.pt2y));
    //     stroke(defaultColor);
    // }
    // goToOrigin(){
    //     this.pt2x -= this.pt1x;
    //     this.pt2y -= this.pt1y;
    // }
}