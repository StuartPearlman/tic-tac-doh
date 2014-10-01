function load(script) {
    document.write('<script src=/js/resources/' + script + ' ' + 'type=text/javascript></script>');
};

load("game/gameLogistics.js");
load("game/difficultySetting.js");
load("comp/compLogic.js");
load("comp/compStrategies.js");
load("player/playerLogic.js");

$(document).ready(function() {

    previousDifficulty();

    if ((difficulty == 'hard') || (randFirstPlayer <= 0.5)) {
        compTurn();
    };

    $("li > button").click(function() {
        reloadIfWinner();
        selectDifficulty(event.target.id);
    });

    $("td").click(function(event) {
        reloadIfWinner();
        startGame();

        var cellValue = squareNumberToCellValue[event.target.id];

        if (spotsTaken.indexOf(cellValue) == -1 && playing) {

            runGame(cellValue);
        };

        playerFirstCorner();

        playerFirstSide();

        playerOppositeSide();
    });
});