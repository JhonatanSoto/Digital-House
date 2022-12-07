// 1) Ejercicio: Invertir texto.
// const invertirTexto = oracion =>{
//     let palabra = "";
//     for(let i = oracion.length -1 ;i >= 0; i--){
//         palabra += oracion[i]
//     }
//     return palabra
// }

// 2) Ejercicio: Primera palabra.

// const primeraPalabra = oracion =>{
//     let pPalabra = "";
//     for(let i = 0; i < oracion.length; i++){
//         if(oracion[i] == " "){
//             return pPalabra
//         } else{
//             pPalabra += oracion[i]
//         }
//     }
//     return pPalabra
// }

// 3) Ejercicio: Última palabra.

// const ultimaPalabra = oracion =>{
//     let ultiPalabra = "";
//     for(let i = oracion.length -1 ; i >= 0; i--){
//         if(oracion[i] == " "){
//             return ultiPalabra
//         }
//         else{
//             ultiPalabra = oracion[i] + ultiPalabra
//         }
//     }
//     return ultiPalabra
// }
// console.log(ultimaPalabra("Hola mundo hello world"))

// 4) Ejercicio: Lista de palabras.
// const listaDePalabras = oracion =>{
//     let array = [];
//     let palabras = ""
//     for (let i = 0; i < oracion.length; i++) {
//         if(oracion[i] == " "){
//             array.push(palabras)
//             palabras = ""
//         }else{
//             palabras += oracion[i]
//         }  
//     }
//     return array
// }
// console.log(listaDePalabras("hola mundo hello world adios mundo good bye world"))

// 5) Ejercicio: Palabra mas largar.

// const palabraMasLarga = oracion =>{
//     let pLarga = "";
//     let pCorta = "";
//     for(let i = 0; i < oracion.length; i++){
//         if(oracion[i] == " "){
//             if(pCorta.length >= pLarga.length){
//                 pLarga = pCorta
//             }
//             pCorta = ""
//         }else{
//             pCorta += oracion[i]
//         }
//     }
//     return pLarga
// }
// console.log(palabraMasLarga("holamundo hello wordl dragoonbaññ dragonballz dragoonbañz "))