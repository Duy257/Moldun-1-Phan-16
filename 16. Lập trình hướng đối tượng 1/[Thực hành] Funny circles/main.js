function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function createCircle() {
    let ctx = document.getElementById('myCanvas').getContext('2d');
    radius = Math.floor(Math.random() * 400);
    let circle = new Circle(500, 500, radius);
    // ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill()
    
}
createCircle()