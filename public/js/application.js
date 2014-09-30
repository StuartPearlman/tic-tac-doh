function load(script) {
    // document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
    document.write('<script src=/js/resources/' + script + ' ' + 'type=text/javascript></script>');
};

load("game/variables.js");
load("game/gameLogistics.js");
load("game/difficultySetting.js");
load("comp/compLogic.js");
load("comp/compStrategies.js");
load("player/playerLogic.js");

$(document).ready(function() {

    previousDifficulty();

    $("#easy").click(function() {
        easySetting();
    });

    $("#medium").click(function() {
        mediumSetting();
    });

    $("#hard").click(function() {
        hardSetting();
    });

    $("#start").click(function() {
        if (newGame == false) {
            newGame = true;
            playing = true;
            $("#start").text("Game in progress...");
            if (hard || randFirstPlayer <= 0.5) {
                compTurn();
            };
        };
        if (winner == true) {
            location.reload();
        };
    });

    $("td").click(function(event) {

        var cellValue = parseInt(event.target.id);

        if (spotsTaken.indexOf(cellValue) == -1 && playing) {

            runGame(cellValue);
        };

        playerFirstCorner();

        playerFirstSide();

        playerOppositeSide();
    });
});