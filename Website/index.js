class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; //here this_width implies that this is an private propert
        }
        else{
            console.error("Width must be positive number!");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; //here this_width implies that this is an private propert
        }
        else{
            console.error("Height must be positive number!");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);