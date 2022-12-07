const parOImpar = numeroDelUsuario =>{
    if(numeroDelUsuario % 2 === 0){
        return `El numero ingresado: ${numeroDelUsuario} es PAR`
    }else{
        return `El numero ingresado: ${numeroDelUsuario} no es PAR`
    }
}
// console.log(parOImpar(10))

const numeroDivisible =  (number,divisible) =>{
    if(number  / divisible === 0 || number / divisible === divisible){
        return `El numero ${number} que ingreso si es divisible a ${divisible}`
    }else{
        return `El numero ingresado no es divisible entre ${divisible}`
    }
}
// console.log(numeroDivisible(25,5))

const numeroMayor = (num1, num2) =>{
    if(num1 > num2){
        return `Numeros Ingresados: ${num1} y ${num2} donde ${num1} es mayor que ${num2}.`
    }else if(num2 > num1){
        return `Numeros Ingresados: ${num1} y ${num2} donde ${num2} es mayor que ${num1}.`
    }else{
        return `Numeros Ingresados: ${num1} y ${num2} son iguales.`
    }
}
// console.log(numeroMayor(49,49))

const numerosMayorIFT = (numero1, numero2) =>{
    let num1 = numero1;
    let num2 = numero2;
    let resultado = num1 > num2 ? `Numeros ingresado: ${numero1} y ${numero2} donde ${num1} es mayor que ${num2}` : `Numeros ingresado: ${numero1} y ${numero2} donde ${num2} es mayor que ${num1}`;
    return resultado
}
// console.log(numerosMayorIFT(10,3))


//startsWith sirve para verificar si comienzao no un carracter asignado, puede resivir 1 o 2 parametros.
const comienzoDeUnCarracter = (stringDelUsuario) =>{
    if(typeof(stringDelUsuario[0])){
        return `La el carracter ingresado, es correcto ya que dicho oracion comienza con ese carracter \n primer carracter: ${stringDelUsuario[0]}.`
    }else{
        return `NO, ese carracter asignado no comienza su oracion.`
    }
}

const triangulo = (angulo1, angulo2, angulo3) =>{
    let suma = angulo1 + angulo2 + angulo3
    if(suma === 180){
        return `La suma de los tres Angulos internos es de: ${suma}° \n es un TRIANGULO`
    }else{
        return `la suma de los tres angulos no es igual a ${suma}`
    }
}

const mayuscula = string =>{
    let palabra = string[0].toUpperCase()
    if(palabra == string[0]){
        return "Si, la palabra comienza con mayuscula"
    }else{
        return `NO, la palabra no comienza con mayuscula`
    }
}

const bisiesto = year =>{
    let suma;
    if(year / 4 ===  parseInt(year / 4)){
        return `El año ${year} es Bisiesto`
    }else{
        return `El año ${year} no es Bisiesto.`
    }
}

const adivinanza = (usuario) =>{
    let ramdon = Math.floor(Math.random() * (10 - 1) + 1);
    console.log(ramdon)
    if(ramdon === usuario){
        return "buen trabajo"
    }else{
        return "No corresponde"
    }

}

// class Animal {
//     constructor(nombre, genero){
//         this.nombre = nombre;
//         this.genero = genero;
//     }
//     ladrar(){
//         console.log("Guauuu! guauu!!")
//     }
//     saludar(){
//         console.log(`Hola me llamo ${this.nombre} y la re vivo`)
//     }
// }

// class Perro extends Animal{
//     constructor(nombre, genero, tamanio){
//         super(nombre, genero)
//         this.tamanio = tamanio
//     }
// }



// const scooby = new Perro("Scooby", "Macho", "Gigante");
// const shaggy = new Perro("Shaggy","No binario","promedio")

const edad = edadDelUsuario =>{
    if(edadDelUsuario <= 13) {
        return("Es niño");
    }else if(edadDelUsuario <= 18 ){
         return("Es adolecente");
    } else{
         return("Es adulto");
    }
}
if(!false && !false){
    //console.log("La expresion es verdadera")
}
if(!false || !true){
    //console.log("La exprecion es verdadera")
}



// LOOPS

// n = 0;
// x = 0;
// while (n < 3) {
//   n ++;
//   x ++
//   let res = x + n 
//   console.log(`numero de N: ${n}`)
//   console.log(`numero de X: ${x}`)
//   console.log(`suma de  ${x} + ${n} = ${res}`)
// }


const contador = () =>{
    let numeroDelUsuario = prompt("Hola Usuario, digame su Numero.")
    let contador = 0;

    while( contador < numeroDelUsuario){
        contador ++
        console.log(contador)
    }

}


const contador2 = ()=>{
    let numeroDelUsuario = prompt("Hola Usuario, digame su Numero.");
    let contador = 0;
    while(contador < numeroDelUsuario){
        contador = contador + 2
        console.log(contador)
    }
}

const disminuir = ()=>{
    let numeroDelUsuario = prompt("Hola Usuario, digame su Numero.");
    let diminucion = 1;

    while(diminucion < numeroDelUsuario){
        numeroDelUsuario--
        console.log(numeroDelUsuario)
    }
}
const tablaDeMultiplicar = num =>{
    let multiplicador = 0;
    while(multiplicador < 10){
        multiplicador++ 
        const res = multiplicador * num
        console.log(`${multiplicador} x ${num} = ${res}`)
    }
}


let j = /^([0-9])*$/

if(4 ==j){
    console.log(hola)
}



