/**
 * 1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript (.js).
 
2. Desarrolla un programa que le indique al usuario - en base a su perfil o
    responsabilidades - qué puede hacer o no en el sistema. Para eso debes crear una
    variable llamada: “perfil” y asignarle alguno de estos valores:
    a. administrador
    b. asistente
    c. invitado.
    Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
    console.log():
A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
    mensaje: “Debe especificar el perfil del usuario”.
B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
    consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
    uso del sistema”.
C. Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
    este mensaje: “Usted sólo tiene permisos de registrar, modificar y
    consultar datos”.
D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
    mensaje: “Usted sólo tiene permisos de consultar datos”.
E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
    este mensaje: “Debe especificar un perfil válido”.
 */

// Actividad hecha con if
// let perfil = "invitado"
// if(perfil == ""){
//     console.log("Debe especificarse el perfil del usuario")
// } else if(perfil == "Administrador"){
//     console.log("usted tiene todos los privilegios de uso del sistema")
// }else if( perfil == "asistente"){
//     console.log("usted tiene permisos de registrar; modificar y consultar datos")
// }else if(perfil == "invitado"){
//     console.log("usted solo tiene permisos de consultar datos")
// }else{
//     console.log("debe especificar un perfil valido")
// }

// Actividad hecha con switch y un metodo toLowerCase() (este metodo vulve a tods los strings a minusculas)
// let perfil2 = "invitado".toLowerCase()
// switch(perfil2){
//     case  "":
//         console.log("Debe especificarse el perfil del usuario")
//         break;
//     case "administrador":
//         console.log("usted tiene todos los privilegios de uso del sistema")
//         break;
//     case "asistente":
//         console.log("usted tiene permisos de registrar; modificar y consultar datos")
//         break;
//     case "invitado":
//         console.log("usted solo tiene permisos de consultar datos")
//         break;
//     default: 
//         console.log("debe especificar un perfil valido") 
// }
