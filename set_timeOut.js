// setTimeout() = invokes a function after a number of milliseconds.
// asynchronous function (doesn't pause the

// clearTimeout clears the effects of the setTimeout method

let timer1 = setTimeout(firstMessage, 3000);
let timer2 = setTimeout(secondMessage, 6000);
let timer3 = setTimeout(thirdMessage, 10000);
console.log(timer1)

function firstMessage() {
    alert("Buy this course for $500");
}
function secondMessage() {
    alert("This is not a scam!");
}
function thirdMessage() {
    alert("DO IT!");
}

function clearer() {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3)
    alert("Thank you for buying this course");
}

document.getElementById("MYbutton").onclick = () => clearer()