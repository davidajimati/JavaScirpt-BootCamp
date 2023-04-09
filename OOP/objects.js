const car = {
    model: "mustang",
    color: "red",
    year: 2023,

    drive: function () {
        console.log(`You drive an ${this.model}`)
    },
    brake: () => console.log("You stepped on the break")
}

// console.log(car.color);
// car.drive();

// this is just an introduction to objects

// this keyword - refers to a particular object. -> somewhat like 'self' keyword in python.
//      the objects depends on the immediate context

const car2 = {
    model: "Benz GL4",
    color: "Blue",
    year: 2024,

    drive: function () {
        console.log(`You drive an ${this.model}`)
    },

    brake: () => console.log("You stepped on the break")
}

// car2.drive();
//
/**
 * class = a blueprint for creating objects.
 *          defines what a constructor and methods they have
 *          uses a constructor for unique properties.
 */

class Player {
    score = 0;

    pause() {
        console.log("you paused the game");
    }

    exit() {
        console.log("you exited the game");
    }
}

// const player1 = new Player();
// player1.score += 6;
// console.log(player1.score);

/**
 * Constructor - a special method of a class
 *              accepts arguments and assigns properties.
 */

class Student {

    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }

    study() {
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Mike", 19);
student1.study();
console.log(student1.age);
console.log(student1.gpa);