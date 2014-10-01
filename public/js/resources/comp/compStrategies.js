// easyMode only looks to take the middle square or any corner as its strategy
function easyMode(compChoices) {
    return middleSquare(compChoices) || anyCorner(compChoices) || false;
};

//On the higher difficulties, the AI plays defensively against the player while looking to fork when possible
//and choosing higher value spots overall
function mediumToHard(compChoices) {
    return strategicSide(compChoices) || attemptFork(compChoices) || middleSquare(compChoices) || oppositeCorner(compChoices) || anyCorner(compChoices) || false;
};


//If the player chooses a corner on the first turn, the AI's next two moves need to be the middle and a side.
//Otherwise, the player can set up a fork and the AI will lose
function strategicSide(compChoices) {

    if (firstCorner && turn == 4) {

        for (var k = 0; k < compChoices.length; k++) {

            var sides = [];

            if (compChoices[k] == 1 || compChoices[k] == 3 || compChoices[k] == 7 || compChoices[k] == 9) {

                sides.push(compChoices[k]);
            };

            return sides[randomChoice(sides)];
        };
    };

    return false;
};

//When the player takes up two opposite sides on their first turns, they are leaving themselves open to a fork.
//This function returns a corner when that happens in order to build a fork from it. 
function attemptFork(compChoices) {

    if (firstSide && oppositeSide) {
        return anyCorner(compChoices);
    };

    return false;
};

//Returns to middle square, if available
function middleSquare(compChoices) {

    for (var k = 0; k < compChoices.length; k++) {

        if (compChoices[k] == 5) {

            return compChoices[k];
        };
    };

    return false;
};

//Returns the opposite corner to one the player has selected. This is a defensive move against forks. 
function oppositeCorner(compChoices) {

    for (var k = 0; k < compChoices.length; k++) {

        if (compChoices[k] == 6 && playerTaken[4]) {
            return compChoices[k];
        };
        if (compChoices[k] == 8 && playerTaken[2]) {
            return compChoices[k];
        };
        if (compChoices[k] == 2 && playerTaken[8]) {
            return compChoices[k];
        };
        if (compChoices[k] == 4 && playerTaken[6]) {
            return compChoices[k];
        };
    };

    return false;
};

//Returns any available corner
function anyCorner(compChoices) {

    for (var k = 0; k < compChoices.length; k++) {

        var corners = [];

        if (compChoices[k] == 8 || compChoices[k] == 6 || compChoices[k] == 2 || compChoices[k] == 4) {

            corners.push(compChoices[k]);
        };

        return corners[randomChoice(corners)];
    };

    return false;
};