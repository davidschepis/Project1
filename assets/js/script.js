var mainSection = $('#mainSection');
var key = "67cb78248emsh1e4e33cf18493bcp19763bjsne115c744c684";


document.getElementById("searchButton").addEventListener("click", handleSearch);


function handleSearch() {
	var pokename = document.getElementById("searchText").value;
	
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
		var outputstring = "";
		outputstring += "<h1>The pokemon's name is: " + data[0].name + "</h1>";
		for (var i = 0; i < data[0].type.length; i++) {
			outputstring += "<h1>The pokemon's type is/are: " + data[0].type[i] + "</h1>";
			outputstring += "<h1>The pokemon's weakness is/are: " + data[0].weakness[i] + "</h1>";
		}
		document.getElementById("result").innerHTML = outputstring;
	});
}

