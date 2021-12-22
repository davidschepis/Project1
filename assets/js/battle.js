var battleSection1 = $('#battleSection1');
var battleSection2 = $('#battleSection2');
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
        var img1 = $('<img>');
        var number = Math.floor(Math.random() * data.length);
        img1.attr("src", data[number].ThumbnailImage);
        battleSection1.append(img1);
        var button = $('<button>');
        button.addClass("button");
        button.addClass("is-primary");
        button.text("Attack");
        button.attr("id", "attackButton");
        battleSection1.append(button);
        
        var img2 = $('<img>');
        var number = Math.floor(Math.random() * data.length);
        img2.attr("src", data[number].ThumbnailImage);
        battleSection2.append(img2);


        
    });
}