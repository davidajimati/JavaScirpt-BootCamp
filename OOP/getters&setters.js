class New {
    constructor(name){
        this.name = name;
        this._gas = 10;
    }

    get gas() {
        return this._gas;
    }

    set gas(value) {
        if (value > 20)
            this._gas = 19.9
    }
}

const i = new New("Ado");
i.gas = 60;

console.log(i.name);
console.log(i.gas);