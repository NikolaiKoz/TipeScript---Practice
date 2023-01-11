console.log('Hello typescript');

console.log('Hello Jose Luis, i am learning typescript');

//Esto es un comentario TS

/**
 * Esto es un comentario
 * de varias lineas
 * en TS
 * Para documentar
 */

//Declaracion de variables

let nombre: string = 'Jose Luis';

console.log(nombre);
console.log(`Hola ${nombre}`);

const PI: number = 3.1416; //TODO This is a String

console.log(PI);

//Declaracion de booleanos

let isTrue: boolean = true;

console.log(isTrue);

//Instancia de tres variables sin valor inicial

let a: number;
let b: string;
let c: boolean;

let d = false; //Inferencia de tipos
console.log(typeof d); //boolean

//Si una variable no tiene valor inicial, se debe asignar el tipo de dato, si al declararla se le asigna un valor, el tipo de dato se infiere.





//Declaracion de arrays

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros);

let nombres: string[] = ['Jose Luis', 'Juan', 'Pedro', 'Maria'];

console.log(nombres);

let arrayValores: ( string | number | boolean)[] = [1, 'Jose Luis', true, 2, 'Juan', false, 3, 'Pedro', true, 4, 'Maria', false];

console.log(arrayValores);




//Declaracion de enums

enum Color {Rojo, Verde, Azul, Amarillo};

let colorFavorito: Color = Color.Amarillo;

console.log(colorFavorito);

enum Puesto {Programador, Analista, Tester, Arquitecto};

let puestoFavorito: Puesto = Puesto.Arquitecto;

console.log(puestoFavorito);



//Declaracion de interfaces

interface Tarea{
    nombre: string;
    puesto: Puesto;
    color: Color;
}

let tarea: Tarea = {
    nombre: 'Tarea 1',
    puesto: Puesto.Programador,
    color: Color.Rojo
}

console.log(tarea);

// tyoe propios de TS

type Puesto2 = 'Programador' | 'Analista' | 'Tester' | 'Arquitecto';

let puestoFavorito2: Puesto2 = 'Arquitecto';




//Funciones

/**
 * @description Funcion que suma dos numeros y devuelve el resultado
 * @param a primer numero
 * @param b segundo numero
 * @returns number
 */
function sumar(a: number, b: number): number{
    return a + b;
}

//Funcion con parametros por defecto

/**
 *@description Funcion que suma dos numeros y devuelve el resultado, en el caso de que el segundo parametro no se pase, se le asigna el valor 0
 * @param a
 * @param b
 * @returns number
 */
function sumar2(a: number, b: number = 0): number{
    return a + b;
}

console.log(sumar(1, 2));
console.log(sumar2(1));

//Sobrecarga de funciones

//Funciones asincronas

//Funciones generadoras


