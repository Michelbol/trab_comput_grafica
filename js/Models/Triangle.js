class Triangle{

    constructor(pt1x, pt1y, pt2x, pt2y, pt3x, pt3y) {
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt2x;
        this.pt2y = pt2y;
        this.pt3x = pt3x;
        this.pt3y = pt3y;
    }

    draw() {
        triangle(this.pt1x, this.pt1y, this.pt2x, this.pt2y, this.pt3x, this.pt3y);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            if(isNumberFill(creatingObject.object.pt2x)){
                creatingObject.object.pt3x = mouseX;
                creatingObject.object.pt3y = mouseY;
                objects.triangles.push(this);
                creatingObject.object.draw();
                creatingObject.object.tutorialHidden();
                freeMouse();
                return;
            }
            creatingObject.object.pt2x = mouseX;
            creatingObject.object.pt2y = mouseY;
            return;
        }
        creatingObject.object.pt1x = mouseX;
        creatingObject.object.pt1y = mouseY;
    }

    tutorialShow(){
        let div = document.getElementById('explanation-triangle');
        div.classList.remove('d-none');
    }

    tutorialHidden(){
        let div = document.getElementById('explanation-triangle');
        div.classList.add('d-none');
    }
}