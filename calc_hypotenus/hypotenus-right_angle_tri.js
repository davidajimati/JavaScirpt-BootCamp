console.clear()

/**
 * this program finds the hypotenuse of a right angle triangle.
 * Formula: c = sqrt((a^2) + (b^2))
 * we'll accept the variables a and b from the user
console.log("Calculate the hypotenuse of a triangle")

let a = Number(window.prompt("Enter side a: "))
let b = Number(window.prompt("Enter side b: "))
let hypotenuse = Math.sqrt((Math.pow(a, 2) + (Math.pow(b, 2))))
console.log(hypotenuse);
*/

// lets advance it by accepting some inputs from html text boxes
let a
let b
let C
document.getElementById("submit").onclick = function () {

    a = Number(document.getElementById("Ia").value)
    b = Number(document.getElementById("Ib").value)

    c = Math.sqrt((Math.pow(a, 2) + (Math.pow(b, 2))))

    document.getElementById("Lc").innerHTML = "Side C = " + c;
}