var result = document.getElementById("result");
var key = "daf5d28d8bmsh62dd27af51040efp16ff14jsn47ca0180b1c4";
var generateBtn = document.querySelector("#btn")


generateBtn.addEventListener('click', function () {
    showBattleScreen()
});


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
        var number = Math.floor(Math.random() * data.length)
        var outputstring = '<div class="card"><div class="card-image"><figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"> </figure></div>';
        console.log(number)
        console.log(outputstring)
        console.log(data)
        outputstring += "<h1>The pokemon's id number is: " + data[number].id + "</h1>";
        
        outputstring += "<h1>The pokemon's name is: " + data[number].name + "</h1>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<h1>The pokemon's type is: " + data[number].type[i] + "</h1>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<h1>The pokemon's weakness is: " + data[number].weakness[i] + "</h1>";
        }
        document.getElementById("result-1").innerHTML = outputstring;

        var number = Math.floor(Math.random() * data.length)
        outputstring = '<div class="card"><div class="card-image"><figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure></div>';
        
        outputstring += "<h1>The pokemon's id number is: " + data[number].id + "</h1>";
        
        outputstring += "<h1>The pokemon's name is: " + data[number].name + "</h1>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<h1>The pokemon's type is: " + data[number].type[i] + "</h1>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<h1>The pokemon's weakness is: " + data[number].weakness[i] + "</h1>";
        }

        document.getElementById("result-2").innerHTML = outputstring;

        var number = Math.floor(Math.random() * data.length)
        outputstring = '<div class="card"><div class="card-image"><figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure></div>';
        
        outputstring += "<h1>The pokemon's id number is: " + data[number].id + "</h1>";

        outputstring += "<h1>The pokemon's name is: " + data[number].name + "</h1>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<h1>The pokemon's type is: " + data[number].type[i] + "</h1>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<h1>The pokemon's weakness is: " + data[number].weakness[i] + "</h1>";
        }
        document.getElementById("result-3").innerHTML = outputstring;

        var number = Math.floor(Math.random() * data.length)
        outputstring = '<div class="card"><div class="card-image"><figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure></div>';
        
        outputstring += "<h1>The pokemon's id number is: " + data[number].id + "</h1>";

        outputstring += "<h1>The pokemon's name is: " + data[number].name + "</h1>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<h1>The pokemon's type is: " + data[number].type[i] + "</h1>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<h1>The pokemon's weakness is: " + data[number].weakness[i] + "</h1>";
        }
        document.getElementById("result-4").innerHTML = outputstring;

        var number = Math.floor(Math.random() * data.length)
        outputstring = '<div class="card"><div class="card-image"><figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure></div>';
        
        outputstring += "<h1>The pokemon's id number is: " + data[number].id + "</h1>";

        outputstring += "<h1>The pokemon's name is: " + data[number].name + "</h1>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<h1>The pokemon's type is: " + data[number].type[i] + "</h1>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<h1>The pokemon's weakness is: " + data[number].weakness[i] + "</h1>";
        }
        document.getElementById("result-5").innerHTML = outputstring;

        var number = Math.floor(Math.random() * data.length)
        outputstring = '<div class="card"><div class="card-image"><figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"></figure></div>';
        
        outputstring += "<h1>The pokemon's id number is: " + data[number].id + "</h1>";

        outputstring += "<h1>The pokemon's name is: " + data[number].name + "</h1>";

        for (var i = 0; i < data[number].type.length; i++) {
            outputstring += "<h1>The pokemon's type is: " + data[number].type[i] + "</h1>";
        }
        for (var i = 0; i < data[number].weakness.length; i++) {
            outputstring += "<h1>The pokemon's weakness is: " + data[number].weakness[i] + "</h1>";
        }
        document.getElementById("result-6").innerHTML = outputstring;

    });


}

// generateBtn.addEventListener(click, function(){
//     result.innerText = get6Random;

// });


// function get6Random() {
//     for(var i=0; i < 6; i++){
//         var random = Math.floor(Math.random() * 6);
//     console.log(get6Random);
// }
// };

// function getRandom(){
//     var random = Math.floor(Math.random() * 6);
//     return random;
//   };
