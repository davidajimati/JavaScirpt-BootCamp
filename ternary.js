/**
 * The ternary operator is a shortcut for if/else statements.
 * it takes 3 arguments
 *
 * it's like a condition with a '?'
 *
 * condition ? execute-if-true : execute-if-false
 */
check_age(11)

function check_age(age) {
    if (age >= 18)
        console.log("You're an adult")
    else
        console.log("you're still a kid")
}

// OR

function checkAge(age) {
    age >= 18 ? console.log("You're an adult") : console.log("you're still a kid")
}