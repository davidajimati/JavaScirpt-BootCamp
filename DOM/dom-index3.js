/**
* Adding or removing HTML elements
* .innerHTML (vulnerable to XSS attacks)
* .textContent (More secure)
*/


//creating a new tag and adding it to the body.
// const header = document.createElement("h1");
// header.textContent = window.prompt("Enter web content");
// document.body.append(header);

//changes the page title to input
/*
let tit = window.prompt("Enter Preferred heading")
if (tit == null | tit == '') {
  document.title = "Welcome Page";
} else {
  document.title = tit + "'s page";
}
*/

// add element to list
let fruits = document.querySelector(".fruits")
let new1 = document.createElement('li')
new1.textContent = "Pawpaw";

// fruits.append(new1); //or prepend

// add element to middle of list
fruits.insertBefore(new1, fruits.getElementsByTagName("li")[3])
