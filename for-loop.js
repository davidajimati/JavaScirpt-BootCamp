console.clear()

// let i;
// for (i = 10; i > 0; i--) {
//     console.log(i)
// }
// console.log("Happy New Year")

// nested for loop - print a triangle in the console
let sym = window.prompt("enter symbol: ")
let w = Number(window.prompt("enter rectangle width: "))
let h = Number(window.prompt("enter rectangle height: "))

for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
        document.getElementById("myLabel").innerHTML += sym;
    }
    document.getElementById("myLabel").innerHTML += "<br>";
}

