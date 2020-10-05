// Hard mode: could use a text box to replace "batman" in the url above with a search term the user wants 
// Here is your key: 7e25de92


let request = new XMLHttpRequest();
let displayEl = document.getElementById('displayEl');
let details = document.getElementById('details');

let linkID = '';

function showDetails(clickedID) {
    let detailsRequest = new XMLHttpRequest();
    linkID = "http://www.omdbapi.com/?i=" + clickedID + "&apikey=7e25de92";
    detailsRequest.open("GET", linkID);
    detailsRequest.addEventListener("load", function() {
        let result = JSON.parse(detailsRequest.responseText);
        let detailsLi = `<li> <h1>${result.Title}</h1>
            <p>Year: ${result.Year}</p>
            <p>Rated: ${result.Rated}</p>
            <p>Released: ${result.Released}</p>
            <p>Director: ${result.Director}</p> </li>`;
        details.innerHTML = detailsLi;
    });
    detailsRequest.send();
};


request.addEventListener("load", function() {
    
    let result = JSON.parse(this.responseText);
    let movies = result.Search.map((movie) => {
        return `<li onclick="showDetails('${movie.imdbID}')">
            <img src="${movie.Poster}" alt="${movie.Title} Poster">
            <label>${movie.Title}</label>
            </li>`
    });

    movies = movies.join('')
    
    displayEl.insertAdjacentHTML('beforeend', movies)
});

request.open("GET", "http://www.omdbapi.com/?s=batman&apikey=7e25de92");
request.send();