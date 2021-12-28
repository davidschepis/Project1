var scores = getScores();

function getScores() {
    return JSON.parse(localStorage.getItem("scores"));
}