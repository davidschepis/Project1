var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");



clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});


var scores = getScores();

scores = [].concat(scores);

function getScores() {
    return JSON.parse(localStorage.getItem("scores"));
}


if (scores !== null) {

    for (var i = 0; i < scores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = scores[i].name + " " + "Won "+ scores[i].wins  + " Lost " + scores[i].losses;
        highScore.appendChild(createLi);

    }
};