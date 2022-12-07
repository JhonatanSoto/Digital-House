// const numeroSiguientes = valor => {
//     let resultado = undefined
//     for(let i = valor +1 ; i <= valor + 10; i++ ){
//         resultado = i;
//         console.log(i)
//     }
// }
// numeroSiguientes(12)

// const triplicador = valor =>{
//     let resultado = 0;
//     for(let i = 0; i <= valor + 57; i += 3){
//         resultado = i
//         console.log(resultado)
//     }
// }
// triplicador(1)
//Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.

// const sumatoria  = number => {
//     let resultado = 0;
//     for(let i = 1; i <= number; i++){
//         resultado += i
//     }
//     return resultado
// }
// console.log(sumatoria(100))

/**
 * Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso
    de los ciclos o bucles’. Tendrá la responsabilidad de mostrar al usuario cada una de
    las letras de la cadena de texto pero en MAYÚSCULA.
*/




// const mayuscula = cadenaDeTexto =>{
//     let respuesta;
//     for(let i = 0; i < cadenaDeTexto.length; i++){
//         respuesta = cadenaDeTexto[i]
//         let res = respuesta.toUpperCase()
//         console.log(res)
//     }
// }

// console.log(mayuscula("practicando el uso de los ciclos o bucles"))

// const mayuscula = cadenaDeTexto =>{
//     for(let i = 0; i < cadenaDeTexto.length; i++){
//         let respuesta = cadenaDeTexto[i].toUpperCase()
//         console.log(respuesta)
//     }
// }
// mayuscula("hola mundo")

const numerosPares = ArrayDeNumeros =>{
    let respuesta = [];
    for(let i = 0; i < ArrayDeNumeros.length; i++){
        if(ArrayDeNumeros[i] % 2 === 0){
            respuesta.push(ArrayDeNumeros[i])
            console.log(respuesta)
        }
    }
}
numerosPares([20,12,34,21])
