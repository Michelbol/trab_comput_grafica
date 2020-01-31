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

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            creatingObject.object.pt2x = mouseX;
            creatingObject.object.pt2y = mouseY;
            let catA = this.pt2x - this.pt1x;
            let catB = this.pt2y - this.pt1y;
            let hypt = Math.pow(catA, 2) + Math.pow(catB, 2);
            this.r = Math.sqrt(hypt);
            objects.push(this);
            creatingObject.object.draw();
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
            this.clear();
            stroke('red');
            circle(this.pt1x, this.pt1y, this.r*2);
            stroke(defaultColor);
        }
    }
    deSelect(){
        this.clear();
        stroke(defaultColor);
        circle(this.pt1x, this.pt1y, this.r*2);
    }
    clear(){
        erase();
        circle(this.pt1x, this.pt1y, this.r*2);
        noErase();
    }
    rotate(angle){
        this.clear();
        stroke('red');
        let original1X = this.pt1x;
        let original1Y = this.pt1y;
        this.goToOrigin();
        this.draw();
        let coords1 = rotatePoint(this.pt1x, this.pt1y, angle);
        this.pt1x = coords1.x;
        this.pt1y = coords1.y;
        this.draw();
        this.pt1x = this.pt1x+original1X;
        this.pt1y = this.pt1x+original1Y;
        this.draw();
        stroke(defaultColor);
    }
    goToOrigin(){
        this.pt1x -= (this.pt1x-this.r);
        this.pt1y -= (this.pt1y-this.r);
        this.pt2x -= this.pt1x;
        this.pt2y -= this.pt1y;
    }
}