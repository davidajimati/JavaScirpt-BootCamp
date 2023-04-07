document.getElementById("submit").onclick = function () {
    console.clear()
    // document.getElementById("answer").innerHTML = 0
    let num = Number(document.getElementById("num").value)
    let celsius = document.getElementById("celsius").checked
    let fahren = document.getElementById("fahren").checked


    if (celsius) {
        let a = (num - 32) * 5 / 9;
        document.getElementById("answer").innerHTML = a + " ℃"
    }
    else if (fahren) {
        let a = ((num * 9 / 5) + 32);
        document.getElementById("answer").innerHTML = a + " ℉";
    }
    else
        alert("You have not selected an option")
}
