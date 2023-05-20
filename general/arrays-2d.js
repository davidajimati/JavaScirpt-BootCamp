// 2D array - an array of arrays

let fruits = ["orange", "banana", "apple"]
let meats = ["eggs", "chicken", "fish"]
let vegetables = ["carrots", "Onions", "cabbage"]

let groceryList = [fruits, meats, vegetables]

for (list of groceryList) {
    for (i of list) {
        // console.log(i);
    }
    // console.log("___________")
}

// manipulating values
console.log(groceryList[0][1]) // should be banana