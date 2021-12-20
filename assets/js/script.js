var key = "049747d88amsh374fc92b0662df7p1e630ajsnc30c45975ae6";
var url = "https://pokedex2.p.rapidapi.com/";
fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    document.getElementById("mainSection").innerHTML = data;
});