/**
 * --> this module is about format numbers
 *
 * tolocaleString() = returns a string with a language sensitive format
 * it helps us format digits and currency to the native format of the user
 */

let myNum = 12345
// let fmt = myNum.toLocaleString("en-US") // US english
// let fmt = myNum.toLocaleString("hi-IN")  // hindi
// let fmt = myNum.toLocaleString("de-DE")  // standard german
// let fmt = myNum.toLocaleString("en-NG")  // Nigerian english
// let fmt = myNum.toLocaleString("default")    // default

/*  currency */
let num;
// num = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"})
// num = myNum.toLocaleString("en-NGN", {style: "currency", currency: "NGN"})
// num = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"})
// num = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"})


/*  PERCENT */
// num = myNum.toLocaleString(undefined, {style: "percent"});

/* UNITS */
num = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"})
console.log(num)