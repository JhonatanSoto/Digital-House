/**
 * 1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
 * 
2. En el archivo creado debes desarrollar un código para lograr efectuar operaciones
    aritméticas. Para ello, declarar dos variables, otorgando el nombre y los valores
    numéricos que consideres. Ejemplo: let numero1 = 16;

3. Usando el console.log() mostrar al usuario los resultados de las siguientes
    operaciones aritméticas, en función de los valores asignados a las variables:
    I. Suma
    II. Resta
    III. Multiplicación
    IV. División
    V. Módulo
    VI. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true.
    De lo contrario mostrará false
    VII. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true.
    De lo contrario mostrará false
 */
// Variables:

let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let modulo = numero1 % numero2;

let mayor = numero1 > numero2;
let menor = numero1 < numero2;

// Console.log() de las variables:

// Suma
console.log(suma);
// Resta
console.log(resta);
// Multiplicasion
console.log(multiplicacion);
// Division
console.log(division);
// Modulo
console.log(modulo);

// Valores Booleanos

// numero1 es mayor a numero2 es true
console.log(mayor);
// numero1 es menor a numero2 es false
console.log(menor);
