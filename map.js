// Map = an object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
])

// console.log(...store.keys())
store.forEach((value, key) => console.log(`${key}: $${value}`));