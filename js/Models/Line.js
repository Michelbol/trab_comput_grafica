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
            creatingObject.object.pt2x = mouseX;
            creatingObject.object.pt2y = mouseY;
            creatingObject.object.slope = parseFloat(((this.pt2y-this.pt1y)/(this.pt2x-this.pt1x)).toFixed(2));
            objects.lines.push(this);
            creatingObject.object.draw();
            creatingObject.object.tutorialHidden();
            freeMouse();
            return;
        }
        creatingObject.object.pt1x = mouseX;
        creatingObject.object.pt1y = mouseY;
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
            this.clear();
            stroke('red');
            line(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
            stroke(defaultColor);
            return true;
        }
        return false;
    }
    deSelect(){
        this.clear();
        stroke(defaultColor);
        line(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
    }
    clear(){
        strokeWeight(3);
        erase();
        line(this.pt1x, this.pt1y, this.pt2x, this.pt2y);
        noErase();
        strokeWeight(weight);
    }
    rotate(angle){
        this.clear();
        stroke('red');
        this.goToOrigin();
        let rotateX = (this.pt2x*Math.cos(angle)) - (this.pt2y*Math.sin(angle));
        let rotateY = (this.pt2x*Math.sin(angle)) + (this.pt2y*Math.cos(angle));
        this.pt2x = rotateX+this.pt1x;
        this.pt2y = rotateY+this.pt1y;
        line(this.pt1x, this.pt1y, (this.pt2x), (this.pt2y));
        stroke(defaultColor);
    }
    goToOrigin(){
        this.pt2x -= this.pt1x;
        this.pt2y -= this.pt1y;
    }
}