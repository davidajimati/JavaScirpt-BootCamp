var myCars = {
    "BMW": '350 kph',
    "Toyota": '230 kph',
    "Honda": '200 kph',
    'Rolls Royce': '450 kph'
}

var BMW = {
    name: 'BMW Turbo',
    topSpeed: 350,
    color: 'Black',
    spoilt: false,
    applyBrake: function() {
        setTimeout(function() {
            console.log(BMW.name + " Car stopped");
        }, 2000)
    }
}

console.log(BMW.applyBrake())