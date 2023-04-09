// static - points to attributes  that are owned only by the class and not instances of the class

class Car {
    static numberOfCars = 0;

    constructor(name) {
        this.name = name;
        Car.numberOfCars += 1;
    }

    static startRace(name) {
        console.log(`${this.name} Has started racing`);
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Volvo");
const car3 = new Car("Lamborghini");
const car4 = new Car("Benz");
const car5 = new Car("Rolls Royce");

console.log(Car.numberOfCars);