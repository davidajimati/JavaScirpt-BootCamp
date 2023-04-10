// super => invokes the constructor of the parent class.

class Animals {
    static animalCount = 0;

    constructor(name, age, runSpeed) {
        this.name = name;
        this._age = age;
        this.runSpeed = runSpeed;
        this._creature = "Animal";
    }

    sleep() {
        console.log(`${this.name} is asleep`);
    }

    wake() {
        console.log(`${this.name} is awake`);
    }

    get creature() {
        return `${this.name} is a ${this._creature}`
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

    get division() {
        return `${this.name} is a ${this._division}`
    }
}


const fish1 = new Animals("Shark", 34, 56);


console.log(fish1.age);
