// they are functions in another functions

let userName = "David";
let userInbox = 0;

login();

function login() {
    displayUserName();
    displayUSerInbox();

    function displayUSerInbox() {
        console.log(`You have ${userInbox} messages`)
    }
    function displayUserName() {
        console.log(`Welcome ${userName}`)
    }
}

// it helps ensures a function must be invoked to get access to the nested functions

