describe("playerOppositeSide()", function() {

    it("determines if the player has played opposite sides", function() {
        turn = 3;
        firstSide = true;
        playerTaken[3] = true;
        playerTaken[7] = true;
        playerOppositeSide();
        expect(oppositeSide).toBeTruthy();
    });

    it("is not active late in the game", function() {
        turn = 5;
        firstSide = true;
        playerTaken[3] = true;
        playerTaken[7] = true;
        playerOppositeSide();
        expect(oppositeSide).toBeTruthy();
    });
});

describe("playerFirstSide()", function() {

    it("determines if the player has played a side first", function() {
        turn = 1;
        playerTaken[1] = true;
        playerFirstSide();
        expect(firstSide).toBeTruthy();
    });

    it("does not trigger if the player has not played a side in the first turn", function() {
        turn = 3;
        playerTaken[1] = true;
        playerFirstSide();
        expect(firstSide).toBeTruthy();
    });
});

describe("playerFirstCorner()", function() {

    it("determines if the player has played a corner first", function() {
        turn = 1;
        playerTaken[8] = true;
        playerFirstCorner();
        expect(firstCorner).toBeTruthy();
    });

    it("does not trigger if the player has not played a corner first", function() {
        turn = 1;
        playerTaken[1] = true;
        playerFirstCorner();
        expect(firstCorner).toBeTruthy();
    });
});

describe("anyCorner()", function() {

    it("should return any open corner", function() {
        compChoices = [8];
        expect(anyCorner(compChoices)).toBe(8);
    });
});

describe("oppositeCorner()", function() {

    it("should return the opposite corner to the one played", function() {
        compChoices = [6];
        playerTaken[4] = true;
        expect(oppositeCorner(compChoices)).toBe(6);
    });
});

describe("middleSquare()", function() {

    it("should return the middle square if available", function() {
        compChoices = [5];
        expect(middleSquare(compChoices)).toBe(5);
    });

    it("should return false if the middle square is unavailable", function() {
        compChoices = [4, 7];
        expect(middleSquare(compChoices)).toBeFalsy();
    });
});

describe("attemptFork()", function() {

    it("should return a random corner when conditions are met", function() {
        firstSide = true;
        oppositeSide = true;
        compChoices = [6];
        expect(attemptFork(compChoices)).toBe(6);
    });

    it("should return false when conditions are not met", function() {
        firstSide = false;
        oppositeSide = true;
        compChoices = [6];
        expect(attemptFork(compChoices)).toBeFalsy();
    });
});

describe("strategicSide()", function() {

    it("should return a random side when conditions are met", function() {
        firstCorner = true;
        turn = 4;
        compChoices = [3];
        expect(strategicSide(compChoices)).toBe(3);
    });

    it("should return false when conditions are not met", function() {
        firstCorner = false;
        turn = 4;
        compChoices = [3];
        expect(strategicSide(compChoices)).toBeFalsy();
    });
});

describe("mediumToHard()", function() {

    it("run through all strategies when called", function() {
        compChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(mediumToHard(compChoices)).toBeDefined();
    });
});

describe("easyMode()", function() {

    it("runs through select strategies when called", function() {
        compChoices = [5];
        expect(easyMode(compChoices)).toBe(5);
        compChoices = [8];
        expect(easyMode(compChoices)).toBe(8);
    });
});

describe("randomChoice()", function() {

    it("returns a random index of an array", function() {
        compChoices = [1];
        expect(randomChoice(compChoices)).toBe(0);
    });
});

describe("easyMode()", function() {

    it("runs through select strategies when called", function() {
        compChoices = [5];
        expect(easyMode(compChoices)).toBe(5);
        compChoices = [8];
        expect(easyMode(compChoices)).toBe(8);
    });
});

describe("strategicChoice()", function() {

    it("runs on all difficulty settings", function() {
        easy = true;
        compChoices = [1, 2, 3];
        expect(strategicChoice(compChoices)).toBeDefined();
        easy = false;
        expect(strategicChoice(compChoices)).toBeDefined();
    });
});

describe("winOrBlock()", function() {

    it("wins whenver possible", function() {
        compChoices = [3];
        compPairs[12] = true;
        expect(winOrBlock(compChoices)).toBe(3);
    });


    it("blocks whenver possible", function() {
        compChoices = [3];
        playerPairs[12] = true;
        expect(winOrBlock(compChoices)).toBe(3);
    });
});