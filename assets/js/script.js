var mainSection = $('#mainSection');
var battleSection = $('#battleSection');
var key = "98c7599992msh5ea6f0b3a380ff5p13b5bbjsn24e983bd9684";


document.getElementById("searchButton").addEventListener("click", handleSearch);
document.addEventListener("keypress", function(e) {
	if (e.key === 'Enter') {
		handleSearch();
	}
});



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
		var outputstring = '<div class="card"><div class="card-image"><figure class="image is-4by3"><img src="' + data[0].ThumbnailImage + '" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48"><img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></figure></div><div class="media-content"><p class="title is-4">John Smith</p><p class="subtitle is-6">@johnsmith</p></div></div>';
		document.getElementById("result").innerHTML = outputstring;
	});
}

function showBattleScreen() {

}
