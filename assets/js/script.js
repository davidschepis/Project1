var mainSection = $('#mainSection');
var key = "60fa9a3f98msh0ea03cc33f5cc55p11b3efjsnbaf6d9d62ba8";

var bb = document.getElementById("battleLink");
var battleLinkImg = document.getElementById('result').getAttribute('data-img');
console.log(battleLinkImg)


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
		var outputstring = '<div class="card"><div class="card-image"><figure class="image is-2by1"><img src="' + data[0].ThumbnailImage + '" alt="Placeholder image"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48">' + `<button id="battleLink">
		<a href="battle.html"><img height="150" width="150" src=${battleLinkImg} alt="battle link img">
	</a>
</button>` + '</figure></div><div class="media-content"><p class="title is-4 is-capitalized ">' + pokename + '</p>';
		// 		outputstring += `<button id="battleLink">
		// 		<a href="battle.html"><img height="50" width="50" src=${battleLinkImg} alt="battle link img">
		// 	</a>
		// </button>`
		outputstring += "<h1>The pokemon's id number is: " + data[0].id + "</h1>";

		// 	outputstring += `<button id="battleLink">
		// 		<a href="battle.html"><img height="100" width="100" src=${battleLinkImg} alt="battle link img">
		// 	</a>
		// </button>`
		for (var i = 0; i < data[0].type.length; i++) {
			outputstring += "<h1>The pokemon's type is: " + data[0].type[i] + "</h1>";
		}
		for (var i = 0; i < data[0].weakness.length; i++) {
			outputstring += "<h1>The pokemon's weakness is: " + data[0].weakness[i] + "</h1>";
		}
		console.log(outputstring)

		document.getElementById("result").innerHTML = outputstring;

		localStorage.setItem("pokename", pokename)

		showBattleButton()
	});
}

function showBattleButton() {
	// var bb = document.getElementById("battleLink");

	bb.style.visibility = "visible"

}

$('body').on('click', '#battleLink', function () {
	localStorage.getItem("pokename")
	window.location.href = "battle.html";

});


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
