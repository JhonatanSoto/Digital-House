// /**
//  * 1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
//  * 
// 2. Crea una función que permita calcular el monto a pagar por el alquiler de un
//     vehículo, que reciba como parámetros: “tipo de vehículo”, “Días de alquiler” y “silla
//     para bebe”.
// 3. Define y realiza los cálculos para obtener el total a pagar, teniendo en cuenta las
//     siguientes consideraciones:
//     ● De acuerdo al tipo de vehículo, se le cobra al cliente un monto por día:
//     ○ Compacto: $14000
//     ○ Mediano: $17000
//     ○ Camioneta: $28000
//     ● Si adicionalmente el cliente requiere la silla para niños, se le cobra un adicional por día
//     de $1200
// 4. Una vez creado el programa, ejecutalo. ¿Recuerdas cómo?
// 5. Para probar las diferentes respuestas invoca a la función, asigna diferentes valores o
//     argumentos. Usando el console.log(), muestra los resultados al usuario:

//     “Estimado cliente: en base al tipo de vehículo compacto alquilado, considerando los 3 días
//     utilizados, el monto total a pagar es de $42000 ” .
//  */

// // arrow function
// const alquilerDeVehiculos = (tipoDeVehiculo,diasDeAlquiler,sillaParaBebe)=>{
//     // La varible vehiculo almacena el valor del vehiculo.
//     let vehiculo = 0;
//     switch(tipoDeVehiculo){
//         case "conpacto":
//             vehiculo = 14000
//             break;
//         case "mediano":
//             vehiculo = 17000
//             break;
//         case "camioneta":
//             vehiculo = 28000
//             break;
//     }
//     // Calculo matematico de el valor de el vehiculo por los dias asignados.
//     let montofinal = vehiculo * diasDeAlquiler;
//     // Calculo matematico si se le agrega la silla del bebe.
//     if(sillaParaBebe){
//         let valorDeLaSilla = 1200;
//         montofinal += (valorDeLaSilla * diasDeAlquiler);
//     }
//     // Con la silla del bebe
//     let masLaSilla = sillaParaBebe? " mas la silla para el bebe" : "";
//     // Sin la silla del bebe
//     let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado,${masLaSilla} considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${montofinal}`;
//     return mensaje;
// }
// console.log(alquilerDeVehiculos("conpacto", 3, false)); // tercer parametro true o false
