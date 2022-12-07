/**
 * El usuario debe introducir dos valores numéricos por teclado y 
    la aplicación deberá indicar cual es el mayor, el primero o el segundo.

    La idea es usar las sentencias if reducidas (cond ? ture:false)
 */

// let numero1 = 2;
// let numero2 = 4;

// let resultado = (numero1 > numero2) ? "dos no es mayor que cuatro" : "es falso ,cuatro es mayor que dos"
// console.log(resultado)


/**
 * El usuario debe entrar un número y su cuadrado. Si es correcto el script enviará
  un mensja ede acierto en caso contrario dirá que se produjo un error.

Se trata de usar el if resumido (cond?true:false)
 */
// let numero = 3
// let caudrado = 9

// let res = (caudrado === numero * numero) ? "true":"false"
// console.log(res)

function sePoneLaOlla (dia){
   if(dia){
       console.log("¡Pongamos la olla, hoy se comen pastas!");
       return 
   }else if(dia == "domingo"){
       console.log("Mejor lo dejamos para el domingo")
       return
   }
}
sePoneLaOlla("lunes")
