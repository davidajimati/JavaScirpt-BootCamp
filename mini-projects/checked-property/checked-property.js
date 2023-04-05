
document.getElementById("myButton").onclick = function () {
    console.clear()
    const myCheckBox = document.getElementById("myCheckBox")
    const master = document.getElementById("master")
    const visa = document.getElementById("visa")
    const verve = document.getElementById("verve")

    if (myCheckBox.checked) {
        console.log("You are subscribed!")
    }
    else {
        console.log("You are not subscribed")
    }

    if (master.checked)
        console.log("You are paying with a Mastercard!")
    else if (visa.checked)
        console.log("You are paying with Visa card!")
    else if (verve.checked)
        console.log("You are paying with Verve card!")
    else
        console.log("You must choose a payment option")
}


