
function drawLine(fromX, fromY, toX, toY) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    // ctx.moveTo(360, 170);
    ctx.moveTo(fromX, fromY);
    // ctx.lineTo(470, 220);
    ctx.lineTo(toX, toY);
    ctx.lineWidth = 3
    ctx.stroke()
    ctx.closePath()
}

function drawRectangle(a, b, x, y, fill) {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = fill;
    ctx.fillRect(a, b, x, y);

}

function drawRectangleAlt(a, b, x, y, fill, id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = fill;
    ctx.fillRect(a, b, x, y);

}

function draw(txt, x, y) {
    const ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.font = "24px Helvetica";
    ctx.fillStyle = "white"
    ctx.fillText(txt, x, y);
}
function drawAlt(txt, x, y,id, color) {
    const ctx = document.getElementById(id).getContext("2d");
    ctx.font = "24px Helvetica";
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y);
}