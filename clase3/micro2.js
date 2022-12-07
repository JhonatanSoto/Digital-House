/**
 * 1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
 * 
2. En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
    para ello debes declarar las siguientes variables y almacenar en ellas los siguientes
    datos del trabajador:
    a. nombre
    b. apellido
    c. sueldoActual
    d. porcentajeAumento

3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la
    operación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).

4. En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo
    sueldo.

5. Usando el console.log() y concatenando string, muestra en la consola de Visual
    Studio Code los contenidos de cada una de las variables:
 */

// Variables
let nombre = "jose";
let apellido = "soto";

let sueldoActual = 2000;
let porcentajeAumento = 25;
// Calculo del sueldoActual por el porcentajeAumento / 100
let calculoDeAumneto = (sueldoActual * porcentajeAumento) /100
let nuevoSueldo = calculoDeAumneto + sueldoActual;


// console.log() del resltado del nuevo sueldo
console.log(`tu nuevo sueldo es  ${nuevoSueldo}`)