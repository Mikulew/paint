var clearButton = document.getElementById('clear');

clearButton.addEventListener('click', clearCanvas, false);

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}