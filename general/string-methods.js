// let userName = "David"
// console.log(userName.length)
// console.log(userName.charAt(0))
// console.log(userName.indexOf('i'))
// console.log(userName.lastIndexOf('i'))
// console.log(userName.trim())
// console.log(userName.toLowerCase())
// console.log(userName.toUpperCase())

// userName = userName.replaceAll(' ', '-')
// console.log(userName)


/* THE SLICE METHOD */
let fullName = "Daniel Kolenda";

let firstName = fullName.slice(0, fullName.indexOf(' '))
let lastName = fullName.slice(fullName.indexOf(' ') + 1)
console.log(firstName)
console.log(lastName)
