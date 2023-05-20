// template literals allows us to embed some code in our output.
//      it's more flexible and useful
let userName = "David";
let items = 3;
let price = 150

// console.log("Hello", userName)
// console.log("You have ", items, "items in your cart")
// console.log("your total price is", price)

text = `Hello ${userName}
You have ${items} items in your cart
Your total is $${price}`;

document.getElementById("myLabel").innerHTML = text