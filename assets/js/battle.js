var battle = $('#battle');//main div on battle.html
var key = "60fa9a3f98msh0ea03cc33f5cc55p11b3efjsnbaf6d9d62ba8";

var userHealth = 100;
var compHealth = 100;

showBattleScreen();//Show pokemon on load

//This function shows two pokemon on the screen as cards, giving the users pokemon an attack and defend button
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
        //console.log(data);

        var data2 = pullPokemon(data);
        var card1 = $('<div>');
        var card2 = $('<div>');
        card1.html(createCard(data2, true));
        card2.html(createCard(data, false));
        card1.addClass("column is-6");
        card2.addClass("column is-6");

        battle.append(card1);
        battle.append(card2);

    });
}

//This function searches for the desired pokemon that is stored in local storage, and returns its name and image url
function pullPokemon(data) {
    for (var i = 0; i < data.length; i++) {
        if (data[i].name === capitalize(localStorage.getItem("pokename"))) {
            var data2 = [data[i].name, data[i].ThumbnailImage];
            return data2;
        }
    }
}

//This function simply captilizes the first letter of a string
function capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

//This function creates a card based on the data passed in and whether or not the card should be the users, which includes buttons to interact
function createCard(data, isPLayer) {
    var number = Math.floor(Math.random() * data.length);
    var displayString = "";
    displayString += '<div class="card">';
    displayString += '<div class="card-image">';
    displayString += '<figure class="image is-8by6">';
    if (isPLayer) {
        displayString += '<img src="' + data[1] + '" alt="Pokemon image">';
    }
    else {
        displayString += '<img src="' + data[number].ThumbnailImage + '" alt="Pokemon image">';
    }
    displayString += '</figure>';
    displayString += ' </div>';
    displayString += '<div class="card-content">';
    displayString += '<div class="media">';
    displayString += '<div class="media-left">';
    displayString += '</div>';
    displayString += '<div class="media-content">';
    if (isPLayer) {
        displayString += '<p class="title is-4">' + data[0] + '</p>';
        displayString += '<p class="subtitle is-4"><progress class="progress is-success" value="100" max="100" id="playerHealth"></progress></p>';
    }
    else {
        displayString += '<p class="title is-4">' + data[number].name + '</p>';
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

//Click listener for the attack button, simply calls getDiceRollAttack()
$('body').on('click', '#attackButton', function () {
    getDiceRollAttack();
});

//This function handles an attack, if the user rolls higher they damage the comp and vice versa
//The function also outputs text to the textarea
function attack(num1, num2) {
    var battleString;
    var audio;
    audio = new Audio('./assets/music/hit.mp3');
    audio.play();
    battleString = $('#battleText').val();
    $('#battleText').val(battleString + "You rolled a " + num1 + "\nThe comp rolled a " + num2 + "\n");
    scrollBottom();
    if (num1 > num2) {
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "The comp takes " + (num1 - num2) + " damage!\n");
        scrollBottom();
        compHealth -= (num1 - num2);
        if (compHealth < 0) {
            compHealth = 0;
        }
        $('#compHealth').val(compHealth);
        if (compHealth <= 0) {
            showWin();
        } else {
            battleString = $('#battleText').val();
            $('#battleText').val(battleString + "*****End of attack turn!*****\n");
        }
    }
    else if (num1 === num2) {
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "A tie!\n");
        scrollBottom();
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "*****End of attack turn!*****\n");
    }
    else {
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "You take " + (num2 - num1) + " damage!\n");
        scrollBottom();
        userHealth -= (num2 - num1);
        if (userHealth < 0) {
            userHealth = 0;
        }
        $('#playerHealth').val(userHealth);
        if (userHealth <= 0) {
            showLose();
        } else {
            battleString = $('#battleText').val();
            $('#battleText').val(battleString + "*****End of attack turn!*****\n");
        }
    }
}

//This function handles a defend action, raising the users health if they roll higher than the comp
//The function also outputs whats happening to the text area
function defend(num1, num2) {
    var battleString;
    var audio;
    audio = new Audio('./assets/music/shield.mp3');
    audio.play();
    battleString = $('#battleText').val();
    $('#battleText').val(battleString + "You rolled a " + num1 + "\nThe comp rolled a " + num2 + "\n");
    scrollBottom();
    if (num1 > num2) {
        userHealth += (num1 - num2);
        if (userHealth > 100) {
            userHealth = 100;
        }
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "You gain " + (num1 - num2) + " health!\n");
        scrollBottom();
        $('#playerHealth').val(userHealth);
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "*****End of defend turn!*****\n");
    }
    else {
        battleString = $('#battleText').val();
        $('#battleText').val(battleString + "You lost the roll! You take " + (num2 - num1) + " damage!\n");
        scrollBottom();
        userHealth -= (num2 - num1);
        if (userHealth < 0) {
            userHealth = 0;
        }
        $('#playerHealth').val(userHealth);
        if (userHealth <= 0) {
            showLose();
        } else {
            battleString = $('#battleText').val();
            $('#battleText').val(battleString + "*****End of defend turn!*****\n");
        }
    }
}

//This function listens for the defend button
$('body').on('click', '#defendButton', function () {
    getDiceRollDefend();
});

//This function shows the user won and disables the attack and defend button
function showWin() {
    $('#battleText').val("You're winner!");
    var audio = new Audio('./assets/music/victory.mp3');
    audio.play();
    document.getElementById("attackButton").disabled = true;
    document.getElementById("defendButton").disabled = true;
}

//This function shows the user lost and disables the attack and defend button
function showLose() {
    $('#battleText').val("You is loser!");
    var audio = new Audio('./assets/music/lose.mp3');
    audio.play();
    document.getElementById("attackButton").disabled = true;
    document.getElementById("defendButton").disabled = true;
}

//This function is called when a user clicks the attack button, it gets two dice rolls
function getDiceRollAttack() {
    fetch("https://dice-roll.p.rapidapi.com/roll/2/d/100", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dice-roll.p.rapidapi.com",
            "x-rapidapi-key": "67cb78248emsh1e4e33cf18493bcp19763bjsne115c744c684"
        }
    })
        .then(response => {
            // console.log(response);
            return response.json();
        }).then(function (data) {
            attack(data.rolls[0], data.rolls[1]);
        });
}

//This function is called when a user clicks the defend button, it gets two dice rolls
function getDiceRollDefend() {
    fetch("https://dice-roll.p.rapidapi.com/roll/2/d/100", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "dice-roll.p.rapidapi.com",
            "x-rapidapi-key": "67cb78248emsh1e4e33cf18493bcp19763bjsne115c744c684"
        }
    })
        .then(response => {
            // console.log(response);
            return response.json();
        }).then(function (data) {
            defend(data.rolls[0], data.rolls[1]);
        });
}

//This helper function scrolls the textarea down every time text is added
function scrollBottom() {
    var textArea = document.getElementById("battleText");
    textArea.scrollTop = textArea.scrollHeight;
}

