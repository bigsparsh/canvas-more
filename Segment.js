class Segment {
	constructor(p1, p2, ctx, color = "white", width = 2) {
		this.p1 = p1;
		this.p2 = p2;
		this.ctx = ctx;
		this.color = color;
		this.width = width;
	}
	draw() {
		this.ctx.beginPath();
		this.ctx.save();
		this.ctx.StrokeStyle = this.color;
		this.ctx.lineWidth = this.width;
		this.ctx.moveTo(p1.x, p1.y);
		this.ctx.lineTo(p2.x, p2.y);
		this.ctx.stroke();
		this.ctx.restore();
		this.ctx.closePath();
	}
}
export default Segment;
