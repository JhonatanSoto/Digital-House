/**
 * 
 * 1. Crea una carpeta de trabajo y dentro de ella crea un archivo JavaScript (.js).
    Vamos a afianzar nuestros conocimientos sobre arrays y strings realizando diferentes
    acciones sobre ellos. Verificaremos si se comportan como esperamos u ocurren resultados
    diferentes a los esperados.

2. Define un array que contenga un conjunto de seis (6) productos de
    electrodomésticos. 

3. Ejecutar sobre el array creado las siguientes acciones:

● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por
    la consola los resultados.
● Extraer el primer elemento del array y agregarlo al final del mismo.
● Agregar al final del array dos (2) nuevos productos.
● Mostrar por la consola la cantidad de elementos que contiene el array.
● Buscar un elemento del array y crear una condición responsable de establecer si
    existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
    “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
    no existe”.
● Unificar todos los elementos del array en una cadena de texto (string), separando los
    elementos por espacios en blanco.
● Determinar la cantidad de elementos que posee la cadena de texto obtenida.
● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la
    función adecuada para ello.
● Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
    de la cadena de texto. Tener en cuenta que los elementos deben estar separados por
    una coma.
 */


// a) ● Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.

const electrodomesticos = ["heladera","lavarropas", "microondas", "cafetera","licuadora","horno"];
// let random = electrodomesticos[Math.floor(Math.random() * (electrodomesticos.length ))]
// console.log(random)

// b) ● Extraer el primer elemento del array y agregarlo al final del mismo.

// let primerElemento = electrodomesticos.shift()
// console.log(primerElemento)
// electrodomesticos.push(primerElemento)
// console.log(electrodomesticos)

// c) ● Agregar al final del array dos (2) nuevos productos.

// electrodomesticos.push("freezer","tostadora")
// console.log(electrodomesticos)

// d) ● Mostrar por la consola la cantidad de elementos que contiene el array.

// console.log(electrodomesticos)
// e)
 /**
● Buscar un elemento del array y crear una condición responsable de establecer si
    existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
    “Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
    no existe”.
*/
// const buscarElemento = (elemento) =>{
//     let element = electrodomesticos.includes(elemento)? "“Producto encontrado”" : "“El producto buscado no existe”"
//     return element
// }
// console.log(buscarElemento("heladera"))


// f) ● Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
let respuesta = electrodomesticos.join(" ")
console.log(respuesta)

// g) ● Determinar la cantidad de elementos que posee la cadena de texto obtenida.

// let  cantidad = respuesta.split(" ")
// console.log(cantidad)
// console.log(cantidad.length)

// h) ● Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
let res = respuesta.replace("heladera","secarropas")
console.log(res)
let cantidad = res.split(" ")
console.log(cantidad)