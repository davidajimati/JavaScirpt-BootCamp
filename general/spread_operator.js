// the spread operator (...) spreads the values in an array
// it unpacks the elements

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(Math.max(...numbers));
// console.log(...numbers)
let class1 = ["jones", "jack", "james"]
let class2 = ["Reuben", "rabbi", "ribbadu"]

// add class2 to class1
// class1.push(class2) //wrong way
// console.log(class1) // embbeds the array

class1.push(...class2)  // right way
console.log(...class1)