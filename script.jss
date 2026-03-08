async function searchMovie(){

const movieName = document.getElementById("searchInput").value;

const url = `https://www.omdbapi.com/?t=${movieName}&apikey=YOUR_API_KEY`;

const response = await fetch(url);

const data = await response.json();

if(data.Response === "True"){

document.getElementById("movieResult").innerHTML = `
<h2>${data.Title}</h2>
<img src="${data.Poster}" width="200">
<p>Year: ${data.Year}</p>
<p>Rating: ${data.imdbRating}</p>
`;

}else{

document.getElementById("movieResult").innerHTML = "Movie not found";

}

}
