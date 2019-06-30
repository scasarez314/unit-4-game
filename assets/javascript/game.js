$(document).ready(function (ev) {

    // have the computer generate a random number.
    computerGuess = Math.floor(Math.random() * 102 + 19);
    console.log(computerGuess + "this is the computers random number");

    $("#generatedNumber").text(computerGuess);


    // track gem values 
    var gem1 = "";
    var gem2 = "";
    var gem3 = "";
    var gem4 = "";
    var isGemOneClicked = false;
    var score = 0;
    var newScore = "";
    $("#playerScore").text(score + newScore);

    var randonGemNumber = Math.floor(Math.random() * 12 + 1);

    // Gem1 on click functions
    $(".gem1").on("click", function (event) {

        var gem1Value = randonGemNumber
        gem1 = parseInt(gem1)
        newScore = parseInt(newScore)
        if (isGemOneClicked === true) {

            answer = (gem1Value + score + newScore);
            $("#playerScore").val(answer)
        }


        console.log($(this).val())
    });

    // Gem2 onclick functions
    $(".gem2").on("click", function (event) {

        var gem2 = Math.floor(Math.random() * 12 + 1);
        $(".gem2").val(gem2)
        console.log(gem2)
    })

    // Gem2 onclick functions
    var gem3 = Math.floor(Math.random() * 12 + 1);
    $(".gem3").val(gem3)
    console.log(gem3)

    // Gem4 onclick functions 
    var gem4 = Math.floor(Math.random() * 12 + 1);
    $(".gem4").val(gem4)
    console.log(gem4)

    // track the wins and losses and show on screen.
    var Wins = 0;
    var Losses = 0;
})







