class Rectangle {
    x;
    y;
    width;
    height;
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        return (this.width + this.height)*2;
    }
    getArea() {
        return (this.height * this.width);
    }
}
