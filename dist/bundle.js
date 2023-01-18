"use strict";
function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
const msg = 'Hello there!';
const myArray = [1, 2, 3];
const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3));
myArray.forEach(function (s) {
    console.log(s.toExponential);
});
let data = 'Hola';
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
else {
    console.log(data);
}
function printCordenates(pt) {
    console.log(`X: ${pt.x} Y: ${pt.y}`);
}
const pt = {
    'x': 7,
    'y': 4,
};
printCordenates(pt);
console.log('Hola Jose Luis, Lograste las importaciones en ts, tranquilo, podras con todo');
