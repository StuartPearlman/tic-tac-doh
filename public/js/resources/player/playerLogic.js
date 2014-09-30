function playerTurn(cellValue) {

    $("#" + cellValue).text("X");

    if (playerPairs[15 - cellValue]) {
        gameOver("Player wins!");
    };

    for (var k = 1; k < 10; k++) {
        if ((playerTaken[k]) && (k + cellValue < 15)) {
            playerPairs[k + cellValue] = true;
        };
    };

    playerTaken[cellValue] = true;
    spotsTaken.push(cellValue);
    turn += 1;
};

//Player behavioral tracking

function playerFirstCorner() {
    if ((turn == 1) && (playerTaken[8] || playerTaken[6] || playerTaken[4] || playerTaken[2])) {
        firstCorner = true;
    };
};

function playerFirstSide() {
    if ((turn == 1) && (playerTaken[1] || playerTaken[7] || playerTaken[9] || playerTaken[3])) {
        firstSide = true;
    };
};

function playerOppositeSide() {
    if (turn == 3 && firstSide && ((playerTaken[3] && playerTaken[7]) || (playerTaken[1] && playerTaken[9]))) {
        oppositeSide = true;
    };
};