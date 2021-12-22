var mainSection = $('#mainSection');
var battleSection = $('#battleSection');
var key = "daf5d28d8bmsh62dd27af51040efp16ff14jsn47ca0180b1c4";


document.getElementById("searchButton").addEventListener("click", handleSearch);
document.querySelector
showBattleScreen();


function handleSearch() {
	var pokename = document.getElementById("searchText").value.toLowerCase();

	var url = "https://pokedex2.p.rapidapi.com/pokedex/us/" + pokename;

	fetch(url, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "pokedex2.p.rapidapi.com",
			"x-rapidapi-key": key
		}
	}).then(function (response) {
		return response.json();
	}).then(function (data) {
		console.log(data);
		var outputstring = '<div class="card"><div class="card-image"><figure class="image is-2by1"><img src="' + data[0].ThumbnailImage + '" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="' + data[0].ThumbnailImage + '" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4 is-capitalized ">' + pokename + '</p>';
		outputstring += "<h1>The pokemon's id number is: " + data[0].id + "</h1>";
		for (var i = 0; i < data[0].type.length; i++) {
			outputstring += "<h1>The pokemon's type is: " + data[0].type[i] + "</h1>";
		}
		for (var i = 0; i < data[0].weakness.length; i++) {
			outputstring += "<h1>The pokemon's weakness is: " + data[0].weakness[i] + "</h1>";
		}
		document.getElementById("result").innerHTML = outputstring;
	});
}

function showBattleScreen() {
var randoPokemon
var url = "https://pokedex2.p.rapidapi.com/pokedex/us/";

fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "pokedex2.p.rapidapi.com",
		"x-rapidapi-key": key
	}
}).then(function (response) {
	return response.json();
}).then(function (data) {
	var number = Math.floor(Math.random() * data.length)
	console.log(number)
});


}
