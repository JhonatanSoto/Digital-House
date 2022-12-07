/**
 * 1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
    generar de manera automática la tabla de multiplicar del 1 al 10.

2. Lo ideal es que función muestre al usuario algo así:
*/

const tablaDeMultiplicar = () =>{
    let multiplicado = 1;
    for(let i = 1; i <= 10; i++){
        let producto = i * multiplicado
        let resultado = `${multiplicado} * ${i} = ${producto}`
        console.log(resultado)
    }
}
tablaDeMultiplicar()