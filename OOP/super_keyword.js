// super => invokes the constructor of the parent class.

class Animals {
    static animalCount = 0;

    constructor(name, age, runSpeed) {
        this.name = name;
        this.age = age;
        this.runSpeed = runSpeed;
        this._creature = "Animal";
    }

    sleep() {
        console.log(`${this.name} is asleep`);
    }

    wake() {
        console.log(`${this.name} is awake`);
    }
}

class Birds extends Animals {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

class Fish extends Animals {
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
        this._division = "Pisces"
    }
}

const fish1 = new Fish("Shark", 34, 56);

console.log(fish1.age);
console.log(fish1.name);
console.log(fish1.swimSpeed);
console.log(fish1.division);
console.log(fish1.creature);
fish1.sleep();
fish1.wake();