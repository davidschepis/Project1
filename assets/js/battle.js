var battle = $('#battle');
var key = "daf5d28d8bmsh62dd27af51040efp16ff14jsn47ca0180b1c4";

var userHealth = 100;
var compHealth = 100;

showBattleScreen();

//This function shows two pokemon on the screen and creates the attack and defend button
function showBattleScreen() {
    // var url = "https://pokedex2.p.rapidapi.com/pokedex/us/";
    // fetch(url, {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "pokedex2.p.rapidapi.com",
    //         "x-rapidapi-key": key
    //     }
    // }).then(function (response) {
    //     return response.json();
    // }).then(function (data) {
    //     console.log(data);
    //     var card1 = $('<div>');
    //     var card2 = $('<div>');
    //     card1.html(createCard(data, true));
    //     card2.html(createCard(data, false));
    //     card1.addClass("column is-6");
    //     card2.addClass("column is-6");

    //     battle.append(card1);
    //     battle.append(card2);

    // });
    var data1 = ["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png", "Bulbasaur"];
    var data2 = ["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png", "Ivysaur"];
    var card1 = $('<div>');
    var card2 = $('<div>');
    card1.html(createCard(data1, true));
    card2.html(createCard(data2, false));
    card1.addClass("column is-6");
    card2.addClass("column is-6");

    battle.append(card1);
    battle.append(card2);




}



function createCard(data, isPLayer) {
    var number = Math.floor(Math.random() * data.length);
    var displayString = "";
    displayString += '<div class="card">';
    displayString += '<div class="card-image">';
    displayString += '<figure class="image is-8by6">';
    //displayString += '<img src="' + data[number].ThumbnailImage + '" alt="Pokemon image">';
    displayString += '<img src="' + data[0] + '" alt="Pokemon image">';
    displayString += '</figure>';
    displayString += ' </div>';
    displayString += '<div class="card-content">';
    displayString += '<div class="media">';
    displayString += '<div class="media-left">';
    displayString += '</div>';
    displayString += '<div class="media-content">';
    //displayString += '<p class="title is-4">' + data[number].name + '</p>';
    displayString += '<p class="title is-4">' + data[1] + '</p>';
    if (isPLayer) {
        displayString += '<p class="subtitle is-4"><progress class="progress is-success" value="100" max="100" id="playerHealth"></progress></p>';
    }
    else {
        displayString += '<p class="subtitle is-4"><progress class="progress is-success" value="100" max="100" id="compHealth"></progress></p>';
    }
    displayString += '</div>';
    displayString += '</div>';
    displayString += '<div class="content">';
    if (isPLayer) {
        displayString += '<button class="button is-primary" id="attackButton">Attack</button>';
        displayString += '<button class="button is-primary" id="defendButton">Defend</button>';
        displayString += '<textarea class="textarea" placeholder="Fight!" id="battleText"></textarea>';
    }
    displayString += '<br>';
    displayString += '</div>';
    displayString += '</div>';
    displayString += '</div>';
    return displayString;
}

$('body').on('click', '#attackButton', function () {
    var number = Math.floor(Math.random() * 100);
    var audio;
    var battleString;
    compHealth -= number;
    if (compHealth <= 0) {
        compHealth = 0;
    }
    $('#compHealth').val(compHealth);
    battleString = $('#battleText').val();
    $('#battleText').val(battleString + "You hit for " + number + " damage!\n");
    audio = new Audio('./assets/music/hit.mp3');
    audio.play();
    if (compHealth <= 0) {
        showWin();
    }
    else {
        setTimeout(() => {
            number = Math.floor(Math.random() * 100);
            userHealth -= number;
            if (userHealth <= 0) {
                userHealth = 0;
            }
            $('#playerHealth').val(userHealth);
            battleString = $('#battleText').val();
            $('#battleText').val(battleString + "You were hit for " + number + " damage!\n");
            audio = new Audio('./assets/music/hit2.wav');
            audio.play();
            if (userHealth <= 0) {
                showLose();
            }
        }, 2000);
    }
});

$('body').on('click', '#defendButton', function () {
    userHealth += 50;
    
});

function showWin() {
    $('#battleText').val("You're winner!");
    var audio = new Audio('./assets/music/victory.mp3');
    audio.play();
    document.getElementById("attackButton").disabled = true;
    document.getElementById("defendButton").disabled = true;
}


function showLose() {
    $('#battleText').val("You is loser!");
    var audio = new Audio('./assets/music/lose.mp3');
    audio.play();
    document.getElementById("attackButton").disabled = true;
    document.getElementById("defendButton").disabled = true;
}