//Tracks the spots taken by the AI
var compTaken = {
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

//Tracks the running tally of pairs for the AI (potentially one move away from a win)
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
};

function compTurn() {

    cellValue = compChoice(); //The cellValue is determined by the AI's strategy engine
    var id = getKey(squareNumberToCellValue, cellValue); //Parse the cell's value back into the view's id

    $("#" + id).text("O"); //place an "O" in that square

    //Check if the AI has won
    if (compPairs[15 - cellValue]) {
        gameOver("Computer wins!");
    };

    // Update the AI's 'pairs' object
    for (var k = 1; k < 10; k++) {
        if ((compTaken[k]) && (k + cellValue < 15)) {
            compPairs[k + cellValue] = true;
        };
    };

    compTaken[cellValue] = true; //Update the AI's 'taken' object
    spotsTaken.push(cellValue); //Update the overall spots taken on the game board
    turn += 1; //Increment the turn counter
};


//The three options for the AI to consider. Winning is highest priority, then blocking, then a strategic, non-winning move.
//Only when those options are exhausted does it make a random move.
function compChoice() {

    var compChoices = emptySquares();

    return winOrBlock(compChoices) || strategicChoice(compChoices) || compChoices[randomChoice(compChoices)];
};

//The 'winning' logic for the game
function winOrBlock(compChoices) {

    //Out of its choices, do any fulfill the criteria for a win?
    for (var k = 0; k < compChoices.length; k++) {

        if (compPairs[15 - compChoices[k]]) {
            return compChoices[k]; //Win
        }
    };

    //If winning isn't a possibility, is a block available?
    for (var k = 0; k < compChoices.length; k++) {

        if (playerPairs[15 - compChoices[k]]) { //A win for the player is a block for the AI
            return compChoices[k]; //Block
        };
    };

    return false;
};

//The AI's core strategy selector. Different choices are made based on difficulty level and the player's earlier moves. 
function strategicChoice(compChoices) {

    if (difficulty == 'easy') {
        return easyMode(compChoices); 
    } else {
        return mediumToHard(compChoices);
    };
};

//Find the squares remaining on the game board
function emptySquares() {
    var possibleChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return $(possibleChoices).not(spotsTaken).get();
};

//Choose a random index for the inputed array
function randomChoice(array) {
    return Math.floor(Math.random() * array.length);
};