function load(script) {
    // document.write('<'+'script src="'+script+'" type="text/javascript"><' + '/script>');
    document.write('<script src=/js/resources/' + script + ' ' + 'type=text/javascript></script>');
};

load("game/gameLogistics.js");
load("game/difficultySetting.js");
load("comp/compLogic.js");
load("comp/compStrategies.js");
load("player/playerLogic.js");

$(document).ready(function() {

    previousDifficulty();

    $("#easy").click(function() {
        easySetting();
        if (winner == true) {
            location.reload();
        };
    });

    $("#medium").click(function() {
        mediumSetting();
        if (winner == true) {
            location.reload();
        };
    });

    $("#hard").click(function() {
        hardSetting();
        if (winner == true) {
            location.reload();
        };
    });

    $("#start").click(function() {
        startGame();
        if (winner == true) {
            location.reload();
        };
    });

    $("td").click(function(event) {
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