function Rectangle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;


}
function createRectangle() {
    let tao = document.getElementById('myCanvas').getContext('2d');
    tao.beginPath();
    let Rectangle = new Rectangle(10, 20, 200, 200);
    tao.fillStyle = '#fa4b2a';
    tao.fillRect(Rectangle.x, Rectangle.y, Rectangle.width, Rectangle.height);
    
}

function getPerimeter() {
    let Rectangle = new Rectangle(10, 20, 200, 200);
    return (this.width + this.height)*2;
}
function getArea() {
    let Rectangle = new Rectangle(10, 20, 200, 200);
    return (this.width * this.height);

}
getPerimeter()

