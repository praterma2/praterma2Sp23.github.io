class Shape {
    //properties or states
    constructor(
        numSides,
        numCorners,
        color
    ){  //we need to substanciate
        this.numSides = numSides;
        this.numCorners = numCorners;
        this.color = color;
    }
    //methods
    rotate(deg){
        console.log("rotate this shape " + deg + " number of degrees")
    }
}

class Rectangle {
    constructor(
        lengthX,    //length of x axis side of rectangle
        lengthY,    //length of y axis side of rectangle
        posX,       //x coordinate for center of rectangle
        posY        //y coordinate for center of rectangle
    ){  //we need to substanciate
        this.lengthX = lengthX;
        this.lengthY = lengthY;
        this.posX = posX;
        this.posY = posY;
    }
    //methods
    calcArea(){
        console.log("calcArea started");
        area = lengthX * lengthY;
        return area;
    }

    calcPeri(lengthX, lengthY){
        console.log("calcPeri started");
        peri = 2*(lengthX + lengthY);
        return peri;
    }

}

function smSArea(){
    console.log("smSArea() started");
    var smarea = smSquare.calcArea();
    console.log(smarea);
}