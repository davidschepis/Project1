var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");

//Button to clear local storage
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

//Get the scores
var scores = getScores();
//Make scores into an array in case scores is just a single object, so scores.length works correctly
scores = [].concat(scores);

//Gets the scores from local storage
function getScores() {
    return JSON.parse(localStorage.getItem("scores"));
}

//Only update screen if scores exist
if (scores !== null) {

    for (var i = 0; i < scores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = scores[i].name + " " + "Won " + scores[i].wins + " Lost " + scores[i].losses;
        highScore.appendChild(createLi);

    }
}