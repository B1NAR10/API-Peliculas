var express = require('express');
app = express()
var puerto = 3000
let url_base  = 'https://api.themoviedb.org/3/'
api_key  = '7684d07d76399b5b4aec142a552fc8ab'
app.use(express.json())

app.get('/busqueda', async function(req, res){

    const fetch = require('node-fetch')
    const buscar = `${url_base}search/movie?api_key=${api_key}&query=${req.query.name}&language=es-ES`
    var options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        }
    };

    // Peticion para Atributos de Peliculas
    let pelicula = await fetch(buscar, options)
    let peliculaJSon = (await pelicula.json()).results[0]
 
    let objeto_pelicula = {
        titulo: peliculaJSon.title,
        titulo_original: peliculaJSon.original_title,
        puntuacion_media: peliculaJSon.vote_average,
        fecha_estreno: peliculaJSon.release_date,
        sinopsis: peliculaJSon.overview,
        peliculas_similares: []
    }

    // Petición para Peliculas Similares
    const similares = `${url_base}movie/${peliculaJSon.id}/similar?api_key=${api_key}&language=es-ES`
    let peliculas_similares = await fetch(similares, options)
    let peliculas_similaresJSon = (await peliculas_similares.json()).results.slice(0, 5);

    for (const pelicula of peliculas_similaresJSon) {
        
        let pelicula_recomendada = {
            titulo: pelicula.title,
            titulo_original: pelicula.original_title,
            puntuacion_media: pelicula.vote_average,
            fecha_estreno: pelicula.release_date,
            sinopsis: pelicula.overview,
        }    
        objeto_pelicula.peliculas_similares.push(pelicula_recomendada)
    }

    res.json(objeto_pelicula)

})

app.listen(puerto)
console.log("Funciona!")



