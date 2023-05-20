console.clear();

let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

console.log(cards);
shuffle(cards);
console.log(cards);

function shuffle(array) {
    let currentIndex = array.length - 1;
    let randomIndex = Math.floor(Math.random() * cards.length);

    while (currentIndex >=  0) {
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp
        currentIndex -= 1;
    }

    return (array);
}