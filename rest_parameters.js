// packs arguments into lists -> opposite of spread parameter
// it represents an infinite number of arguments

let a = 1;
let b = 2;
let c = 3, d = 4, e = 5, f = 6;

sum(a, b, c, d, e, f)
//sum function to accept infinite arguments

function sum(...numbers) {
    let total = 0;
    for (i of numbers)
        total += i;
    console.log(total)
}