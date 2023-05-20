console.clear()

let userName;

do {
    userName = window.prompt("Enter Username: ")
} while (userName == "")

console.log("Hello ", userName)