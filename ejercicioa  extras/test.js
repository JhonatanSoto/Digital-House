/**
 * 1- Invertir texto
Escribir el algoritmo de la función InvertirTexto que reciba una variable “oración” de
tipo cadena de caracteres (es decir texto) y que devuelva ese valor con los caracteres
del texto en orden inverso.

*/
// // creamos una function para invertir una cadena de texto que tome una oracion como parametro.
// const InvertirTexto = oracion => {
//     // creamos una varible para almacenar el valor del for.
//     let textoInvertido;
//     // creamos un for para hacer un ciclo a la cadena asignada, que empieze desde el ultimo carracter de dicha cadena.
//     for(let i = oracion.length -1 ; i >= 0; i--){
//         textoInvertido += oracion[i];
//     }
//     //retornamos la variable con el texto invertido
//     return textoInvertido;
// }
// console.log(InvertirTexto("Hola Mundo"))

/**
 * 2- Primera palabra
    Escribir el algoritmo de la función “PrimeraPalabra” que reciba una variable “oración”
    de tipo cadena de caracteres y que devuelva la primera palabra de dicha oración. Una
    palabra es cualquier cadena de caracteres hasta un espacio (el espacio es un carácter, y
    no es parte de la palabra).
*/

// const primeraPalabra = oracion =>{
//     let primerPalabra = "";
//     for( let i = 0; i <= oracion.length; i++){
//         let letra = oracion[i];
//         // preguntamos si el caracter es un espacio de lo contrario sumara los caracteres distintos hasta encontrar uno 
//         if(letra == " "){
//             return primerPalabra
//         }else{
//             primerPalabra += letra
//         }
//     }
//     return primerPalabra
// }
// console.log(primeraPalabra("Hola Mundo!!, Adios Mundo!"))

// 3 - Última palabra
// Escribir el algoritmo de la función “UltimaPalabra” que reciba una variable “oración”
// de tipo cadena de caracteres y que devuelva la última palabra.



// const ultimaPalabra = oracion =>{
//     let respuesta = "";
//     for(let i = oracion.length -1 ; i >= 0; i--){
//         let letras = oracion[i]
//         if(letras == " "){
//             return respuesta
//         } else{
//             respuesta = letras + respuesta
//         }
//     }
//     return respuesta
// }
// console.log(ultimaPalabra("hola mundo"))


/**
 * 4- Lista de palabras
    Escribir el algoritmo de la función “Lista de palabras” que reciba una variable “oración”
    de tipo cadena de caracteres y que devuelva una lista con cada una de las palabras.
    Por ejemplo, dada la oración “esta es una frase muy interesante”, debería devolver la
    lista: [“esta”,”es”,”una”,”frase”,”muy”,”interesante”]
    ¿Cómo cambiarías tu algoritmo si necesitamos solo la cantidad de palabras en la
    oración?
 */

// const listaDeapalabras = oraciones =>{
//     let lista = 0;
//     // let palabra = ""
//     for(let i = 0; i < oraciones.length; i++){
//         if(oraciones[i] == " "){
//             lista++
//             // palabra = ""
//         }
//         // else{
//         //     palabra += oraciones[i]
//         // }
//     }
//     return lista
// }
// console.log(listaDeapalabras("hola mundo adios"))


/**
 * 5- Palabra más larga
    Escribir el algoritmo de la función “PalabraMásLarga” que reciba una variable “oración”
    de tipo cadena de caracteres y que devuelva la palabra más larga de la oración. Si dos
    o más palabras comparten el tamaño máximo, devolver la última.
    ¿Cómo cambiarías tu algoritmo para que en el caso de haber muchas palabras del
    mismo tamaño en vez de devolver la última devuelva la primera?
*/


// const palabraMasLarga = oracion =>{
//     let palabraLarga = "";
//     let palabraCorta = "";
//     for(let i = 0; i < oracion.length; i++) {
//         if(oracion[i] == " "){
//             if(palabraCorta.length > palabraLarga.length){
//                 palabraLarga = palabraCorta;
//             }
//             palabraCorta = ""
//         }else{
//             palabraCorta += oracion[i]
//         }
//     }
//     return palabraLarga
// }
// console.log(palabraMasLarga("jhonatan soto jhonatam stoo jhonatnn sroo "))