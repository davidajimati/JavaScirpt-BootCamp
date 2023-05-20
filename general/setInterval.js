// setInterval() => invokes a function after some time in milliseconds.
//              it's an asynchronous method and does not stop the execution of the program

let count = 0
let max = window.prompt("count up to what #?")
max = Number(max);

const myTimer = setInterval(countUp, 1000);

function countUp() {
    count += 1;
    console.log(count);

    if (count >= max) {
        clearInterval(myTimer);
    }
}