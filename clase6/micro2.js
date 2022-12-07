// const peliculas = ['Turno de día', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick','Elvis','Thor amor y trueno']
// const peliculasMasVendida = (peliculaRequerida)=>{
//     let respuesta = peliculas.includes(peliculaRequerida)? peliculaRequerida.toUpperCase(): false
//     peliculas.pop()
//     let primeraPlana = peliculas.unshift(respuesta)
//     return primeraPlana
// }
// peliculasMasVendida('Thor amor y trueno')

// const siguientesPeliculas = "Counter-Strike NOP Vértigo Nick Avatar"
// let listaDePeliculas = siguientesPeliculas.split(" ")
// let eliminarUnElemento = listaDePeliculas.shift()
// const nuevaListaDePeliculas = (Array1, Array2) =>{
//     let newArray = Array1.concat(Array2)
//     return newArray
// }
// console.log(nuevaListaDePeliculas(peliculas,listaDePeliculas))

function noParesDeContarImparesHasta(numero) {
    // Escribe aqui tu código
    for(let i = 1; i <= numero; i += 2){
        console.log(i)
    }
}
noParesDeContarImparesHasta(10)