let multidimencional = [["html5", 4000], ["css3",5000],
["javascript", 10000],["react", 7000], ["nodejs", 15000]]
const alumno = ["HTML5","CSS3","JAVASCRIPT","REACT","NODEJS"]
const functionCallback = (cursos,alum) =>{
    let conteo = 0;
    let resul  = 0;
    for(let x = 0; x <= alum.length; x++){{
        for(let i = 0; i < cursos.length; i++){
            let res = cursos[i][0];
            let numbers = cursos[i][1];
            res = res.toUpperCase()
            if(res === resul){
                conteo += numbers
            }
            }
        }
        resul = alum[x]
    }
    return conteo


}
functionCallback(multidimencional,alumno)

// 2) segunda funcion


/**
 * 
    Estimado Luis Fuentes, en función de los cursos seleccionados:
1.- HTML5
2.- CSS3
3.- JAVASCRIPT
4.- NODEJS
El monto total a pagar es de: $34000.
Bienvenido a la gran aventura Digital House.
 */

const segundaFuncion = (nombre, apellido,array1,array2,callback) =>{
    let resultado = callback(array1,array2);
    return `Estimado ${nombre} ${apellido} su monto a pagar es: ${resultado}`

}

console.log(segundaFuncion("jhonatan", "soto", multidimencional,alumno,functionCallback));