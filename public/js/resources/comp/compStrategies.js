function easyMode(compChoices) {
    return middleSquare(compChoices) || anyCorner(compChoices) || false;
};

function mediumToHard(compChoices) {
    return strategicSide(compChoices) || attemptFork(compChoices) || middleSquare(compChoices) || oppositeCorner(compChoices) || anyCorner(compChoices) || false;
};

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

function attemptFork(compChoices) {

    if (firstSide && oppositeSide) {
        return anyCorner(compChoices);
    };

    return false;
};

function middleSquare(compChoices) {

    for (var k = 0; k < compChoices.length; k++) {

        if (compChoices[k] == 5) {

            return compChoices[k];
        };
    };

    return false;
};

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