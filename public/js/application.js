$(document).ready(function() {

    var turn = 0;

    var spotsTaken = [];

    var playing = true;

    var taken1 = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    };

    var pairs1 = {
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false
    };

    var taken2 = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    };

    var pairs2 = {
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false,
        10: false,
        11: false,
        12: false,
        13: false,
        14: false,
        15: false,
        16: false,
        17: false
    };

    compTurn();

    $("td").click(function(event) {

        var cellValue = parseInt(event.target.id);

        if (spotsTaken.indexOf(cellValue) == -1 && playing) {

            runGame(cellValue);
        };
    });

    function compTurn() {

        var possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        var compChoices = $(possibleChoices).not(spotsTaken).get();

        var cellValue = compChoices[Math.floor(Math.random() * compChoices.length)];

        for (var k = 0; k < compChoices.length; k++) {

            if (pairs2[15 - compChoices[k]]) {
                cellValue = compChoices[k];
            } else if (pairs1[15 - compChoices[k]]) {
                cellValue = compChoices[k];
            } else {
                cellValue;
            };
        };

        console.log(cellValue);

        $("#" + cellValue).text("O");

        if (pairs1[15 - cellValue]) {
            playing = false;
            location.reload();
            alert("Computer Wins!");
        };

        for (var k = 1; k < 10; k++) {
            if ((taken1[k]) && (k + cellValue < 15)) {
                pairs1[k + cellValue] = true;
            };
        };

        taken1[cellValue] = true;

        spotsTaken.push(cellValue);
    };

    function playerTurn(cellValue) {

        $("#" + cellValue).text("X");

        if (pairs2[15 - cellValue]) {
            playing = false;
            location.reload();
            alert("Player Wins!");
        };

        for (var k = 1; k < 10; k++) {
            if ((taken2[k]) && (k + cellValue < 15)) {
                pairs2[k + cellValue] = true;
            };
        };

        taken2[cellValue] = true;
        spotsTaken.push(cellValue);
    };

    function tieCheck() {
        if (spotsTaken.length > 8) {
            playing = false;
            location.reload();
            alert("Cat's Game!");
        };
    }

    function runGame(cellValue) {
        if (playing) {
            playerTurn(cellValue);
        };
        if (playing) {
            compTurn();
        };
        if (playing) {
            tieCheck();
        };
    };
});