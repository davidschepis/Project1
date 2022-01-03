var result = document.getElementById("result");
var key = "eab5556802msh015a1179aab9ebep125e68jsna19504601964";
var generateBtn = document.querySelector("#btn");

//Event listener for button
generateBtn.addEventListener('click', function () {
    showBattleScreen();
});

//Creates HTML to be shown on the page
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
        var number = Math.floor(Math.random() * data.length);
        var outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"> </figure>';

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
        }
        document.getElementById("result-1").innerHTML = outputstring;

        number = Math.floor(Math.random() * data.length);
        outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure>';

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
        }

        document.getElementById("result-2").innerHTML = outputstring;

        number = Math.floor(Math.random() * data.length);
        outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure>';

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
        }
        document.getElementById("result-3").innerHTML = outputstring;

        number = Math.floor(Math.random() * data.length);
        outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure>';

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
        }
        document.getElementById("result-4").innerHTML = outputstring;

        number = Math.floor(Math.random() * data.length);
        outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure>';

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
        }
        document.getElementById("result-5").innerHTML = outputstring;

        number = Math.floor(Math.random() * data.length);
        outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure>';

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";

        outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
        }
        document.getElementById("result-6").innerHTML = outputstring;

    });


}
