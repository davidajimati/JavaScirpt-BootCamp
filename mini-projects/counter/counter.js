let a;

document.getElementById("decrease").onclick = function () {
     a -= 1;
    document.getElementById("countFigure").innerHTML = a;
}

document.getElementById("reset").onclick = function () {
     a = 0;
    document.getElementById("countFigure").innerHTML = a;
}

document.getElementById("increase").onclick = function () {
    a += 1;
    document.getElementById("countFigure").innerHTML = a;
}
