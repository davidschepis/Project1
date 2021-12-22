var battleSection1 = $('#battleSection1');
var battleSection2 = $('#battleSection2');

var key = "daf5d28d8bmsh62dd27af51040efp16ff14jsn47ca0180b1c4";


var userHealth = 100;
var compHealth = 100;

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

$('body').on('click', '#attackButton', function() {
    var number = Math.floor(Math.random() * 100);
    compHealth -= number;
    if (compHealth <= 0) {
        showWin();
    }
    $('#compHealth').val(compHealth);
    var audio = new Audio('./assets/music/hit.mp3');
    audio.play();

    number = Math.floor(Math.random() * 100);
    userHealth -= number;
    if (userHealth <= 0) {
        showLose();
    }
    $('#playerHealth').val(userHealth);
});

function showWin() {
    var h1 = $('<h1>');
    h1.text("You're winner!");
    battle.text("");
    battle.append(h1);
}

//THis function
function showLose() {
    var h1 = $('<h1>');
    h1.text("You is loser!");
    battle.text("");
    battle.append(h1);
}