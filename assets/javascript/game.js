$(document).ready(function (ev) {

    // have the computer generate a random number and show on screen.
    computerGuess = Math.floor(Math.random() * 102 + 19);
    console.log(computerGuess + "this is the computers random number");

    $("#generatedNumber").text(computerGuess);


    // track the clicks on the crystals to add on the score

    var gem1 = "";
    var gem1 = Math.floor(Math.random() * 12 + 1);
    var isGemOneClicked = false;

    var score = 5;
    $("#playerScore").text(score);

    $(".gem1").on("click", function (event) {
        if (isGemOneClicked === true) {
            gem1 += score;
            $(".playerScore").val(score += gem1)
            $(".playerScore").text(score += gem1)
        }
        console.log(gem1 + score)
    });

    // var gem2 = Math.floor(Math.random() * 12 + 1);
    // $(".gem2").val(gem2)
    // console.log(gem2)

    // var gem3 = Math.floor(Math.random() * 12 + 1);
    // $(".gem3").val(gem3)
    // console.log(gem3)

    // var gem4 = Math.floor(Math.random() * 12 + 1);
    // $(".gem4").val(gem4)
    // console.log(gem4)

    // track the wins and losses and show on screen.
    var Wins = 0;
    var Losses = 0;
})







