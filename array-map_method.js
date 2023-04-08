/**
 * The array.map() => executes a provided callback function
 *          once for each element AND created a new array
 */

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

squares.forEach(print);
console.log("----------")
cubes.forEach(print);

function square(x) {
    return (Math.pow(x, 2));
}

function print(element) {
    console.log(element);
}

function cube(x) {
    return (Math.pow(x, 3));
}

/**
 * BASICALLY -  the array.map() method runs through and array
 * and creates a new array applying a specified function to the initial array.
 * syntax:
 * new_array = old_array.map(callBack_function)
 * the new_array contains an updated list of values.
 */