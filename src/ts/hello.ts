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

