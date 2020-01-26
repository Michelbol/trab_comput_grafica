class Circle{

    constructor(pt1x, pt1y, pt2x, pt2y) {
        this.pt1x = pt1x;
        this.pt1y = pt1y;
        this.pt2x = pt2x;
        this.pt2y = pt2y;
    }

    draw() {
        let catA = this.pt2x - this.pt1x;
        let catB = this.pt2y - this.pt1y;
        let hypt = Math.pow(catA, 2) + Math.pow(catB, 2);
        hypt = Math.sqrt(hypt)*2;
        circle(this.pt1x, this.pt1y, hypt);
    }

    setup(){
        if(isNumberFill(creatingObject.object.pt1x)){
            creatingObject.object.pt2x = mouseX;
            creatingObject.object.pt2y = mouseY;
            objects.circumferences.push(this);
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
}