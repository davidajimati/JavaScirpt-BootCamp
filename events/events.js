/**
 * JAVASCRIPT EVENTS
 * onclick
 * onload
 * onchange - when it gets changed.
 * onmouseover
 * onmouseout
 * onmousedown
 */
// This function changes the title of page when button is clicked.
function changeTitle() {
let num = Math.random() * 6
num = Math.round(num)
let out;

switch (num) {
  case 0:
    out = "Sunday";
    break;
  case 1:
    out = "Monday";
    break;
  case 2:
    out = "Tuesday";
    break;
  case 3:
    out = "Wednesday";
    break;
  case 4:
    out = "Thursday";
    break;
  case 5:
    out = "Friday";
    break;
  case 6:
    out = "Saturday";
    break;
}

  document.title = out;
}
//  // change title onload
const body = document.body;
body.onload = changeTitle;

function doSomething() {
  alert("You did something");
}

// const input = document.querySelector("input");
// input.onchange = doSomething;

const box = document.querySelector(".myDiv")
// box.onmouseover = changeBG;
// box.onmouseout = resetBG;
box.onmouseup = changeBG
box.onmousedown = resetBG;;

function changeBG() {
  box.style.backgroundColor = "red";
}
function resetBG() {
  box.style.backgroundColor = "black";
}
