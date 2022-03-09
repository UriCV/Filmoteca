const requestURL = 'http://localhost:3000/peliculas'

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJSON().then(movies => {
    console.log(movies)
    for (let index = 0; index < movies.length; index++){
    
        let title = movies[index].titulo;
        let director = movies[index].director;
        let img = movies[index].img;
        let genre = movies[index].clasificacion;
        let year = movies[index].year;
        let sinopsis = movies[index].sinopsis;
        let cast = movies[index].reparto;
        let adapt = movies[index].adaptacion;
        let rating = movies[index].rating;

        movieSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h4 class="card-title1">${title}</h4>
                <h5 class="card-title">${director}</h5>
                <h6 class="card-title">${year}</h6>
                <h6 class="card-title">${genre}</h6>
                <p class="card-text">${sinopsis}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><strong>Cast: </strong>${cast}</li>
                <li class="list-group-item"><strong>Adaptation: </strong>${adapt}</li>
                <li class="list-group-item"><strong>Rating: </strong>${rating}</li>
            </ul>
            <div class="card-body1">
                <button type="button" class="btn btn-outline-danger">Edit</button>
                <button type="button" class="btn btn-outline-danger">Add Comment</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>`
}})

/*const addMovie = document.querySelector('.add-movie-form')
addMovie.addEventListener('submit', function (event) { //submit se refiere al boton que le damos en el formulario para añadir un elemento 
    fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: 13,
            titulo: `${event.target.titulo.value}`,
            director: `${event.target.director.value}`,
            year: `${event.target.year.value}`,
            clasificacion: `${event.target.clasificacion.value}`,
            reparto: `${event.target.reparto.value}`,
            sinopsis: `${event.target.sinopsis.value}`,
            adaptacion: `${event.target.adaptacion.value}`,
            img: `${event.target.img.value}`,
            rating: `${event.target.rating.value}`,
            comentario: `${event.target.comentario.value}`
        })
    })
    .then(resp => resp.json())
    .then(renderMovies)
})*/