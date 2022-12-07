/**
 * El Tech Leader nos informa que debemos efectuar un código que permita calcular el saldo
    de la cuenta de un cliente de la Institución Financiera. Tu responsabilidad será ir
    ejecutando cada una de las siguientes consignas para lograr el objetivo:

1. Crear un array que contenga las operaciones bancarias realizadas por el cliente,
    tomando en cuenta que los depósitos serán representados por valores positivos y
    los retiros por valores negativos.

2. Crear una función (Callback) que reciba como parámetro el array creado. La función
    tendrá la responsabilidad de calcular y devolver el saldo total de depósitos, el saldo
    actual de retiros y el saldo actual del cliente.
    
3. Crear otra función que reciba como parámetros el nombre y el apellido del cliente así
    como el array que contiene las operaciones bancarias. Esta función tendrá la
    responsabilidad de retornar el nombre y apellido del cliente y el saldo total de
    depósitos, el saldo actual de retiros y el saldo actual.

    Una vez creado el programa, ejecutalo y para verificar los resultados solicitados, invoca a la
    segunda función, asigna diferentes valores o argumentos. No olvides utilizar el console.log()
    para mostrar los resultados al usuario, de acuerdo al siguiente mensaje:
*/



let operacionesBancarias = [200,120,-122,201,-12];
const funcionCallback = array => {
    let depositoActual = 0;
    let retiroActual = 0;
    let saldoActual = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0) depositoActual += array[i];
        if(array[i] < -1) retiroActual += array[i];
        if(array[i] !== 0) saldoActual += array[i]
    }
    return [depositoActual,retiroActual,saldoActual]
}
const cliente = (nombre, apellido , callback, arreglo) =>{
    let deposito = callback(arreglo);
    let retiro = callback(arreglo);
    let saldoActual = callback(arreglo);
    return  `Estimado ${nombre} ${apellido}: 
El monto total de los depositos es de: $${deposito[0]}
El monto total de  los retiros es de: $${retiro[1]}
Por lo tanto, su saldo actula en la cuenta en la cuenta es de: $${saldoActual[2]}`
}
console.log(cliente("jhonatan", "soto", funcionCallback, operacionesBancarias))