var mainSection = $('#mainSection');
<<<<<<< HEAD
var key = "79082b5452msh3102612af9c86a0p15907cjsn0e4c9ba9c769";
=======
var key = "eab5556802msh015a1179aab9ebep125e68jsna19504601964";

var bb = document.getElementById("battleLink");
var battleLinkImg = document.getElementById('result').getAttribute('data-img');

>>>>>>> a5df9531cfa85c893fb54aa41ed5c30ccc850a5a

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
		//console.log(data);
		var outputstring = '<div class="card"><div class="card-image"><figure class="image is-90x100"><img src="'
			+ data[0].ThumbnailImage + '" alt="Pokemon"></figure></div><div class="card-content"><div class="media"><div class="media-left"><figure class="image is-48x48">'
			+ `<button id="battleLink"><a href="battle.html"><img height="150" width="150" src=${battleLinkImg} alt="battle link img"></a></button>`
			+ '</figure></div><div class="media-content"><p class="title is-4 is-capitalized ">' + pokename + '</p>';

		outputstring += "<h1>The pokemon's id number is: " + data[0].id + "</h1>";

		for (var i = 0; i < data[0].type.length; i++) {
			outputstring += "<h1>The pokemon's type is: " + data[0].type[i] + "</h1>";
		}
		for (var i = 0; i < data[0].weakness.length; i++) {
			outputstring += "<h1>The pokemon's weakness is: " + data[0].weakness[i] + "</h1>";
		}


		document.getElementById("result").innerHTML = outputstring;

		localStorage.setItem("pokename", pokename);

	});
}


<<<<<<< HEAD
	bb.style.visibility = "visible"

}

$('body').on('click', '#battleLink', function () {
	localStorage.getItem("pokename")
=======
//Saves the pokemons name into local storage and switches webpages
$('body').on('click', '#battleLink', function () {
	localStorage.getItem("pokename");
>>>>>>> a5df9531cfa85c893fb54aa41ed5c30ccc850a5a
	window.location.href = "battle.html";
});

<<<<<<< HEAD

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

function addLi() {

	var txtVal = document.getElementById('searchText').value,
		listNode = document.getElementById('searchHistory'),
		liNode = document.createElement("LI"),
		txtNode = document.createTextNode(txtVal);

	liNode.appendChild(txtNode);
	listNode.appendChild(liNode);

}


=======
>>>>>>> a5df9531cfa85c893fb54aa41ed5c30ccc850a5a
