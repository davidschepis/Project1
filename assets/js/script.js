var mainSection = $('#mainSection');
var key = "525972aca5mshc6f9ab122d83ec0p1e8676jsn73a7bc910ae2";

var bb = document.getElementById("battleLink");
var battleLinkImg = document.getElementById('result').getAttribute('data-img');


document.getElementById("searchButton").addEventListener("click", handleSearch);

//Calls API and creates a stylized card on the screen
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
		var outputstring = '<div class="card"><div class="card-image"><figure class="image is-90x100"><img src="' + data[0].ThumbnailImage + '" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48">' + `<button id="battleLink">
		<a href="battle.html"><img height="150" width="150" src=${battleLinkImg} alt="battle link img">
	</a>
</button>` + '</figure></div><div class="media-content"><p class="title is-4 is-capitalized ">' + pokename + '</p>';

		outputstring += "<h1>The pokemon's id number is: " + data[0].id + "</h1>";

		for (var i = 0; i < data[0].type.length; i++) {
			outputstring += "<h1>The pokemon's type is: " + data[0].type[i] + "</h1>";
		}
		for (var i = 0; i < data[0].weakness.length; i++) {
			outputstring += "<h1>The pokemon's weakness is: " + data[0].weakness[i] + "</h1>";
		}


		document.getElementById("result").innerHTML = outputstring;

		localStorage.setItem("pokename", pokename);

		showBattleButton();
	});
}

//Makes battle button visible
function showBattleButton() {
	bb.style.visibility = "visible";
}

//Saves the pokemons name into local storage and switches webpages
$('body').on('click', '#battleLink', function () {
	localStorage.getItem("pokename");
	window.location.href = "battle.html";
});

