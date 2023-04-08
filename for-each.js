/**
 * the forEach() Method executes a callback function
 * for each element of the array.
 */

let students = ["mike", "johnson", "patrick"]
students.forEach(capitalize)
students.forEach(print)

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element) {
    console.log(element);
}

/**
 * The typical way to use forEach is:
 * array.forEach(function_name(value1, value2, value3) {
 *      value = doSomething(value2, value2) + value3
 *      console.log(result)
 * })
 */