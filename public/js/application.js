$(document).ready(function() {

    var randFirstPlayer = Math.random()

    , spotsTaken = []

    , playing = true

    , turn = 1

    , compTaken = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    }

    , compPairs = {
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
    }

    , playerTaken = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
    }

    , playerPairs = {
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

    //Game logic

    if (randFirstPlayer <= .50) {
        compTurn();
    };

    $("td").click(function(event) {

        var cellValue = parseInt(event.target.id);

        if (spotsTaken.indexOf(cellValue) == -1 && playing) {

            runGame(cellValue);
        };
    });

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

    function tieCheck() {
        if (spotsTaken.length > 8) {
            playing = false;
            location.reload();
            // alert("Cat's Game!");
        };
    };

    //Player logic

    function playerTurn(cellValue) {

        $("#" + cellValue).text("X");

        if (playerPairs[15 - cellValue]) {
            playing = false;
            location.reload();
            alert("Player Wins!");
        };

        for (var k = 1; k < 10; k++) {
            if ((playerTaken[k]) && (k + cellValue < 15)) {
                playerPairs[k + cellValue] = true;
            };
        };

        playerTaken[cellValue] = true;
        spotsTaken.push(cellValue);
        turn += 1;
        console.log("Player:" + cellValue);
    };

    //AI logic

    function compTurn() {

        cellValue = compChoice();

        console.log("Computer:" + cellValue);

        $("#" + cellValue).text("O");

        if (compPairs[15 - cellValue]) {
            playing = false;
            location.reload();
            // alert("Computer Wins!");
        };

        for (var k = 1; k < 10; k++) {
            if ((compTaken[k]) && (k + cellValue < 15)) {
                compPairs[k + cellValue] = true;
            };
        };

        compTaken[cellValue] = true;
        spotsTaken.push(cellValue);
        turn += 1;
    };


    function compChoice() {

        var compChoices = emptySquares();

        return blockOrWin(compChoices) || strategicChoice(compChoices) || compChoices[randomChoice(compChoices)];
    };

    function blockOrWin(compChoices) {

        for (var k = 0; k < compChoices.length; k++) {

            if (compPairs[15 - compChoices[k]]) {
                return compChoices[k]; //win
            }
        };

        for (var k = 0; k < compChoices.length; k++) {

            if (playerPairs[15 - compChoices[k]]) {
                return compChoices[k]; //block
            };
        };

        return false;
    };

    function strategicChoice(compChoices) {

        if (playerTaken[5] && turn == 2) {
            return 8; //corner
        };

        for (var k = 0; k < compChoices.length; k++) {

            if (compChoices[k] == 5) {
                return 5; //center
            };

            if ((compChoices[k] == 8 && playerTaken[5] && playerTaken[6]) ||
                (compChoices[k] == 2 && playerTaken[5] && playerTaken[6]) ||

                (compChoices[k] == 6 && playerTaken[5] && playerTaken[8]) ||
                (compChoices[k] == 4 && playerTaken[5] && playerTaken[8]) ||

                (compChoices[k] == 6 && playerTaken[5] && playerTaken[2]) ||
                (compChoices[k] == 4 && playerTaken[5] && playerTaken[2]) ||

                (compChoices[k] == 8 && playerTaken[5] && playerTaken[4]) ||
                (compChoices[k] == 2 && playerTaken[5] && playerTaken[4])) {

                return compChoices[k]; //strategic block
            };

        };

        for (var k = 0; k < compChoices.length; k++) {

            if ((compChoices[k] == 8 && playerTaken[1] && playerTaken[3]) ||
                (compChoices[k] == 6 && playerTaken[1] && playerTaken[7]) ||
                (compChoices[k] == 2 && playerTaken[9] && playerTaken[7]) ||
                (compChoices[k] == 4 && playerTaken[9] && playerTaken[3])) {

                return compChoices[k]; //strategic corner
            };
        };

        for (var k = 0; k < compChoices.length; k++) {

            if (compChoices[k] == 8 || compChoices[k] == 6 || compChoices[k] == 2 || compChoices[k] == 4) {

                return compChoices[k]; //any corner
            };
        };

        return false;
    };

    function emptySquares() {
        var possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        return $(possibleChoices).not(spotsTaken).get();
    };

    function randomChoice(array) {
        return Math.floor(Math.random() * array.length);
    };

});