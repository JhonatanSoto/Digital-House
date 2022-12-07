/**Ejecutando la función con el siguiente parámetro:
laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  

// El resultado que nos devuelve la función es el siguiente: 
"El día es lunes";  
Otro ejemplo:

// Ejecutando la función con el siguiente parámetro:
laClaveSecreta( ["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"] );  

// El resultado que nos devuelve la función es el siguiente: 
"Clave descifrada";  
 */


const laClaveSecreta = (array) =>{
     return array.filter((elem) => {
          return elem != "*";
     })
     


}
console.log(laClaveSecreta(["a", "*", "d", "a", "r", "f", "*", "i", "c", "*", "s", "e", "d", " ", "e", "*", "v", "a", "l", "C"]))