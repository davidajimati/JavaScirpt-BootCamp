// function expressions allows us to name a function (anonymously)
//       it helps us avoid polluting the global space with function definitions


//standard function
function sayHello(){
    console.log("hello");
}

// we might run out function names, and it only becomes redundant
//      if we eventually don't use it.

// standard function expression below:
const greeting = function() {
    console.log("hello")
}

// greeting();

/**
 * browser version below
 */

let count = 0;
document.getElementById("increase").onclick = function() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decrease").onclick = function() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}