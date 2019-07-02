$(document).ready(function (ev) {

    initalStart();

    // have the computer generate a random number.
    computerGuess = Math.floor(Math.random() * 102 + 19);
    $("#generatedNumber").text(computerGuess);

    // track gem values 
    var newScore = 0;
    $("#playerScore").text(newScore);

    function randonGemNumber() {
        var random = Math.floor(Math.random() * 12 + 1);
        console.log(random);
        return random;

    }
    function initalStart() {
        gem1 = randonGemNumber();
        gem2 = randonGemNumber();
        gem3 = randonGemNumber();
        gem4 = randonGemNumber();
        newScore = 0;
        console.log()
    }

    // Gem1 on click functions
    $(".gem1").on("click", function (event) {

        newScore = gem1 + newScore
        var answer = newScore;

        $("#playerScore").text(answer);

        console.log(answer + "answer")
    });

    // Gem2 onclick functions
    $(".gem2").on("click", function (event) {

        newScore = gem2 + newScore
        var answer = newScore;

        $("#playerScore").text(answer);

        console.log(answer + "answer")
    });

    // Gem3 onclick functions
    $(".gem3").on("click", function (event) {
        newScore = gem3 + newScore
        var answer = newScore;

        $("#playerScore").text(answer);

        console.log(answer + "answer")

    });

    // Gem4 onclick functions 
    $(".gem4").on("click", function (event) {
        newScore = gem4 + newScore
        var answer = newScore;

        $("#playerScore").text(answer);

        console.log(answer + "answer")

    })

    // track the wins and losses and show on screen.
    var Wins = 0;
    var Losses = 0;

});
