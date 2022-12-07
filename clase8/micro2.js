const graduadosDeHTML5 = "30 45 25 34 18 23 16 50 72 70";
const graduadosDeCSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
const graduadosDeJAVASCRIPT = "70 65 58 45 23 57 34 17 72";
const graduadosDeNODEJS = "45 56 73 34 65 72 70 32";

let array1 = graduadosDeHTML5.split(" ");
let array2 = graduadosDeCSS3.split(" ");
let array3 = graduadosDeJAVASCRIPT.split(" ");
let array4 = graduadosDeNODEJS.split(" ")

const alumnosGraduados = (arr1,arr2,arr3,arr4, numero) =>{
    if(numero == 1) return `Promedio Actual: ${calculoDePromedio(arr1)}`
    if(numero == 2) return `Promedio Actual: ${calculoDePromedio(arr2)}`
    if(numero == 3) return `Promedio Actual: ${calculoDePromedio(arr3)}`
    if(numero == 4) return `Promedio Actual: ${calculoDePromedio(arr4)}`
}

const calculoDePromedio = promedio =>{
    let conteo = 0;
    for(let i = 0; i < promedio.length; i++){
        let sub = promedio[i];
        conteo = conteo + parseInt(sub)
    }
    conteo /= promedio.length
    return conteo
}

console.log(alumnosGraduados(array1,array2,array3,array4,4))
