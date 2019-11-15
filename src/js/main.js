var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    radius = 10,
    dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = radius*2;

var putPoint = function(e) {
    if(dragging) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    }
};

var engage = function(e) {
    dragging = true;
    putPoint(e);
};

var disengage = function(e) {
    dragging = false;
    ctx.beginPath();
};

function layout() {
    var image = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.putImageData(image, 0, 0);
    ctx.lineWidth = radius*2;

}

window.addEventListener('resize', layout, false);
canvas.addEventListener('mousedown', engage, false);
canvas.addEventListener('mousemove', putPoint, false);
canvas.addEventListener('mouseup', disengage, false);
canvas.addEventListener('mouseout', disengage, false);
