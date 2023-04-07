let far = Number(document.getElementById("celsius").innerHTML)


document.getElementById("celsius").innerHTML = toCelsius(fahren);


document.getElementById("celsius").onclick = function() {
    let celsius = Number(document.getElementById("celsius").innerHTML)
    document.getElementById("far").innerHTML = toFar(celsius);
}

document.getElementById("far").onclick = function() {
    let far = Number(document.getElementById("far").innerHTML)
    document.getElementById("celsius").innerHTML = toFar(far);
}

function toCelsius(far) {
    return (far - 32) * 5 / 9;
}

function toFar(celsius) {
    return ((num * 9 / 5) + 32);
}
