
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
function drawAlt(txt, x, y, id, color) {
    const ctx = document.getElementById(id).getContext("2d");
    ctx.font = "24px Helvetica";
    ctx.fillStyle = color;
    ctx.fillText(txt, x, y);
}

function generateParams(...args) {
    var tmp = "";
    if (args.length < 3) { tmp += `${args[0]}=${args[1]}`; } else {
        tmp += `${args[0]}=${args[1]}`;
        for (let i = 2; i <
            args.length; i += 2) { tmp += `&${args[i]}=${args[i + 1]}`; }
    }
    return tmp;
}

function addQueryStringToUrl(url, ...args) {
    var tmp = url + '?';
    if (args.length < 3) {
        // console.log(args);
        tmp = `${tmp}${args[0]}=${args[1]}`;
    }
    else {
        tmp = `${tmp}${args[0]}=${args[1]}`;
        for (let i = 2; i < args.length; i += 2) {
            tmp += `&${args[i]}=${args[i + 1]}`;
        }
    }
    return tmp;
}

function makePostRequest(url, params, fn) {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", fn);
    oReq.open('POST', url);
    oReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // oReq.setRequestHeader("Content-length", params.length);
    // oReq.setRequestHeader("Connection", "close");
    oReq.send(params);
}

function makeRequest(url, fn) {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", fn);
    oReq.open('GET', url);
    oReq.send();
}

function checkField(event, in_id) {
    event.preventDefault();
    
    let tmp = document.getElementById(in_id);
    if (tmp.value === '') {
        var msgName = document.getElementsByClassName('msg_name')[0];
        msgName.innerHTML = "!Required field";
        msgName.style.backgroundColor = "red";
        return false;
    }
    return true;
}

function conditionalCatenate(str1, str2, sep = "") {
    if (str2) {
        str1 = str1 + sep + str2;
        str1 = str1.replace(/^,/, '');
    }
    return str1;
}