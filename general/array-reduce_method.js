/**
 * array.reduce() method -> reduces an array to a single value
 */
let prices = [3, 4, 5, 6, 7, 8];
let total = prices.reduce(checkOut)


function checkOut(total, element) {
    return total + element;
}

console.log(total)