/*
//el archivo JSON lo convierto a un array y lo guardo en la variable series
var series;

//funcion que lee mi archivo JSON
function loadData(){
    let data = JSON.parse(fs.readFileSync(path.resolve('data','series.json'),'utf8' ,(err,data) => {
        if (err){console.error(err); return;}
        return data;
    }));
    series = data.series;
}

//Cuando guardo los cambios se dispara la función save que recibe como párametro el id
//de la serie
function save(index) {
    //Modifico los datos directamente en el array
    series[index] = {
        titulo: `${document.getElementById('titulo').value}`,
        descripcion: `${document.getElementById('descripcion').value}`,
        fecha_emision: `${document.getElementById('fecha_emision').value}`,
        imagen: `${document.getElementById('imagen').getAttribute('src')}`
    };
    
    //creo una variable con un objeto que tiene la estructura del archvo JSON
    let jsonData = {series : series};

    //con la clase fs sobreescribo el archivo ya con los cambios hechos
    fs.writeFileSync(path.resolve('data','series.json'), JSON.stringify(jsonData), (err) => {
        if (err) throw err;
    });
    //metodo para cerrar un modal en materialize css
    instances.close();
    //mando llamar mi fucnion load que es la que vuelve a llenar mis variables globales
    //como la variable series
    loadData();
}

/*myArray
let index = 0; index < movies.peliculas.length
const deleteBtn = document.createElement("deleteBtn");
deleteBtn.innerText = "deleteBtn"


deleteBtn.addEventListener("click", function () {
    index.splice(i, 1);
    localStorage.setItem("Movies", JSON.stringify(index));
    render();
});*/

/*function deleteMovie(movieId){
    //let Idmovie = movies.peliculas[index].id;
    let movies = movies.peliculas[index];

    if(document.getElementById(`deleteMovie${movieId}`)){
        delete(movies.Idmovi);
        console.log('if');
    }

    console.log(movies);
    console.log(movieId);
}*/

/*var req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/peliculas', false);
req.send(null);
if (req.status == 200)
  dump(req.responseText);*/

  /*fetchMoviesJSON().then(movies => {
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

        movieSection.innerHTML += 
}})*/