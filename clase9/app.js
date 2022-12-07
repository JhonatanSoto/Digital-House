
const peliculas = require('./peliculas.js');



const listaDePeliculas = movies => {
    for (let i = 0; i < movies.length; i++) {
        let lista = movies[i]
        console.log(`PELICULA: ${lista.id} \n Nombre: ${lista.name} \n - Rating: ${lista.rating} \n - Awards: ${lista.awards} \n - Duracion: ${lista.duracion} \n - Precio: $${lista.price} \n - Genero: ${lista.genero} `)
    }
}
listaDePeliculas(peliculas)
