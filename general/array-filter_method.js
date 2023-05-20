/**
 * array.filter() method -> creates a new array with all elements
 *          thats passes a particular condition
 */

let ages = [16, 17, 18, 21, 90, 45, 12, 11];
let adults = ages.filter(checkAge);

// adults.forEach(function print(element) {
//     console.log(element)
// })

function checkAge(element) {
    return element >= 18;
}

console.log(adults);

// that's it