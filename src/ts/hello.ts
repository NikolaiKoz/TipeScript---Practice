// This is a comentary

function greet(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddison", new Date());

const msg: string = 'Hello there!';

const myArray: number[] = [1, 2, 3];

//Anotaciones para parametros

const add = (a: number, b: number): number =>{
    return a + b;
}

console.log(add(5, 3))

//Funciones anonimas

myArray.forEach(function (s) {
    console.log(s.toExponential)
});

//Typos de union a una variable se le pueden asignar mas de un tipo con el conector logico o |

let data: string | number = 'Hola';

// data  = 5;

if (typeof data === "string"){
    console.log(data.toUpperCase());
} else{
    console.log(data);
}

interface Point {
    x: number;
    y: number;
}

function printCordenates (pt: Point){
    console.log(`X: ${pt.x} Y: ${pt.y}`);
}

const pt = {
    'x' : 7,
    'y' : 4,
}

printCordenates(pt)


//Asersion de tipo


