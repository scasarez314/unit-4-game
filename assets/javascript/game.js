$(document).ready(function (ev) {

    initalStart();

    // track gem values 
    var Wins = 0;
    var Losses = 0;
    var newScore = 0;
    $("#playerScore").text(newScore);

    function initalStart() {
        gem1 = randonGemNumber();
        gem2 = randonGemNumber();
        gem3 = randonGemNumber();
        gem4 = randonGemNumber();
        newScore = 0;
        $("#playerScore").text(newScore);
        computerGuess = Math.floor(Math.random() * 102 + 19);
        $("#generatedNumber").text(computerGuess);
        console.log();
    }

    function randonGemNumber() {
        var random = Math.floor(Math.random() * 12 + 1);
        console.log(random);
        return random;

    }

    function scoreChecker() {

        if (newScore > computerGuess) {
            Losses++;
            $("#Losses").text(Losses);
            promtToplay();
        } else if (computerGuess === newScore) {
            Wins++
            $("#Wins").text(Wins)
            promtToplay()
        }
    }

    function promtToplay() {

        var playAgain = prompt("Play Again? Y / N");

        if (playAgain.toLocaleLowerCase() === "y") {
            initalStart();

        } else if (playAgain.toLocaleLowerCase() === "n") {
            prompt("Game Over Than.");
            document.location.reload()

        }


    }


    // Gem1 on click functions
    $(".gem1").on("click", function (event) {

        newScore = gem1 + newScore;
        var answer = newScore;

        $("#playerScore").text(answer);
        scoreChecker();

        console.log(answer + "answer")

    });

    // Gem2 onclick functions
    $(".gem2").on("click", function (event) {

        newScore = gem2 + newScore;
        var answer = newScore;

        $("#playerScore").text(answer);
        scoreChecker();

        console.log(answer + "answer")
    });

    // Gem3 onclick functions
    $(".gem3").on("click", function (event) {
        newScore = gem3 + newScore
        var answer = newScore;

        $("#playerScore").text(answer);
        scoreChecker();

        console.log(answer + "answer")

    });

    // Gem4 onclick functions 
    $(".gem4").on("click", function (event) {
        newScore = gem4 + newScore
        var answer = newScore;

        $("#playerScore").text(answer);
        scoreChecker();

        console.log(answer + "answer")

    })


});
