    var result = document.getElementById("result");
    var key = "60fa9a3f98msh0ea03cc33f5cc55p11b3efjsnbaf6d9d62ba8";
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
            var outputstring = '<figure class="image"><img src="' + data[number].ThumbnailImage + '" alt="Placeholder image"> </figure>';
            console.log(number)
            console.log(outputstring)
            console.log(data)
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> ID number: " + data[number].id + "</div>";
            
            outputstring += "<div style='font-family: Times New Roman', Times, serif'> Name: " + data[number].name + "</div>";

            for (var i = 0; i < data[number].type.length; i++) {
                outputstring += "<div style='font-family: Times New Roman', Times, serif'> Type: " + data[number].type[i] + "</div>";
            }
            for (var i = 0; i < data[number].weakness.length; i++) {
                outputstring += "<div style='font-family: Times New Roman', Times, serif'> Weakness: " + data[number].weakness[i] + "</div>";
            }
            document.getElementById("result-1").innerHTML = outputstring;

            var number = Math.floor(Math.random() * data.length)
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

            var number = Math.floor(Math.random() * data.length)
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

            var number = Math.floor(Math.random() * data.length)
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

            var number = Math.floor(Math.random() * data.length)
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

            var number = Math.floor(Math.random() * data.length)
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
