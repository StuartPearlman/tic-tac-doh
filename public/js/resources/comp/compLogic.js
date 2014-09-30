function compTurn() {

    cellValue = compChoice();

    $("#" + cellValue).text("O");

    if (compPairs[15 - cellValue]) {
        gameOver("Computer wins!");
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

    return winOrBlock(compChoices) || strategicChoice(compChoices) || compChoices[randomChoice(compChoices)];
};

function winOrBlock(compChoices) {

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

    if (easy) {
        return easyMode(compChoices);
    } else {
        return mediumToHard(compChoices);
    };
};

function emptySquares() {
    var possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return $(possibleChoices).not(spotsTaken).get();
};

function randomChoice(array) {
    return Math.floor(Math.random() * array.length);
};