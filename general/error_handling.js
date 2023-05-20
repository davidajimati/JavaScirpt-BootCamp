
try {
    let x =  Number(window.prompt("Enter a number: "));
    if (isNaN(x)) throw "That's not a number"
    if (x == "") throw "Please enter a number"
    console.log(x + " is your number")
}

catch(error) {
    console.log(error);
}

finally {
    console.log("This always executes")
}