// generates 3 numbers between 1 and 10 when rolled

document.getElementById("roll").onclick = function () {
    let a = Math.floor(Math.random() * 10 + 1)
    let b = Math.floor(Math.random() * 10 + 1)
    let c = Math.floor(Math.random() * 10 + 1)

    document.getElementById("L1").innerHTML = a;
    document.getElementById("L2").innerHTML = b;
    document.getElementById("L3").innerHTML = c;
}
