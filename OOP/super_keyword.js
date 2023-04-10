// super => invokes the constructor of the parent class.

class Animals {
    static animalCount = 0;

    constructor(name, runSpeed) {
        this.name = name;
        this._age = 12;
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

    get age(){
        return this._age;
    }

    set age(value){
        if (value > 20)
            this._age = 19.9;
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


const fish1 = new Animals("Shark", 56);
fish1.age = 45;


console.log(fish1.age);
