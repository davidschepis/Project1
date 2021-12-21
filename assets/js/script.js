var url = "https://pokedex2.p.rapidapi.com/pokedex/us/pikachu";
var key = "67cb78248emsh1e4e33cf18493bcp19763bjsne115c744c684";
var mainSection = $('#mainSection');

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
    //mainSection.text(data[0].name); //print the pokemons name to the page
});