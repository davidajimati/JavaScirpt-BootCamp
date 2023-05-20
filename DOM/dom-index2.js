/**
 * Options available for DOM traversal
 * .firstElementChild
 * .lastElementChild
 * .parentElement
 * .nextElementSibling
 * .previousElementSibling
 * .children[]
 * Array.from(.children)
 */

let body = document.body;
let veggies =  document.getElementById("veggies");
// let child = body.firstElementChild;
// child.style.backgroundColor = "lightgreen";

// let parent = veggies.parentElement;
// parent.style.backgroundColor = "pink";

let next = veggies.nextElementSibling;
next.style.backgroundColor = "yellow";

// dessert_one = next.firstElementChild; OR
dessert_one = next.children;
dessert_one.style.color = "purple";
dessert_one.style.backgroundColor = "lightgreen";
