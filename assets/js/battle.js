var battleSection = $('#battleSection');
var key = "98c7599992msh5ea6f0b3a380ff5p13b5bbjsn24e983bd9684";



showBattleScreen()


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
        var outputstring = "<img src='"+data[number].ThumbnailImage+"'>";
        console.log(number)
        console.log(outputstring)
        document.getElementById("battleSection2").innerHTML = outputstring;

        var number = Math.floor(Math.random() * data.length)
        outputstring = "<img src='"+data[number].ThumbnailImage+"'>";
        document.getElementById("battleSection1").innerHTML = outputstring;

    });
    
    
    }