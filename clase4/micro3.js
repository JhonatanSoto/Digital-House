/**
 * 1. En la carpeta ya creada crea un nuevo archivo JavaScript (.js).
 * 
2. Desarrollar el programa traductor condicional. La idea es que si el usuario ingresa
    una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”, se le devuelva la
    misma palabra traducida al idioma inglés. Te recomendamos usar la estructura
    switch. Puedes ayudarte con Google Traductor.

    En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje
    que le informe que “La palabra ingresada es incorrecta”.
 */


// Variable
let traductor = "perro"

//Condicional switch
switch (traductor) {
    case traductor = "perro":
        console.log("Dog")
        break;
    case traductor = "gato":
        console.log("Cat")
        break;
    case traductor = "puerta":
        console.log("door")
        break;
        case traductor = "ventana":
        console.log("window")
        break;
    case traductor = "mesa":
        console.log("table")
        break;
    default:
        console.log("la palabra ingresada  es incorrecta")
}

