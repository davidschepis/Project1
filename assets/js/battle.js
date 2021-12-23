var battleSection1 = $('#battleSection1');
var battleSection2 = $('#battleSection2');
var battle = $('#battle');
var key = "daf5d28d8bmsh62dd27af51040efp16ff14jsn47ca0180b1c4";

var userHealth = 100;
var compHealth = 100;

showBattleScreen();

//This function shows two pokemon on the screen and creates the attack and defend button
function showBattleScreen() {
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
        var card1 = $('<div>');
        var card2 = $('<div>');
        card1.html(createCard(data, true));
        card2.html(createCard(data, false));
        card1.addClass("column is-6");
        card2.addClass("column is-6");

        battle.append(card1);
        battle.append(card2);

    });
}



function createCard(data, isPLayer) {
    var number = Math.floor(Math.random() * data.length);
    var displayString = "";
    displayString += '<div class="card">';
    displayString += '<div class="card-image">';
    displayString += '<figure class="image is-8by6">';
    displayString += '<img src="' + data[number].ThumbnailImage + '" alt="Pokemon image">';
    displayString += '</figure>';
    displayString += ' </div>';
    displayString += '<div class="card-content">';
    displayString += '<div class="media">';
    displayString += '<div class="media-left">';
    displayString += '</div>';
    displayString += '<div class="media-content">';
    displayString += '<p class="title is-4">' + data[number].name + '</p>';
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

$('body').on('click', '#attackButton', function() {
    var number = Math.floor(Math.random() * 100);
    compHealth -= number;
    if (compHealth <= 0) {
        showWin();
    }
    $('#compHealth').val(compHealth);
    var audio = new Audio('./assets/music/hit.mp3');
    audio.play();
    var battleString = $('#battleText').val();
    $('#battleText').val(battleString + "You hit for " + number + " damage!\n");

    number = Math.floor(Math.random() * 100);
    userHealth -= number;
    if (userHealth <= 0) {
        showLose();
    }
    $('#playerHealth').val(userHealth);
    battleString = $('#battleText').val();
    $('#battleText').val(battleString + "You were hit for " + number + " damage!\n");
});

$('body').on('click', '#defendButton', function() {
    // var number = Math.floor(Math.random() * 100);
    // compHealth -= number;
    // if (compHealth <= 0) {
    //     showWin();
    // }
    // $('#compHealth').val(compHealth);
    // var audio = new Audio('./assets/music/hit.mp3');
    // audio.play();

    // number = Math.floor(Math.random() * 100);
    // userHealth -= number;
    // if (userHealth <= 0) {
    //     showLose();
    // }
    // $('#playerHealth').val(userHealth);
});

function showWin() {
    
}

//THis function
function showLose() {
    
}