// it's a way to create objects without assigning names to them

class Cards {
    constructor(number, name) {
        this.number = number;
        this.name = name;
    }
}

let cards = [
    new Cards("A", "Hearts"),
    new Cards("A", "Spade"),
    new Cards("A", "Diamond"),
    new Cards("A", "Square"),
    new Cards("2", "Hearts"),
    new Cards("2", "Spade"),
    new Cards("2", "Diamond"),
    new Cards("2", "Square")
]

cards.forEach((card) => console.log(`${card.number} ${card.name}`));