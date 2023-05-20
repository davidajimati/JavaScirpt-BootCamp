// a function passed as an argument to another function
// it ensures one function is not executed until the other is done


let a = 1;
let b =2;

sum(a, b, PrintConsole)

function sum(x, y, myFunc) {
    let result =  x + y;
    myFunc(result)
}

function PrintConsole(output) {
    console.log(output);
}