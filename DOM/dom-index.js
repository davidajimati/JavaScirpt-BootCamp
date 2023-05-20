 /**
  * These are examples of ways we can select elements in the DOM
  * 1. getElementByClassName
  * 2. getElementsByClassName
  * 3. getElementByTag
  * 4. getElementsByTag
  * 5. getElementById
  * 6. getElementByName
  * 7. querySelector - selects the first element in a group
  *     querySelector works more like referencing elements in CSS
  */

 //__________________________________________________

/*
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
  if (fruit.checked){
    console.log(fruit.value);
  }
}) */

/*
let veggies = document.getElementsByTagName('li');
console.log(veggies);

veggies[0].style.color = "green";
veggies[0].style.backgroundColor = "yellow";
veggies[0].style.fontWeight = "bold";
*/


let deserts =  document.getElementsByClassName("deserts");
deserts[0].style.backgroundColor = "yellow";
