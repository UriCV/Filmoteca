const requestURL = 'http://localhost:3000/movies'


async function fetchMoviesJSON(){
    let result = await fetch(requestURL)
    .then(async resp => await resp.json());
    return result;
}

const movieCollection = document.getElementById('movieSection')
function renderMovies(movies) {
  movieCollection.innerHTML = ""
  movies.forEach(function (movie) {
    movieCollection.innerHTML += `
    <div class="card" style="width: 18rem;">
        <img src="${movie.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title1">${movie.titulo}</h4>
            <h5 class="card-title">${movie.director}</h5>
            <h6 class="card-title">${movie.year}</h6>
            <h6 class="card-title">${movie.clasificacion}</h6>
            <p class="card-text">${movie.sinopsis}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Cast: </strong>${movie.reparto}</li>
            <li class="list-group-item"><strong>Adaptation: </strong>${movie.adaptacion}</li>
            <li class="list-group-item"><strong>Rating: </strong>${movie.rating}</li>
        </ul>
        <div class="card-body1">
            <button type="button" class="btn btn-outline-danger">Edit</button>
            <button type="button" class="btn btn-outline-danger">Add Comment</button>
            <button type="button" class="btn btn-danger">Delete</button>
        </div>
    </div>`
  })
}

const addBtn = document.querySelector('#add-movie-form')
const movieForm = document.querySelector('.movie-form')
let addMovie = false

addBtn.addEventListener('click', () => {
    
    addMovie = !addMovie
    if (addMovie) {
        movieForm.style.display = 'flex'

    } else {
        movieForm.style.display = 'none'
    }
})

const addMovieForm = document.querySelector('.movie-form')
addMovieForm.addEventListener('submit', function (event) { //submit se refiere al boton que le damos en el formulario para añadir un elemento 
    fetch(requestURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            titulo: `${event.target.titulo.value}`,
            img: `${event.target.img.value}`,
            director: `${event.target.director.value}`,
            year: `${event.target.year.value}`,
            clasificacion: `${event.target.clasificacion.value}`,
            reparto: `${event.target.reparto.value}`,
            sinopsis: `${event.target.sinopsis.value}`,
            adaptacion: `${event.target.adaptacion.value}`,
            rating: `${event.target.rating.value}`
        })
    })
    .then(resp => resp.json())
    .then(() => location.reload());
})

document.addEventListener('DOMContentLoaded', () => {
    fetchMoviesJSON().then(movies => {
        renderMovies(movies);
    })
})

/*
director: `${event.target.director.value}`,
year: `${event.target.year.value}`,
clasificacion: `${event.target.clasificacion.value}`,
reparto: `${event.target.reparto.value}`,
sinopsis: `${event.target.sinopsis.value}`,
,
img: `${event.target.img.value}`,
rating: `${event.target.rating.value}`,
comentario: `${event.target.comentario.value}`*/

//id: `${event.target.id.value}`,