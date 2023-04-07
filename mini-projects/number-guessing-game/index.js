const answer = Math.floor(Math.random() * 10 + 1)
let guesses = 0;

document.getElementById("submit").onclick = function () {
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if (guess == answer)
        alert(`${guess} is the number\nYou got it in ${guesses} guesses`)
    else if (guess > answer)
        alert('Too high\nTry again.')
    else
        alert(`Too low\nTry again.`)
}
