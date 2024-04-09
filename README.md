# API-Peliculas

Crear un servicio REST que:

- Muestre información sobre una película indicando su título
- Muestre una lista de películas similares

Para esto, consumir la API de The Movie Database (TMD) (necesario registrarse):


https://developers.themoviedb.org/3/getting-started/introduction


La información a devolver es la siguiente:

- Título
- Título original
- Puntuación media
- Fecha de estreno
- Sinopsis / Descripción
- Lista (máximo 5) de películas de temática similar. NOTA: tendrás que utilizar otra operación para recuperarlas. Mostrarla en este formato, por ejemplo:
	- Título película 1 (1969), Título película 2 (1998)
	Título de película y entre paréntesis el año de estreno.


** Si para una búsqueda por título la API de TMD devuelve más de un resultado, devolver los resultados sobre el primero de ellos.


- Se puede utilizar cualquier lenguaje (preferible NET core)

<br>


[Dirección Local: http://localhost:3000/busqueda?name="nombre_pelicula"](http://localhost:3000/busqueda?name="El Señor de los Anillos")
