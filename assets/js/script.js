var mainSection = $('#mainSection');


document.getElementById("searchButton").addEventListener("click", handleSearch);


function handleSearch() {
	var pokename = document.getElementById("searchText").value;
	
	var url = "https://pokedex2.p.rapidapi.com/pokedex/us/" + pokename;
	var key = "67cb78248emsh1e4e33cf18493bcp19763bjsne115c744c684";

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
		
		document.getElementById("mainSection").innerHTML = "<h1>" + data[0].name + "</h1>";
	});
}

