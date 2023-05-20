/**
 * These are examples of ways we can select elements in the DOM
 * 1. getElementByClassName
 * 2. getElementsByClassName
 * 3. getElementByTag
 * 4. getElementsByTag
 * 5. getElementById
 * 6. getElementByName
 * 7. querySelector - selects the first elements in a group
 *     querySelector works more like referencing elements in CSS
 * 8. querySelectorAll - selects all elements with the description
 */

//__________________________________________________

/*
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
  if (fruit.checked){
    console.log(fruit.value);
    // fruit.style.backgroundColor = "red";
  }
})
*/

/*
let veggies = document.getElementsByTagName('li');
console.log(veggies);

veggies[0].style.color = "green";
veggies[0].style.backgroundColor = "yellow";
veggies[0].style.fontWeight = "bold";
*/

/*
let deserts =  document.getElementsByClassName("deserts");
deserts[0].style.backgroundColor = "yellow";
*/


//QUERY-SELECTOR
let elements = document.querySelectorAll(".deserts");
elements.forEach(element => {
  element.style.backgroundColor = "lightgreen";
  // element.style.fontWeight = "bold";
})
