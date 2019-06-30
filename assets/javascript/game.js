$(document).ready(function (ev) {
    initalStart();

    // have the computer generate a random number.
    computerGuess = Math.floor(Math.random() * 102 + 19);
    // console.log(computerGuess + "this is the computers random number");

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
        console.log(gem1 + "heres gem1")
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


        $(".gem2").val(gem2)
        console.log(gem2 + "" + newScore)
    });

    // Gem3 onclick functions
    $(".gem3").on("click", function (event) {

        var gem3 = Math.floor(Math.random() * 12 + 1);
        $(".gem3").val(gem3)
        console.log(gem3 + "" + "gem3 value")
    });


    // Gem4 onclick functions 
    $(".gem4").on("click", function (event) {

        var gem4 = Math.floor(Math.random() * 12 + 1);
        $(".gem4").val(gem4)
        console.log(gem4 + "" + "gem4 value")

    })


    // track the wins and losses and show on screen.
    var Wins = 0;
    var Losses = 0;
});
