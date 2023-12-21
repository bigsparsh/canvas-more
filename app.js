import Point from "./Point.js";
import Editor from "./Editor.js";
import Segment from "./Segment.js";

const canvas = document.getElementById("can");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const editor = new Editor(canvas);

var mouse = { x: 0, y: 0 };
window.onclick = (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
	editor.add_point(mouse);
};

function animate() {
	editor.generate();
	editor.draw();
	requestAnimationFrame(animate);
}
animate();
