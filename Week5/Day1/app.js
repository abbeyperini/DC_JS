// Hard mode: could use a text box to replace "batman" in the url above with a search term the user wants 
let key = "7e25de92"
let displayEl = document.getElementById('displayEl');
let details = document.getElementById('details');

let linkID = '';

function showDetails (detailsJSON) {
    let detailsLi = `<li> <h1>${detailsJSON.Title}</h1>
            <p>Year: ${detailsJSON.Year}</p>
            <p>Rated: ${detailsJSON.Rated}</p>
            <p>Released: ${detailsJSON.Released}</p>
            <p>Director: ${detailsJSON.Director}</p> </li>`;
    
    details.innerHTML = detailsLi;
}

function getDetails(clickedID, callback) {
    let detailsRequest = new XMLHttpRequest();
    linkID = "http://www.omdbapi.com/?i=" + clickedID + "&apikey=" + key;
    detailsRequest.open("GET", linkID);
    detailsRequest.addEventListener("load", function() {
        let result = JSON.parse(detailsRequest.responseText);
        callback(result);
    });
    detailsRequest.send();
};


function getAllMovies(search, callback) {
    let request = new XMLHttpRequest();
    request.open("GET", "http://www.omdbapi.com/?s=" + search + "&apikey=" + key);
    request.addEventListener("load", function() {
        let result = JSON.parse(this.responseText);
        callback(result);
    })
    request.send();
};

function displayAllMovies(moviesJSON) {
    let movies = moviesJSON.Search.map((movie) => {
        return `<li onclick="getDetails('${movie.imdbID}', showDetails)">
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <label>${movie.Title}</label>
            </li>`
    });

    movies = movies.join('')
    
    displayEl.insertAdjacentHTML('beforeend', movies)
};

getAllMovies("batman", displayAllMovies);

