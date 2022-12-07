/**
 * 1. En la carpeta ya creada, crea un nuevo archivo JavaScript (.js).
 * 
2. Desarrollar el programa mi primera calculadora. Queremos que, usando estructura
    switch, muestres al usuario cuál es el resultado de una operación aritmética. Esto se
    hará en base a dos valores suministrados y al tipo de operación indicada:
    “sumar”, “restar”, “multiplicar”, “dividir”.
    Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la
    respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.

3. En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle
    un mensaje al usuario que le informe que “Las operaciones aceptadas son: sumar
    - restar- multiplicar- dividir”.
 */

// Varibles 
let num1 = 5;
let num2 = 4;
let operador = "*";
let resultado = 0;
// Condicional Switch
switch (operador){
    case "+":
        resultado = num1 + num2
        console.log(`${num1} + ${num2} = ${resultado}`)
        break;
    case "-":
        resultado = num1 - num2 
        console.log(`${num1} - ${num2} = ${resultado}`)
        break;
    case "*":
        resultado = num1  * num2;
        console.log(`${num1} * ${num2} = ${resultado}`)
        break;
    case "/":
        resultado = num1 / num2;
        console.log(`${num1} / ${num2} = ${resultado}`)
        break;
    default:
        console.log("Las operaciones aceptadas son: sumar - restar- multiplicar- dividir") 
}