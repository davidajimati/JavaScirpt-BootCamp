// arrow function - compact alternative to a traditional function
//          =>
// using the arrow function, we can get rid of the 'function' and 'return' keyword

// normal function expression:

const percent = function (x, y) {
    return ((x / y) * 100).toFixed(2);
}

// using arrow function
const percent_2 = (x, y) => ((x / y) * 100).toFixed(2)

// console.log(`${percent_2(55, 61)}%`)

let grades = [45, 67, 80, 90, 100, 23, 43, 56, 72]

const ascending = (x, y) => x - y;

grades = grades.sort(ascending);
console.log(grades);

/**
 * function expression is more compact than normal functions
 * arrow functions is more compact than function expressions
 */