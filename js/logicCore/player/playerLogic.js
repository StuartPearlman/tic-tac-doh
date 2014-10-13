//Tracks the spots taken by a player
var playerTaken = {
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

//Tracks the running tally of pairs for a player (potentially one move away from a win)
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
}

//Does the player choose a corner first?
, firstCorner = false

//Does the player choose a side first?
, firstSide = false

//Does the player go on to choose the opposite side? The AI uses this info to set up a fork. 
, oppositeSide = false;

function playerTurn(cellValue) {
    var id = getKey(squareNumberToCellValue, cellValue); //Parse the cell's value back into the view's id

    $("#" + id).text("X"); //place an "X" in that square

    //Check if the player has won
    if (playerPairs[15 - cellValue]) {
        gameOver("Player wins!"); //If the player's move would be the third in a row, win. 
    };

    // Update the player's 'pairs' object
    for (var k = 1; k < 10; k++) {
        if ((playerTaken[k]) && (k + cellValue < 15)) {
            playerPairs[k + cellValue] = true;
        };
    };

    playerTaken[cellValue] = true; //Update the player's 'taken' object
    spotsTaken.push(cellValue); //Update the overall spots taken on the game board
    turn += 1; //Increment the turn counter
};

//Player behavioral tracking (to be used by the AI)

function playerFirstCorner() {
    if ((turn == 1) && (playerTaken[8] || playerTaken[6] || playerTaken[4] || playerTaken[2])) {
        firstCorner = true; //Does the player take a corner on the first move?
    };
};

function playerFirstSide() {
    if ((turn == 1) && (playerTaken[1] || playerTaken[7] || playerTaken[9] || playerTaken[3])) {
        firstSide = true; //Does the player take a side on the first move?
    };
};

function playerOppositeSide() {
    if (turn == 3 && firstSide && ((playerTaken[3] && playerTaken[7]) || (playerTaken[1] && playerTaken[9]))) {
        oppositeSide = true; //Does the player take a side and then the opposite side on the next turn?
    };
};