class Point {
	constructor(x, y, ctx, color = "white", radius = 5) {
		this.x = x;
		this.y = y;
		this.ctx = ctx;
		this.color = color;
		this.radius = radius;
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.fillStyle = this.color;
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		this.ctx.fill();
		this.ctx.restore();
		this.ctx.closePath();
	}
}
export default Point;
