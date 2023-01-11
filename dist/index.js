"use strict";
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
let nombre = 'Jose Luis';
console.log(nombre);
console.log(`Hola ${nombre}`);
const PI = 3.1416; //TODO This is a String
console.log(PI);
//Declaracion de booleanos
let isTrue = true;
console.log(isTrue);
//Instancia de tres variables sin valor inicial
let a;
let b;
let c;
let d = false; //Inferencia de tipos
console.log(typeof d); //boolean
//Si una variable no tiene valor inicial, se debe asignar el tipo de dato, si al declararla se le asigna un valor, el tipo de dato se infiere.
//Declaracion de arrays
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numeros);
let nombres = ['Jose Luis', 'Juan', 'Pedro', 'Maria'];
console.log(nombres);
let arrayValores = [1, 'Jose Luis', true, 2, 'Juan', false, 3, 'Pedro', true, 4, 'Maria', false];
console.log(arrayValores);
//Declaracion de enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
    Color[Color["Amarillo"] = 3] = "Amarillo";
})(Color || (Color = {}));
;
let colorFavorito = Color.Amarillo;
console.log(colorFavorito);
var Puesto;
(function (Puesto) {
    Puesto[Puesto["Programador"] = 0] = "Programador";
    Puesto[Puesto["Analista"] = 1] = "Analista";
    Puesto[Puesto["Tester"] = 2] = "Tester";
    Puesto[Puesto["Arquitecto"] = 3] = "Arquitecto";
})(Puesto || (Puesto = {}));
;
let puestoFavorito = Puesto.Arquitecto;
console.log(puestoFavorito);
let tarea = {
    nombre: 'Tarea 1',
    puesto: Puesto.Programador,
    color: Color.Rojo
};
console.log(tarea);
