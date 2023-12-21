import Point from "./Point.js";
class Editor {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.points = [];
		this.segments = [];
		this.selected = null;
		this.hovered = null;
	}
	#draw_all_points() {
		for (const point of this.points) {
			point.draw();
		}
	}
	#draw_all_segments() {
		for (const segment of this.segments) {
			segment.draw();
		}
	}
	generate() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}
	draw() {
		this.#draw_all_points();
		this.#draw_all_segments();
	}
	add_point(point) {
		this.points.push(new Point(point.x, point.y, this.ctx));
	}
}
export default Editor;
